import React from 'react'
import Textarea from '../src/components/Textarea/Textarea'

describe('Textarea', () => {
  let wrapper

  it('should shallow render itself', () => {
    wrapper = shallow(<Textarea label='Default textarea' placeholder='Placeholder text' value='Initial value.' />)
    expect(wrapper.find('textarea')).to.have.length(1)
    expect(wrapper.find('label')).to.have.length(1)
    expect(wrapper.hasClass('textarea-component')).to.equal(true)
    expect(wrapper.childAt(1).props().placeholder).to.equal('Placeholder text')
    expect(wrapper.childAt(1).props().value).to.equal('Initial value.')
  })

  it('should be disabled', () => {
    wrapper = shallow(<Textarea label='Disabled textarea' value='' disabled={true} />)
    expect(wrapper.find('textarea').prop('disabled')).to.be.true
  })

  it('should have an disabled class', () => {
    wrapper = shallow(<Textarea disabled />)
    expect(wrapper.hasClass('textarea-disabled')).to.equal(true)
  })

  it('should not have a label', () => {
    wrapper = shallow(<Textarea value='' />)
    expect(wrapper.find('label')).to.have.length(0)
  })

  it('should have an extra class', () => {
    wrapper = shallow(<Textarea label='Textarea with error' value='' optClass='textarea-error' />)
    expect(wrapper.hasClass('textarea-component')).to.equal(true)
    expect(wrapper.hasClass('textarea-error')).to.equal(true)
  })

  it('should run the changeCallback on change', () => {
    const spy = sinon.spy()
    const event = { persist: () => {}, target: { value: 'test1' } }

    wrapper = shallow(<Textarea value='test' changeCallback={spy} />)
    wrapper.instance().handleChange(event)
    expect(spy.calledOnce).to.be.true
  })

  it('should run the blurCallback on blur', () => {
    const blurCallback = sinon.spy()
    const event = { key: 'value' }

    wrapper = shallow(<Textarea value='test' blurCallback={blurCallback} />)
    wrapper.instance().handleBlur(event)
    expect(blurCallback.calledWithExactly(event)).to.be.true
  })

  it('should not result in an error when blurCallback is not defined', () => {
    const spy = sinon.spy(console, 'error')

    wrapper = mount(<Textarea value='test' />)
    wrapper.instance().handleBlur()

    expect(spy.calledOnce).to.be.false
    spy.restore()
  })

  it('should not result in an error when focusCallback is not defined', () => {
    const spy = sinon.spy(console, 'error')

    wrapper = mount(<Textarea value='test' />)
    wrapper.instance().handleFocus()

    expect(spy.called).to.be.false
    spy.restore()
  })

  it('should run the focusCallback on focus', () => {
    const spy = sinon.spy()
    const event = { key: 'value' }

    wrapper = mount(<Textarea value='test' focusCallback={spy} />)
    wrapper.instance().handleFocus(event)
    expect(spy.calledWithExactly(event)).to.be.true
  })

  it('should update the state when the value property changes', () => {
    wrapper = shallow(<Textarea value='test' value="Test text" />)

    wrapper.setProps({ value: 'Test change' })
    wrapper.update()

    expect(wrapper.state('value')).to.equal('Test change')
  })
})
