import React from 'react'
import RadioGroup from 'react-ions/lib/components/Radio/RadioGroup'

const options = [
  {
    value: 'option_1',
    label: 'Option 1'
  }, {
    value: 'option_2',
    label: 'Option 2'
  }, {
    value: 'option_3',
    label: 'Option 3'
  }
]

const disabled = true

const ExampleRadioDisabled = () => (
  <RadioGroup
    name="disabled-radio-group"
    options={options}
    disabled={disabled}>
  </RadioGroup>
)

export default ExampleRadioDisabled
