import React from 'react'
import Dropdown from 'react-ions/lib/components/Dropdown'
import Button from 'react-ions/lib/components/Button'
import styles from './styles.scss'

class ExampleDropdownRightAlign extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const listItems = [
      { name: 'Item 1 with alignment' },
      { name: 'Item 2 with alignment' },
      { name: 'Item 3 with alignment' }
    ]

    return (
      <div className={styles['right-align-example']}>
        <Dropdown trigger={<Button>Open</Button>} listItems={listItems} alignment='right' />
      </div>
    )
  }
}

export default ExampleDropdownRightAlign
