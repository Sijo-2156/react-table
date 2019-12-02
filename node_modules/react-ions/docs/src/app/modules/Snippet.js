import React from 'react'
import ReactDOM from 'react'
import hljs from 'highlight.js'
import style from 'private/css/snippet'
import marked from 'marked'
import PropTypes from 'prop-types'

class CodeExample extends React.Component {
  constructor(props) {
    super(props)

    marked.setOptions({
      gfm: true,
      tables: true,
      breaks: false,
      pedantic: false,
      sanitize: false,
      smartLists: true,
      smartypants: false
    })
  }

  static propTypes = {
    markup: PropTypes.string.isRequired
  }

  componentDidMount() {
    this.highlightCode()
  }

  highlightCode() {
    var ref = this.refs.example
    var nodes = ref.querySelectorAll('pre')

    if (nodes.length > 0) {
      for (var i = 0; i < nodes.length; i = i + 1) {
        hljs.highlightBlock(nodes[i])
      }
    }
  }

  generateRawMarkup() {
    const text = `\`\`\`js
${this.props.markup}
    \`\`\``

    return {
      __html: marked(text)
    }
  }

  render() {
    return (
      <div className={style['snippet']}>
        <div ref='example' className={style.hljs} dangerouslySetInnerHTML={this.generateRawMarkup()} />
      </div>
    )
  }
}

export default CodeExample
