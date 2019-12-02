import React from 'react'
import { Typeahead } from '../Typeahead'
import sinon from 'sinon'

let wrapper, inst

const options = [
  {value: 'AT', display: 'Austria'},
  {value: 'BM', display: 'Bermuda'},
  {value: 10, display: 'Number'}
]

it('should shallow render itself', () => {
  wrapper = shallow(<Typeahead options={options} valueProp='value' displayProp='display' />)

  expect(wrapper).toMatchSnapshot()
})

it('should have placeholder text', () => {
  wrapper = shallow(<Typeahead options={options} valueProp='value' displayProp='display' placeholder='test' />)

  expect(wrapper).toMatchSnapshot()
})

it('should have a label', () => {
  wrapper = shallow(<Typeahead options={options} valueProp='value' displayProp='display' label='Typeahead Label' />)

  expect(wrapper).toMatchSnapshot()
})

it('should be disabled', () => {
  wrapper = shallow(<Typeahead options={options} valueProp='value' displayProp='display' disabled={true} />)

  expect(wrapper).toMatchSnapshot()
})

it('should have an extra class', () => {
  wrapper = shallow(<Typeahead options={options} valueProp='value' displayProp='display' optClass='test-class' />)

  expect(wrapper).toMatchSnapshot()
})

it('should display a list when the user types a letter', () => {
  wrapper = shallow(<Typeahead options={options} valueProp='value' displayProp='display' />)
  inst = wrapper.instance()

  inst.handleChange({ target: { value: 'a' }})

  wrapper.update()

  expect(wrapper).toMatchSnapshot()
})

it('should display a loader', () => {
  wrapper = shallow(<Typeahead options={options} valueProp='value' displayProp='display' loading={true} />)

  expect(wrapper).toMatchSnapshot()
})

it('should take a search callback', () => {
  const promiseOptions = [
    {value: 'US', display: 'United States'}
  ]
  const searchStub = sinon.stub().returns(Promise.resolve(promiseOptions))

  wrapper = mount(<Typeahead options={options} valueProp='value' displayProp='display' searchCallback={searchStub} />)
  wrapper.find('input').simulate('change', {target: {value: 'b'}})

  expect(searchStub.calledWithExactly('b')).toBe(true)
})

it('should have a custom search debounce time', done => {
  const promiseOptions = [
    {value: 'US', display: 'United States'}
  ]
  const searchStub = sinon.stub().returns(Promise.resolve(promiseOptions))

  wrapper = mount(<Typeahead options={options} valueProp='value' displayProp='display' searchCallback={searchStub} searchDebounceTime={200} />)
  wrapper.find('input').simulate('change', {target: {value: 'b'}})

  expect(searchStub.calledWithExactly('b')).toBe(false)

  setTimeout(() => {
    expect(searchStub.calledWithExactly('b')).toBe(true)
    done()
  }, 400)
})

it('should update when props are set', () => {
  wrapper = shallow(<Typeahead options={options} valueProp='value' displayProp='display' value={10} optClass='test-class' />)

  expect(wrapper).toMatchSnapshot()
})

it('should not clear search string after selection', () => {
  wrapper = shallow(<Typeahead options={options} valueProp='value' displayProp='display' />)

  inst = wrapper.instance()

  wrapper.instance().handleChange({ target: { value: 'a' } })

  expect(wrapper.state('searchStr')).toEqual('a')

  wrapper.instance().selectOption(options[0])
  expect(wrapper.state('searchStr')).toEqual('Austria')
})

it('should clear search string after selection', () => {
  wrapper = mount(<Typeahead resetAfterSelection={true} options={options} valueProp='value' displayProp='display' />)

  inst = wrapper.instance()

  inst.handleChange({ target: { value: 'a' } })

  expect(wrapper.state('searchStr')).toEqual('a')

  inst.selectOption(options[0])
  expect(wrapper.state('searchStr')).toEqual('')
})

it('should clear search when the clear button is clicked', () => {
  wrapper = mount(<Typeahead resetAfterSelection={true} options={options} valueProp='value' displayProp='display' changeCallback={sinon.spy()} />)

  inst = wrapper.instance()

  inst.handleChange({ target: { value: 'a' } })

  expect(wrapper.state('searchStr')).toEqual('a')

  inst.clearSearch()
  expect(wrapper.state('searchStr')).toEqual('')
})

it('should clear search string when input value is an empty string', () => {
  const changeCallback = sinon.spy()

  wrapper = mount(<Typeahead name='typeahead' resetAfterSelection={true} options={options} valueProp='value' displayProp='display' changeCallback={changeCallback} />)

  let inputField = wrapper.find('input')

  inputField.simulate('change', {target: {value: 'a'}})
  expect(wrapper.state().searchStr).toEqual('a')

  inputField.simulate('change', {target: {value: ''}})
  expect(wrapper.state().searchStr).toEqual('')
  expect(changeCallback.calledWithExactly({ target: { name: 'typeahead', value: '', option: '' } })).toBe(true)
})

it('should set state when props are received', () => {
  const changeCallback = sinon.spy()

  wrapper = mount(<Typeahead name='typeahead' options={options} valueProp='value' displayProp='display' changeCallback={changeCallback} />)

  wrapper.setProps({ value: 'AT' })

  expect(wrapper.state().selected.value).toEqual('AT')
  expect(wrapper.state().selected.display).toEqual('Austria')

  wrapper.setProps({ value: '' })

  expect(wrapper.state().selected).toEqual('')
})

it('should allow a custom value', () => {
  const changeCallback = sinon.spy()

  wrapper = mount(<Typeahead name='typeahead' options={options} valueProp='value' displayProp='display' allowCustomValue={true} changeCallback={changeCallback} />)

  let inputField = wrapper.find('input')

  inputField.simulate('change', {target: {value: 'a random string'}})
  expect(changeCallback.calledWithExactly({ target: { name: 'typeahead', value: 'a random string' } })).toBe(true)
})

it('should set state when the value changes and a custom value is allowed', () => {
  const changeCallback = sinon.spy()

  wrapper = shallow(<Typeahead name='typeahead' options={options} valueProp='value' displayProp='display' allowCustomValue={true} changeCallback={changeCallback} />)
  const inst = wrapper.instance()

  inst.UNSAFE_componentWillReceiveProps({ value: 'a random string', options })
  expect(wrapper.state().value).toEqual('a random string')
})