import React from 'react'
import RadioGroup from 'react-ions/lib/components/Radio/RadioGroup'
import Radio from 'react-ions/lib/components/Radio/Radio'
import Input from 'react-ions/lib/components/Input'
import style from './style.scss'

class ExampleRadioChild extends React.Component {
  constructor(props) {
    super(props)
  }

  state = {
    checkedValue: null,
    option1: null,
    option2: null,
    option3: null
  }

  handleChange = (event, value) => {
    if (event.target.name === 'child-radio-group') {
      this.setState({checkedValue: value})
    } else if (event.target.name === 'child-input-1') {
      this.setState({option1: event.target.value})
    } else if (event.target.name === 'child-input-2') {
      this.setState({option2: event.target.value})
    } else if (event.target.name === 'child-input-3') {
      this.setState({option3: event.target.value})
    }
  }

  getClass = sibling => {
    return sibling !== this.state.checkedValue ? style['is-hidden'] : style['radio-child']
  }

  render() {
    return (
      <div>
        <RadioGroup name='child-radio-group' changeCallback={this.handleChange}>
          <Radio value='option1' label='Option 1' />
          <Input name='child-input-1' changeCallback={this.handleChange} optClass={this.getClass('option1')} ref={i => { if (i !== null) { i.focus() }}} />
          <Radio value='option2' label='Option 2' />
          <Input name='child-input-2' changeCallback={this.handleChange} optClass={this.getClass('option2')} ref={i => { if (i !== null) { i.focus() }}} />
          <Radio value='option3' label='Option 3' />
          <Input name='child-input-3' changeCallback={this.handleChange} optClass={this.getClass('option3')} ref={i => { if (i !== null) { i.focus() }}} />
        </RadioGroup>

        <code>{this.state.checkedValue ? this.state.checkedValue + ' is checked' : null}</code>
        <code>{this.state[this.state.checkedValue] ? 'Child value is ' + this.state[this.state.checkedValue] : null}</code>
      </div>
    )
  }
}

export default ExampleRadioChild
