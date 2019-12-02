import React from 'react'
import styled from 'styled-components'
import Input from 'react-ions/lib/components/Input'
import Icon from 'react-ions/lib/components/Icon'

const StyledInput = styled(Input)`
  input {
    height: 49px;
    border: 1px solid rgba(37, 50, 64, 0.1) !important;
    background-color: #F7F7F9;
  }
`

const iconNode = <Icon name='md-add' width='16' height='16' />

const ExampleInputPrefixSuffix = () => (
  <div>
    <Input prefix='$' width='100px' /><br />
    <Input suffix='days' width='100px' /><br />
    <StyledInput prefix='To:' suffix={iconNode} width='350px' />
  </div>
)

export default ExampleInputPrefixSuffix
