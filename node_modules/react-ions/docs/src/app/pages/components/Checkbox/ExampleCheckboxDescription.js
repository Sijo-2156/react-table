import React from 'react'
import Checkbox from 'react-ions/lib/components/Checkbox'
import style from './style'

const checkboxOptions = [
  {
    value: true,
    label: 'Send welcome email',
    description: 'Send an email welcoming your contact to your program.'
  }, {
    value: false,
    label: 'Send update payment email',
    description: 'Send a payment update email to your contact.'
  }
]

class ExampleCheckboxDescription extends React.Component {
  constructor(props) {
    super(props)
  }

  getCheckboxBlocks = () => {
    return checkboxOptions.map((option, index) => {
      return <Checkbox key={index} label={option.label} value={option.value} description={option.description} />
    })
  }

  render() {
    return (
      <div className={style['checkbox-group']}>
        {this.getCheckboxBlocks()}
      </div>
    )
  }
}

export default ExampleCheckboxDescription
