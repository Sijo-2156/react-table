import React from 'react'
import PropTypes from 'prop-types'
import { paths } from '../../assets/icons/generated-list'

const Icon = props => {
  const {
    name, width, height, fill, className, onClick
  } = props

  const obj = paths.find(item => item.name === name)

  const createMarkup = data => ({ __html: data })

  const getData = () => {
    if (obj === undefined) return

    const data = obj !== undefined && obj.data

    return data
  }

  return (
    <svg
      role='img'
      name={name}
      width={width}
      height={height}
      fill={fill}
      className={className}
      onClick={onClick}
      style={onClick && {cursor: 'pointer'}}
      viewBox='0 0 24 24'
      // We control the exact content being injected here, 
      // thus this is considered to be "safe" injection
      // See scripts/gen-sprite.js for details
      dangerouslySetInnerHTML={createMarkup(getData())}>
    </svg>
  )
}

Icon.defaultProps = {
  height: '24',
  width: '24'
}

Icon.propTypes = {
  /**
   * The name of the icon.
   */
  name: PropTypes.string.isRequired,
  /**
   * The width of the icon.
   */
  width: PropTypes.string,
  /**
   * The height of the icon.
   */
  height: PropTypes.string,
  /**
   * The color (fill) of the icon.
   */
  fill: PropTypes.string,
  /**
   * The CSS class of the icon.
   */
  className: PropTypes.string,
  /**
   * A function to be called on click
   */
  onClick: PropTypes.func
}

export default Icon
