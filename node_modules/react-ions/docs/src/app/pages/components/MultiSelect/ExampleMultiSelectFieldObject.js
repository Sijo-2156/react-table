import React from 'react'
import WithObjectValue from 'react-ions/lib/components/MultiSelect/WithObjectValue'
import MultiSelect from 'react-ions/lib/components/MultiSelect/MultiSelect'
import SelectField from 'react-ions/lib/components/SelectField/SelectField'
import style from './style.scss'

const value = [
  {value: '2', display: 'Test 2'},
  {value: '3', display: 'Test 3'}
]

const WithObjectValueDemo = WithObjectValue(MultiSelect)

class ExampleMultiSelectFieldObject extends React.Component {
  constructor(props) {
    super(props)
  }

  handleChange = event => {
    console.log(event.target.value)
  }

  render() {
    const options = [
      {value: '1', display: 'Test 1'},
      {value: '2', display: 'Test 2'},
      {value: '3', display: 'Test 3'},
      {value: '4', display: 'Test 4'},
      {value: '5', display: 'Test 5'},
      {value: '6', display: 'Test 6'},
      {value: '7', display: 'Test 7'},
      {value: '8', display: 'Test 8'},
      {value: '9', display: 'Test 9'},
      {value: '10', display: 'Test 10'}
    ]

    return (
      <div>
        <WithObjectValueDemo
          optClass={style['custom-multi']}
          options={options}
          valueProp='value'
          name='example'
          displayProp='display'
          value={value}
          changeCallback={this.handleChange}
          placeholder="Select one or more items">
          <SelectField />
        </WithObjectValueDemo>
      </div>
    )
  }
}

export default ExampleMultiSelectFieldObject
