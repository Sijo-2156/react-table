import React from 'react'
import styled from 'styled-components'
import Spinner from 'react-ions/lib/components/Spinner'

const StyledSpinner = styled(Spinner)`
  [class^="bounce"][class^="bounce"] {
    background-color: palevioletred;
  }
`
const ExampleSpinnerDefault = () => (
  <StyledSpinner loading={true} type='spinner-bounce' />
)

export default ExampleSpinnerDefault
