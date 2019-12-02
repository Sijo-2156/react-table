import React from 'react'
import Input from 'react-ions/lib/components/Input'
import Button from 'react-ions/lib/components/Button'
import style from './style.scss'

class ExampleInputPopulated extends React.Component {
  constructor(props) {
    super(props)
  }

  state = {
    text: 'Test text'
  };

  addPeriod = () => {
    this.setState({ text: this.state.text + '.' })
  }

  handleChange = event => {
    this.setState({ text: event.target.value })
  }

  render() {
    return (
      <div>
        <div className={style.update}>
          <Button onClick={this.addPeriod}>Append a period</Button>
        </div>
        <Input value={this.state.text} changeCallback={this.handleChange} />
      </div>
    )
  }
}

export default ExampleInputPopulated
