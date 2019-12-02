import React from 'react'
import Textarea from 'react-ions/lib/components/Textarea'

class ExampleTextareaCallback extends React.Component {
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
        <Textarea value=''
          focusCallback={this.handleFocus}
          changeCallback={this.handleChange}
          blurCallback={this.handleBlur} 
          height='250px'
        />
        <code>{this.state.status}</code>
      </div>
    )
  }
}

export default ExampleTextareaCallback
