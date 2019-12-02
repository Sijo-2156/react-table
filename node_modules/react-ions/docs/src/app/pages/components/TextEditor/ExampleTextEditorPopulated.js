import React from 'react'
import TextEditor from 'react-ions/lib/components/TextEditor'

class ExampleTextEditorPopulated extends React.Component {
  constructor(props) {
    super(props)
  }

  state = {
    value: '<h1>Hello World!</h1><p><br></p><p>This is an <strong>example</strong> of some <em>editor</em> <u>content</u>!</p><p><br></p><ol><li>This is a list item</li><li>This is also a list item</li><li>I don\'t know what this is...</li></ol>'
  }

  handleChange = event => {
    console.log(event.target.value)
    this.setState({ value: event.target.value })
  }

  render = () => {
    return (
      <TextEditor value={this.state.value} changeCallback={this.handleChange} />
    )
  }
}

export default ExampleTextEditorPopulated
