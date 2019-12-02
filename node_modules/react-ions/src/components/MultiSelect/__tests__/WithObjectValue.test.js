import React from 'react'
import MultiSelect from '../MultiSelect'
import SelectField from '../../SelectField/SelectField'
import WithObjectValue from '../WithObjectValue'

const WithObjectValueDemo = WithObjectValue(MultiSelect)

const value = [
  {value: '2', display: 'test 2'},
  {value: '3', display: 'test 3'}
]

const options = [
  {value: '0', display: 'test 1'},
  {value: '1', display: 'test 2'},
  {value: '2', display: 'test 3'},
  {value: '3', display: 'test 4'}
]

describe('WithObjectValue', () => {
  let multiSelect

  beforeEach(() => {
    multiSelect = shallow(
      <WithObjectValueDemo
        options={options}
        valueProp='value'
        name='example'
        displayProp='display'
        value={value}
        placeholder="Select one or more items">
        <SelectField />
      </WithObjectValueDemo>
    )
  })

  it('should render', () => {
    expect(multiSelect).toMatchSnapshot()
  })

  it('should return an empty list', () => {
    expect(multiSelect.instance().flatten()).toMatchSnapshot()
  })

  it('should return a flattened list when passed a list of objects', () => {
    expect(multiSelect.instance().flatten(options)).toMatchSnapshot()
  })

  it('should return an inflated list when passed a flatted list', () => {
    expect(multiSelect.instance().inflate(['0', '1', '2', '3'])).toMatchSnapshot()
  })
})
