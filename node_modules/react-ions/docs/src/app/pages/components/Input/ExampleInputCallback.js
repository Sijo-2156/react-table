import React from 'react'
import Input from 'react-ions/lib/components/Input'

class ExampleInputCallback extends React.Component {
  constructor(props) {
    super(props)
  }

  state = {
    status: null
  }

  handleFocus = () => {
    this.setState({status: 'I am focused.'})
  }

  handleChange = event => {
    this.setState({status: 'My value is: ' + event.target.value})
  }

  handleBlur = () => {
    this.setState({status: 'I am blurred.'})
  }

  render() {
    return (
      <div>
        <Input value=''
          focusCallback={this.handleFocus}
          changeCallback={this.handleChange}
          blurCallback={this.handleBlur} />
        <code>{this.state.status}</code>
      </div>
    )
  }
}

export default ExampleInputCallback
