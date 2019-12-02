import React from 'react'
import Typeahead from 'react-ions/lib/components/Typeahead/Typeahead'
import Button from 'react-ions/lib/components/Button/Button'
import options from './CountryList'
import style from './style.scss'

class ExampleTypeaheadCustomValue extends React.Component {
  constructor(props) {
    super(props)
  }

  state = {
    selected: 'This is a custom value'
  }

  updateSelected = value => {
    this.setState({
      selected: value,
      status: 'The callback was triggered and the chosen value is \'' + value + '\''
    })
  }

  handleChange = event => {
    this.setState({
      selected: event.target.value,
      status: 'The callback was triggered and the chosen value is \'' + event.target.value + '\''
    })
    console.log('Custom value: ', event)
  }

  render() {
    return (
      <div>
        <div className={style.update}>
          <Button onClick={this.updateSelected.bind(this, options[1].countryCode)}>Select Albania</Button>
          <Button onClick={this.updateSelected.bind(this, options[18].countryCode)}>Select Belarus</Button>
          <Button onClick={this.updateSelected.bind(this, options[49].countryCode)}>Select Congo</Button>
          <Button onClick={this.updateSelected.bind(this, 'This is a custom value')}>Select Custom</Button>
          <Button onClick={this.updateSelected.bind(this, '')}>Reset</Button>
        </div>
        <Typeahead
          options={options}
          allowCustomValue={true}
          valueProp='countryCode'
          displayProp='countryName'
          name='Custom value'
          changeCallback={this.handleChange}
          placeholder='Add a custom value'
          value={this.state.selected}
        />
      </div>
    )
  }
}

export default ExampleTypeaheadCustomValue
