import React from 'react'
import InlineEdit from 'react-ions/lib/components/InlineEdit'
import styles from './styles'

class ExampleInlineEditCopy extends React.Component {
  constructor(props) {
    super(props)
  }

  state = {
    copySrc: 'Copy source',
    copySrcLoading: false,
    copyDest: 'Copy destination',
    copyDestLoading: false,
    copyError: 'Copy error',
    copyErrorLoading: false,
    copyErrorError: ''
  }

  update = (error, event) => {
    let newState = {
      [`${event.target.name}Loading`]: true
    }

    if (!error) newState[event.target.name] = event.target.value

    this.setState(newState)

    if (event.target.canceled) {
      newState = {
        [`${event.target.name}Loading`]: false
      }

      if (error) newState[`${event.target.name}Error`] = ''

      this.setState(newState)
    }
    else {
      setTimeout(() => {
        newState = {
          [`${event.target.name}Loading`]: false
        }

        if (error) newState[`${event.target.name}Error`] = 'Error!'

        this.setState(newState)
      }, 1000)
    }
  }

  render = () => {
    return (
      <div>
        <InlineEdit name='copySrc' value={this.state.copySrc} changeCallback={this.update.bind(null, false)} loading={this.state.copySrcLoading} copyToClipboard />
        <br />
        <InlineEdit name='copyDest' value={this.state.copyDest} changeCallback={this.update.bind(null, false)} loading={this.state.copyDestLoading} copyToClipboard={this.state.copyDest} />
        <br />
        <InlineEdit name='copyError' value={this.state.copyError} changeCallback={this.update.bind(null, true)} loading={this.state.copyErrorLoading} copyToClipboard={this.state.copyError} error={this.state.copyErrorError} />
      </div>
    )
  }
}

export default ExampleInlineEditCopy
