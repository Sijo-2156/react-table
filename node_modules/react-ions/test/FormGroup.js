import React from 'react'
import Immutable, { Map } from 'immutable'
import FormGroup from '../src/components/FormGroup'
import ValidatedField from '../src/components/FormGroup/ValidatedField'
import Button from '../src/components/Button'
import Input from '../src/components/Input'
import Textarea from '../src/components/Textarea'
import Toggle from '../src/components/Toggle'
import SelectField from '../src/components/SelectField'

describe('FormGroup', () => {
  let formGroup, wrapper

  const ValidatedInput = ValidatedField(Input)

  it('should shallow render itself', () => {
    formGroup = shallow(<FormGroup />)
    expect(formGroup.find('form')).to.have.length(1)
    expect(formGroup.hasClass('form-group')).to.equal(true)
    expect(typeof formGroup.props().onSubmit).to.equal('function')
    expect(Immutable.is(formGroup.state().fieldErrors, Map())).to.be.true
  })

  it('should render with an optional CSS class', () => {
    formGroup = shallow(<FormGroup optClass='test' />)
    expect(formGroup.hasClass('form-group test')).to.equal(true)
  })

  it('should render a fieldset with child nodes', () => {
    const schema = {
      'subject': {
        'value': 'This is my subject'
      },
      'message': {
        'value': 'This is my message'
      }
    }

    formGroup = shallow(
      <FormGroup schema={schema}>
        <Input name='subject' label='Subject line' type='text' />
        <Textarea name='message' label='Message' />
        <Toggle name='toggle' label='Toggle' />
        {null}
      </FormGroup>)
    expect(formGroup.childAt(0).type()).to.equal('fieldset')
    expect(formGroup.childAt(0).hasClass('fieldset')).to.equal(true)
    expect(formGroup.childAt(0).children()).to.have.length(3)
  })

  it('should update the state when props are passed', () => {
    const schema = {
      'subject': {
        'value': 'This is my subject'
      }
    }

    const schema2 = {
      'subject': {
        'value': 'This is my answer'
      }
    }

    wrapper = mount(<FormGroup schema={schema}><Input name='subject' label='Subject line' type='text' /></FormGroup>)
    expect(wrapper.state().fields.getIn(['subject', 'value'])).to.equal('This is my subject')

    wrapper.setProps({ schema: schema2 })
    wrapper.update()

    expect(wrapper.state().fields.getIn(['subject', 'value'])).to.equal('This is my answer')
  })

  it('should not update the state when identical props are passed', () => {
    const schema = {
      'subject': {
        'value': 'This is my subject'
      }
    }

    const schema2 = {
      'subject': {
        'value': 'This is my subject'
      }
    }

    wrapper = mount(<FormGroup schema={schema}><Input name='subject' label='Subject line' type='text' /></FormGroup>)
    const previousState = wrapper.state()

    wrapper.setProps({ schema: schema2 })
    wrapper.update()

    expect(previousState).to.equal(wrapper.state())
  })

  it('should set the state when a form input is changed', () => {
    const changeCallback = sinon.spy()

    const schema = {
      'field_one': {
        'value': 'This is my subject'
      }
    }

    const fieldErrors = Map({
      field_one: 'Error one',
      field_two: 'Error two',
      field_three: 'Error three'
    })

    wrapper = mount(<FormGroup changeCallback={changeCallback} schema={schema} fieldErrors={fieldErrors}><Input name='field_one' label='Subject line' type='text' /></FormGroup>)
    wrapper.setState({ fieldErrors: wrapper.state('fieldErrors').set('field_two', 'State error') })

    wrapper.find('input').simulate('change', {
      target: {
        name: 'field_one',
        value: 'This is my answer'
      }
    });

    expect(changeCallback.calledOnce).to.be.true
    expect(changeCallback.firstCall.args[0]).to.deep.equal({ field_one: { value: 'This is my answer' } })
    expect(changeCallback.firstCall.args[1].toJS()).to.deep.equal({ field_one: '', field_two: 'Error two', field_three: 'Error three' })
    expect(wrapper.state().fields.getIn(['field_one', 'value'])).to.equal('This is my answer')
    expect(wrapper.state().fieldErrors.toJS()).to.deep.equal({ field_one: '', field_two: 'Error two', field_three: 'Error three' })
  })

  it('should update the state when changeCallback is not provided', () => {
    const schema = {
      'subject': {
        'value': 'This is my subject'
      }
    }

    wrapper = mount(<FormGroup schema={schema}><Input name='subject' label='Subject line' type='text' /></FormGroup>)

    wrapper.find('input').simulate('change', {
      target: {
        name: 'subject',
        value: 'This is my answer'
      }
    })

    expect(wrapper.state().fields.getIn(['subject', 'value'])).to.equal('This is my answer')
  })

  it('should not manipulate provided schema outside the changeCallback', () => {
    const changeCallback = sinon.spy()

    const schema = {
      'subject': {
        'value': 'This is my subject'
      }
    }

    wrapper = mount(<FormGroup changeCallback={changeCallback} schema={schema}><Input name='subject' label='Subject line' type='text' /></FormGroup>)

    wrapper.find('input').simulate('change', {
      target: {
        name: 'subject',
        value: 'This is my answer'
      }
    })

    expect(schema.subject.value).to.equal('This is my subject')
  })

  it('should render a fieldset without a form wrapper', () => {
    const schema = {
      'subject': {
        'value': 'This is my subject'
      }
    }

    formGroup = shallow(
      <FormGroup schema={schema} nested={true}>
        <Input name='subject' label='Subject line' type='text' />
      </FormGroup>)

    expect(formGroup.type()).to.equal('fieldset')
    expect(formGroup.hasClass('fieldset')).to.equal(true)
  })

  it('should pass object value as raw js when cloning children', () => {
    const schema = {
      'subject': {
        'value': { test: 'yes' }
      }
    }

    const CustomFormField = props => {
      return (<span>hello</span>)
    }

    formGroup = shallow(
      <FormGroup schema={schema} nested={true}>
        <CustomFormField name='subject' />
      </FormGroup>)

    expect(formGroup.find(CustomFormField).props().value).to.deep.equal(schema.subject.value)
  })

  it('should call a submit callback', () => {
    const submitCallback = sinon.spy()

    const schema = {
      'subject': {
        'value': 'This is my subject'
      }
    }

    wrapper = mount(<FormGroup submitCallback={submitCallback} schema={schema}><Input name='subject' label='Subject line' type='text' /><Button type='submit' /></FormGroup>)
    const button = wrapper.find(Button)

    button.simulate('submit')

    expect(submitCallback.calledOnce).to.be.true
  })

  it('should set full option object when available', () => {
    const options = [
      {countryCode: 'AF', countryName: 'Afghanistan'},
      {countryCode: 'AL', countryName: 'Albania'}
    ]

    const changeCallback = sinon.spy()

    const schema = {
      'country': {
        'value': 'AF'
      }
    }

    wrapper = shallow(<FormGroup changeCallback={changeCallback} schema={schema}><SelectField name='country' label='Country' options={options} valueProp='value' displayProp='display' /></FormGroup>)

    const event = {
      target: {
        name: 'country',
        value: 'AL',
        option: options[1]
      }
    }

    wrapper.instance().handleChange(event)

    expect(changeCallback.calledOnce).to.be.true
    expect(wrapper.state().fields.getIn(['country', 'value'])).to.equal('AL')
    expect(wrapper.state().fields.getIn(['country', 'option'])).to.equal(options[1])
  })

  it('should handle field errors when the form is submitted', () => {
    const errorCallbackSpy = sinon.stub()
    const submitCallbackSpy = sinon.stub()
    const schema = {
      message: {
        value: ''
      }
    }

    const errorMessage = 'The field cannot be left empty.'

    const event = {
      preventDefault: () => {}
    }

    formGroup = shallow(<FormGroup schema={schema} errorCallback={errorCallbackSpy} submitCallbackSpy={submitCallbackSpy}>
      <ValidatedInput
        name='message'
        label='Message'
        type='text'
        validation={[
          {
            validator: () => false,
            message: errorMessage
          }
        ]}
      />
    </FormGroup>)

    formGroup.instance().handleSubmit(event)

    expect(formGroup.state().fieldErrors.toJS()).to.deep.equal({ message: 'The field cannot be left empty.'})
    expect(errorCallbackSpy.calledOnce).to.be.true
    expect(submitCallbackSpy.calledOnce).to.be.false
  })

  it('should should not call submitCallback when there are errors', () => {
    const submitCallbackSpy = sinon.stub()
    const schema = {
      message: {
        value: ''
      }
    }

    const errorMessage = 'The field cannot be left empty.'

    const event = {
      preventDefault: () => {}
    }

    formGroup = shallow(<FormGroup schema={schema} submitCallbackSpy={submitCallbackSpy}>
      <ValidatedInput
        name='message'
        label='Message'
        type='text'
        validation={[
          {
            validator: () => false,
            message: errorMessage
          }
        ]}
      />
    </FormGroup>)

    formGroup.instance().handleSubmit(event)

    expect(submitCallbackSpy.called).to.be.false
  })

  it('should validate from props -> errorFields when passed', () => {
    const schema = {
      message: {
        value: ''
      }
    }

    const event = {
      preventDefault: () => {}
    }

    const fieldErrors = Map({
      message: 'apples'
    })

    formGroup = shallow(<FormGroup schema={schema} fieldErrors={fieldErrors}>
      <div>
        <ValidatedInput
          name='message'
          label='Message'
          type='text'
          validation={[
            {
              validator: () => false,
              message: 'oranges'
            }
          ]}
        />
      </div>
    </FormGroup>)

    formGroup.instance().handleSubmit(event)

    expect(Immutable.is(formGroup.instance()._mapFieldErrors(), fieldErrors)).to.be.true
    expect(formGroup.state().fieldErrors.toJS()).to.deep.equal({ message: 'oranges'})

    const getElementsSpy = sinon.spy(formGroup.instance(), 'getElements')
    formGroup.instance().renderForm()
    expect(getElementsSpy.calledThrice).to.be.true
    expect(getElementsSpy.firstCall.args[1]).to.be.undefined
    expect(getElementsSpy.secondCall.args[1]).to.be.true
    expect(getElementsSpy.thirdCall.args[1]).to.be.true
  })
})
