import React from 'react'
import Toggle from 'react-ions/lib/components/Toggle'
import style from './style'

class ExampleToggleCallback extends React.Component {
  constructor(props) {
    super(props)
  }

  state = {
    status: 'Value is false'
  }

  handleChange = event => {
    console.log('Name: ' + event.target.name, 'Value: ' + event.target.value)
    this.setState({status: 'Value is ' + event.target.value})
  }

  render() {
    return (
      <div>
        <Toggle label='Would you like to set this?' value={false} changeCallback={this.handleChange} name='toggle_name' />
        <code className={style['callback-status']}>{this.state.status}</code>
      </div>
    )
  }
}

export default ExampleToggleCallback
