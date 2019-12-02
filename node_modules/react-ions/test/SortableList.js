import React from 'react'
import TestBackend from 'react-dnd-test-backend'
import { DragDropContext } from 'react-dnd'
import TestUtils from 'react-dom/test-utils'
import SortableItem from '../src/components/SortableList/SortableItem'
import CustomDragLayer from '../src/components/SortableList/CustomDragLayer'
import SortableListWrapped, { SortableList } from '../src/components/SortableList/SortableList'

let Component = React.Component

describe('SortableList', () => {
  let wrapper
  const items = [
    {
      value: 'email',
      text: 'Email',
      active: false
    }, {
      value: 'push_notification',
      text: 'Push Notification',
      active: true
    }, {
      value: 'web',
      text: 'Web',
      active: false
    }, {
      value: 'sms',
      text: 'SMS',
      active: false
    }
  ]

  /**
   * Wraps a component into a DragDropContext that uses the TestBackend.
   */
  function wrapInTestContext(DecoratedComponent) {
    return DragDropContext(TestBackend)(
      class TestContextContainer extends Component {
        render() {
          return <DecoratedComponent {...this.props} />
        }
      }
    )
  }

  it('should render itself', () => {
    wrapper = mount(<SortableListWrapped items={items} />)

    expect(wrapper.find(SortableList)).to.have.length(1)
    expect(wrapper.find(SortableItem)).to.have.length(4)

    expect(wrapper.find(SortableItem).at(0).prop('value')).to.equal('email')
    expect(wrapper.find(SortableItem).at(0).prop('text')).to.equal('Email')
    expect(wrapper.find(SortableItem).at(1).prop('value')).to.equal('push_notification')
    expect(wrapper.find(SortableItem).at(1).prop('text')).to.equal('Push Notification')
    expect(wrapper.find(SortableItem).at(2).prop('value')).to.equal('web')
    expect(wrapper.find(SortableItem).at(2).prop('text')).to.equal('Web')
    expect(wrapper.find(SortableItem).at(3).prop('value')).to.equal('sms')
    expect(wrapper.find(SortableItem).at(3).prop('text')).to.equal('SMS')
  })

  it('should update state when an item is toggled', () => {
    wrapper = mount(<SortableListWrapped items={items} />)
    const list = wrapper.find(SortableList)

    expect(wrapper.find(SortableItem).at(0).prop('active')).to.be.false

    list.instance().toggleSortableItem(0)
    wrapper.update()
    expect(wrapper.find(SortableItem).at(0).prop('active')).to.be.true

    list.instance().toggleSortableItem(0)
    wrapper.update()
    expect(wrapper.find(SortableItem).at(0).prop('active')).to.be.false
  })

  it('should trigger a callback when an item is toggled', () => {
    let sortableItems = items
    const changeCallback = sinon.spy()

    wrapper = mount(<SortableListWrapped items={items} changeCallback={changeCallback} name='test'/>)

    wrapper.find(SortableList).instance().toggleSortableItem(0)
    expect(changeCallback.calledWithExactly({
      target: {
        name: 'test',
        value: [{
          value: 'email',
          text: 'Email',
          active: true
        }, {
          value: 'push_notification',
          text: 'Push Notification',
          active: true
        }, {
          value: 'web',
          text: 'Web',
          active: false
        }, {
          value: 'sms',
          text: 'SMS',
          active: false
        }]
      }
    })).to.be.true
  })

  it('should update the state when props change', () => {
    wrapper = mount(<SortableListWrapped items={items} />)

    expect(wrapper.find('SortableItem')).to.have.length(4)

    wrapper.setProps({ items: [{ value: 'email', text: 'Email', active: false }, { value: 'push_notification', text: 'Push Notification', active: true }, { value: 'web', text: 'Web', active: false }] })
    wrapper.update()

    expect(wrapper.find('SortableItem')).to.have.length(3)
  })

  it('should remove event listener when the component is unmounted', () => {
    const spy = sinon.spy(window, 'removeEventListener')

    wrapper = mount(<SortableListWrapped items={items} />)

    wrapper.unmount()

    expect(spy.called).to.be.true
  })

  it('should reorder items when dragging', () => {
    let sortableItems = items
    const changeCallback = event => {
      sortableItems = event.target.value
    }

    expect(sortableItems[0].value).to.equal('email')
    expect(sortableItems[1].value).to.equal('push_notification')
    expect(sortableItems[2].value).to.equal('web')
    expect(sortableItems[3].value).to.equal('sms')

    const root = TestUtils.renderIntoDocument(<SortableListWrapped items={items} changeCallback={changeCallback} />)

    // Obtain a reference to the backend
    const backend = root.getManager().getBackend()

    // Find the drag source ID and use it to simulate the dragging operation
    const allItems = TestUtils.scryRenderedComponentsWithType(root, SortableItem)
    const source = allItems[0]
    const target = allItems[1]
    const sourceId = source.getDecoratedComponentInstance().getHandlerId()
    const targetId = target.getHandlerId()

    backend.actions.beginDrag([sourceId])
    backend.actions.hover([targetId])
    backend.actions.drop()
    backend.actions.endDrag()

    expect(sortableItems[0].value).to.equal('push_notification')
    expect(sortableItems[1].value).to.equal('email')
    expect(sortableItems[2].value).to.equal('web')
    expect(sortableItems[3].value).to.equal('sms')
  })

  it('should set state and trigger callback when dragging starts', () => {
    const onDragStartSpy = sinon.spy()

    wrapper = shallow(<SortableList items={items} onDragStart={onDragStartSpy} />)

    expect(wrapper.state('dragging')).to.be.false

    wrapper.instance().onDragStart()

    expect(wrapper.state('dragging')).to.be.true
    expect(onDragStartSpy.called).to.be.true
  })

  it('should set state and trigger callback when dragging stops', () => {
    const onDragStopSpy = sinon.spy()

    wrapper = shallow(<SortableList items={items} onDragStop={onDragStopSpy} />)

    wrapper.setState({ dragging: true })
    expect(wrapper.state('dragging')).to.be.true

    wrapper.instance().onDragStop()

    expect(wrapper.state('dragging')).to.be.false
    expect(onDragStopSpy.called).to.be.true
  })

  it('should pass on the hideOrderNumbers prop as hideOrderNumber', () => {
    wrapper = shallow(<SortableList items={items} hideOrderNumbers={true} />)

    expect(wrapper.find(SortableItem).at(0).prop('hideOrderNumber')).to.be.true

    wrapper.setState({ dragging: true })
    expect(wrapper.find(CustomDragLayer).prop('hideOrderNumber')).to.be.true
  })
})
