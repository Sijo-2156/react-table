import React from 'react'
import Checkbox from 'react-ions/lib/components/Checkbox'
import style from './style.scss'

class ExampleCheckboxNative extends React.Component {
  constructor(props) {
    super(props)
  }

  state = {
    defaultChecked: true,
    descriptionChecked: false
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.checked
    })
  }

  render() {
    return (
      <div>
        <Checkbox label="Default checkbox" name="defaultChecked" forLabelAttr='testing' allowNative={true} value={this.state.defaultChecked} changeCallback={this.handleChange} /><br />
        <Checkbox label="Checkbox with description" name="descriptionChecked" description='This is a description' forLabelAttr='testing-2' allowNative={true} value={this.state.descriptionChecked} changeCallback={this.handleChange} />
      </div>
    )
  }
}

export default ExampleCheckboxNative
