import React from 'react'
import PropTypes from 'prop-types'
import Spinner from '../Spinner/Spinner'
import style from './style.scss'
import optclass, { mapOptClass } from '../internal/OptClass'
import colors from '../internal/colors'

const Button = props => {
  const collapseClass = props.collapse ? 'collapse' : null
  const loaderClasses = props.loading ? 'loading' : null
  const btnClasses = optclass(style, [style.btn, props.size, loaderClasses, collapseClass], props.optClass, props.className)

  const styles = mapOptClass(props.optClass, {
    secondary: {
      color: colors.primary4
    },
    warning: {
      color: colors.white
    },
    inverted: {
      color: colors.primary1
    },
    danger: {
      color: colors.white
    },
    'danger-alt': {
      color: colors.danger
    },
    success: {
      color: colors.white
    },
    flat: {
      color: colors.neutral4
    },
    info: {
      color: colors.white
    },
    plain: {
      color: colors.primary4
    },
    'plain-light': {
      color: '#7b96b5'
    },
    default: {
      color: colors.white
    }
  })

  return (
    <button
      type={props.type}
      style={props.style}
      className={btnClasses}
      disabled={props.disabled || props.loading}
      aria-disabled={props.disabled || props.loading}
      onClick={props.onClick}
      onMouseEnter={props.onMouseEnter}
      onMouseLeave={props.onMouseLeave}
      onMouseDown={props.onMouseDown}
      onMouseOut={props.onMouseOut}
      onMouseOver={props.onMouseOver}
      onMouseUp={props.onMouseUp}
      onTouchCancel={props.onTouchCancel}
      onTouchEnd={props.onTouchEnd}
      onTouchMove={props.onTouchMove}
      onTouchStart={props.onTouchStart}
      >
      { props.loading &&
      <Spinner
        loading={props.loading}
        type='spinner-circular'
        backgroundColor={'transparent'}
        color={props.loaderColor || styles.color} 
        size='20'
      />
      }
      <em>{props.children}</em>
    </button>
  )
}

Button.defaultProps = {
  type: 'button'
}

Button.propTypes = {
  /**
   * The size of button.
   */
  size: PropTypes.string,
  /**
   * Whether the button is disabled.
   */
  disabled: PropTypes.bool,
  /**
   * Whether the loading spinner is displayed.
   */
  loading: PropTypes.bool,
  /**
   * Whether to display only an icon on small screens
   */
  collapse: PropTypes.bool,
  /**
   * Optional CSS class(es) to be used for local styles (string or array of strings)
   */
  optClass: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.string
  ]),
  /**
   * A function to be called onClick
   */
  onClick: PropTypes.func,
  /**
   * A function to be called onMouseEnter
   */
  onMouseEnter: PropTypes.func,
  /**
   * A function to be called onMouseLeave
   */
  onMouseLeave: PropTypes.func,
  /**
   * A function to be called onMouseDown
   */
  onMouseDown: PropTypes.func,
  /**
   * A function to be called onMouseOut
   */
  onMouseOut: PropTypes.func,
  /**
   * A function to be called onMouseOver
   */
  onMouseOver: PropTypes.func,
  /**
   * A function to be called onMouseUp
   */
  onMouseUp: PropTypes.func,
  /**
   * A function to be called onTouchCancel
   */
  onTouchCancel: PropTypes.func,
  /**
   * A function to be called onTouchEnd
   */
  onTouchEnd: PropTypes.func,
  /**
   * A function to be called onTouchMove
   */
  onTouchMove: PropTypes.func,
  /**
   * A function to be called onTouchStart
   */
  onTouchStart: PropTypes.func,
  /**
   * The type of button.
   */
  type: PropTypes.string,
  /**
   * A string to allow for inline styles
   */
  style: PropTypes.string,
  /**
   * A class name to be used for local styles or integrations (required to support styled-components)
   **/
  className: PropTypes.string,
  /**
   * A valid css color to set the color of the loader (if applicable).
   **/
  loaderColor: PropTypes.string
}

export default Button
