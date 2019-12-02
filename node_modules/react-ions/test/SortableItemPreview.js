import React from 'react'
import { SortableItemPreview } from '../src/components/SortableList'
import Badge from '../src/components/Badge'

describe('SortableItemPreview', () => {
  let wrapper

  const items = [
    {
      index: 0,
      text: 'Email',
      value: 'email',
      active: false
    },
    {
      index: 1,
      text: 'Push Notification',
      value: 'push_notification',
      active: true
    },
    {
      index: 2,
      text: 'Web',
      value: 'web',
      active: false
    },
    {
      index: 3,
      text: 'SMS',
      value: 'sms',
      active: false
    }
  ]

  it('should shallow render itself', () => {
    wrapper = shallow(<SortableItemPreview item={items[0]} count={1} />)

    expect(wrapper.hasClass('sortable-item')).to.equal(true)
    expect(wrapper.hasClass('inactive')).to.equal(true)
    expect(wrapper.find('Toggle')).to.have.length(1)
    expect(wrapper.find('Badge')).to.have.length(1)

    wrapper = shallow(<SortableItemPreview item={items[1]} count={1} />)

    expect(wrapper.hasClass('sortable-item')).to.equal(true)
    expect(wrapper.hasClass('inactive')).to.equal(false)
    expect(wrapper.find('Toggle')).to.have.length(1)
    expect(wrapper.find('Badge')).to.have.length(1)
  })

  it('should reduce badge opacity on every following item', () => {
    wrapper = shallow(<SortableItemPreview item={items[0]} count={4} />)

    wrapper.find('sortable-item-badge')
    expect(wrapper.childAt(0).prop('style').opacity).to.equal(1)
    expect(wrapper.find(Badge).prop('text')).to.equal(1)

    wrapper = shallow(<SortableItemPreview item={items[1]} count={4} />)

    expect(wrapper.childAt(0).prop('style').opacity).to.closeTo(0.8, 0.01)
    expect(wrapper.find(Badge).prop('text')).to.equal(2)

    wrapper = shallow(<SortableItemPreview item={items[2]} count={4} />)

    expect(wrapper.childAt(0).prop('style').opacity).to.closeTo(0.6, 0.01)
    expect(wrapper.find(Badge).prop('text')).to.equal(3)

    wrapper = shallow(<SortableItemPreview item={items[3]} count={4} />)

    expect(wrapper.childAt(0).prop('style').opacity).to.closeTo(0.4, 0.01)
    expect(wrapper.find(Badge).prop('text')).to.equal(4)
  })

  it('should not render the order numbers', () => {
    wrapper = mount(<SortableItemPreview item={items[0]} count={4} hideOrderNumber={true} />)

    expect(wrapper.find('Badge')).to.have.length(0)
  })
})
