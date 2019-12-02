import React from 'react'
import ButtonAnchor from '../ButtonAnchor'

describe('ButtonAnchor', () => {
  let wrapper

  it('displays a button anchor with an external link', () => {
    expect(shallow(<ButtonAnchor path='http://www.google.com' target='_blank'>External</ButtonAnchor>)).toMatchSnapshot()
  })

  it('displays a button anchor with an internal link', () => {
    expect(shallow(<ButtonAnchor path='/components/progress-bar' internal={true}>Internal</ButtonAnchor>)).toMatchSnapshot()
  })
})
