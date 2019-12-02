import React from 'react'
import classNames from 'classnames'
import style from 'private/css/sidebar'
import Header from './Header'
import Nav from 'react-ions/lib/components/Nav'
import NavData from 'private/config/NavData'
import SidebarToggle from './SidebarToggle'

class Sidebar extends React.Component {
  constructor(props, context) {
    super(props, context)
  }

  toggle = () => {
    if (this.props.onSidebarClick) {
      this.props.onSidebarClick(this)
    }
  }

  render() {
    let sidebarClass = this.props.collapsed ? style.sidebar : classNames(style.sidebar, style.visible)

    return (
      <div className={sidebarClass}>
        <SidebarToggle toggle={this.toggle.bind(this)} collapsed={this.props.collapsed} />
        <Header />
        <Nav data={NavData} />
      </div>
    )
  }
}

export default Sidebar
