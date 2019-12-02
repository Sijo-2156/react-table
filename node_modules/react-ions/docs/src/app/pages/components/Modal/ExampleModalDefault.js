import React from 'react'
import Modal from 'react-ions/lib/components/Modal'
import Button from 'react-ions/lib/components/Button'

class ExampleModalDefault extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false
    }
  }

  handleOpen = () => {
    this.setState({open: true})
  };

  handleClose = () => {
    this.setState({open: false})
  };

  render() {
    return (
      <div>
        <Button onClick={this.handleOpen}>Open Modal</Button>
        <Modal
          title="Default Modal"
          open={this.state.open}
          onRequestClose={this.handleClose}>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet diam accumsan, pretium nulla at, molestie magna. Suspendisse in eros in justo ultrices lacinia. Ut elementum lacinia elit eget laoreet. Phasellus finibus ex cursus nisl porta, eget cursus mauris ornare. Pellentesque dictum vestibulum quam id rhoncus. Fusce enim tellus, egestas in convallis vitae, ultrices vitae sapien. Nulla facilisis ante ac ipsum iaculis semper. Sed imperdiet viverra nunc sit amet rutrum. Quisque ac elit at odio sagittis facilisis ac varius mi. Quisque non enim ut justo iaculis accumsan eget mollis sapien. Duis sed mi eu sem semper volutpat. Sed vel condimentum arcu.</p>

          <p>Vivamus sollicitudin pharetra est, sed tincidunt diam volutpat vel. Nam vehicula a tellus eu fringilla. Nulla facilisi. Donec rhoncus eleifend dolor, ac fermentum odio efficitur sit amet. Phasellus iaculis metus eu dolor dapibus luctus. Nulla facilisi. Ut et turpis fringilla, lobortis justo sed, elementum dui. Vivamus feugiat libero sit amet lobortis faucibus. Aliquam fermentum mauris a diam blandit varius. Pellentesque maximus eget lectus vel scelerisque. Duis non augue et diam tempor tempor. Duis dictum est quis odio fermentum, sed accumsan ligula aliquet.</p>

          <p>Fusce euismod mattis eleifend. Nunc nec est tincidunt, cursus arcu sed, finibus tortor. Proin vestibulum id lectus id pulvinar. Phasellus sed libero sit amet enim ultrices interdum vitae vitae augue. Proin lobortis in est id faucibus. Curabitur lacus eros, efficitur in consectetur a, bibendum vel leo. Duis elit sem, lobortis nec aliquet eget, volutpat non turpis. Suspendisse facilisis ligula eu pellentesque hendrerit. Vestibulum rhoncus nisi vel vehicula viverra. Etiam tempor tellus et consectetur sodales. Fusce a porta neque, eget vestibulum risus. Quisque ut urna efficitur, ultricies diam vitae, sollicitudin turpis. Nulla ut tincidunt leo.</p>

          <p>Sed et velit orci. Integer nec magna quis turpis fringilla laoreet. Proin pulvinar erat nec ex lacinia molestie. Sed ut mauris finibus, iaculis leo eu, venenatis eros. Proin tempus, velit nec suscipit lacinia, urna eros blandit lectus, in interdum enim lacus id arcu. Mauris non mi felis. Donec quis nulla porttitor, congue purus nec, laoreet diam. Mauris a luctus purus.</p>

          <p>Nunc sodales nibh ut erat molestie, nec pellentesque sapien facilisis. Aenean mattis odio orci, eget aliquet diam faucibus non. Sed non leo sit amet metus tincidunt finibus id aliquet tellus. Integer blandit at arcu sit amet fringilla. Vestibulum scelerisque fermentum consectetur. Vestibulum tristique turpis at nisi pharetra, sollicitudin elementum erat malesuada. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce nulla lacus, ultricies sit amet metus eget, dignissim bibendum nulla. Duis eget libero quis sapien pharetra congue nec id nunc. Curabitur sagittis id enim vitae tincidunt. Nullam et dignissim erat. Praesent sem nisi, dapibus a finibus vel, ultricies vel sapien. Donec odio metus, fermentum a pellentesque at, dignissim ultricies felis. Proin pulvinar non mi eget pulvinar. Nulla vestibulum volutpat lectus, eget tincidunt lacus tempus sed. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
        </Modal>
      </div>
    )
  }
}

export default ExampleModalDefault
