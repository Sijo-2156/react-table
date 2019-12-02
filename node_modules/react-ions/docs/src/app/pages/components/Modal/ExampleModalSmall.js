import React from 'react'
import Modal from 'react-ions/lib/components/Modal'
import Button from 'react-ions/lib/components/Button'
import SelectField from 'react-ions/lib/components/SelectField/SelectField'
import style from './style.scss'

class ExampleModalSmall extends React.Component {
  constructor(props) {
    super(props)
  }

  state = {
    open: false
  }

  handleOpen = () => {
    this.setState({open: true})
  }

  handleClose = () => {
    this.setState({open: false})
  }

  render() {
    const options = [
      {value: '0', display: 'Some items', someOtherProp: true},
      {value: '1', display: 'to see whether', someOtherProp: false},
      {value: '2', display: 'nested items', someOtherProp: false},
      {value: '3', display: 'can flow outside', someOtherProp: false},
      {value: '4', display: 'of the modal.', someOtherProp: false}
    ]

    const actions = [
      <Button onClick={this.handleClose} optClass="inverted">Cancel</Button>,
      <Button onClick={this.handleClose}>Submit</Button>
    ]

    return (
      <div>
        <Button onClick={this.handleOpen}>Open Modal</Button>
        <Modal
          title="Small Modal"
          open={this.state.open}
          onRequestClose={this.handleClose}
          actions={actions}
          size='sm'
        >
          <p>This is a small modal...</p>
          <SelectField
            options={options}
            valueProp='value'
            displayProp='display'
            value={null}
            placeholder='...and a select field.'
            optClass={style['modal-select-field-example']} />
        </Modal>
      </div>
    )
  }
}

export default ExampleModalSmall
