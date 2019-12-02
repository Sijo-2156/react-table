import React, { Fragment } from 'react'
import Chip from 'react-ions/lib/components/Chip'

const inlineStyle = {
  marginRight: '2px',
  textTransform: 'capitalize'
}

const chipList = [
  'neutral-1',
  'neutral-2',
  'neutral-3',
  'neutral-4',
  'primary-1',
  'primary-2',
  'primary-3',
  'primary-4',
  'primary-5',
  'primary-6',
  'danger',
  'warning',
  'success',
  'info',
]

const chips = () => {
  return chipList.map((chip, index) => {
    return <Chip key={index} text={chip} color={chip} style={inlineStyle} />
  })
}

const ExampleChipDefault = () => (
  <Fragment>
    {chips()}
  </Fragment>
)

export default ExampleChipDefault
