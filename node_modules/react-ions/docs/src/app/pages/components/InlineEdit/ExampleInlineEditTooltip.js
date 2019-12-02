import React from 'react'
import InlineEdit from 'react-ions/lib/components/InlineEdit'
import Button from 'react-ions/lib/components/Button'
import style from './styles'

class ExampleInlineEditTooltip extends React.Component {
  constructor(props) {
    super(props)
  }

  state = {
    value: 'Example value',
    tooltipPlacement: 'right'
  }

  changeCallback = event => {
    this.setState({ value: event.target.value })
  }

  setTooltipPlacement = placement => {
    this.setState({ tooltipPlacement: placement })
  }

  render = () => {
    const buttons = {
      top: this.state.tooltipPlacement === 'top' ? 'success' : '',
      right: this.state.tooltipPlacement === 'right' ? 'success' : '',
      bottom: this.state.tooltipPlacement === 'bottom' ? 'success' : '',
      left: this.state.tooltipPlacement === 'left' ? 'success' : ''
    }

    return (
      <div>
        <InlineEdit name='test' value={this.state.value} tooltipClass={style['tooltip']} label='Email' icon='md-email' tooltipText={`The value is: '${this.state.value}'`} tooltipPlacement={this.state.tooltipPlacement} changeCallback={this.changeCallback} />
        <div className={style['button-callback']}>
          <p>Tooltip placement</p>
          <Button onClick={this.setTooltipPlacement.bind(this, 'top')} optClass={buttons.top}>Top</Button>
          <Button onClick={this.setTooltipPlacement.bind(this, 'right')} optClass={buttons.right}>Right</Button>
          <Button onClick={this.setTooltipPlacement.bind(this, 'bottom')} optClass={buttons.bottom}>Bottom</Button>
          <Button onClick={this.setTooltipPlacement.bind(this, 'left')} optClass={buttons.left}>Left</Button>
        </div>
      </div>
    )
  }
}

export default ExampleInlineEditTooltip
