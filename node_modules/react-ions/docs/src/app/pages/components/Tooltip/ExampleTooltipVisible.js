import React from 'react'
import Tooltip from 'react-ions/lib/components/Tooltip'
import Button from 'react-ions/lib/components/Button'

class ExampleTooltipVisible extends React.Component {
  constructor(props) {
    super(props)
  }

  state = {
    showing: true
  }

  handleVisibility = () => {
    this.setState({ showing: !this.state.showing })
  }

  render = () => {
    return (
      <div>
        <p>Umami four dollar toast craft beer polaroid <Tooltip tipWrapper='tooltip-visible-by-default' content='Visible tooltip' show={this.state.showing}>
          <a href='#'>visible</a></Tooltip> tooltip.
        </p>
        <Button onClick={this.handleVisibility}>{this.state.showing ? 'Hide' : 'Show'} Tooltip</Button>
      </div>
    )
  }
}

export default ExampleTooltipVisible
