import React from 'react'
import Dropdown from 'react-ions/lib/components/Dropdown'
import Button from 'react-ions/lib/components/Button'
import Badge from 'react-ions/lib/components/Badge'
import styles from './styles'

const ExampleDropdownButton = () => (
  <Dropdown trigger={<Button>Dropdown</Button>}>
    <div className={styles.wrapper}>
      <Badge icon='md-check' theme='success' /><span>Dropdown content here.</span>
    </div>
  </Dropdown>
)

export default ExampleDropdownButton
