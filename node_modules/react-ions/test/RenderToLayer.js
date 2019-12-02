import React from 'react'
import RenderToLayer from '../src/components/internal/RenderToLayer'

describe('RenderToLayer', () => {

  function renderElem() {
    return (
      <div className="test-div"></div>
    )
  }

  afterEach(function () {
    var elems = document.body.children

    document.body.removeChild(elems[elems.length - 1])
  })

  it('should render an element at the bottom of the document body when the open property is set to true', () => {
    const wrapper = mount(<RenderToLayer render={renderElem} open={true} />)

    expect(document.body.getElementsByClassName('test-div')).to.have.length(1)
  })

  it('should remove a rendered element from the bottom of the document body when the open property is set to false', () => {
    const wrapper = mount(<RenderToLayer render={renderElem} open={true} />)

    expect(document.body.getElementsByClassName('test-div')).to.have.length(1)

    wrapper.setProps({open: false})

    expect(document.body.getElementsByClassName('test-div')).to.have.length(0)
  })

  it('should remove a rendered element from the bottom of the document body when the component is unmounted', () => {
    const wrapper = mount(<RenderToLayer render={renderElem} open={true} />)

    expect(document.body.getElementsByClassName('test-div')).to.have.length(1)

    wrapper.unmount()

    expect(document.body.getElementsByClassName('test-div')).to.have.length(0)
  })

  it('should not try to remove the rendered element twice', () => {
    const wrapper = mount(<RenderToLayer render={renderElem} open={true} />)

    expect(document.body.getElementsByClassName('test-div')).to.have.length(1)

    wrapper.setProps({open: false})

    expect(document.body.getElementsByClassName('test-div')).to.have.length(0)

    wrapper.unmount()

    expect(document.body.getElementsByClassName('test-div')).to.have.length(0)
  })
})
