import React from 'react'
import ButtonConfirmation from 'react-ions/lib/components/Button/ButtonConfirmation'
import style from './style'

class ExampleButtonConfirmationLoader extends React.Component {
  constructor(props) {
    super(props)
  }

  state = {
    loading: false
  }

  handleConfirmation = event => {
    this.setState({loading: true}, () => {
      setTimeout(() => {
        this.setState({loading: false})
      }, 3000)
    })
  }

  render() {
    return (
      <div>
        <div className={style['custom-confirmation-wrapper']}>
          <ButtonConfirmation loading={this.state.loading} prompt={'Are you sure?'} position={'left'} handleConfirmation={this.handleConfirmation}>Test</ButtonConfirmation>
        </div>
      </div>
    )
  }
}

export default ExampleButtonConfirmationLoader
