import React from 'react'
import Dropdown from 'react-ions/lib/components/Dropdown'
import Button from 'react-ions/lib/components/Button'
import Badge from 'react-ions/lib/components/Badge'
import styles from './styles'

class ExampleDropdownCallback extends React.Component {
  constructor(props) {
    super(props)
  }

  state = {
    isOpened: false
  }

  handleChange = state => {
    this.setState({isOpened: state})
  }

  handleOpen = () => {
    this.setState({isOpened: true})
  }

  handleClose = () => {
    this.setState({isOpened: false})
  }

  render() {
    return (
      <div>
        <Dropdown trigger={<u>dropdown here</u>} isOpened={this.state.isOpened} changeCallback={this.handleChange}>
          <div className={styles.wrapper}>
            <Badge icon='md-remove' theme='danger' /><span>Dropdown content here.</span>
          </div>
        </Dropdown>
        <div className={styles['external-controls']}>
          <p><a href="#" onClick={this.handleOpen}>Open it</a> / <a href="#" onClick={this.handleClose}>Close it</a></p>
        </div>
      </div>
    )
  }

}

export default ExampleDropdownCallback
