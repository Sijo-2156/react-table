import React from 'react'
import Checkbox from 'react-ions/lib/components/Checkbox'
import Button from 'react-ions/lib/components/Button'
import style from './style.scss'

class ExampleCheckboxToggle extends React.Component {
  constructor(props) {
    super(props)
  }

  state = {
    checked: true
  }

  toggleCheckbox = () => {
    this.setState({ checked: !this.state.checked })
  }

  handleChange = event => {
    this.setState({ checked: event.target.checked })
  }

  render() {
    return (
      <div>
        <Button onClick={this.toggleCheckbox} optClass={style.toggle}>{this.state.checked ? 'Uncheck' : 'Check' } Checkbox</Button>
        <Checkbox label='Default checkbox' value={this.state.checked} changeCallback={this.handleChange} />
      </div>
    )
  }
}

export default ExampleCheckboxToggle
