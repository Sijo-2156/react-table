import React from 'react'
import styled from 'styled-components'
import Textarea from 'react-ions/lib/components/Textarea'

const StyledTextarea = styled(Textarea)`
textarea {
  height: 150px;
  background-color: #F7F7F9;
}
`

const ExampleTextareaStyled = () => (
  <StyledTextarea name='textarea' value='' />
)

export default ExampleTextareaStyled
