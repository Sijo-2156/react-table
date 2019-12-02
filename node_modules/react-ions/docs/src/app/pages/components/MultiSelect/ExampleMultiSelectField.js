import React from 'react'
import MultiSelect from 'react-ions/lib/components/MultiSelect/MultiSelect'
import SelectField from 'react-ions/lib/components/SelectField/SelectField'
import Button from 'react-ions/lib/components/Button'
import style from './style.scss'

class ExampleMultiSelectField extends React.Component {
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
      {value: '3', display: 'Test 4'},
      {value: '4', display: 'Test 5'},
      {value: '5', display: 'Test 6'},
      {value: '6', display: 'Test 7'},
      {value: '7', display: 'Test 8'},
      {value: '8', display: 'Test 9'},
      {value: '9', display: 'Test 10'}
    ]

    return (
      <div>
        <div className={style.update}>
          <Button onClick={this.updateSelected.bind(this, '0')}>Select 1st item</Button>
        </div>
        <MultiSelect optClass={style['custom-multi']} options={options} valueProp='value' displayProp='display' value={this.state.value} changeCallback={this.handleChange} placeholder="Select one or more items">
          <SelectField />
        </MultiSelect>
        <code className={style['callback-status']}>{this.state.status}</code>
      </div>
    )
  }
}

export default ExampleMultiSelectField
