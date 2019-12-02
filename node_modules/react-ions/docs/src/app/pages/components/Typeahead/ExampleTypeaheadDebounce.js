import React from 'react'
import Typeahead from 'react-ions/lib/components/Typeahead/Typeahead'
import options from './CountryList'

class ExampleTypeaheadDebounce extends React.Component {
  constructor(props) {
    super(props)
  }

  handleSearch = value => {
    console.log('Search value: ', value)
    return new Promise((resolve, reject) => {
      resolve(options)
    })
  }

  render() {
    return (
      <Typeahead
        options={options}
        valueProp='countryCode'
        displayProp='countryName'
        searchCallback={this.handleSearch}
        placeholder='Start typing'
        searchDebounceTime={500} />
    )
  }
}

export default ExampleTypeaheadDebounce
