import React from 'react'
import ButtonConfirmation from 'react-ions/lib/components/Button/ButtonConfirmation'
import Icon from 'react-ions/lib/components/Icon'
import style from './style.scss'

const ExampleButtonConfirmation = () => (
  <div className={style['custom-confirmation-wrapper']}>
    <ButtonConfirmation position={'left'} collapse={true}>Left</ButtonConfirmation>
    <ButtonConfirmation prompt={'Are you sure you are not a robot?'} optClass='danger'>Delete</ButtonConfirmation>
    <ButtonConfirmation prompt={'You are definitely not a robot right? That would be unfortunate. Also does that mean that you are skynet? Please tell me you are not skynet!'} position={'right'}>Right</ButtonConfirmation>
  </div>
)

export default ExampleButtonConfirmation
