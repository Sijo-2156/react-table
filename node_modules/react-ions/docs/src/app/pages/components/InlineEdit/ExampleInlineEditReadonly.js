import React from 'react'
import InlineEdit from 'react-ions/lib/components/InlineEdit'
import styles from './styles'

class ExampleInlineEditReadonly extends React.Component {
  constructor(props) {
    super(props)
  }

  state = {
    inlineValue: 'You can\'t click to edit me'
  }

  render = () => {
    return (
      <InlineEdit name='test' value={this.state.inlineValue} placeholder='Custom Placeholder' readonly />
    )
  }
}

export default ExampleInlineEditReadonly
