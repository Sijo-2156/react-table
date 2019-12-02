import React from 'react'
import {SortableList, SortableItem} from 'react-ions/lib/components/SortableList'
import Modal from 'react-ions/lib/components/Modal'
import Button from 'react-ions/lib/components/Button'
import style from './style.scss'

class ExampleSortableListModal extends React.Component {
  constructor(props) {
    super(props)
  }

  state = {
    open: false,
    items: [{
      value: 'email',
      text: 'Email',
      active: true
    }, {
      value: 'push_notification',
      text: 'Push Notification',
      active: false
    }, {
      value: 'web',
      text: 'Web',
      active: false
    }, {
      value: 'sms',
      text: 'SMS',
      active: false
    }]
  }

  handleOpen = () => {
    this.setState({open: true})
  }

  handleClose = () => {
    this.setState({open: false})
  }

  onChange = event => {
    console.log(event.target.value)
    this.setState({ items: event.target.value })
  }

  onDragStart = () => {
    this.setState({ modalClass: 'dragging' })
  }

  onDragStop = () => {
    this.setState({ modalClass: '' })
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
          title="Default Modal"
          open={this.state.open}
          onRequestClose={this.handleClose}
          actions={actions}
          optClass={style[this.state.modalClass]}
        >
          <p>You can arrange the items below.</p>
          <SortableList items={this.state.items} changeCallback={this.onChange} onDragStart={this.onDragStart} onDragStop={this.onDragStop} />
        </Modal>
      </div>
    )
  }
}

export default ExampleSortableListModal
