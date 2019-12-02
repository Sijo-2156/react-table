import React from 'react'
import { PanelContent } from '../src/components/PanelGroup'

describe('PanelContent', () => {
  let wrapper

  it('should shallow render itself', () => {
    wrapper = shallow(<PanelContent />)
    expect(wrapper.hasClass('panel-content')).to.equal(true)
    expect(wrapper.children()).to.have.length(0)
  })

  it('should render with an optional CSS class', () => {
    wrapper = shallow(<PanelContent optClass='test' />)
    expect(wrapper.hasClass('panel-content test')).to.equal(true)
  })

  it('should render with children', () => {
    wrapper = shallow(<PanelContent>Testing</PanelContent>)
    expect(wrapper.children()).to.have.length(1)
  })
})
