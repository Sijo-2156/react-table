import { fromJS, is } from 'immutable'
import { formSchemaToKeyVal } from '../../src/utilities/form'

describe('Utilities::Form', () => {
  describe('formSchemaToKeyVal', () => {
    it('should return new schema for form data', () => {
      const schema = fromJS({'email': {'value': 'test@test.com'}})
      const expected = fromJS({'email': 'test@test.com'})

      const result = formSchemaToKeyVal(schema)

      expect(is(result, expected)).to.be.true
    })
  })
})
