import React from 'react'
import Typeahead from 'react-ions/lib/components/Typeahead/Typeahead'
import options from './CountryList'

class ExampleTypeaheadDefaultValue extends React.Component {
  constructor(props) {
    super(props)
  }

  state = {
    loading: false
  }

  handleSearch = value => {
    return new Promise((resolve, reject) => {
      this.setState({loading: true}, () => {
        // Do asynchronous search here
        setTimeout(() => {
          resolve(options.slice(0, 13))
          this.setState({loading: false})
        }, 2000)
      })
    })
  }

  render() {
    return (
      <Typeahead
        options={options}
        valueProp='countryCode'
        displayProp='countryName'
        value={this.state.selected}
        loading={this.state.loading}
        searchCallback={this.handleSearch}
        placeholder='Countries starting with the letter A' />
    )
  }
}

export default ExampleTypeaheadDefaultValue
