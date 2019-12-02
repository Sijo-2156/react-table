import React from 'react'
import SelectField from 'react-ions/lib/components/SelectField/SelectField'

const options = [
  {value: '0', display: 'test 1'},
  {value: '1', display: 'test 2'}
]

const disabled = true

const ExampleSelectFieldDisabled = () => (
  <SelectField
    options={options}
    disabled={disabled}
    valueProp='value'
    displayProp='display' />
)

export default ExampleSelectFieldDisabled
