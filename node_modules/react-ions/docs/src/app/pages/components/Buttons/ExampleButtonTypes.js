import React from 'react'
import Button from 'react-ions/lib/components/Button'

const ExampleButtonTypes = () => (
  <div>
    <div>
      <Button>Default</Button>
      <Button optClass='secondary'>Secondary</Button>
      <Button optClass='warning'>Warning</Button>
      <Button optClass='inverted'>Inverted</Button>
      <Button optClass='danger'>Danger</Button>
      <Button optClass='danger-alt'>Danger Alternative</Button>
      <Button optClass='success'>Success</Button>
      <Button optClass='flat'>Flat</Button>
      <Button optClass='info'>Info</Button>
      <Button optClass='plain'>Plain</Button>
      <Button optClass='plain-light'>Plain Light</Button>
    </div>
    <div style={{marginTop: '1em'}}>
      <h4>With the `fill` optClass</h4>
      <Button optClass='fill'>Default</Button>
    </div>
  </div>
)

export default ExampleButtonTypes
