import React from 'react'
import SelectField from 'react-ions/lib/components/SelectField/SelectField'

class ExampleSelectFieldHideProp extends React.Component {
  constructor(props) {
    super(props)
  }

  state = {
    options: [
      { value: '0', display: 'test 1', notShowing: false },
      { value: '1', display: 'test 2', notShowing: true },
      { value: '2', display: 'test 3', notShowing: false }
    ],
    value: '1',
    status: ''
  }

  handleChange = event => {
    let options = this.state.options.map(option => {
      option.notShowing = option.value === event.target.value
      return option
    })

    this.setState({ value: event.target.value, status: 'Chosen option is ' + event.target.value, options })
  }

  render() {
    return (
      <SelectField
        options={this.state.options}
        valueProp='value'
        displayProp='display'
        changeCallback={this.handleChange}
        value={this.state.value}
        hideProp='notShowing'
      />
    )
  }
}

export default ExampleSelectFieldHideProp
