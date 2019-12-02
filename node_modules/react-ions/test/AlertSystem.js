import React from 'react'
import { AlertSystem, Alert } from '../src/components/Alerts'

describe('AlertSystem', () => {
  let wrapper

  it('should display an empty alert system', () => {
    wrapper = shallow(<AlertSystem alerts={[]}/>)

    expect(wrapper.children()).to.have.length(0)
  })

  it('should display an alert system with alerts', () => {
    let alerts = [
      { content: 'Test success' }
    ]

    wrapper = shallow(<AlertSystem alerts={alerts}/>)

    expect(wrapper.children()).to.have.length(1)
    expect(wrapper.childAt(0).props().type).to.equal('success')
    expect(wrapper.childAt(0).props().closable).to.be.true

    alerts.push({ type: 'warning', content: 'Test warning' })
    wrapper.setProps({ alerts: alerts })
    wrapper.update()

    expect(wrapper.children()).to.have.length(2)
    expect(wrapper.childAt(1).props().type).to.equal('warning')
    expect(wrapper.childAt(1).props().closable).to.be.true

    alerts.push({ type: 'info', content: 'Test info' })
    wrapper.setProps({ alerts: alerts })
    wrapper.update()

    expect(wrapper.children()).to.have.length(3)
    expect(wrapper.childAt(2).props().type).to.equal('info')
    expect(wrapper.childAt(2).props().closable).to.be.true

    alerts.push({ type: 'danger', content: 'Test danger' })
    wrapper.setProps({ alerts: alerts })
    wrapper.update()

    expect(wrapper.children()).to.have.length(4)
    expect(wrapper.childAt(3).props().type).to.equal('danger')
    expect(wrapper.childAt(3).props().closable).to.be.true
  })

  it('should close an alert when the close icon is clicked', () => {
    let alerts = [
      { type: 'success', content: 'Test success' }
    ]

    wrapper = mount(<AlertSystem alerts={alerts}/>)

    expect(wrapper.find(Alert)).to.have.length(1)
    expect(wrapper.childAt(0).hasClass('close-icon')).to.equal(false)

    wrapper.childAt(0).childAt(0).simulate('click')

    expect(wrapper.find(alert)).to.have.length(0)
  })

  it('should run onClose callback when the close icon is clicked', () => {
    const closeClickCallback = sinon.spy()
    let alerts = [
      { key: 'test', type: 'success', content: 'Test success', onClose: closeClickCallback }
    ]

    wrapper = shallow(<AlertSystem alerts={alerts}/>)
    wrapper.instance().removeAlert({ key: 'test', type: 'success', content: 'Test success', onClose: closeClickCallback })

    expect(closeClickCallback.calledOnce).to.be.true
  })

  it('should close an alert when the timeout expires', done => {
    let alerts = [
      { type: 'success', content: 'Test success', timeout: 1000 }
    ]

    wrapper = mount(<AlertSystem alerts={alerts}/>)

    expect(wrapper.find(Alert)).to.have.length(1)
    expect(wrapper.childAt(0).hasClass('close-icon')).to.equal(false)

    setTimeout(function () {
      wrapper.update()
      expect(wrapper.find(Alert)).to.have.length(0)
      done()
    }, 1500)
  })

  it('should run onClose callback when the timeout expires', done => {
    const closeExpireCallback = sinon.spy()
    let alerts = [
      { type: 'success', content: 'Test success', timeout: 1000, onClose: closeExpireCallback }
    ]

    wrapper = mount(<AlertSystem alerts={alerts}/>)

    setTimeout(function () {
      expect(closeExpireCallback.calledOnce).to.be.true
      done()
    }, 1500)
  })

  it('should pause the timeout when the cursor is over the alert', done => {
    let alerts = [
      { type: 'success', content: 'Test success', timeout: 1000 }
    ]

    wrapper = mount(<AlertSystem alerts={alerts}/>)

    expect(wrapper.find(Alert)).to.have.length(1)
    expect(wrapper.childAt(0).hasClass('close-icon')).to.equal(false)

    wrapper.childAt(0).simulate('mouseOver')

    setTimeout(function () {
      expect(wrapper.find(Alert)).to.have.length(1)
      done()
    }, 1500)
  })

  it('should resume the timeout when the cursor moves away from the alert', done => {
    let alerts = [
      { type: 'success', content: 'Test success', timeout: 1000 }
    ]

    wrapper = mount(<AlertSystem alerts={alerts}/>)

    expect(wrapper.find(Alert)).to.have.length(1)
    expect(wrapper.childAt(0).hasClass('close-icon')).to.equal(false)

    wrapper.childAt(0).simulate('mouseOver')

    setTimeout(function () {
      wrapper.childAt(0).simulate('mouseOut')
    }, 200)

    setTimeout(function () {
      wrapper.update()
      expect(wrapper.find(Alert)).to.have.length(0)
      done()
    }, 1500)
  })

  it('should not render a close icon if closable is set to false', () => {
    let alerts = [
      { type: 'success', content: 'Test success', closable: false }
    ]

    wrapper = mount(<AlertSystem alerts={alerts}/>)

    expect(wrapper.children()).to.have.length(1)
    expect(wrapper.childAt(0).hasClass('close-icon')).to.equal(false)
  })

  it('should have an extra class', () => {
    let alerts = [
      { type: 'success', content: 'Test success' }
    ]

    wrapper = shallow(<AlertSystem alerts={alerts} optClass='test-class'/>)

    expect(wrapper.hasClass('test-class')).to.be.true
  })

  it('should have an extra class on the alert', () => {
    let alerts = [
      { type: 'success', content: 'Test success', class: 'test-class' }
    ]

    wrapper = shallow(<AlertSystem alerts={alerts}/>)

    expect(wrapper.childAt(0).props().optClass).to.equal('test-class')
  })

  it('should provide a slide-in class when slidein prop is present', () => {
    let alerts = [
      { type: 'success', content: 'Test success' }
    ]

    wrapper = shallow(<AlertSystem alerts={alerts} slideIn={true} />)
    expect(wrapper.props().className).to.equal('alert-system slide-in-right')
  })

})
