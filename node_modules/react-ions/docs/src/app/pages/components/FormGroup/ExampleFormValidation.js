import React from 'react'
import Immutable, { Map } from 'immutable'
import FormGroup from 'react-ions/lib/components/FormGroup'
import ValidatedField from 'react-ions/lib/components/FormGroup/ValidatedField'
import Input from 'react-ions/lib/components/Input'
import Textarea from 'react-ions/lib/components/Textarea'
import Button from 'react-ions/lib/components/Button'
import formStyle from 'react-ions/lib/components/FormGroup/style'
import style from './style.scss'

const validate = {
  isNotEmpty: str => {
    return !!str || str === 0
  },
  isDefined: val => {
    return val !== undefined
  },
  isValidEmail: email => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    return !!email && re.test(email.trim())
  }
}

const ValidatedInput = ValidatedField(Input)
const ValidatedTextarea = ValidatedField(Textarea)

const schema = {
  email: {
    value: ''
  },
  message: {
    value: ''
  }
}

const defaultState = {
  fieldErrors: Map(),
  loading: false,
  submitted: false
}

class ExampleFormValidation extends React.Component {
  constructor(props) {
    super(props)
  }

  state = defaultState

  handleChange = fields => {
    this.setState({schema: fields})
  }

  handleSubmit = (event, fields) => {
    event.preventDefault()

    this.setState({
      fieldErrors: Map(),
      loading: true
    })

    if (!this.state.submitted) {
      setTimeout(() => {
        this.setState({
          fieldErrors: Map({
            email: 'This is a mock backend error message.'
          }),
          loading: false,
          submitted: true
        })
      }, 1000)
    } else {
      this.setState(defaultState)
      console.log('Payload:', JSON.stringify(fields, 2, null))
    }
  }

  handleErrors = errors => {
    console.log(errors.toJS())
  }

  render() {
    return (
      <FormGroup
        changeCallback={this.handleChange}
        submitCallback={this.handleSubmit}
        errorCallback={this.handleErrors}
        schema={schema}
        fieldErrors={this.state.fieldErrors}
      >
        <div>
          <ValidatedInput
            name='email'
            label='Email'
            type='text'
            placeholder='sugerman@6am.com'
            validation={[
              {
                validator: validate.isNotEmpty,
                message: 'The email field is required.'
              },
              {
                validator: validate.isValidEmail,
                message: 'Please enter a valid email address.'
              }
            ]}
            className={formStyle.field}
          />
        </div>
        <div>
          <ValidatedTextarea
            name='message'
            label='Message'
            type='text'
            validation={[
              {
                validator: validate.isNotEmpty,
                message: 'This textfield is required.'
              }
            ]}
            className={formStyle.field}
          />
        </div>
        <Button type='submit' loading={this.state.loading}>Submit</Button>
      </FormGroup>
    )
  }
}

export default ExampleFormValidation
