import React from 'react'
import { ColorPicker } from '../src/components/ColorPicker/ColorPicker'
import { SketchPicker } from 'react-color'

describe('ColorPicker', () => {
  const oldColor = '#3C97D3'
  const newColor = '#E54C3B'
  let wrapper, inputField, previewColorDiv

  it('should shallow render itself', () => {
    wrapper = mount(<ColorPicker value={oldColor} />)
    expect(wrapper.find('.colorpicker-component')).to.have.length(1)

    inputField = wrapper.find('Input')
    expect(inputField).to.have.length(1)

    previewColorDiv = wrapper.find('.color-preview')
    expect(previewColorDiv).to.have.length(1)
  })

  it('should have empty default color', () => {
    wrapper = mount(<ColorPicker />)
    expect(wrapper.state('color')).to.equal('')
  })

  it('should open/close when clicked', () => {
    wrapper = shallow(<ColorPicker value={oldColor} />)
    const handleClick = wrapper.instance().handleClick

    expect(wrapper.find(SketchPicker)).to.have.length(0)
    handleClick()
    wrapper.update()
    expect(wrapper.find(SketchPicker)).to.have.length(1)
    handleClick()
    wrapper.update()
    expect(wrapper.find(SketchPicker)).to.have.length(0)
  })

  it('should update the state when the value property changes', () => {
    wrapper = shallow(<ColorPicker value={oldColor} />)

    expect(wrapper.state('color')).to.equal(oldColor)

    wrapper.setProps({ value: newColor })

    expect(wrapper.state('color')).to.equal(newColor)
  })

  it('should update the state when input value changes', () => {
    wrapper = shallow(<ColorPicker value={oldColor} />)
    const handleInputChange = wrapper.instance().handleInputChange

    expect(wrapper.state('color')).to.equal(oldColor)
    handleInputChange({ target: { value: newColor } })

    expect(wrapper.state('color')).to.equal(newColor)
  })

  it('should update the state when the new color is missing the #', () => {
    wrapper = shallow(<ColorPicker value={oldColor} />)
    const handleInputChange = wrapper.instance().handleInputChange

    expect(wrapper.state('color')).to.equal(oldColor)

    handleInputChange({ target: { value: 'E54C3B' } })

    expect(wrapper.state('color')).to.equal(newColor)
  })

  it('should run the changeCallback on change', () => {
    let result = ''
    const callback = function (event) {
      result = event
    }

    wrapper = mount(<ColorPicker value={oldColor} changeCallback={callback} />)
    wrapper.find('input').simulate('change')
    expect(result.target.value).to.equal(oldColor)
  })

  it('should not result in an error if changeCallback is not defined', () => {
    const spy = sinon.spy(console, 'error')

    wrapper = mount(<ColorPicker value={oldColor} />)
    wrapper.find('input').simulate('change')

    expect(spy.called).to.be.false
    spy.restore()
  })

  it('should update the state when new color is selected in the picker', () => {
    wrapper = shallow(<ColorPicker changeCallback={() => {}} />)
    const handlePickerChange = wrapper.instance().handlePickerChange

    handlePickerChange({ hex: newColor })

    expect(wrapper.state('color')).to.equal(newColor)
  })

  it('should run the changeCallback when new color is selected in the picker', () => {
    const callback = sinon.spy()

    wrapper = shallow(<ColorPicker changeCallback={callback} />)
    const handlePickerChange = wrapper.instance().handlePickerChange

    handlePickerChange({ hex: newColor })

    expect(callback.calledOnce).to.be.true
  })
})
