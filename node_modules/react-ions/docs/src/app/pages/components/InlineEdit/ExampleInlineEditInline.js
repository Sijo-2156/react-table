import React from 'react'
import InlineEdit from 'react-ions/lib/components/InlineEdit'
import Icon from 'react-ions/lib/components/Icon'
import style from './styles'

class ExampleInlineEditInline extends React.Component {
  constructor(props) {
    super(props)
  }

  render = () => {
    return (
      <InlineEdit name='test' value='test@example.com' optClass={style['opt-wrapper']} label='Email' icon='md-email' />
    )
  }
}

export default ExampleInlineEditInline
