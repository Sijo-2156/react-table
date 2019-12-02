import React from 'react'
import Radio from '../src/components/Radio/Radio'

describe('Radio', () => {
  let wrapper

  it('should shallow render itself', () => {
    wrapper = shallow(<Radio value='test' label='Test label'></Radio>)

    expect(wrapper.find('div')).to.have.length(3)
    expect(wrapper.find('input')).to.have.length(1)
    expect(wrapper.find('label')).to.have.length(1)

    expect(wrapper.hasClass('radio-component')).to.equal(true)
    expect(wrapper.childAt(1).childAt(0).hasClass('radio-input')).to.equal(true)
  })

  it('should not have a label', () => {
    wrapper = shallow(<Radio value='test'></Radio>)

    expect(wrapper.find('label')).to.have.length(0)
  })

  it('should be disabled', () => {
    wrapper = shallow(<Radio value='test' label='Test label' disabled></Radio>)
    expect(wrapper.hasClass('radio-component')).to.equal(true)
    expect(wrapper.hasClass('radio-disabled')).to.equal(true)
    expect(wrapper.childAt(0).props().disabled).to.equal(true)
  })

  it('should have an extra class', () => {
    wrapper = shallow(<Radio value='test' label='Test label' optClass='radio-error'></Radio>)

    expect(wrapper.hasClass('radio-component')).to.equal(true)
    expect(wrapper.hasClass('radio-error')).to.equal(true)
  })

  it('should have a callback', () => {
    let checked = false
    const callback = function (event, value) {
      checked = value
    }

    wrapper = mount(<Radio value='test' label='Test label' changeCallback={callback}></Radio>)

    wrapper.find('input').simulate('change')
    expect(checked).to.be.equal('test')
  })

  it('should not result in an error if the callback is not defined', () => {
    const spy = sinon.spy(console, 'error')

    wrapper = mount(<Radio value='test' label='Test label'></Radio>)

    wrapper.find('input').simulate('change')

    expect(spy.calledOnce).to.be.false
    spy.restore()
  })

  it('should return a label with description', () => {
    wrapper = shallow(<Radio value='test' label='Test label' description='Test description'></Radio>)
    expect(wrapper.childAt(1).childAt(1).childAt(0).childAt(1).hasClass('label-description')).to.be.true
  })

  it('should return a min width attribute', () => {
    wrapper = shallow(<Radio value='test' width='20px'></Radio>)
    expect(wrapper.props().style).to.deep.equal({minWidth: '20px'})
  })
})
