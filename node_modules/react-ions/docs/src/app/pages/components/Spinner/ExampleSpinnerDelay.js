import React from 'react'
import Button from 'react-ions/lib/components/Button'
import Spinner from 'react-ions/lib/components/Spinner'

class ExampleSpinnerDelay extends React.Component {
  constructor(props) {
    super(props)
  }

  state = {
    loading: true
  }

  cancelLoader = () => {
    this.setState({
      loading: false
    })
  }

  render() {
    return (
      <div>
        <Button onClick={this.cancelLoader}>{this.state.loading ? 'Cancel' : 'Canceled'}</Button>
        <Spinner loading={this.state.loading} delay={5000} type='spinner-bounce' position='inline' />
      </div>
    )
  }
}

export default ExampleSpinnerDelay
