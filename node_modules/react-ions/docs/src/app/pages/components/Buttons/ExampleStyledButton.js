import React from 'react'
import Button from 'react-ions/lib/components/Button'
import styled from 'styled-components'

const StyledButton = styled(Button)`
  background-color: palevioletred;
  border-width: 2px;
  color: papayawhip;
  &:hover {
    background-color: papayawhip;
    border-color: #C79647;
    color: palevioletred;
  }
`

const ExampleButtonDefault = () => (
  <StyledButton>I am a StyledButton</StyledButton>
)

export default ExampleButtonDefault
