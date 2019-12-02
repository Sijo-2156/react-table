import React, { PureComponent } from 'react'
import ReactDOM from 'react'
import hljs from 'highlight.js'
import Button from 'react-ions/lib/components/Button'
import Icon from 'react-ions/lib/components/Icon'
import style from 'private/css/code-example'
import marked from 'marked'
import classNames from 'classnames/bind'
import PropTypes from 'prop-types'

class CodeExample extends PureComponent {
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
    markup: PropTypes.string,
    description: PropTypes.string,
    title: PropTypes.string
  }

  state = {
    expand: false
  }

  componentDidMount = () => {
    this.props.markup ? this.highlightCode() : null
  }

  handleToggle = () => {
    this.setState({expand: !this.state.expand})
  }

  createDescription = () => {
    return {
      __html: marked(this.props.description)
    }
  }

  getDescriptionNode = () => {
    return this.props.description
             ? <div className={style.description} dangerouslySetInnerHTML={this.createDescription()} />
             : null
  }

  highlightCode = () => {
    var ref = this.refs.example
    var nodes = ref.querySelectorAll('pre code')

    if (nodes.length > 0) {
      for (var i = 0; i < nodes.length; i = i + 1) {
        hljs.highlightBlock(nodes[i])
      }
    }
  }

  generateRawMarkup = () => {
    // Looks ugly but needs to be formatted this way to avoid a tab on the first line
    const text = (
      `\`\`\`js
${this.props.markup}
      \`\`\``
    )

    return {
      __html: marked(text)
    }
  }

  render() {
    const cx = classNames.bind(style)
    const componentClass = cx(style.component, this.props.optClass)
    const codeExampleClass = cx({'body': true, 'open': this.state.expand})
    const codeExampleBtnClass = cx({'active': this.state.expand})

    return (
      <div className={style['code-example-wrap']}>
        <header>
          <h3>{this.props.title}</h3>
          {this.props.markup &&
            <Button onClick={this.handleToggle} optClass={codeExampleBtnClass}>
              <div className={style['button-icon-wrap']}>
                <Icon name='md-chevron-left' width='12' height='12' fill='white' />
                <Icon name='md-chevron-right' width='12' height='12' fill='white' />
              </div>
            </Button>
          }
        </header>
        <div className={codeExampleClass}>
          <div ref='example' className={style.hljs} dangerouslySetInnerHTML={this.generateRawMarkup()} />
        </div>
        <div className={componentClass}>
          {this.props.children}
        </div>
        {this.getDescriptionNode()}
      </div>
    )
  }
}

export default CodeExample
