import React from 'react'
import { SortableItem } from '../src/components/SortableList'
import TestBackend from 'react-dnd-test-backend'
import TestUtils from 'react-dom/test-utils'
import { DragDropContext } from 'react-dnd'

describe('SortableItem', () => {
  let wrapper

  const moveSortableItem = dragIndex => {}
  const toggleSortableItem = () => {}
  const onDragStart = () => {}
  const onDragStop = () => {}

  /**
   * Wraps a component into a DragDropContext that uses the TestBackend.
   */
  function wrapInTestContext(DecoratedComponent) {
    return DragDropContext(TestBackend)(
      class TestContextContainer extends React.Component {
        render() {
          return <DecoratedComponent {...this.props} />
        }
      }
    )
  }

  it('should shallow render itself', () => {
    // Render with the test context that uses the test backend
    const SortableItemContext = wrapInTestContext(SortableItem)

    wrapper = mount(<SortableItemContext key={0} index={0} value="test-1" text="Test 1" moveSortableItem={sinon.spy()} toggleSortableItem={sinon.spy()} onDragStart={sinon.spy()} onDragStop={sinon.spy()} count={1} />)

    expect(wrapper.find('.sortable-item')).to.have.length(1)
    expect(wrapper.find('.inactive')).to.have.length(1)
    expect(wrapper.find('Toggle')).to.have.length(1)
    expect(wrapper.find('Badge')).to.have.length(1)
  })

  it('should set item opacity to 0 when dragging starts', () => {
    // Render with the test context that uses the test backend
    const SortableItemContext = wrapInTestContext(SortableItem)
    const root = TestUtils.renderIntoDocument(<SortableItemContext key={0} index={0} value="test-1" text="Test 1" moveSortableItem={moveSortableItem} toggleSortableItem={toggleSortableItem} onDragStart={onDragStart} onDragStop={onDragStop} count={1} />)

    // Obtain a reference to the backend
    const backend = root.getManager().getBackend()

    // Test that the opacity is 1
    let sortableItem = TestUtils.findRenderedDOMComponentWithClass(root, 'sortable-item')

    expect(sortableItem.style.opacity).to.be.equal('1')

    // Find the drag source ID and use it to simulate the dragging operation
    const item = TestUtils.findRenderedComponentWithType(root, SortableItem)

    backend.simulateBeginDrag([item.getDecoratedComponentInstance().getHandlerId()])

    // Verify that the div changed its opacity
    sortableItem = TestUtils.findRenderedDOMComponentWithClass(root, 'sortable-item')
    expect(sortableItem.style.opacity).to.be.equal('0')
  })

  it('should trigger a callback when dragging starts', () => {
    let draggingStarted = false
    const onDragStart = () => {
      draggingStarted = true
    }
    // Render with the test context that uses the test backend
    const SortableItemContext = wrapInTestContext(SortableItem)
    const root = TestUtils.renderIntoDocument(<SortableItemContext key={0} index={0} value="test-1" text="Test 1" moveSortableItem={moveSortableItem} toggleSortableItem={toggleSortableItem} onDragStart={onDragStart} onDragStop={onDragStop} count={1} />)

    // Obtain a reference to the backend
    const backend = root.getManager().getBackend()

    // Find the drag source ID and use it to simulate the dragging operation
    const item = TestUtils.findRenderedComponentWithType(root, SortableItem)

    backend.simulateBeginDrag([item.getDecoratedComponentInstance().getHandlerId()])

    expect(draggingStarted).to.be.true
  })

  it('should trigger a callback when dragging stops', () => {
    let draggingStopped = false
    const onDragStop = () => {
      draggingStopped = true
    }
    // Render with the test context that uses the test backend
    const SortableItemContext = wrapInTestContext(SortableItem)
    const root = TestUtils.renderIntoDocument(<SortableItemContext key={0} index={0} value="test-1" text="Test 1" moveSortableItem={moveSortableItem} toggleSortableItem={toggleSortableItem} onDragStart={onDragStart} onDragStop={onDragStop} count={1} />)

    // Obtain a reference to the backend
    const backend = root.getManager().getBackend()

    // Find the drag source ID and use it to simulate the dragging operation
    const item = TestUtils.findRenderedComponentWithType(root, SortableItem)

    backend.simulateBeginDrag([item.getDecoratedComponentInstance().getHandlerId()])
    backend.simulateDrop()
    backend.simulateEndDrag()

    expect(draggingStopped).to.be.true
  })

  it('should not render the order numbers', () => {
    const SortableItemContext = wrapInTestContext(SortableItem)

    wrapper = mount(<SortableItemContext key={0} index={0} value="test-1" text="Test 1" moveSortableItem={sinon.spy()} toggleSortableItem={sinon.spy()} onDragStart={sinon.spy()} onDragStop={sinon.spy()} count={1} hideOrderNumber={true} />)

    expect(wrapper.find('Badge')).to.have.length(0)
  })
})
