import React from 'react'
import Checkbox from 'react-ions/lib/components/Checkbox'

const ExampleCheckboxDefault = () => (
  <Checkbox
    label={<span>Label with a <a href='http://www.getambassador.com' target='_blank' style={{position: 'relative', zIndex: '3'}}>link</a></span>}
    value={false}
  />
)

export default ExampleCheckboxDefault
