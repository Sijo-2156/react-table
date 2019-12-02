import React from 'react'
import Nav from 'react-ions/lib/components/Nav'
import style from './style'

const data = [
  {
    name: 'Item 1',
    action: '/components/nav',
    nav: [
      {
        name: 'Internal Link',
        action: '/patterns'
      }, {
        name: 'External Link (New Window)',
        external: true,
        action: 'https://example.com'
      }, {
        name: 'External Link (Same Window)',
        external: true,
        self: true,
        action: 'https://example.com'
      }, {
        name: 'Callback function',
        action: function () {
          alert('callback')
        }
      }
    ]
  }, {
    name: 'Item 2',
    action: '/components/nav'
  }, {
    name: 'Item 3',
    action: '/components/nav'
  }
]

const ExampleNavDefault = () => (
  <Nav data={data} optClass={style.inverted} />
)

export default ExampleNavDefault
