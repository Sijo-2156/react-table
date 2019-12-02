import React from 'react'
import Tab from '../src/components/TabWrapper/Tab'
import TabWrapper from '../src/components/TabWrapper/TabWrapper'

describe('TabWrapper', () => {
  let wrapper

  it('should shallow render itself', () => {
    wrapper = shallow(<TabWrapper><Tab title="Test Tab">Test tab content</Tab><Tab title="Test Tab With Count" count={42}>Test tab with count content</Tab></TabWrapper>)
    expect(wrapper.hasClass('tab-wrapper')).to.equal(true)
    expect(wrapper.childAt(0).hasClass('tabs-list')).to.equal(true)
    expect(wrapper.childAt(1).hasClass('tab-panels')).to.equal(true)

    expect(wrapper.childAt(0).children()).to.have.length(2)
    expect(wrapper.childAt(1).children()).to.have.length(2)
  })

  it('should change active tab on click', () => {
    wrapper = shallow(
      <TabWrapper>
        <Tab title="Test Tab">Test tab content</Tab>
        <Tab title="Test Tab With Count" count={42}>Test tab with count content</Tab>
      </TabWrapper>)

    wrapper.instance().handleClick(null, { props: { tabIndex: 1 } })

    expect(wrapper.state('selectedIndex')).to.equal(1)
  })

  it('should have a select callback', () => {
    var selectedIndex = 0
    const callback = sinon.spy()

    wrapper = shallow(
      <TabWrapper onSelect={callback}>
        <Tab title="Test Tab">Test tab content</Tab>
        <Tab title="Test Tab With Count" count={42}>Test tab with count content</Tab>
      </TabWrapper>)

    wrapper.instance().handleClick(null, { props: { tabIndex: 1 } })

    expect(callback.calledWithExactly(1)).to.be.true
  })

  it('should not result in an error if the select callback is not defined', () => {
    const spy = sinon.spy(console, 'error')

    wrapper = shallow(
      <TabWrapper>
        <Tab title="Test Tab">Test tab content</Tab>
        <Tab title="Test Tab With Count" count={42}>Test tab with count content</Tab>
      </TabWrapper>)
    wrapper.instance().handleClick(null, { props: { tabIndex: 1 } })

    expect(spy.calledOnce).to.be.false
    spy.restore()
  })

  it('should have a non-default tab selected', () => {
    wrapper = shallow(<TabWrapper>
        <Tab title="Test Tab">Test tab content</Tab>
        <Tab title="Test Tab With Count" count={42} active={true}>Test tab with count content</Tab>
      </TabWrapper>)

    expect(wrapper.state('selectedIndex')).to.equal(1)
  })

  it('should conform to the initialSelectedIndex property', () => {
    wrapper = shallow(
      <TabWrapper initialSelectedIndex={1}>
        <Tab title="Test Tab">Test tab content</Tab>
        <Tab title="Test Tab With Count" count={42}>Test tab with count content</Tab>
      </TabWrapper>)

    expect(wrapper.state('selectedIndex')).to.equal(1)
  })

  it('should revert back to default (0) if initialSelectedIndex is larger than the number of tabs', () => {
    wrapper = shallow(
      <TabWrapper initialSelectedIndex={6}>
        <Tab title="Test Tab">Test tab content</Tab>
        <Tab title="Test Tab With Count" count={42}>Test tab with count content</Tab>
      </TabWrapper>)

    expect(wrapper.state('selectedIndex')).to.equal(0)
  })

  it('should have an extra class', () => {
    wrapper = shallow(<TabWrapper optClass="test-class"><Tab title="Test Tab">Test tab content</Tab><Tab title="Test Tab With Count" count={42}>Test tab with count content</Tab></TabWrapper>)

    expect(wrapper.hasClass('test-class')).to.be.true
  })

  it('should not render a tab content element if the tab component has no children', () => {
    wrapper = shallow(<TabWrapper optClass="test-class"><Tab title="Test Tab">Test tab content</Tab><Tab title="Test Tab With Count" count={42}></Tab></TabWrapper>)

    expect(wrapper.childAt(0).children()).to.have.length(2)
    expect(wrapper.childAt(1).children()).to.have.length(1)
  })

  it('should have an extra class on the tab header element', () => {
    wrapper = mount(<TabWrapper><Tab title="Test Tab" optClass="tab-one-header-class">Test tab content</Tab><Tab title="Test Tab With Count" count={42} optClass="tab-two-header-class">Test tab with count content</Tab></TabWrapper>)

    expect(wrapper.find('.tab-one-header-class')).to.have.length(1)
    expect(wrapper.find('.tab-two-header-class')).to.have.length(1)
  })

  it('should have an extra class on the tab content element', () => {
    wrapper = mount(<TabWrapper><Tab title="Test Tab" optTabContentClass="tab-one-content-class">Test tab content</Tab><Tab title="Test Tab With Count" count={42} optTabContentClass="tab-two-content-class">Test tab with count content</Tab></TabWrapper>)

    expect(wrapper.find('.tab-one-content-class')).to.have.length(1)
    expect(wrapper.find('.tab-two-content-class')).to.have.length(1)
  })

  it('should only render a tab if it\'s an element', () => {
    wrapper = shallow(
      <TabWrapper>
        Test tab content
        <Tab title="Test Tab With Count" count={42}>Test tab with count content</Tab>
      </TabWrapper>)

    expect(wrapper.find(Tab)).to.have.length(1)
  })

  it('should update the state if the initialSelectedIndex property changes', () => {
    wrapper = shallow(
      <TabWrapper initialSelectedIndex={0}>
        <Tab title="Test Tab">Test tab content</Tab>
        <Tab title="Test Tab With Count" count={42}>Test tab with count content</Tab>
      </TabWrapper>)

    wrapper.setProps({ initialSelectedIndex: 1 })
    wrapper.update()

    expect(wrapper.state('selectedIndex')).to.equal(1)
  })

  it('should not update the state if the initialSelectedIndex property stays the same', () => {
    wrapper = shallow(
      <TabWrapper initialSelectedIndex={0}>
        <Tab title="Test Tab">Test tab content</Tab>
        <Tab title="Test Tab With Count" count={42}>Test tab with count content</Tab>
      </TabWrapper>)

    expect(wrapper.state('selectedIndex')).to.equal(0)

    wrapper.setProps({ initialSelectedIndex: 0 })
    wrapper.update()

    expect(wrapper.state('selectedIndex')).to.equal(0)
  })

  it('should have a disabled tab', () => {
    wrapper = shallow(
      <TabWrapper>
        <Tab title="Test Tab">Test tab content</Tab>
        <Tab title="Test Tab With Count" disabled={true}>Test disabled tab content</Tab>
      </TabWrapper>)

    expect(wrapper.find(Tab).at(1).prop('disabled')).to.be.true
  })
})
