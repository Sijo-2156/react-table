import React from 'react'
import Checkbox from 'react-ions/lib/components/Checkbox'
import Button from 'react-ions/lib/components/Button'
import Icon from 'react-ions/lib/components/Icon'
import style from './style.scss'

class ExampleCheckboxToggle extends React.Component {
  constructor(props) {
    super(props)
  }

  state = {
    iconName: 'md-check',
    checked: true
  }

  toggleIcon = () => {
    const iconName = this.state.iconName === 'md-check' ? 'md-minus' : 'md-check'

    this.setState({ iconName: iconName })
  }

  handleChange = event => {
    this.setState({ checked: event.target.checked })
  }

  render() {
    return (
      <div>
        <Button onClick={this.toggleIcon} optClass={style.toggle}>
          <span>Use</span>
          {this.state.iconName === 'md-check' ? <Icon name='md-minus' fill='#3C97D3' height='14' width='14' /> : <Icon name='md-check' fill='#3C97D3' height='14' width='14' /> }
        </Button>
        <Checkbox label="Default checkbox" value={this.state.checked} changeCallback={this.handleChange} iconName={this.state.iconName} />
      </div>
    )
  }
}

export default ExampleCheckboxToggle
