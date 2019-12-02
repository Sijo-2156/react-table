import React from 'react'
import Button from 'react-ions/lib/components/Button'
import style from './style.scss'

class ExampleButtonMultipleOptClasses extends React.Component {
  render = () => {
    const optClasses = [
      style['custom-background'],
      style['custom-color'],
      style['custom-color-hover']
    ]

    return (
      <Button optClass={optClasses}>Multiple Opt Classes</Button>
    )
  }
}

export default ExampleButtonMultipleOptClasses
