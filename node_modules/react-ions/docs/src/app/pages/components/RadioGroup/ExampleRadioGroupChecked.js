import React from 'react'
import RadioGroup from 'react-ions/lib/components/Radio/RadioGroup'
import Button from 'react-ions/lib/components/Button'
import style from './style.scss'

const options = [
  {
    value: true,
    label: 'Yes'
  }, {
    value: false,
    label: 'No'
  }
]

class ExampleRadioChecked extends React.Component {
  constructor(props) {
    super(props)
  }

  state = {
    selected: true
  }

  updateSelected = value => {
    this.setState({ selected: value })
  }

  render() {
    return (
      <div>
        <div className={style.update}>
          <Button onClick={this.updateSelected.bind(this, true)}>Select 1st item</Button>
          <Button onClick={this.updateSelected.bind(this, false)}>Select 2nd item</Button>
          <Button onClick={this.updateSelected.bind(this, '')}>Uncheck</Button>
        </div>
        <RadioGroup
          name="checked-radio-group"
          options={options}
          changeCallback={event => console.log(event.target.value)}
          value={this.state.selected}>
        </RadioGroup>
      </div>
    )
  }
}

export default ExampleRadioChecked
