import React from 'react'
import FormGroup from 'react-ions/lib/components/FormGroup'
import Input from 'react-ions/lib/components/Input'
import Textarea from 'react-ions/lib/components/Textarea'
import Checkbox from 'react-ions/lib/components/Checkbox'
import RadioGroup from 'react-ions/lib/components/Radio/RadioGroup'
import SelectField from 'react-ions/lib/components/SelectField'
import DatePicker from 'react-ions/lib/components/DatePicker'
import Button from 'react-ions/lib/components/Button'
import ButtonGroup from 'react-ions/lib/components/ButtonGroup/ButtonGroup'
import Icon from 'react-ions/lib/components/Icon'
import moment from 'moment'
import style from 'react-ions/lib/components/FormGroup/style'

let fields = {
  selectField: [
    {value: '0', display: 'Time since last NPS survey was received'},
    {value: '1', display: 'Time since last NPS survey was completed'}
  ],
  selectField2: [
    {value: '0', display: 'less than'},
    {value: '1', display: 'greater than'}
  ],
  selectField3: [
    {value: '0', display: 'months ago'},
    {value: '1', display: 'years ago'}
  ],
  buttonGroup: [
    {value: 'and', label: 'And'},
    {value: 'or', label: 'Or'}
  ]
}

class ExampleFormGroupInline extends React.Component {
  constructor(props) {
    super(props)
  }

  state = {
    schema: {
      'selectField': {
        'value': ''
      },
      'selectField2': {
        'value': ''
      },
      'num': {
        'value': ''
      },
      'selectField3': {
        'value': ''
      },
      'buttonGroup': {
        'value': ''
      },
      'input': {
        'value': '3'
      },
      'selectField4': {
        'value': ''
      },
      'selectField5': {
        'value': ''
      },
      'selectField6': {
        'value': ''
      },
      'date': {
        'value': moment().format('YYYY-MM-DD')
      }
    }
  }

  handleChange = fields => {
    console.log(fields)
    this.setState({ schema: fields })
  }

  render() {
    const defaultOption = this.state.schema.buttonGroup.value === 'or' ? 1 : 0

    return (
      <FormGroup
        changeCallback={this.handleChange}
        schema={this.state.schema}>

        <fieldset className={style.row}>
          <legend><span>Inline select fields with a couple of extras</span></legend>
          <div className={style['fields']}>
            <SelectField name='selectField' options={fields.selectField} valueProp='value' displayProp='display' optClass={style.field} />
            <SelectField name='selectField2' options={fields.selectField2} valueProp='value' displayProp='display' optClass={style.field} />
            <Input name='num' type='text' optClass={style.field} />
            <SelectField name='selectField3' options={fields.selectField3} valueProp='value' displayProp='display' optClass={style.field} />
            <DatePicker name='date' optClass={style.field} />
          </div>
        </fieldset>
        <fieldset className={style.row}>
          <div className={style.field}>
            <ButtonGroup name="buttonGroup" options={fields.buttonGroup} defaultOption={defaultOption}></ButtonGroup>
          </div>
          <div className={style['fields']}>
            <SelectField name='selectField4' options={fields.selectField} valueProp='value' displayProp='display' optClass={style.field} />
            <SelectField name='selectField5' options={fields.selectField2} valueProp='value' displayProp='display' optClass={style.field} />
            <Input name='input' type='text' optClass={style.field} />
            <SelectField name='selectField6' options={fields.selectField3} valueProp='value' displayProp='display' optClass={style.field} />
          </div>
          <div className={style['remove-item']}>
            <Icon name='md-remove' height='16' width='16' fill='#233040' />
          </div>
        </fieldset>
      </FormGroup>
    )
  }
}

export default ExampleFormGroupInline
