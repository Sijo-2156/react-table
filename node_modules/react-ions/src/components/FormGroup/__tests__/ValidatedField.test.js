import React from 'react'
import ValidatedField from '../ValidatedField'
import Input from '../../Input'

describe('ValidatedField', () => {
  let wrapper

  const ValidatedInput = ValidatedField(Input)

  it('should shallow render itself', () => {
    expect(shallow(<ValidatedInput error='Error here.' />)).toMatchSnapshot()
  })

  it('should have a custom class', () => {
    expect(shallow(<ValidatedInput className='custom-class' />)).toMatchSnapshot()
  })
})
