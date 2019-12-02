import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.scss'

const Color = props => {
  return (
    <div className={styles['color-box']}>
      <div className={styles['color-box-color']} style={ {backgroundColor: props.hex} }>
      </div>
      <div className={styles['color-box-value']}>
        <span>{ props.sass }</span>
        <span className={styles['hex-value']}>{ props.hex }</span>
      </div>
    </div>
  )
}

Color.propTypes = {
  hex: PropTypes.string.isRequired,
  sass: PropTypes.string.isRequired
}

export default Color
