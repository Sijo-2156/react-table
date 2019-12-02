import React from 'react'
import Modal from 'react-ions/lib/components/Modal'
import Header from 'react-ions/lib/components/Modal/Header'
import Button from 'react-ions/lib/components/Button'
import Icon from 'react-ions/lib/components/Icon'

class ExampleModalColorSplash extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false
    }
  }

  handleOpen = () => {
    this.setState({open: true})
  }

  handleClose = () => {
    this.setState({open: false})
  }

  render() {
    return (
      <div>
        <Button onClick={this.handleOpen}>Open Modal</Button>
        <Modal
          title={
            <Header handleClose={this.handleClose}>
              <h1>Modal Title</h1>
            </Header>
          }
          size='md'
          open={this.state.open}
          onRequestClose={this.handleClose}
          theme='color-splash'>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet diam accumsan, pretium nulla at, molestie magna. Suspendisse in eros in justo ultrices lacinia. Ut elementum lacinia elit eget laoreet. Phasellus finibus ex cursus nisl porta, eget cursus mauris ornare. Pellentesque dictum vestibulum quam id rhoncus. Fusce enim tellus, egestas in convallis vitae, ultrices vitae sapien. Nulla facilisis ante ac ipsum iaculis semper. Sed imperdiet viverra nunc sit amet rutrum. Quisque ac elit at odio sagittis facilisis ac varius mi. Quisque non enim ut justo iaculis accumsan eget mollis sapien. Duis sed mi eu sem semper volutpat. Sed vel condimentum arcu.</p>

          <p>Nunc sodales nibh ut erat molestie, nec pellentesque sapien facilisis. Aenean mattis odio orci, eget aliquet diam faucibus non. Sed non leo sit amet metus tincidunt finibus id aliquet tellus. Integer blandit at arcu sit amet fringilla. Vestibulum scelerisque fermentum consectetur. Vestibulum tristique turpis at nisi pharetra, sollicitudin elementum erat malesuada. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce nulla lacus, ultricies sit amet metus eget, dignissim bibendum nulla. Duis eget libero quis sapien pharetra congue nec id nunc. Curabitur sagittis id enim vitae tincidunt. Nullam et dignissim erat. Praesent sem nisi, dapibus a finibus vel, ultricies vel sapien. Donec odio metus, fermentum a pellentesque at, dignissim ultricies felis. Proin pulvinar non mi eget pulvinar. Nulla vestibulum volutpat lectus, eget tincidunt lacus tempus sed. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
        </Modal>
      </div>
    )
  }
}

export default ExampleModalColorSplash
