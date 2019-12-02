import React from 'react'
import Button from 'react-ions/lib/components/Button'

class ExampleButtonLoaders extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      default: false,
      secondary: false,
      inverted: false,
      danger: false,
      dangerAlt: false,
      success: false,
      flat: false,
      info: false,
      plain: false,
      plainLight: false,
      palevioletred: false
    }
  }

  handleClick(button) {
    const component = this

    component.setState({ [button]: true }, function () {
      setTimeout(function () {
        component.setState({ [button]: false })
      }, 3000)
    })
  }

  render() {
    return (
      <div>
        <Button loading={this.state.default} onClick={this.handleClick.bind(this, 'default')}>Default</Button>
        <Button loading={this.state.secondary} onClick={this.handleClick.bind(this, 'secondary')} optClass='secondary'>Secondary</Button>
        <Button loading={this.state.inverted} onClick={this.handleClick.bind(this, 'inverted')} optClass='inverted'>Inverted</Button>
        <Button loading={this.state.danger} onClick={this.handleClick.bind(this, 'danger')} optClass='danger'>Danger</Button>
        <Button loading={this.state.dangerAlt} onClick={this.handleClick.bind(this, 'dangerAlt')} optClass='danger-alt'>Danger Alternative</Button>
        <Button loading={this.state.success} onClick={this.handleClick.bind(this, 'success')} optClass='success'>Success</Button>
        <Button loading={this.state.flat} onClick={this.handleClick.bind(this, 'flat')} optClass='flat'>Flat</Button>
        <Button loading={this.state.info} onClick={this.handleClick.bind(this, 'info')} optClass='info'>Info</Button>
        <Button loading={this.state.plain} onClick={this.handleClick.bind(this, 'plain')} optClass='plain'>Plain</Button>
        <Button loading={this.state['plainLight']} onClick={this.handleClick.bind(this, 'plainLight')} optClass='plain-light'>Plain Light</Button>
        <Button loading={this.state.palevioletred} loaderColor='palevioletred' onClick={this.handleClick.bind(this, 'palevioletred')} optClass='plain-light'>Palevioletred Loader</Button>
      </div>
    )
  }
}

export default ExampleButtonLoaders
