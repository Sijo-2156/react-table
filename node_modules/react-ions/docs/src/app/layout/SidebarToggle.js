import React from 'react'
import classNames from 'classnames'
import style from 'private/css/sidebar-toggle'

const SidebarToggle = props => {
  let sidebarToggleClass = props.collapsed ? style['sidebar-toggle'] : classNames(style['sidebar-toggle'], style['sidebar-visible'])

  return (
    <button className={sidebarToggleClass} onClick={props.toggle}>
      <div className={style['burger-piece']}></div>
      <div className={style['burger-piece']}></div>
      <div className={style['burger-piece']}></div>
    </button>
  )
}

export default SidebarToggle
