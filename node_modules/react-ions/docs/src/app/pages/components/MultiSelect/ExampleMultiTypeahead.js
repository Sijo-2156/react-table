import React from 'react'
import MultiSelect from 'react-ions/lib/components/MultiSelect/MultiSelect'
import Typeahead from 'react-ions/lib/components/Typeahead/Typeahead'
import Button from 'react-ions/lib/components/Button'
import style from './style.scss'

class ExampleMultiTypeahead extends React.Component {
  constructor(props) {
    super(props)
  }

  state = {
    value: ['0', '1'],
    status: 'Chosen options are: 0,1'
  }

  handleChange = event => {
    this.setState({ value: event.target.value, status: 'The callback was triggered and ' + (event.target.value.length > 0 ? 'the chosen options are: ' + event.target.value.join(',') : 'there are no options selected') })
  }

  updateSelected = index => {
    this.setState({ value: [index], status: 'Chosen options are: ' + index })
  }

  render() {
    const options = [
      {value: '0', display: 'Test 1'},
      {value: '1', display: 'Test 2'},
      {value: '2', display: 'Test 3'},
      {value: '3', display: 'Test 4'}
    ]

    return (
      <div>
        <div className={style.update}>
          <Button onClick={this.updateSelected.bind(this, '0')}>Select 1st item</Button>
        </div>
        <MultiSelect optClass={style['custom-multi']} options={options} valueProp='value' displayProp='display' value={this.state.value} changeCallback={this.handleChange} placeholder="Start typing to select one or more items">
          <Typeahead />
        </MultiSelect>
        <code className={style['callback-status']}>{this.state.status}</code>
      </div>
    )
  }
}

export default ExampleMultiTypeahead
