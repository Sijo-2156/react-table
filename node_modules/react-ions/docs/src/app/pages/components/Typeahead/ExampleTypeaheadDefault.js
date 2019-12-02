import React from 'react'
import Typeahead from 'react-ions/lib/components/Typeahead/Typeahead'
import options from './CountryList'

const ExampleTypeaheadDefault = () => (
  <Typeahead
    options={options}
    valueProp='countryCode'
    displayProp='countryName'
    placeholder='Start typing' />
)

export default ExampleTypeaheadDefault
