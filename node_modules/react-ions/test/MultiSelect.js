import React from 'react'
import MultiSelect from '../src/components/MultiSelect/MultiSelect'
import SelectField from '../src/components/SelectField/SelectField'
import TagList from '../src/components/internal/TagList'
import Icon from '../src/components/Icon/Icon'
import Typeahead from '../src/components/Typeahead/Typeahead'

describe('MultiSelect', () => {
  let wrapper

  const options = [
    {value: '0', display: 'test 1'},
    {value: '1', display: 'test 2'},
    {value: '2', display: 'test 3'},
    {value: '3', display: 'test 4'}
  ]

  it('should render itself with a SelectField', () => {
    wrapper = mount(<MultiSelect options={options} valueProp='value' displayProp='display'><SelectField valueProp='value' displayProp='display' /></MultiSelect>)

    expect(wrapper.find(SelectField)).to.have.length(1)
  })

  it('should contain a SelectField and have values selected', () => {
    wrapper = mount(<MultiSelect options={options} valueProp='value' displayProp='display' value={['0', '2']}><SelectField valueProp='value' displayProp='display' /></MultiSelect>)

    expect(wrapper.state().value).to.have.length(2)
    expect(wrapper.state().value[0]).to.equal('0')
    expect(wrapper.state().value[1]).to.equal('2')
    expect(wrapper.state().selected[0].value).to.equal('0')
    expect(wrapper.state().selected[0].display).to.equal('test 1')
    expect(wrapper.state().selected[1].value).to.equal('2')
    expect(wrapper.state().selected[1].display).to.equal('test 3')

    expect(wrapper.find(SelectField).props().options).to.have.length(2)
    expect(wrapper.find(SelectField).props().options[0].value).to.equal('1')
    expect(wrapper.find(SelectField).props().options[0].display).to.equal('test 2')
    expect(wrapper.find(SelectField).props().options[1].value).to.equal('3')
    expect(wrapper.find(SelectField).props().options[1].display).to.equal('test 4')
  })

  it('should contain a SelectField and have a placeholder', () => {
    wrapper = mount(<MultiSelect options={options} valueProp='value' displayProp='display' placeholder="This is a placeholder"><SelectField valueProp='value' displayProp='display' /></MultiSelect>)

    expect(wrapper.find(SelectField).props().placeholder).to.equal('This is a placeholder')
  })

  it('should contain a SelectField and update the state when the value property changes', () => {
    wrapper = mount(<MultiSelect options={options} valueProp='value' displayProp='display' value={['0', '2']}><SelectField valueProp='value' displayProp='display' /></MultiSelect>)

    expect(wrapper.state().value).to.have.length(2)
    expect(wrapper.state().value[0]).to.equal('0')
    expect(wrapper.state().value[1]).to.equal('2')

    expect(wrapper.find(SelectField).props().options).to.have.length(2)
    expect(wrapper.find(SelectField).props().options[0].value).to.equal('1')
    expect(wrapper.find(SelectField).props().options[1].value).to.equal('3')

    wrapper.setProps({ value: ['1'] })
    wrapper.update()

    expect(wrapper.state().value).to.have.length(1)
    expect(wrapper.state().value[0]).to.equal('1')

    expect(wrapper.find(SelectField).props().options).to.have.length(3)
    expect(wrapper.find(SelectField).props().options[0].value).to.equal('0')
    expect(wrapper.find(SelectField).props().options[1].value).to.equal('2')
    expect(wrapper.find(SelectField).props().options[2].value).to.equal('3')

    wrapper.setProps({ value: null })
    wrapper.update()

    expect(wrapper.state().value).to.have.length(0)

    expect(wrapper.find(SelectField).props().options).to.have.length(4)
    expect(wrapper.find(SelectField).props().options[0].value).to.equal('0')
    expect(wrapper.find(SelectField).props().options[1].value).to.equal('1')
    expect(wrapper.find(SelectField).props().options[2].value).to.equal('2')
    expect(wrapper.find(SelectField).props().options[3].value).to.equal('3')
  })

  it('should contain a SelectField and set the state and trigger callback when an options is selected', () => {
    const changeCallback = sinon.spy()

    wrapper = mount(<MultiSelect options={options} valueProp='value' displayProp='display' value={['0', '2']} changeCallback={changeCallback}><SelectField valueProp='value' displayProp='display' /></MultiSelect>)

    expect(wrapper.state().value).to.have.length(2)
    expect(wrapper.state().value[0]).to.equal('0')
    expect(wrapper.state().value[1]).to.equal('2')

    wrapper.find(SelectField).at(0).simulate('click')
    wrapper.find(SelectField).at(0).find('li').at(1).simulate('click')

    expect(changeCallback.called).to.be.true
    expect(wrapper.state().value).to.have.length(3)
    expect(wrapper.state().value[0]).to.equal('0')
    expect(wrapper.state().value[1]).to.equal('2')
    expect(wrapper.state().value[2]).to.equal('3')
  })

  it('should contain a SelectField and remove a selected item when the remove icon is clicked', () => {
    const changeCallback = sinon.spy()

    wrapper = mount(<MultiSelect options={options} valueProp='value' displayProp='display' value={['0', '2']} changeCallback={changeCallback}><SelectField valueProp='value' displayProp='display' /></MultiSelect>)
    expect(wrapper.find(TagList).at(0).find('li')).to.have.length(2)
    expect(wrapper.state().value).to.have.length(2)
    expect(wrapper.state().value[0]).to.equal('0')
    expect(wrapper.state().value[1]).to.equal('2')

    wrapper.find(TagList).at(0).find(Icon).at(1).simulate('click')

    wrapper.update()
    expect(wrapper.find(TagList).at(0).find('li')).to.have.length(1)
    expect(wrapper.state().value).to.have.length(1)
    expect(wrapper.state().value[0]).to.equal('0')
  })

  it('should render itself with a Typeahead', () => {
    wrapper = mount(<MultiSelect options={options} valueProp='value' displayProp='display'><Typeahead valueProp='value' displayProp='display' /></MultiSelect>)

    expect(wrapper.find(Typeahead)).to.have.length(1)
  })

  it('should contain a Typeahead and have values selected', () => {
    wrapper = mount(<MultiSelect options={options} valueProp='value' displayProp='display' value={['0', '2']}><Typeahead valueProp='value' displayProp='display' /></MultiSelect>)

    expect(wrapper.state().value).to.have.length(2)
    expect(wrapper.state().value[0]).to.equal('0')
    expect(wrapper.state().value[1]).to.equal('2')
    expect(wrapper.state().selected[0].value).to.equal('0')
    expect(wrapper.state().selected[0].display).to.equal('test 1')
    expect(wrapper.state().selected[1].value).to.equal('2')
    expect(wrapper.state().selected[1].display).to.equal('test 3')

    expect(wrapper.find(Typeahead).props().options).to.have.length(2)
    expect(wrapper.find(Typeahead).props().options[0].value).to.equal('1')
    expect(wrapper.find(Typeahead).props().options[0].display).to.equal('test 2')
    expect(wrapper.find(Typeahead).props().options[1].value).to.equal('3')
    expect(wrapper.find(Typeahead).props().options[1].display).to.equal('test 4')
  })

  it('should contain a Typeahead and have a placeholder', () => {
    wrapper = mount(<MultiSelect options={options} valueProp='value' displayProp='display' placeholder="This is a placeholder"><Typeahead valueProp='value' displayProp='display' /></MultiSelect>)

    expect(wrapper.find(Typeahead).props().placeholder).to.equal('This is a placeholder')
  })

  it('should contain a Typeahead and update the state when the value property changes', () => {
    wrapper = mount(<MultiSelect options={options} valueProp='value' displayProp='display' value={['0', '2']}><Typeahead valueProp='value' displayProp='display' /></MultiSelect>)

    expect(wrapper.state().value).to.have.length(2)
    expect(wrapper.state().value[0]).to.equal('0')
    expect(wrapper.state().value[1]).to.equal('2')

    expect(wrapper.find(Typeahead).props().options).to.have.length(2)
    expect(wrapper.find(Typeahead).props().options[0].value).to.equal('1')
    expect(wrapper.find(Typeahead).props().options[1].value).to.equal('3')

    wrapper.setProps({ value: ['1'] })
    wrapper.update()

    expect(wrapper.state().value).to.have.length(1)
    expect(wrapper.state().value[0]).to.equal('1')

    expect(wrapper.find(Typeahead).props().options).to.have.length(3)
    expect(wrapper.find(Typeahead).props().options[0].value).to.equal('0')
    expect(wrapper.find(Typeahead).props().options[1].value).to.equal('2')
    expect(wrapper.find(Typeahead).props().options[2].value).to.equal('3')
  })

  it('should contain a Typeahead and set the state and trigger callback when an options is selected', () => {
    const changeCallback = sinon.spy()

    wrapper = mount(<MultiSelect options={options} valueProp='value' displayProp='display' value={['0', '2']} changeCallback={changeCallback}><Typeahead valueProp='value' displayProp='display' /></MultiSelect>)

    expect(wrapper.state().value).to.have.length(2)
    expect(wrapper.state().value[0]).to.equal('0')
    expect(wrapper.state().value[1]).to.equal('2')

    wrapper.find('input').simulate('change', {target: {value: 't'}})

    expect(wrapper.childAt(0).childAt(1).find('li')).to.have.length(2)
    wrapper.find(Typeahead).find('li').at(1).simulate('click')

    expect(changeCallback.called).to.be.true
    expect(wrapper.state().value).to.have.length(3)
    expect(wrapper.state().value[0]).to.equal('0')
    expect(wrapper.state().value[1]).to.equal('2')
    expect(wrapper.state().value[2]).to.equal('3')
  })

  it('should contain a Typeahead and remove a selected item when the remove icon is clicked', () => {
    const changeCallback = sinon.spy()

    wrapper = mount(<MultiSelect options={options} valueProp='value' displayProp='display' value={['0', '2']} changeCallback={changeCallback}><Typeahead valueProp='value' displayProp='display' /></MultiSelect>)

    expect(wrapper.find(TagList).at(0).find('li')).to.have.length(2)
    expect(wrapper.state().value).to.have.length(2)
    expect(wrapper.state().value[0]).to.equal('0')
    expect(wrapper.state().value[1]).to.equal('2')

    wrapper.find(TagList).at(0).find(Icon).at(1).simulate('click')

    expect(wrapper.find(TagList).at(0).find('li')).to.have.length(1)
    expect(wrapper.state().value).to.have.length(1)
    expect(wrapper.state().value[0]).to.equal('0')
  })

  it('should not contain already selected items in a typeahead dropdown list', () => {
    const changeCallback = sinon.spy()
    const handleSearch = () => {
      return new Promise(resolve => {
        resolve(options)
      })
    }

    wrapper = mount(<MultiSelect options={options} valueProp='value' displayProp='display' value={['0', '2']} changeCallback={changeCallback}><Typeahead valueProp='value' displayProp='display' searchCallback={handleSearch} /></MultiSelect>)

    let typeahead = wrapper.find(Typeahead)

    expect(typeahead.props().options).to.have.length(2)
    expect(typeahead.props().options[0].value).to.equal('1')
    expect(typeahead.props().options[1].value).to.equal('3')

    wrapper.setProps({ value: ['0', '1', '2', '3'] })

    typeahead = wrapper.find(Typeahead)
    expect(typeahead.props().options).to.have.length(0)
  })
})
