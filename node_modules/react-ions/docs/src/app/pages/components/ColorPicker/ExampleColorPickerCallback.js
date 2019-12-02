import React from 'react'
import ColorPicker from 'react-ions/lib/components/ColorPicker'
import Button from 'react-ions/lib/components/Button'
import style from './style.scss'

const oldColor = '#3c97d3'
const newColor = '#e54c3b'

class ExampleColorPickerCallback extends React.Component {
  constructor(props) {
    super(props)
  }

  _setStatus = color => {
    return 'Selected color is ' + color.toUpperCase()
  }

  _updateState = color => {
    this.setState({
      color: color,
      status: this._setStatus(color)
    })
  }

  state = {
    status: this._setStatus(oldColor),
    color: oldColor
  }

  handleChange = event => {
    const date = new Date()

    console.log('Color:' + event.target.value, 'Time:' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds() + '.' + date.getMilliseconds())
    this._updateState(event.target.value)
  }

  updateColor = () => {
    this._updateState(newColor)
  }

  resetColor = () => {
    this._updateState(oldColor)
  }

  render() {
    return (
      <div>
        <div className={style.buttons}>
          <Button onClick={this.updateColor} disabled={this.state.color == newColor}>Set new color</Button>
          <Button onClick={this.resetColor} disabled={this.state.color == oldColor} optClass='danger'>Reset color</Button>
        </div>
        <code>{this.state.status}</code>
        <ColorPicker value={this.state.color} changeCallback={this.handleChange} />
      </div>
    )
  }
}

export default ExampleColorPickerCallback
