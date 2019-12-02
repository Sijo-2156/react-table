import React, { Component } from 'react'
import { array, string, func } from 'prop-types'

export const WithObjectValue = WrappedComponent => class extends Component {
  constructor(props) {
    super(props)
  }

  static props = {
    changeCallback: func,
    options: array,
    value: array,
    valueProp: string
  }

  // Convert full object values to shallow array based on value prop
  flatten = (inflatedValue = []) => inflatedValue.map(v => v[this.props.valueProp])

  // Convert to shallow array to full object array by finding each valueProp in the options
  inflate = (flatValue = []) => {
    let inflatedValue = []

    for (let index = 0; index < this.props.options.length; index++) {
      const currentOption = this.props.options[index]

      // Push full option into inflatedValue if the value exists in the flatValue array
      if (flatValue.includes(currentOption[this.props.valueProp])) {
        inflatedValue.push(currentOption)
      }

      // Stop loop if all values have been found
      if (inflatedValue.length === flatValue.length) return inflatedValue
    }

    return inflatedValue
  }

  handleChanges = event => {
    if (typeof this.props.changeCallback === 'function') {
      this.props.changeCallback({
        ...event,
        target: {
          ...event.target,
          value: this.inflate(event.target.value)
        }
      })
    }
  }

  render = () => {
    const { value, changeCallback, ...otherProps } = this.props
    const flatValue = this.flatten(value)

    return <WrappedComponent value={flatValue} changeCallback={this.handleChanges} {...otherProps} />
  }
}

export default WithObjectValue
