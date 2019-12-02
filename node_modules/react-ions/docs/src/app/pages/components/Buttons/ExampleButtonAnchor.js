import React from 'react'
import ButtonAnchor from 'react-ions/lib/components/Button/ButtonAnchor'

const ExampleButtonAnchor = () => (
  <div>
    <ButtonAnchor path='http://www.google.com' optClass='success'>External</ButtonAnchor>
    <ButtonAnchor path='http://www.google.com' target='_blank' collapse={true}>External (new window)</ButtonAnchor>
    <ButtonAnchor path='/components/progress-bar' internal={true} optClass='plain'>Internal</ButtonAnchor>
    <ButtonAnchor disabled path='/components/progress-bar' internal={true} optClass='secondary'>Disabled</ButtonAnchor>
  </div>
)

export default ExampleButtonAnchor
