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
  },
  {
    path: 'subpage',
    title: 'Second Subpage'
  },
  {
    path: 'subpage',
    title: 'Third Subpage'
  }
]

const ExampleBreadcrumbMultipleSubpages = () => (
  <Breadcrumb routes={routes} />
)

export default ExampleBreadcrumbMultipleSubpages
