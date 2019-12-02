import React from 'react'
import ButtonGroup from '../src/components/ButtonGroup/ButtonGroup'

describe('ButtonGroup', () => {
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

  it('should shallow render itself', () => {
    wrapper = shallow(<ButtonGroup name="test-group" options={options} label="Test label"/>)

    expect(wrapper.hasClass('button-group')).to.equal(true)
    expect(wrapper.find('label')).to.have.length(1)
    expect(wrapper.find('ButtonToggle')).to.have.length(2)

    expect(wrapper.childAt(1).childAt(0).props().value).to.be.equal('option_1')
    expect(wrapper.childAt(1).childAt(0).props().label).to.be.equal('Option 1')
    expect(wrapper.childAt(1).childAt(0).props().name).to.be.equal('test-group')
    expect(wrapper.childAt(1).childAt(0).props().checked).to.be.equal(false)
    expect(wrapper.childAt(1).childAt(0).props().optClass).to.be.equal('secondary')
    expect(wrapper.childAt(1).childAt(0).props().disabled).to.be.equal(false)

    expect(wrapper.childAt(1).childAt(1).props().value).to.be.equal('option_2')
    expect(wrapper.childAt(1).childAt(1).props().label).to.be.equal('Option 2')
    expect(wrapper.childAt(1).childAt(1).props().name).to.be.equal('test-group')
    expect(wrapper.childAt(1).childAt(1).props().checked).to.be.equal(false)
    expect(wrapper.childAt(1).childAt(1).props().optClass).to.be.equal('secondary')
    expect(wrapper.childAt(1).childAt(1).props().disabled).to.be.equal(false)
  })

  it('should have disabled buttons', () => {
    wrapper = shallow(<ButtonGroup name="test-group" options={options} label="Test label" disabled/>)

    expect(wrapper.childAt(1).childAt(0).props().disabled).to.be.equal(true)
    expect(wrapper.childAt(1).childAt(1).props().disabled).to.be.equal(true)
  })

  it('should be required', () => {
    wrapper = shallow(<ButtonGroup name="test-group" options={options} label="Test label" required={true}/>)

    expect(wrapper.childAt(0).hasClass('asterisk')).to.be.true
    expect(wrapper.childAt(0).html()).to.be.equal('<span class="asterisk">*</span>')
  })

  it('should have an option selected', () => {
    wrapper = shallow(<ButtonGroup name="test-group" options={options} label="Test label" defaultOption={0}/>)

    expect(wrapper.state('checkedOption')).to.equal(options[0].value)

    wrapper.setProps({ defaultOption: 1 })
    wrapper.update()

    expect(wrapper.state('checkedOption')).to.equal(options[1].value)
  })

  it('should have an extra class', () => {
    wrapper = shallow(<ButtonGroup name="test-group" options={options} label="Test label" optClass="extra-class"/>)

    expect(wrapper.hasClass('extra-class')).to.be.true
  })

  it('should have buttons with specific styling', () => {
    wrapper = shallow(<ButtonGroup name="test-group" options={options} label="Test label" buttonStyle='info' defaultOption={1}/>)

    expect(wrapper.childAt(1).childAt(0).props().optClass).to.be.equal('secondary')
    expect(wrapper.childAt(1).childAt(1).props().optClass).to.be.equal('info')

    wrapper.setProps({ buttonStyle: 'danger' })
    wrapper.update()

    expect(wrapper.childAt(1).childAt(0).props().optClass).to.be.equal('secondary')
    expect(wrapper.childAt(1).childAt(1).props().optClass).to.be.equal('danger')

    wrapper.setProps({ buttonStyle: '' })
    wrapper.update()

    expect(wrapper.childAt(1).childAt(0).props().optClass).to.be.equal('secondary')
    expect(wrapper.childAt(1).childAt(1).props().optClass).to.be.equal('')
  })

  it('should call changeCallback function', () => {
    const spy = sinon.spy()

    wrapper = shallow(<ButtonGroup name="test-group" options={options} label="Test label" changeCallback={spy}/>)
    wrapper.instance().handleChange({ persist: () => {} }, 'test')

    expect(spy.calledOnce).to.be.true
  })

  it('should update selected value via callback', () => {
    let selected = false
    const callback = function (event, value) {
      selected = value
    }

    wrapper = shallow(<ButtonGroup name="test-group" options={options} label="Test label" changeCallback={callback}/>)
    const handleChange = wrapper.instance().handleChange

    handleChange({ persist: () => {} }, 'option_1')
    expect(wrapper.state('checkedOption')).to.equal('option_1')
  })

  it('should use custom props for value and label', () => {
    options = [
      {
        customValue: 'option_1',
        customLabel: 'Option 1'
      }, {
        customValue: 'option_2',
        customLabel: 'Option 2'
      }
    ]
    wrapper = shallow(<ButtonGroup name="test-group" options={options} label="Test label" valueProp='customValue' displayProp='customLabel' />)

    expect(wrapper.find('ButtonToggle').at(0).props().value).to.equal('option_1')
    expect(wrapper.find('ButtonToggle').at(0).props().label).to.equal('Option 1')
    expect(wrapper.find('ButtonToggle').at(1).props().value).to.equal('option_2')
    expect(wrapper.find('ButtonToggle').at(1).props().label).to.equal('Option 2')
  })
})
