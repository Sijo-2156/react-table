import React from 'react'
import Tooltip from 'react-ions/lib/components/Tooltip'
import style from './style'

class ExampleTooltipCallbacks extends React.Component {
  constructor(props) {
    super(props)
  }

  state = {
    status: 'You are not hovering'
  }

  handleMouseOver = () => {
    this.setState({ status: 'You are hovering'})
  }

  handleMouseOut = () => {
    this.setState({ status: 'You are not hovering'})
  }

  render = () => {
    return (
      <div>
        <Tooltip content='Tooltip with callbacks' tooltipPlacement='right' mouseOverCallback={this.handleMouseOver} mouseOutCallback={this.handleMouseOut}>
          hover here
        </Tooltip>
        <code className={style['callback-status']}>{this.state.status}</code>
      </div>
    )
  }
}

export default ExampleTooltipCallbacks
