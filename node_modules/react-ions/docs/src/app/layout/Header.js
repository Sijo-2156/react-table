import React from 'react'
import { Link } from 'react-router'
import style from 'private/css/header'
import logo from 'private/images/ambassador-logo.svg'

const Header = () => {
  return (
    <header>
      <Link to="/" className={style['logo-wrap']}>
        <img src={logo} className={style.logo} alt="Ambassador Reactions" />
      </Link>
    </header>
  )
}

export default Header
