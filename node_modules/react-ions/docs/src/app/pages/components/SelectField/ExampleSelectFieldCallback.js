import React from 'react'
import SelectField from 'react-ions/lib/components/SelectField/SelectField'
import style from './style'

class ExampleSelectFieldCallback extends React.Component {
  constructor(props) {
    super(props)
  }

  state = {
    value: null,
    status: ''
  }

  handleChange = event => {
    this.setState({ value: event.target.value, status: 'Chosen option is ' + event.target.value })
  }

  render() {
    const options = [
      {value: '0', display: 'test 1'},
      {value: '1', display: 'test 2'}
    ]

    return (
      <div>
        <SelectField
          options={options}
          valueProp='value'
          displayProp='display'
          changeCallback={this.handleChange}
          value={this.state.value}>
        </SelectField>
        <code className={style['callback-status']}>{this.state.status}</code>
      </div>
    )
  }
}

export default ExampleSelectFieldCallback
