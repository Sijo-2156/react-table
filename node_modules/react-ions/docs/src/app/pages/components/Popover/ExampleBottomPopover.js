import React from 'react'
import Popover from 'react-ions/lib/components/Popover'
import Button from 'react-ions/lib/components/Button'
import StyledDiv from 'react-ions/lib/components/StyledDiv'
import localStyle from './style.scss'

class ExampleBottomPopover extends React.Component {
  constructor(props) {
    super(props)
  }

  state = {
    showing: false
  }

  togglePopover = () => {
    this.setState({ showing: !this.state.showing })
  }

  getPopoverContent = () => (
    <div>
      <h1>Lorem ipsum dolor sit amet.</h1>
      <p>Lorem ipsum dolor sit amet, consectetur.</p>
      <Button onClick={this.togglePopover} optClass={localStyle['popover-btn']}>Close</Button>
    </div>
  )

  render = () => (
    <StyledDiv css={{ display: 'flex', justifyContent: 'space-around' }}>
      <Popover
        showing={this.state.showing}
        defaultPosition='bottom'
        content={this.getPopoverContent()}
        maxHeight='280px'
        onRequestClose={this.togglePopover}
      >
        <Button onClick={this.togglePopover}>
          { this.state.showing.left ? 'Close' : 'Open' } Bottom popover
        </Button>
      </Popover>
    </StyledDiv>
  )
}

export default ExampleBottomPopover
