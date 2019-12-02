import React from 'react'
import SelectField from 'react-ions/lib/components/SelectField/SelectField'

const options = [
  {value: '0', display: 'test 1', someOtherProp: true},
  {value: '1', display: 'test 2', someOtherProp: false},
  {value: '2', display: 'test 3', someOtherProp: false},
  {value: '3', display: 'test 4', someOtherProp: false},
  {value: '4', display: 'test 5', someOtherProp: false},
  {value: '5', display: 'test 6', someOtherProp: false},
  {value: '6', display: 'test 7', someOtherProp: false},
  {value: '7', display: 'test 8', someOtherProp: false},
  {value: '8', display: 'test 9', someOtherProp: false},
  {value: '9', display: 'test 10', someOtherProp: false},
  {value: '10', display: 'test 11', someOtherProp: false},
  {value: '11', display: 'test 12', someOtherProp: false},
  {value: '12', display: 'test 13', someOtherProp: false},
  {value: '13', display: 'test 14', someOtherProp: false},
  {value: '14', display: 'test 15', someOtherProp: false},
  {value: '15', display: 'test 16', someOtherProp: false}
]

const ExampleSelectFieldLabel = () => (
  <SelectField
    options={options}
    valueProp='value'
    displayProp='display'
    value={null}
    label='Select Field Label'
    width='220px'
  />
)

export default ExampleSelectFieldLabel
