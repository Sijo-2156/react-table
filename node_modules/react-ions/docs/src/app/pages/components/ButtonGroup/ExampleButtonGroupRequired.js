import React from 'react'
import ButtonGroup from 'react-ions/lib/components/ButtonGroup/ButtonGroup'

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

const ExampleButtonGroupRequired = () => (
  <ButtonGroup
    name="required-button-group"
    options={options}
    required={true}>
  </ButtonGroup>
)

export default ExampleButtonGroupRequired
