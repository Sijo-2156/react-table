import React from 'react'
import RadioGroup from 'react-ions/lib/components/Radio/RadioGroup'

class ExampleRadioCallback extends React.Component {
  constructor(props) {
    super(props)
  }

  state = {
    status: null
  }

  handleChange = (event, value) => {
    this.setState({status: value + ' is checked'})
  }

  render() {
    const options = [
      {
        value: 'Option 1',
        label: 'Option 1'
      }, {
        value: 'Option 2',
        label: 'Option 2'
      }, {
        value: 'Option 3',
        label: 'Option 3'
      }
    ]

    return (
      <div>
        <RadioGroup
          name="callback-radio-group"
          options={options}
          changeCallback={this.handleChange}>
        </RadioGroup>
        <code>{this.state.status}</code>
      </div>
    )
  }
}

export default ExampleRadioCallback
