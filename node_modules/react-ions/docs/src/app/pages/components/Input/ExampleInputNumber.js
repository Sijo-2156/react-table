import React from 'react'
import Input from 'react-ions/lib/components/Input'

class ExampleInputNumber extends React.Component {
  constructor(props) {
    super(props)
  }

  state = {
    statusNumber: '',
    statusString: '',
    valueNumber: 12.34,
    valueString: '12.34'
  }

  UNSAFE_componentWillMount = () => {
    this.setState({statusNumber: 'My value is: ' + this.state.valueNumber + ' and it is of type: ' + typeof this.state.valueNumber})
    this.setState({statusString: 'My value is: ' + this.state.valueString + ' and it is of type: ' + typeof this.state.valueString})
  }

  handleChangeNumber = event => {
    if (event.target.value === '') {
      event.target.value = '\'\' (empty string)'
    }
    this.setState({statusNumber: 'My value is: ' + event.target.value + ' and it is of type: ' + typeof event.target.value})
  }

  handleChangeString = event => {
    if (event.target.value === '') {
      event.target.value = '\'\' (empty string)'
    }
    this.setState({statusString: 'My value is: ' + event.target.value + ' and it is of type: ' + typeof event.target.value})
  }

  render = () => {
    return (
      <div>
        <Input valueType='number' value={this.state.valueNumber} changeCallback={this.handleChangeNumber} label='Input of number type' />
        <code>{this.state.statusNumber}</code>
        <Input valueType='string' value={this.state.valueString} changeCallback={this.handleChangeString} label='Input of string type' />
        <code>{this.state.statusString}</code>
      </div>
    )
  }
}

export default ExampleInputNumber
