import React from 'react'
import Breadcrumb from 'react-ions/lib/components/Breadcrumb'

const routes = [
  {
    path: 'page',
    title: 'Page'
  },
  {
    path: 'subpage',
    title: 'Subpage'
  }
]

const ExampleBreadcrumbDefault = () => (
  <Breadcrumb routes={routes} />
)

export default ExampleBreadcrumbDefault
