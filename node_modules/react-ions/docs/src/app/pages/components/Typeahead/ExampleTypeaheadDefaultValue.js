import React from 'react'
import Button from 'react-ions/lib/components/Button/Button'
import Typeahead from 'react-ions/lib/components/Typeahead/Typeahead'
import options from './CountryList'
import style from './style.scss'

class ExampleTypeaheadDefaultValue extends React.Component {
  constructor(props) {
    super(props)
  }

  state = {
    selected: 'AT'
  }

  updateSelected = index => {
    this.setState({
      selected: index,
      status: 'The callback was triggered and the chosen value is \'' + index + '\'' })
  }

  handleChange = (event, index) => {
    this.setState({
      selected: index,
      status: 'The callback was triggered and the chosen value is \'' + event.target.value + '\''
    })
  }

  render() {
    return (
      <div>
        <div className={style.update}>
          <Button onClick={this.updateSelected.bind(this, options[1].countryCode)}>Select Albania</Button>
          <Button onClick={this.updateSelected.bind(this, options[18].countryCode)}>Select Belarus</Button>
          <Button onClick={this.updateSelected.bind(this, options[49].countryCode)}>Select Congo</Button>
          <Button onClick={this.updateSelected.bind(this, '')}>Reset</Button>
        </div>
        <Typeahead
          options={options}
          valueProp='countryCode'
          displayProp='countryName'
          value={this.state.selected}
          changeCallback={this.handleChange} />
          <code>{this.state.status}</code>
      </div>
    )
  }
}

export default ExampleTypeaheadDefaultValue
