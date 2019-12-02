import React from 'react'
import RadioGroup from 'react-ions/lib/components/Radio/RadioGroup'
import Radio from 'react-ions/lib/components/Radio/Radio'
import Input from 'react-ions/lib/components/Input'
import style from './style.scss'

const radioOptions = [
  {
    value: 'welcome_email',
    label: 'Send welcome email',
    description: 'Send an email welcoming your contact to your program.'
  }, {
    value: 'payment_update_email',
    label: 'Send update payment email',
    description: 'Send a payment update email to your contact.'
  }
]

class ExampleRadioGroupDescription extends React.Component {
  constructor(props) {
    super(props)
  }

  getRadioBlocks = () => {
    return radioOptions.map((option, index) => {
      return <Radio key={index} value={option.value} label={option.label} description={option.description} />
    })
  }

  render() {
    return (
      <div>
        <RadioGroup name='child-description-group' changeCallback={this.handleChange}>
          {this.getRadioBlocks()}
        </RadioGroup>
      </div>
    )
  }
}

export default ExampleRadioGroupDescription
