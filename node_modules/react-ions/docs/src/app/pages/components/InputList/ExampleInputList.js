import React from 'react'
import InputList from 'react-ions/lib/components/InputList/InputList'
import style from './style.scss'

class ExampleInputList extends React.Component {
  constructor(props) {
    super(props)
  }

  state = {
    value: [
      'Test 1',
      'Test 2'
    ],
    status: 'Provided values are: Test 1,Test 2'
  }

  handleChange = event => {
    this.setState({
      values: event.target.value,
      status: 'The callback was triggered and ' + (event.target.value.length > 0 ? 'the provided values are: ' + event.target.value.join(',') : 'there are no values provided')
    })
  }

  render() {
    return (
      <div>
        <InputList optClass={style['input-list']} value={this.state.value} changeCallback={this.handleChange} placeholder="Type something and hit enter" />
        <code className={style['callback-status']}>{this.state.status}</code>
      </div>
    )
  }
}

export default ExampleInputList
