import React from 'react'
import { AlertSystem } from 'react-ions/lib/components/Alerts'
import Button from 'react-ions/lib/components/Button'
import Input from 'react-ions/lib/components/Input'
import style from './style.scss'

class ExampleAlertSystemDefault extends React.Component {
  constructor(props) {
    super(props)
  }

  state = {
    alerts: []
  }

  onCloseCallback = alert => {
    console.log(alert)
  }

  addAlert = type => {
    let alerts = this.state.alerts

    alerts.push({ type: type, content: this._alertText.state.value, onClose: this.onCloseCallback, timeout: 5000 })
    this.setState({ alerts: alerts })
  }

  render() {
    return (
      <div>
        <Input value='Alert text' placeholder='Alert text' ref={c => this._alertText = c} />
        <div className={style.buttons}>
          <Button onClick={this.addAlert.bind(this, 'success')} optClass="success">Add Success Alert</Button>
          <Button onClick={this.addAlert.bind(this, 'warning')} optClass={style['warning-btn']}>Add Warning Alert</Button>
          <Button onClick={this.addAlert.bind(this, 'info')} optClass="default">Add Info Alert</Button>
          <Button onClick={this.addAlert.bind(this, 'danger')} optClass="danger">Add Danger Alert</Button>
        </div>
        <AlertSystem alerts={this.state.alerts} slideIn={true} />
      </div>
    )
  }
}

export default ExampleAlertSystemDefault
