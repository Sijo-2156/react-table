import React from 'react'
import {SortableList, SortableItem} from 'react-ions/lib/components/SortableList'
import Chip from 'react-ions/lib/components/Chip'
import style from './style.scss'

class ExampleSortableListNodes extends React.Component {
  constructor() {
    super()
  }

  state = {
    items: [
      {
        value: 'email',
        text: <div className={style['item-with-badge']}><span>Email</span><Chip text='Email badge' size='smaller' color='success' /></div>,
        active: true
      }, {
        value: 'push_notification',
        text: <div className={style['item-with-badge']}><span>Push Notification</span><Chip text='Push badge' size='smaller' color='success' /></div>,
        active: false
      }, {
        value: 'web',
        text: <div className={style['item-with-badge']}><span>Web</span><Chip text='Web badge' size='smaller' color='success' /></div>,
        active: false
      }, {
        value: 'sms',
        text: <div className={style['item-with-badge']}><span>SMS</span><Chip text='SMS badge' size='smaller' color='success' /></div>,
        active: false
      }
    ],
    count: 0
  }

  onChange = event => {
    console.log(event.target.value)
    this.setState({ items: event.target.value })
  }

  render() {
    return (
      <SortableList items={this.state.items} changeCallback={this.onChange} hideOrderNumbers={true} />
    )
  }
}

export default ExampleSortableListNodes
