import React from 'react'
import Avatar from 'react-ions/lib/components/Avatar'
import Button from 'react-ions/lib/components/Button'
import style from './style.scss'

class ExampleAvatar extends React.Component {
  constructor(props) {
    super(props)
  }

  state = {
    letters: 'cf',
    size: '100'
  }

  randomize = () => {
    const possible = 'abcdefghijklmnopqrstuvwxyz'
    let letters = ''

    for (let i = 0; i < 2; i++) {letters += possible.charAt(Math.floor(Math.random() * possible.length))}

    const size = (Math.floor(Math.random() * 200) + 30).toString()

    this.setState({ letters, size })
  }

  render = () => {
    return (
      <div>
        <Avatar letters={this.state.letters} size={this.state.size} />
        <div className={style['avatar-controls']}>
          <Button onClick={this.randomize}>Random letters/size</Button>
        </div>
      </div>
    )
  }
}

export default ExampleAvatar
