import React from 'react'
import DatePicker from 'react-ions/lib/components/DatePicker'
import Button from 'react-ions/lib/components/Button'
import style from './style.scss'

const oldDate = '2017-07-07'
const newDate = '2019-03-03'

class ExampleDatePickerCallback extends React.Component {
  constructor(props) {
    super(props)
  }

  _setStatus = date => {
    return 'Selected date is ' + date
  }

  _updateState = value => {
    this.setState({
      date: value,
      status: this._setStatus(value)
    })
  }

  state = {
    status: this._setStatus(oldDate),
    date: oldDate
  }

  handleChange = event => {
    const date = new Date()

    console.log('Date:' + event.target.value, 'Time:' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds() + '.' + date.getMilliseconds())
    this._updateState(event.target.value)
  }

  updateDate = () => {
    this._updateState(newDate)
  }

  resetDate = () => {
    this._updateState(oldDate)
  }

  render() {
    return (
      <div>
        <div className={style.buttons}>
          <Button onClick={this.updateDate} disabled={this.state.date == newDate}>Set new date</Button>
          <Button onClick={this.resetDate} disabled={this.state.date == oldDate} optClass='danger'>Reset date</Button>
        </div>
        <code>{this.state.status}</code>
        <DatePicker value={this.state.date} changeCallback={this.handleChange} />
      </div>
    )
  }
}

export default ExampleDatePickerCallback
