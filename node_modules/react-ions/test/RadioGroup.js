import React from 'react'
import RadioGroup from '../src/components/Radio/RadioGroup'
import Radio from '../src/components/Radio/'
import Input from '../src/components/Input'

describe('RadioGroup', () => {
  let wrapper
  let options = [
    {
      value: 'option_1',
      label: 'Option 1'
    }, {
      value: 'option_2',
      label: 'Option 2'
    }
  ]

  it('should shallow render itself with options array', () => {
    wrapper = shallow(<RadioGroup name='test-group' options={options} label='Test label' />)

    expect(wrapper.hasClass('radio-group')).to.equal(true)
    expect(wrapper.find('label')).to.have.length(1)
    expect(wrapper.find(Radio)).to.have.length(2)

    expect(wrapper.childAt(1).props().value).to.be.equal('option_1')
    expect(wrapper.childAt(1).props().label).to.be.equal('Option 1')
    expect(wrapper.childAt(1).props().name).to.be.equal('test-group')
    expect(wrapper.childAt(1).props().checked).to.be.equal(false)
    expect(wrapper.childAt(1).props().optClass).to.be.undefined
    expect(wrapper.childAt(1).props().disabled).to.be.equal(false)

    expect(wrapper.childAt(2).props().value).to.be.equal('option_2')
    expect(wrapper.childAt(2).props().label).to.be.equal('Option 2')
    expect(wrapper.childAt(2).props().name).to.be.equal('test-group')
    expect(wrapper.childAt(2).props().checked).to.be.equal(false)
    expect(wrapper.childAt(2).props().optClass).to.be.undefined
    expect(wrapper.childAt(2).props().disabled).to.be.equal(false)
  })

  it('should shallow render itself with explicit children', () => {
    wrapper = shallow(
      <RadioGroup name='test-group' options={options} label='Test label'>
        <Radio value='option_1' label='Option 1' />
        <Input name='child-input' />
        <Radio value='option_2' label='Option 2' />
        <Input name='child-input' />
      </RadioGroup>
    )

    expect(wrapper.find(Radio)).to.have.length(2)
    expect(wrapper.find(Input)).to.have.length(2)

    expect(wrapper.childAt(1).props().value).to.be.equal('option_1')
    expect(wrapper.childAt(1).props().label).to.be.equal('Option 1')
    expect(wrapper.childAt(1).props().name).to.be.equal('test-group')
    expect(wrapper.childAt(1).props().checked).to.be.equal(false)
    expect(wrapper.childAt(1).props().optClass).to.be.undefined
    expect(wrapper.childAt(1).props().disabled).to.be.equal(false)

    expect(wrapper.childAt(2).props().name).to.be.equal('child-input')
    expect(wrapper.childAt(3).props().value).to.be.equal('option_2')
    expect(wrapper.childAt(4).props().name).to.be.equal('child-input')
  })

  it('should have disabled radio buttons', () => {
    wrapper = shallow(<RadioGroup name='test-group' options={options} label='Test label' disabled />)

    expect(wrapper.childAt(1).props().disabled).to.be.equal(true)
    expect(wrapper.childAt(2).props().disabled).to.be.equal(true)
  })

  it('should not have a label', () => {
    wrapper = shallow(<RadioGroup name='test-group' options={options} />)

    expect(wrapper.find('label')).to.have.length(0)
  })

  it('should have an option checked', () => {
    wrapper = shallow(<RadioGroup name='test-group' options={options} label='Test label' value='option_1' />)

    expect(wrapper.childAt(1).props().checked).to.be.equal(true)
    expect(wrapper.childAt(2).props().checked).to.be.equal(false)
  })

  it('should call changeCallback function', () => {
    const spy = sinon.spy()

    wrapper = mount(<RadioGroup name='test-group' options={options} label='Test label' changeCallback={spy} />)

    const input = wrapper.find('input').at(0)

    input.simulate('change')

    expect(spy.calledOnce).to.be.true
  })

  it('should update checked value via callback when rendered with options', () => {
    let checked
    const callback = (event, value) => {
      checked = value
    }

    wrapper = mount(<RadioGroup name='test-group' options={options} label='Test label' changeCallback={callback} />)

    const input = wrapper.find('input').at(0)
    const input2 = wrapper.find('input').at(1)

    input.simulate('change')
    expect(checked).to.equal('option_1')

    input2.simulate('change')
    expect(checked).to.equal('option_2')
  })

  it('should update checked value via callback when rendered with explicit children', () => {
    let checked
    const callback = (event, value) => {
      checked = value
    }

    wrapper = mount(
      <RadioGroup name='test-group' options={options} label='Test label' changeCallback={callback}>
        <Radio value='option_1' label='Option 1' />
        <Input name='child-input' />
        <Radio value='option_2' label='Option 2' />
        <Input name='child-input' />
      </RadioGroup>
    )

    const input = wrapper.childAt(0).childAt(1).childAt(0).childAt(0).find('input')
    const input2 = wrapper.childAt(0).childAt(3).childAt(0).childAt(0).find('input')

    input.simulate('change')
    expect(checked).to.be.equal('option_1')

    input2.simulate('change')
    expect(checked).to.be.equal('option_2')
  })

  it('should update the state when the value property changes', () => {
    wrapper = mount(<RadioGroup name='test-group' options={options} label='Test label' value='option_1' />)

    let input = wrapper.find('input').at(0)
    let input2 = wrapper.find('input').at(1)

    expect(input.props().checked).to.be.true
    expect(input2.props().checked).to.be.false

    wrapper.setProps({ value: 'option_2' })
    wrapper.update()

    // We need to reassign after .update() is called, apparently
    input = wrapper.find('input').at(0)
    input2 = wrapper.find('input').at(1)

    expect(input.props().checked).to.be.false
    expect(input2.props().checked).to.be.true
  })

  it('should uncheck radio when the value property changes to undefined', () => {
    wrapper = mount(<RadioGroup name='test-group' options={options} label='Test label' value='undefined' />)

    const input = wrapper.find('input').at(0)
    const input2 = wrapper.find('input').at(1)

    expect(input.prop('checked')).to.be.false
    expect(input2.prop('checked')).to.be.false
  })

  it('should uncheck radio when the value property changes to empty string', () => {
    wrapper = mount(<RadioGroup name='test-group' options={options} label='Test label' value='' />)

    const input = wrapper.find('input').at(0)
    const input2 = wrapper.find('input').at(1)

    expect(input.props().checked).to.be.false
    expect(input2.props().checked).to.be.false
  })

  it('should uncheck radio when the value property changes to null', () => {
    wrapper = mount(<RadioGroup name='test-group' options={options} label='Test label' value={null} />)

    const input = wrapper.find('input').at(0)
    const input2 = wrapper.find('input').at(0)

    expect(input.props().checked).to.be.false
    expect(input2.props().checked).to.be.false

    wrapper.setProps({ value: null })
    wrapper.update()
  })

  it('should uncheck radio when the value property changes to any falsy value (that do not match the radio value)', () => {
    wrapper = mount(<RadioGroup name='test-group' options={options} label='Test label' value='option_1' />)

    let input = wrapper.find('input').at(0)

    expect(input.props().checked).to.be.true

    wrapper.setProps({ value: 'falsy' })
    wrapper.update()

    // We need to reassign after .update() is called, apparently
    input = wrapper.find('input').at(0)

    expect(input.props().checked).to.be.false
  })

  it('should not result in an error if changeCallback is not defined', () => {
    const spy = sinon.spy(console, 'error')

    wrapper = mount(<RadioGroup name='test-group' options={options} label='Test label' />)

    wrapper.find('input').at(0).simulate('change')
    expect(spy.calledOnce).to.be.false

    wrapper.find('input').at(1).simulate('change')
    expect(spy.calledOnce).to.be.false

    spy.restore()
  })

  it('should update the state when a radio button is clicked', () => {
    wrapper = mount(<RadioGroup name='test-group' options={options} label='Test label' value='option_1' />)

    expect(wrapper.find('input').at(0).props().checked).to.be.true
    expect(wrapper.find('input').at(1).props().checked).to.be.false

    wrapper.find('input').at(1).simulate('change')

    expect(wrapper.find('input').at(0).props().checked).to.be.false
    expect(wrapper.find('input').at(1).props().checked).to.be.true
  })

  it('should set the checked property on an item to true', () => {
    wrapper = shallow(<RadioGroup name='test-group' options={options} label='Test label' />)

    wrapper.instance().checkItem('option_2', options)

    expect(options[1].checked).to.be.true
  })
})
