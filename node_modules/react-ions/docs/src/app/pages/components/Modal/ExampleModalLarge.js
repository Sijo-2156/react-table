import React from 'react'
import Modal from 'react-ions/lib/components/Modal'
import Button from 'react-ions/lib/components/Button'

class ExampleModalLarge extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false
    }
  }

  handleOpen = () => {
    this.setState({open: true})
  }

  handleClose = () => {
    this.setState({open: false})
  }

  render() {
    const actions = [
      <Button onClick={this.handleClose} optClass="inverted">Cancel</Button>,
      <Button onClick={this.handleClose}>Submit</Button>
    ]

    return (
      <div>
        <Button onClick={this.handleOpen}>Open Modal</Button>
        <Modal
          title="Large Modal"
          open={this.state.open}
          onRequestClose={this.handleClose}
          actions={actions}
          size='lg'
        >
          <p>This is a large modal.</p>
        </Modal>
      </div>
    )
  }
}

export default ExampleModalLarge
