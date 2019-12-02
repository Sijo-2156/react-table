import React from 'react'
import InlineEdit from 'react-ions/lib/components/InlineEdit'
import styles from './styles'

class ExampleInlineEditEmpty extends React.Component {
  constructor(props) {
    super(props)
  }

  state = {
    inlineValue: null
  }

  handleSave = event => {
    if (event.target.name === 'test') {
      this.setState({ inlineValue: event.target.value })
    }
  }

  render = () => {
    return (
      <div>
        <InlineEdit name='test' value={this.state.inlineValue} changeCallback={this.handleSave} />
        <code>The Inline Edit value is '{this.state.inlineValue}'.</code>
      </div>
    )
  }
}

export default ExampleInlineEditEmpty
