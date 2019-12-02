import React from 'react'
import MergeTags from '../src/components/TextEditor/MergeTags'

describe('MergeTags', () => {
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

  it('should shallow render itself', () => {
    wrapper = shallow(<MergeTags textEditor={textEditor} mergeTags={mergeTags} />)

    const dropdownItems = wrapper.find('WrappedDropdown').at(0).props().listItems

    expect(dropdownItems).to.have.length(3)
    expect(dropdownItems[0].name).to.equal('Tag 1')
    expect(typeof dropdownItems[0].callback === 'function').to.be.true
    expect(dropdownItems[1].name).to.equal('Tag 2')
    expect(typeof dropdownItems[1].callback === 'function').to.be.true
    expect(dropdownItems[2].name).to.equal('Tag 3')
    expect(typeof dropdownItems[2].callback === 'function').to.be.true
  })

  it('should insert a tag', () => {
    wrapper = shallow(<MergeTags textEditor={textEditor} mergeTags={mergeTags} />)

    wrapper.instance().insertTag('{tag_1}')

    expect(textEditor.getSelection.calledWithExactly(true)).to.be.true
    expect(textEditor.deleteText.called).to.be.false
    expect(textEditor.insertText.calledWithExactly(0, '{tag_1}')).to.be.true
    expect(textEditor.setSelection.calledWithExactly(7)).to.be.true
  })

  it('should delete selected text and insert a tag', () => {
    const textEditor = {
      getSelection: sinon.stub().returns({ index: 5, length: 12 }),
      deleteText: sinon.spy(),
      insertText: sinon.spy(),
      setSelection: sinon.spy()
    }

    wrapper = shallow(<MergeTags textEditor={textEditor} mergeTags={mergeTags} />)

    wrapper.instance().insertTag('{tag_1}')

    expect(textEditor.getSelection.calledWithExactly(true)).to.be.true
    expect(textEditor.deleteText.calledWithExactly(5, 12)).to.be.true
    expect(textEditor.insertText.calledWithExactly(5, '{tag_1}')).to.be.true
    expect(textEditor.setSelection.calledWithExactly(12)).to.be.true
  })
})
