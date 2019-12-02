import React from 'react'
import TextEditor from 'react-ions/lib/components/TextEditor'
import Button from 'react-ions/lib/components/Button'

class ExampleTextEditorDisabled extends React.Component {
  constructor(props) {
    super(props)
  }

  state = {
    disabled: true
  }

  toggleStatus = () => {
    this.setState({ disabled: !this.state.disabled })
  }

  render = () => {
    return (
      <div>
        <p><Button onClick={this.toggleStatus}>{this.state.disabled ? 'Enable' : 'Disable'} Editor</Button></p>
        <TextEditor {...this.state} />
      </div>
    )
  }
}

export default ExampleTextEditorDisabled
