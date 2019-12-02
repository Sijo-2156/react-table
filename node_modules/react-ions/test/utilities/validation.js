import { fromJS, is, Map } from 'immutable'
import { validate } from '../../src/utilities/validation'

describe('Utilities::Validation', () => {
  describe('validate', () => {
    let exampleValidationAllValid, exampleValidationNotValid

    beforeEach(() => {
      exampleValidationAllValid = fromJS({
        email: {
          validators: [
            {
              validator: () => true,
              message: 'Validation message'
            }
          ]
        }
      })

      exampleValidationNotValid = fromJS({
        email: {
          validators: [
            {
              validator: sinon.stub().returns(false),
              message: 'First field, first validation message'
            },
            {
              validator: sinon.stub().returns(false),
              message: 'First field, second validation message'
            }
          ]
        },
        name: {
          validators: [
            {
              validator: sinon.stub().returns(true),
              message: 'Second field, first validation message'
            },
            {
              validator: sinon.stub().returns(false),
              message: 'Second field, second validation message'
            }
          ]
        }
      })

    })

    it('should return empty Map if no validation is provided', () => {
      const noValidation = validate()

      expect(noValidation.isEmpty()).to.be.true
    })

    it('should return empty Map if no fields are provided', () => {
      const noValues = validate(exampleValidationAllValid)

      expect(noValues.isEmpty()).to.be.true
    })

    it('should call all provided validators for each field', () => {
      const notValid = validate(exampleValidationNotValid, Map({ email: 'test@test.com', name: 'test' }))

      expect(exampleValidationNotValid.getIn(['email', 'validators', 0, 'validator']).calledOnce).to.be.true
      expect(exampleValidationNotValid.getIn(['email', 'validators', 0, 'validator']).calledWith('test@test.com')).to.be.true
      expect(exampleValidationNotValid.getIn(['email', 'validators', 1, 'validator']).calledOnce).to.be.true
      expect(exampleValidationNotValid.getIn(['email', 'validators', 1, 'validator']).calledWith('test@test.com')).to.be.true
      expect(exampleValidationNotValid.getIn(['name', 'validators', 0, 'validator']).calledOnce).to.be.true
      expect(exampleValidationNotValid.getIn(['name', 'validators', 0, 'validator']).calledWith('test')).to.be.true
      expect(exampleValidationNotValid.getIn(['name', 'validators', 1, 'validator']).calledOnce).to.be.true
      expect(exampleValidationNotValid.getIn(['name', 'validators', 1, 'validator']).calledWith('test')).to.be.true
    })

    it('should return the errors in the order provided for each field', () => {
      const notValid = validate(exampleValidationNotValid, Map({ email: 'test', name: '' }))

      expect(notValid.toJS()).to.deep.equal({ email: 'First field, first validation message', name: 'Second field, second validation message' })
    })

    it('should return empty Map when all provided fields are valid', () => {
      const noValidation = validate(exampleValidationAllValid, Map({ email: 'test@test.com' }))

      expect(noValidation.isEmpty()).to.be.true
    })
  })
})
