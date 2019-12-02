import React from 'react'
import Nav from '../src/components/Nav/Nav'
import Node from '../src/components/Nav/Node'

describe('Nav', () => {

  const data = [
    {
      name: 'Item 1',
      route: '/',
      icon: 'icon-award-3'
    }, {
      name: 'Item 2',
      route: '/'
    }
  ]

  it('should render a .nav wrapper with list items', () => {
    const wrapper = shallow(<Nav data={data} />)

    expect(wrapper.find('.nav')).to.have.length(1)
    expect(wrapper.find('ul').children()).to.have.length(data.length)
    expect(wrapper.find(Node)).to.have.length(data.length)
    expect(wrapper.childAt(0).childAt(0).type()).to.equal(Node)
    expect(wrapper.childAt(0).childAt(0).props().node.name).to.equal(data[0].name)
    expect(wrapper.childAt(0).childAt(0).props().node.route).to.equal(data[0].route)
    expect(wrapper.childAt(0).childAt(0).props().node.icon).to.equal(data[0].icon)
    expect(wrapper.childAt(0).childAt(1).props().node.name).to.equal(data[1].name)
    expect(wrapper.childAt(0).childAt(1).props().node.route).to.equal(data[1].route)
    expect(wrapper.childAt(0).childAt(1).props().node.icon).to.equal(undefined)
  })

})
