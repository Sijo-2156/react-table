import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.scss'

const Font = props => {
  return (
    <div className={styles['font-box']}>
      <div className={styles['font-box-aa']} style={ {fontFamily: props.fontFamily, fontWeight: props.fontWeight, fontStyle: props.fontStyle} }>
        Aa
      </div>
      <div className={styles['font-box-weight']}>
        <span>{ props.weight }</span>
      </div>
    </div>
  )
}

Font.propTypes = {
  fontFamily: PropTypes.string.isRequired,
  fontWeight: PropTypes.string.isRequired,
  fontStyle: PropTypes.string.isRequired,
  weight: PropTypes.string.isRequired
}

export default Font
