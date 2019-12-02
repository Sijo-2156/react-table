import React from 'react'
import Typeahead from 'react-ions/lib/components/Typeahead/Typeahead'
import options from './CountryList'

class ExampleTypeaheadCallback extends React.Component {
  constructor(props) {
    super(props)
  }

  state = {
    status: ''
  }

  handleChange = event => {
    this.setState({status: 'Chosen value is \'' + event.target.value + '\''})
  }

  render() {
    return (
      <div>
        <Typeahead
          options={options}
          valueProp='countryCode'
          displayProp='countryName'
          value={null}
          changeCallback={this.handleChange} />
          <code>{this.state.status}</code>
        </div>
    )
  }
}

export default ExampleTypeaheadCallback
