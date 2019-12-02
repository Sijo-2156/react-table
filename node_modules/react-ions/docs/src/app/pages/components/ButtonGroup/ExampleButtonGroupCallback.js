import React from 'react'
import ButtonGroup from 'react-ions/lib/components/ButtonGroup/ButtonGroup'
import style from './style'

class ExampleButtonGroupCallback extends React.Component {
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
        <ButtonGroup
          name="callback-button-group"
          options={options}
          changeCallback={this.handleChange}>
        </ButtonGroup>
        <code>{this.state.status}</code>
      </div>
    )
  }
}

export default ExampleButtonGroupCallback
