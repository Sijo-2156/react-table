import React from 'react'
import FormGroup from 'react-ions/lib/components/FormGroup'
import Input from 'react-ions/lib/components/Input'
import Textarea from 'react-ions/lib/components/Textarea'
import Checkbox from 'react-ions/lib/components/Checkbox'
import RadioGroup from 'react-ions/lib/components/Radio/RadioGroup'
import Radio from 'react-ions/lib/components/Radio/Radio'
import SelectField from 'react-ions/lib/components/SelectField'
import Button from 'react-ions/lib/components/Button'
import Toggle from 'react-ions/lib/components/Toggle'
import FileUpload from 'react-ions/lib/components/FileUpload'
import Typeahead from 'react-ions/lib/components/Typeahead/Typeahead'
import formStyle from 'react-ions/lib/components/FormGroup/style'
import style from './style.scss'
import options from '../Typeahead/CountryList'

let fields = {
  radio: [
    {
      value: 'option_1',
      label: 'Display your own custom message'
    }, {
      value: 'option_2',
      label: 'Display a refer a friend'
    }, {
      value: 'option_3',
      label: 'Show them another survey'
    }, {
      value: 'option_4',
      label: 'Redirect them'
    }
  ],
  select: [
    {value: '0', display: 'test 1'},
    {value: '1', display: 'test 2'},
    {value: '2', display: 'test 3'}
  ]
}

const CustomFormField = props => {
  const changeCallback = event => {
    props.changeCallback(
      {
        target: {
          name: props.name,
          value: { uid: 123, name: event.target.value }
        }
      }
    )
  }

  return (
    <div className='myCustomFormField'>
      <Input changeCallback={changeCallback} value={props.value.name} />
    </div>
  )
}

class ExampleFormGroup extends React.Component {
  constructor(props) {
    super(props)
  }

  state = {
    showTextarea: true,
    schema: {
      'subject': {
        'value': 'This is my subject'
      },
      'amount_number': {
        'value': 17.89
      },
      'amount_string': {
        'value': '17.89'
      },
      'message': {
        'value': 'This is my message'
      },
      'radio': {
        'value': 'option_2'
      },
      'radioWithChildren': {
        'value': 'child_option_1'
      },
      'child_option_1': {
        'value': 'child_option_1'
      },
      'child_option_2': {
        'value': 'child_option_2'
      },
      'child_option_3': {
        'value': 'child_option_3'
      },
      'child_input_1': {
        'value': ''
      },
      'child_input_2': {
        'value': ''
      },
      'child_input_3': {
        'value': ''
      },
      'select': {
        'value': '1'
      },
      'email': {
        'value': true
      },
      'facebook': {
        'value': false
      },
      'twitter': {
        'value': true
      },
      'linkedin': {
        'value': false
      },
      'toggle': {
        'value': false
      },
      'logo': {
        'value': 'https://ambassador-api.s3.amazonaws.com/uploads/marketing/54/2016_06_02_18_40_39.png'
      },
      'country_typeahead': {
        'value': 'AF'
      },
      'custom_field': {
        value: {
          uid: 123,
          name: 'this is the name'
        }
      }
    }
  }

  handleChange = fields => {
    this.setState({schema: fields})
  }

  handleSubmit = (event, fields) => {
    event.preventDefault()
    alert(JSON.stringify(fields, 2, null))
  }

  resetForm = () => {
    this.setState({
      schema: {
        subject: {
          value: ''
        },
        amount_number: {
          value: ''
        },
        amount_string: {
          value: ''
        },
        message: {
          value: ''
        },
        radio: {
          value: 'option_2'
        },
        radioWithChildren: {
          value: 'child_option_1'
        },
        child_option_1: {
          value: 'child_option_1'
        },
        child_option_2: {
          value: 'child_option_2'
        },
        child_option_3: {
          value: 'child_option_3'
        },
        child_input_1: {
          value: ''
        },
        child_input_2: {
          value: ''
        },
        child_input_3: {
          value: ''
        },
        select: {
          value: '0'
        },
        email: {
          value: true
        },
        facebook: {
          value: false
        },
        twitter: {
          value: true
        },
        linkedin: {
          value: false
        },
        toggle: {
          value: false
        },
        logo: {
          value: ''
        },
        country_typeahead: {
          value: ''
        },
        custom_field: {
          value: {
            uid: null,
            name: ''
          }
        }
      }
    })
  }

  getRadioChildClass = sibling => {
    return sibling !== this.state.schema.radioWithChildren.value ? formStyle['is-hidden'] : style['radio-child']
  }

  toggleTextarea = () => {
    this.setState({ showTextarea: !this.state.showTextarea })
  }

  render() {
    return (
      <FormGroup
        changeCallback={this.handleChange}
        submitCallback={this.handleSubmit}
        debounceTime={250}
        schema={this.state.schema}
      >
        <fieldset>
          <Button optClass='success' onClick={this.toggleTextarea}>{ this.state.showTextarea ? 'Hide' : 'Show' } message field</Button>
        </fieldset>

        <Input name='subject' label='Subject line' type='text' optClass={formStyle.field} />
        <Input valueType='number' name='amount_number' label='Amount As Number' optClass={formStyle.field} />
        <Input valueType='string' name='amount_string' label='Amount As String' optClass={formStyle.field} />
        {
          this.state.showTextarea &&
          <Textarea name='message' label='Message' optClass={formStyle.field} />
        }

        <legend><span>What happens after a promoter submits a score?</span></legend>
        <RadioGroup
          name='radio'
          options={fields.radio}
          optClass={formStyle.field} />

        <legend><span>Click a radio button to set a child value</span></legend>
        <RadioGroup name='radioWithChildren'>
          <Radio name='child_option_1' label='Option 1' />
          <Input name='child_input_1' optClass={this.getRadioChildClass('child_option_1')} />
          <Radio name='child_option_2' label='Option 2' />
          <Input name='child_input_2' optClass={this.getRadioChildClass('child_option_2')} />
          <Radio name='child_option_3' label='Option 3' />
          <Input name='child_input_3' optClass={this.getRadioChildClass('child_option_3')} />
        </RadioGroup>

        <SelectField
          label='Select something'
          name='select'
          options={fields.select}
          valueProp='value'
          displayProp='display'
          optClass={formStyle.field} />

        <h3>Countries</h3>

        <Typeahead
          placeholder='Countries starting with the letter A'
          name='country_typeahead'
          options={options}
          allowCustomValue={true}
          valueProp='countryCode'
          displayProp='countryName'
          value={this.state.schema.country_typeahead.value}
          optClass={formStyle.field}
        />

        <Toggle name='toggle' optClass={formStyle.field} label='Would you like to set a toggle?' />

        <FileUpload name='logo' label='Logo' showPreview={true} />

        <fieldset>
          <legend><span>I am a legend</span></legend>
          <h3>Social channels</h3>
          <Checkbox name='email' label='Email' optClass={formStyle.field} />
          <Checkbox name='facebook' label='Facebook' optClass={formStyle.field} />
          <Checkbox name='twitter' label='Twitter' optClass={formStyle.field} />
          <Checkbox name='linkedin' label='LinkedIn' optClass={formStyle.field} />
        </fieldset>

        <fieldset>
          <h3>Custom Form Field</h3>
          <CustomFormField name='custom_field' />
        </fieldset>

        <Button type='submit'>Submit</Button>
        <Button optClass='inverted' onClick={this.resetForm}>Reset</Button>
      </FormGroup>
    )
  }
}

export default ExampleFormGroup
