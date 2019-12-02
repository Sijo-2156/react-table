import React from 'react'
import ReactDOM from 'react-dom'
import { SelectField } from '../src/components/SelectField/SelectField'
import Icon from '../src/components/Icon/Icon'

describe('SelectField', () => {
  let wrapper
  const options = [
    {value: '0', display: 'test 1', someOtherProp: true},
    {value: '1', display: 'test 2', someOtherProp: false, hidden: true}
  ]

  const optionsWithIcons = [
    {value: '0', display: 'test 1', someOtherProp: true, icon: 'md-dashboard'},
    {value: '1', display: 'test 2', someOtherProp: false, icon: 'mbsy-slack', iconColor: '#3C97D3'}
  ]

  const optionsAltValueProp = [
    {id: '0', display: 'test 1', someOtherProp: true},
    {id: '1', display: 'test 2', someOtherProp: false}
  ]

  it('should shallow render itself', () => {
    wrapper = shallow(<SelectField options={options} valueProp='value' displayProp='display' />)

    expect(wrapper.find('div')).to.have.length(2)
    expect(wrapper.find('input')).to.have.length(1)
    expect(wrapper.find('ul')).to.have.length(1)
    expect(wrapper.find('li')).to.have.length(2)
    expect(wrapper.find(Icon)).to.have.length(1)

    expect(wrapper.hasClass('selectfield-component')).to.equal(true)
    expect(wrapper.childAt(0).props().name).to.equal('selectfield-value')
    expect(wrapper.childAt(0).props().type).to.equal('hidden')
    expect(wrapper.childAt(0).props().value).to.equal('')
    expect(wrapper.childAt(1).text().indexOf('Please select an option')).to.equal(0)
    expect(wrapper.find(Icon).props().name).to.equal('md-keyboard-down')
    expect(wrapper.find('ul').children()).to.have.length(2)
    expect(wrapper.find('ul').childAt(0).text()).to.equal(options[0].display)
    expect(wrapper.find('ul').childAt(0).props().className).to.not.equal('hidden')
    expect(wrapper.find('ul').childAt(1).text()).to.equal(options[1].display)
    expect(wrapper.find('ul').childAt(1).props().className).to.not.equal('hidden')
    expect(wrapper.hasClass('active')).to.equal(false)
  })

  it('should be disabled', () => {
    const disabled = true

    wrapper = shallow(<SelectField options={options} valueProp='value' displayProp='display' disabled={disabled} />)

    expect(wrapper.hasClass('selectfield-component')).to.equal(true)
    expect(wrapper.hasClass('selectfield-disabled')).to.equal(true)
    expect(wrapper.hasClass('active')).to.equal(false)
  })

  it('should have an extra class', () => {
    wrapper = shallow(<SelectField options={options} valueProp='value' displayProp='display' optClass='selectfield-error' />)

    expect(wrapper.hasClass('selectfield-component')).to.equal(true)
    expect(wrapper.hasClass('selectfield-error')).to.equal(true)
  })

  it('should have a placeholder', () => {
    const placeholder = 'Placeholder text...'

    wrapper = shallow(<SelectField options={options} valueProp='value' displayProp='display' placeholder={placeholder} />)

    expect(wrapper.childAt(1).text().indexOf(placeholder)).to.equal(0)
  })

  it('should have an icon', () => {
    wrapper = shallow(<SelectField options={options} valueProp='value' displayProp='display' icon='md-globe' />)

    expect(wrapper.find('.icon')).to.have.length(1)
  })

  it('should have an icon for each option', () => {
    wrapper = shallow(<SelectField options={optionsWithIcons} valueProp='value' displayProp='display' />)

    expect(wrapper.find('.icon')).to.have.length(2)
    expect(wrapper.find('ul').childAt(0).find(Icon)).to.have.length(1)
    expect(wrapper.find('ul').childAt(0).find(Icon).props().name).to.equal('md-dashboard')
    expect(wrapper.find('ul').childAt(1).find(Icon)).to.have.length(1)
    expect(wrapper.find('ul').childAt(1).find(Icon).props().name).to.equal('mbsy-slack')
    expect(wrapper.find('ul').childAt(1).find(Icon).props().fill).to.equal('#3C97D3')

    wrapper.childAt(1).simulate('click')
    wrapper.childAt(2).childAt(1).simulate('click')
  })

  it('should have an option selected by default', () => {
    wrapper = shallow(<SelectField options={optionsWithIcons} valueProp='value' displayProp='display' value={'1'} />)

    expect(wrapper.childAt(1).text().indexOf(optionsWithIcons[1].display)).to.not.equal(-1)
  })

  it('should not have an option selected and should not result in an error if an invalid value is provided', () => {
    const spy = sinon.spy(console, 'error')

    wrapper = shallow(<SelectField options={options} valueProp='value' displayProp='display' value={'2'} />)

    expect(spy.calledOnce).to.be.false
    expect(wrapper.childAt(1).text().indexOf('Please select an option')).to.equal(0)
    spy.restore()
  })

  it('should have the placeholder displayed and should not result in an error if an invalid value is provided', () => {
    const spy = sinon.spy(console, 'error')
    const placeholder = 'Placeholder text...'

    wrapper = shallow(<SelectField options={options} valueProp='value' displayProp='display' value={'2'} placeholder={placeholder} />)

    expect(spy.calledOnce).to.be.false
    expect(wrapper.childAt(1).text().indexOf(placeholder)).to.equal(0)
    spy.restore()
  })

  it('should toggle the select field isOpen state', () => {
    wrapper = shallow(<SelectField options={options} valueProp='value' displayProp='display' />)

    wrapper.childAt(1).simulate('click')

    expect(wrapper.hasClass('active')).to.equal(true)
  })

  it('should change the option', () => {
    wrapper = shallow(<SelectField options={options} valueProp='value' displayProp='display' />)

    expect(wrapper.childAt(1).text().indexOf('Please select an option')).to.equal(0)

    // open <ul>
    wrapper.childAt(1).simulate('click')
    // click <li>
    wrapper.childAt(2).childAt(1).simulate('click')

    expect(wrapper.childAt(1).text().indexOf(options[1].display)).to.equal(0)
  })

  it('should call changeCallback function', () => {
    const spy = sinon.spy()

    wrapper = shallow(<SelectField options={options} valueProp='value' displayProp='display' changeCallback={spy} />)

    // open <ul>
    wrapper.childAt(1).simulate('click')
    // click <li>
    wrapper.childAt(2).childAt(1).simulate('click')

    expect(spy.calledOnce).to.be.true
  })

  it('should not result in an error if changeCallback is not defined', () => {
    const spy = sinon.spy(console, 'error')

    wrapper = shallow(<SelectField options={options} valueProp='value' displayProp='display' />)

    // open <ul>
    wrapper.childAt(1).simulate('click')
    // click <li>
    wrapper.childAt(2).childAt(1).simulate('click')

    expect(spy.calledOnce).to.be.false
    spy.restore()
  })

  it('should update the state when the value property changes', () => {
    wrapper = shallow(<SelectField options={optionsAltValueProp} valueProp='id' displayProp='display' value={'0'} />)

    expect(wrapper.childAt(1).text().indexOf(optionsAltValueProp[0].display)).to.equal(0)

    wrapper.setProps({ value: '1' })
    wrapper.update()

    expect(wrapper.childAt(1).text().indexOf(optionsAltValueProp[1].display)).to.equal(0)
  })

  it('should reset the state when the value property is set to null', () => {
    wrapper = shallow(<SelectField options={optionsAltValueProp} valueProp='id' displayProp='display' value={'0'} />)

    expect(wrapper.childAt(1).text().indexOf(optionsAltValueProp[0].display)).to.equal(0)

    wrapper.setProps({ value: null })
    wrapper.update()

    expect(wrapper.childAt(1).text().indexOf('Please select an option')).to.equal(0)
  })

  it('should show a message when there are no options to select', () => {
    wrapper = mount(<SelectField options={[]} valueProp='value' displayProp='display' />)

    expect(wrapper.find('.not-clickable').text()).to.equal('Nothing to select')
  })

  it('should add a "hidden" class to an item if it has a specific "hideProp" prop set to true', () => {
    wrapper = shallow(<SelectField options={options} valueProp='value' displayProp='display' hideProp='hidden' />)

    expect(wrapper.childAt(2).children()).to.have.length(2)
    expect(wrapper.childAt(2).childAt(0).props().className).to.not.equal('hidden')
    expect(wrapper.childAt(2).childAt(1).props().className).to.equal('hidden')
  })

  it('should render a label', () => {
    wrapper = shallow(<SelectField options={options} valueProp='value' displayProp='display' label='Select Field Label' />)

    expect(wrapper.childAt(1).type()).to.equal('label')
    expect(wrapper.childAt(1).text()).to.equal('Select Field Label')
  })

  describe('handleClickOutside', () => {
    let handleClickOutside, toggleSelectField

    beforeEach(() => {
      wrapper = shallow(
        <SelectField
          options={options}
          valueProp='value'
          displayProp='display'
          label='Select Field Label'
        />)
      handleClickOutside = wrapper.instance().handleClickOutside
      toggleSelectField = sinon.spy(wrapper.instance(), 'toggleSelectField')
    })

    it('should call its toggleSelectField method when isOpen', () => {
      wrapper.setState({ isOpen: true })
      wrapper.update()
      handleClickOutside()
      expect(toggleSelectField.calledOnce).to.be.true
    })

    it('should not call its toggleSelectField method when not isOpen', () => {
      wrapper.setState({ isOpen: false })
      wrapper.update()
      handleClickOutside()
      expect(toggleSelectField.calledOnce).to.be.false
    })
  })
})
