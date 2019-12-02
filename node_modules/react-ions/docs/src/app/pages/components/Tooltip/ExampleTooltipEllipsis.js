import React from 'react'
import Tooltip from 'react-ions/lib/components/Tooltip'
import style from './style'

class ExampleTooltipEllipsis extends React.Component {
  constructor(props) {
    super(props)
  }

  state = {
    text: 'this text is pretty long so it should have an ellipsis'
  }

  render = () => {
    return (
      <div>
        <Tooltip content={this.state.text} tooltipPlacement='right' detectEllipsis={true}>
          <span className={style['truncate-text']}>{this.state.text}</span>
        </Tooltip>
      </div>
    )
  }
}

export default ExampleTooltipEllipsis
