import React from 'react'
import MultiSelect from 'react-ions/lib/components/MultiSelect/MultiSelect'
import Typeahead from 'react-ions/lib/components/Typeahead/Typeahead'
import style from './style.scss'
import options from '../Typeahead/CountryList'

class ExampleMultiTypeaheadSearch extends React.Component {
  constructor(props) {
    super(props)
  }

  selected = []

  state = {
    value: ['BS', 'IC'],
    status: 'Chosen options are: BS,IC'
  }

  handleSearch = () => {
    return new Promise(resolve => {
      this.setState({isSearching: true}, () => {
        // Do asynchronous search here
        setTimeout(() => {
          resolve(options)
          this.setState({isSearching: false})
        }, 1000)
      })
    })
  }

  handleChange = event => {
    this.setState({ value: event.target.value, status: 'The callback was triggered and ' + (event.target.value.length > 0 ? 'the chosen options are: ' + event.target.value.join(',') : 'there are no options selected') })
  }

  render() {

    return (
      <div>
        <MultiSelect optClass={style['custom-multi']} options={options} valueProp='countryCode' displayProp='countryName' value={this.state.value} changeCallback={this.handleChange} placeholder="Start typing to select one or more items">
          <Typeahead loading={this.state.isSearching} searchCallback={this.handleSearch} />
        </MultiSelect>
        <code className={style['callback-status']}>{this.state.status}</code>
      </div>
    )
  }
}

export default ExampleMultiTypeaheadSearch
