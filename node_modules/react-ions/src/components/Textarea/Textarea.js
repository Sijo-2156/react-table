import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import style from './style.scss'

/**
 * The Textarea component.
 */
class Textarea extends React.Component {
  constructor(props) {
    super(props)
  }

  state = {
    value: this.props.value
  }

  static defaultProps = {
    disabled: false,
    value: ''
  }

  static propTypes = {
    /**
     * A class name to be used for local styles or integrations (required to support styled-components)
     */
    className: PropTypes.string,
    /**
     * Name of the textarea.
     */
    name: PropTypes.string,
    /**
     * Whether the textarea is disabled.
     */
    disabled: PropTypes.bool,
    /**
     * Whether the textarea is read only.
     */
    readOnly: PropTypes.bool,
    /**
     * Text shown above the textarea.
     */
    label: PropTypes.string,
    /**
     * Value of the textarea.
     */
    value: PropTypes.string,
    /**
     * Optional placeholder text.
     */
    placeholder: PropTypes.string,
    /**
     * Optional styles to add to the textarea.
     */
    optClass: PropTypes.string,
    /**
     * A callback function to be called when the textarea changes.
     */
    changeCallback: PropTypes.func,
    /**
     * A callback function to be called when the textarea is focused.
     */
    focusCallback: PropTypes.func,
    /**
     * A callback function to be called when the textarea is blurred.
     */
    blurCallback: PropTypes.func,
    /**
     * An attribute will add an explicit height (in pixels) to the textarea.
     */
    height: PropTypes.string
  }

  UNSAFE_componentWillReceiveProps = nextProps => {
    if (nextProps.value !== this.props.value) {
      this.setState({ value: nextProps.value })
    }
  }

  handleChange = event => {
    event.persist()

    this.setState({value: event.target.value}, () => {
      if (typeof this.props.changeCallback === 'function') {
        this.props.changeCallback({
          target: {
            name: this.props.name,
            value: event.target.value
          }
        })
      }
    })
  }

  handleFocus = event => {
    if (typeof this.props.focusCallback === 'function') {
      this.props.focusCallback(event)
    }
  }

  handleBlur = event => {
    if (typeof this.props.blurCallback === 'function') {
      this.props.blurCallback(event)
    }
  }

  render() {
    const { disabled, label, optClass, className, height, readOnly, placeholder } = this.props

    const cx = classNames.bind(style)
    const heightStyle = height ? { height: height } : null
    var disabledClass = disabled ? style['textarea-disabled'] : ''
    var textareaClass = cx(style['textarea-component'], optClass, className, disabledClass)

    return (
      <div className={textareaClass}>
        { label ? <label>{label}</label> : null }
        <textarea
          value={this.state.value}
          onFocus={this.handleFocus}
          onChange={this.handleChange}
          onBlur={this.handleBlur}
          disabled={disabled}
          readOnly={readOnly}
          placeholder={placeholder}
          style={heightStyle}
        >
        </textarea>
      </div>
    )
  }
}

export default Textarea
