import React from 'react'
import InlineEdit from 'react-ions/lib/components/InlineEdit'
import styles from './styles'

class ExampleInlineEditError extends React.Component {
  constructor(props) {
    super(props)
  }

  state = {
    inlineValue: 'I will have an error after saving',
    loading: false,
    error: '',
    count: 0
  }

  handleSave = event => {
    if (event.target.name === 'test') {
      this.setState({ loading: true, error: '' })

      if (event.target.canceled) {
        this.setState({ loading: false, error: '' })
      }
      else {
        setTimeout(() => {
          this.setState((prevState) =>
            ({ loading: false, count: prevState.count + 1, error: prevState.count === 0 ? 'This is an error' : '' }))
        }, 3000)
      }
    }
  }

  render() {
    return (
      <div>
        <InlineEdit copyToClipboard name='test' value={this.state.inlineValue} changeCallback={this.handleSave} placeholder='Custom Placeholder' loading={this.state.loading} error={this.state.error} />
      </div>
    )
  }
}

export default ExampleInlineEditError
