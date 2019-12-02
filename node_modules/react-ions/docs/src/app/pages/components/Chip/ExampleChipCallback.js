import React from 'react'
import Chip from 'react-ions/lib/components/Chip'

const ExampleChipCallback = () => (
  <Chip text='Upgrade now' size='smaller' color='neutral-1' clickCallback={() => alert('you clicked the chip')} />
)

export default ExampleChipCallback
