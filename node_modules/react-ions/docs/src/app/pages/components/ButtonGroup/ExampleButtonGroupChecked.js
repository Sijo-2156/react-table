import React from 'react'
import ButtonGroup from 'react-ions/lib/components/ButtonGroup/ButtonGroup'
import Button from 'react-ions/lib/components/Button'
import style from './style'

class ExampleRadioChecked extends React.Component {
  constructor(props) {
    super(props)
  }

  state = {
    defaultOption: 1
  }

  handleChange = index => {
    this.setState({defaultOption: index})
  }

  render() {
    const options = [
      {
        customValue: 'option_1',
        customLabel: 'Option 1'
      }, {
        customValue: 'option_2',
        customLabel: 'Option 2'
      }, {
        customValue: 'option_3',
        customLabel: 'Option 3'
      }
    ]

    return (
      <div>
        <div className={style['button-wrapper']}>
          <Button onClick={this.handleChange.bind(this, 0)}>Select 1st option</Button>
          <Button onClick={this.handleChange.bind(this, 1)}>Select 2nd option</Button>
          <Button onClick={this.handleChange.bind(this, 2)}>Select 3rd option</Button>
        </div>
        <ButtonGroup
          name="checked-button-group"
          options={options}
          valueProp='customValue'
          displayProp='customLabel'
          defaultOption={this.state.defaultOption}>
        </ButtonGroup>
      </div>
    )
  }
}

export default ExampleRadioChecked
