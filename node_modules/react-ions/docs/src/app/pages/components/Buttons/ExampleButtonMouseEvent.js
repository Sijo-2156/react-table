import React, { Component } from 'react'
import Button from 'react-ions/lib/components/Button'

class ExampleButtonMouseEvent extends Component {

  state = {
    eventType: 'The mouse has ______.'
  }

  handleMouseEnter = () => {
    this.setState({ eventType: 'The mouse has entered.' })
  }

  handleMouseLeave = () => {
    this.setState({ eventType: 'The mouse has left.' })
  }

  render() {
    return (
      <div>
        <Button onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>Hover over me</Button>
        <code>{this.state.eventType}</code>
      </div>
    )
  }
}

export default ExampleButtonMouseEvent
