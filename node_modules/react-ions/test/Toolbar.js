import React from 'react'
import Toolbar from '../src/components/TextEditor/Toolbar'

describe('Toolbar', () => {
  let wrapper

  const textEditor = {
    getSelection: sinon.stub().returns({ index: 0, length: 0 }),
    deleteText: sinon.spy(),
    insertText: sinon.spy(),
    setSelection: sinon.spy()
  }

  const mergeTags = [
    { name: 'Tag 1', tag: '{tag_1}' },
    { name: 'Tag 2', tag: '{tag_2}' },
    { name: 'Tag 3', tag: '{tag_3}' }
  ]

  const onMount = sinon.spy()

  it('should shallow render itself', () => {
    wrapper = shallow(<Toolbar textEditor={textEditor} onMount={onMount} />)

    const toolGroups = wrapper.children()

    expect(toolGroups).to.have.length(6)

    expect(toolGroups.at(0).find('.ql-font')).to.have.length(1)

    expect(toolGroups.at(1).find('.ql-header')).to.have.length(1)

    expect(toolGroups.at(2).find('.ql-align')).to.have.length(1)
    expect(toolGroups.at(2).find('.ql-bold')).to.have.length(1)
    expect(toolGroups.at(2).find('.ql-italic')).to.have.length(1)
    expect(toolGroups.at(2).find('.ql-strike')).to.have.length(1)
    expect(toolGroups.at(2).find('.ql-underline')).to.have.length(1)

    expect(toolGroups.at(3).find('.ql-color')).to.have.length(1)
    expect(toolGroups.at(3).find('.ql-background')).to.have.length(1)

    expect(toolGroups.at(4).find('.ql-list')).to.have.length(2)

    expect(toolGroups.at(5).find('.ql-link')).to.have.length(1)
    expect(toolGroups.at(5).find('.ql-image')).to.have.length(1)
    expect(toolGroups.at(5).find('.ql-clean')).to.have.length(1)
  })

  it('should have merge tags', () => {
    wrapper = shallow(<Toolbar textEditor={textEditor} mergeTags={mergeTags} onMount={onMount} />)

    const toolGroups = wrapper.children()

    expect(toolGroups).to.have.length(7)

    expect(toolGroups.at(6).find('MergeTags')).to.have.length(1)
  })
})
