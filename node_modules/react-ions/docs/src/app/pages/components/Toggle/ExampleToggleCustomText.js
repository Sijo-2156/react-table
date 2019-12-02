import React from 'react'
import Toggle from 'react-ions/lib/components/Toggle'
import style from './style.scss'

const ExampleToggleCustomText = () => (
  <div>
    <div className={style['custom-text-block']}>
      <Toggle hasText={true}/>
    </div>
    <div>
      <Toggle label='Toggle with Label' hasText={true}/>
    </div>
  </div>
)

export default ExampleToggleCustomText
