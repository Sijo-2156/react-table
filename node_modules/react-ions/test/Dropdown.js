import React from 'react'
import WrappedDropdown, { Dropdown } from '../src/components/Dropdown'

describe('Dropdown', () => {
  let wrapper, trigger

  it('should display a dropdown', () => {
    wrapper = shallow(<WrappedDropdown trigger='Test'>This is a test.</WrappedDropdown>)

    expect(wrapper.props().trigger).to.equal('Test')
    expect(wrapper.props().isOpened).to.be.false
    expect(wrapper.childAt(0).text()).to.equal('This is a test.')
    expect(wrapper.childAt(1).childAt(0).hasClass('list-wrapper')).to.equal(false)
    expect(wrapper.childAt(1).find('ul').length).to.equal(0)
    expect(wrapper.childAt(1).find('li').length).to.equal(0)
  })

  it('should take an optional CSS class', () => {
    wrapper = mount(<Dropdown optClass='test' trigger='Test'>This is a test.</Dropdown>)

    expect(wrapper.childAt(0).hasClass('test')).to.equal(true)
  })

  it('displays a modified state upon changing props', function () {
    const listItems = [
      {name: 'test1'},
      {name: 'test2'},
      {name: 'test3'}
    ]

    wrapper = shallow(<Dropdown optClass='test' listItems={listItems} isOpened={false}>This is a test.</Dropdown>)

    expect(wrapper.state('isOpened')).to.be.false
    wrapper.setProps({ isOpened: true })

    expect(wrapper.state('isOpened')).to.be.true
  })

  it('should call changeCallback function', () => {
    const spy = sinon.spy()

    wrapper = mount(<WrappedDropdown optClass='test' trigger='Test' changeCallback={spy}>This is a test.</WrappedDropdown>)
    trigger = wrapper.find('.trigger').at(0)

    trigger.simulate('click')

    expect(spy.calledOnce).to.be.true
    expect(spy.calledWith(true)).to.be.true
  })

  it('should display list', () => {
    const listItems = [
      {name: 'test1'},
      {name: 'test2'},
      {name: 'test3'}
    ]

    wrapper = mount(<WrappedDropdown optClass='test' listItems={listItems}>This is a test.</WrappedDropdown>)
    expect(wrapper.find('.list-wrapper')).to.have.length(1)
    expect(wrapper.find('ul')).to.have.length(1)
    expect(wrapper.find('li')).to.have.length(3)
  })

  it('should display a confirmation overlay when an item is clicked', () => {
    const stopPropagation = sinon.spy()
    const listItems = [
      {name: 'test1'},
      {name: 'test2'},
      {name: 'test3', callbackConfirmation: true}
    ]

    wrapper = shallow(<Dropdown optClass='test' listItems={listItems}>This is a test.</Dropdown>)
    wrapper.instance().handleItemClick(listItems[0], { stopPropagation })

    expect(wrapper.state().confirmationOverlayOpen).to.be.false
    expect(wrapper.state().clickedItem).to.be.null
    expect(stopPropagation.calledOnce).to.be.true

    wrapper.instance().handleItemClick(listItems[2], { stopPropagation })

    expect(wrapper.state().confirmationOverlayOpen).to.be.true
    expect(wrapper.state().clickedItem).to.deep.equal(listItems[2])
    expect(stopPropagation.calledTwice).to.be.true
  })

  it('should close the confirmation overlay when action buttons are clicked', () => {
    const stopPropagation = sinon.spy()
    const listItems = [
      {name: 'test1'},
      {name: 'test2'},
      {name: 'test3', callbackConfirmation: true}
    ]

    wrapper = shallow(<Dropdown optClass='test' listItems={listItems} isOpened={true}>This is a test.</Dropdown>)

    wrapper.instance().handleItemClick(listItems[2], { stopPropagation })
    wrapper.instance().handleConfirmation(false, { stopPropagation })

    expect(wrapper.state().isOpened).to.be.true
    expect(wrapper.state().confirmationOverlayOpen).to.be.false
    expect(wrapper.state().clickedItem).to.be.null

    wrapper.instance().handleItemClick(listItems[2], { stopPropagation })
    wrapper.instance().handleConfirmation(true, { stopPropagation })

    expect(wrapper.state().isOpened).to.be.false
    expect(wrapper.state().confirmationOverlayOpen).to.be.false
    expect(wrapper.state().clickedItem).to.be.null
  })

  it('should render a disabled dropdown', () => {
    wrapper = shallow(<Dropdown trigger={<button>Test</button>} disabled={true}>This is a test.</Dropdown>)

    const trigger = shallow(wrapper.instance().getTriggerNode())
    expect(trigger.props().disabled).to.be.true

    expect(wrapper.state().isOpened).to.be.false
    wrapper.instance().toggleDropdown({ preventDefault: sinon.spy() })
    expect(wrapper.state().isOpened).to.be.false
  })
})
