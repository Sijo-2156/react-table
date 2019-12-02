import React from 'react'
import SelectField from 'react-ions/lib/components/SelectField/SelectField'

const options = [
  { value: '0', display: 'test 1', someOtherProp: true, icon: 'md-dashboard' },
  { value: '1', display: 'test 2', someOtherProp: false, icon: 'mbsy-slack', iconColor: '#3C97D3' }
]

const ExampleSelectFieldOptionIcons = () => (
  <SelectField
    options={options}
    valueProp='value'
    displayProp='display' />
)

export default ExampleSelectFieldOptionIcons
