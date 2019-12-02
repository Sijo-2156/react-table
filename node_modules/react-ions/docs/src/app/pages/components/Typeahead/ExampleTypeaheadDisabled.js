import React from 'react'
import Typeahead from 'react-ions/lib/components/Typeahead/Typeahead'
import options from './CountryList'

const ExampleTypeaheadDisabled = () => (
  <Typeahead
    options={options}
    valueProp='countryCode'
    displayProp='countryName'
    value={null}
    placeholder='You may not type here'
    disabled={true} />
)

export default ExampleTypeaheadDisabled
