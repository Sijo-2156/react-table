import React from 'react'
import InlineEdit from 'react-ions/lib/components/InlineEdit'
import Button from 'react-ions/lib/components/Button'
import styles from './styles'

class ExampleInlineEditTrigger extends React.Component {
  constructor(props) {
    super(props)
  }

  state = {
    isEditing: false,
    value: 'Example value'
  }

  handleCallback = event => {
    this.setState({ isEditing: false, value: event.target.value })
  }

  buttonCallback = () => {
    this.setState({ isEditing: true })
  }

  render = () => {
    return (
      <div>
        <InlineEdit name='test' value={this.state.value} isEditing={this.state.isEditing} changeCallback={this.handleCallback} />
        <Button onClick={this.buttonCallback} optClass={styles['button-callback']}>Edit</Button>
      </div>
    )
  }
}

export default ExampleInlineEditTrigger
