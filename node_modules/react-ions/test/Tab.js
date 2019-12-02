import React from 'react'
import Tab from '../src/components/TabWrapper/Tab'
import Badge from '../src/components/Badge'

describe('Tab', () => {
  let wrapper

  it('should shallow render itself', () => {
    wrapper = shallow(<Tab title="Test Tab" />)

    expect(wrapper.hasClass('tab')).to.equal(true)
    expect(wrapper.hasClass('active')).to.equal(false)
    expect(wrapper.find('span')).to.have.length(0)
    expect(wrapper.text().trim()).to.equal('Test Tab')
  })

  it('should have active state when the active property is set to true', () => {
    wrapper = shallow(<Tab title="Test Tab" active={true} />)

    expect(wrapper.hasClass('tab')).to.equal(true)
    expect(wrapper.hasClass('active')).to.equal(true)
    expect(wrapper.find('span')).to.have.length(0)
    expect(wrapper.text().trim()).to.equal('Test Tab')
  })

  it('should render the count if the count property is provided', () => {
    wrapper = shallow(<Tab title="Test Tab" count={1234} />)

    expect(wrapper.hasClass('tab')).to.equal(true)
    expect(wrapper.hasClass('active')).to.equal(false)
    expect(wrapper.find('span')).to.have.length(1)
    expect(wrapper.text().trim()).to.equal('Test Tab (1,234)')
  })

  it('should trigger a callback when clicked if the callback is provided', () => {
    let callbackTriggered = false

    function callback() {
      callbackTriggered = true
    };

    wrapper = mount(<Tab title="Test Tab With Count" onClick={callback} />)
    wrapper.simulate('click')

    expect(callbackTriggered).to.be.true
  })

  it('should not cause an error when clicked if the callback is not provided', () => {
    let callbackTriggered = false

    wrapper = mount(<Tab title="Test Tab With Count" />)
    wrapper.simulate('click')

    expect(callbackTriggered).to.be.false
  })

  it('should render a badge prefix node', () => {
    wrapper = shallow(<Tab titlePrefix={<Badge />} title="Test Tab With Prefix" />)

    expect(wrapper.find(Badge).length).to.equal(1)
  })

  it('should render a badge suffix node', () => {
    wrapper = shallow(<Tab titleSuffix={<Badge />} title="Test Tab With Suffix" />)

    expect(wrapper.find(Badge).length).to.equal(1)
  })

  it('should render a badge suffix and prefix node', () => {
    wrapper = shallow(<Tab titlePrefix={<Badge />} titleSuffix={<Badge />} title="Test Tab With Prefix and Suffix" />)

    expect(wrapper.find(Badge).length).to.equal(2)
  })
})
