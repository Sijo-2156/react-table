import React from 'react'
import Typeahead from 'react-ions/lib/components/Typeahead/Typeahead'
import options from './CountryList'

const ExampleTypeaheadLabel = () => (
  <Typeahead
    options={options}
    valueProp='countryCode'
    displayProp='countryName'
    placeholder='Start typing'
    label='Typeahead Label'
    width='220px'
  />
)

export default ExampleTypeaheadLabel
