import React from 'react'
import Textarea from 'react-ions/lib/components/Textarea'
import Button from 'react-ions/lib/components/Button'
import style from './style.scss'

class ExampleTextareaPopulated extends React.Component {
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
        <Textarea name='textarea' value={this.state.text} changeCallback={this.handleChange} />
      </div>
    )
  }
}

export default ExampleTextareaPopulated
