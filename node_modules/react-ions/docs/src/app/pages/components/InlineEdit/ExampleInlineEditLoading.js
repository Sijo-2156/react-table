import React from 'react'
import InlineEdit from 'react-ions/lib/components/InlineEdit'
import styles from './styles'

class ExampleInlineEditLoading extends React.Component {
  constructor(props) {
    super(props)
  }

  state = {
    inlineValue: 'I have a loader while saving',
    loading: false
  }

  handleSave = event => {
    if (event.target.name === 'test') {
      this.setState({ inlineValue: event.target.value, loading: true })

      setTimeout(() => {
        this.setState({ loading: false })
      }, 3000)
    }
  }

  render = () => {
    return (
      <InlineEdit name='test' value={this.state.inlineValue} changeCallback={this.handleSave} placeholder='Custom Placeholder' loading={this.state.loading} />
    )
  }
}

export default ExampleInlineEditLoading
