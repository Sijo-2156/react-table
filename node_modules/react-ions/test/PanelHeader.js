import React from 'react'
import {Panel, PanelHeader, PanelContent} from '../src/components/PanelGroup'
import Icon from '../src/components/Icon'
import Badge from '../src/components/Badge'

describe('PanelHeader', () => {
  let panel, panelHeader, titleGroup, toggleIconWrap, contextNodeWrap

  it('should shallow render itself', () => {
    panelHeader = shallow(<PanelHeader title='Rating' contextIcon='check' />)
    titleGroup = panelHeader.childAt(0).childAt(0)
    toggleIconWrap = panelHeader.childAt(0).childAt(1)

    expect(panelHeader.hasClass('panel-header')).to.equal(true)
    expect(titleGroup.hasClass('title-group')).to.equal(true)
    expect(titleGroup.childAt(0).childAt(0).props().name).to.equal('check')
    expect(titleGroup.childAt(1).type()).to.equal('h4')
    expect(titleGroup.childAt(1).text()).to.equal('Rating')
    expect(toggleIconWrap.hasClass('toggle-icon')).to.equal(true)
    expect(toggleIconWrap.childAt(0).type()).to.equal(Icon)
    expect(toggleIconWrap.childAt(0).props().name).to.equal('md-keyboard-up')
  })

  it('should render with no title or icon', () => {
    panelHeader = shallow(<PanelHeader />)
    titleGroup = panelHeader.childAt(0).childAt(0)
    expect(titleGroup.children()).to.have.length(0)
  })

  it('should render title with a context node and a custom toggle icon', () => {
    panelHeader = shallow(<PanelHeader contextNode={<Badge text='1' />} toggleIcon={{name: 'check', size: '24'}} />)
    toggleIconWrap = panelHeader.childAt(0).childAt(1)
    contextNodeWrap = panelHeader.childAt(0).childAt(0).childAt(0)
    expect(toggleIconWrap.childAt(0).props().name).to.equal('check')
    expect(toggleIconWrap.childAt(0).props().height).to.equal('24')
    expect(toggleIconWrap.childAt(0).props().width).to.equal('24')
    expect(contextNodeWrap.hasClass('context-node')).to.equal(true)
    expect(contextNodeWrap.childAt(0).type()).to.equal(Badge)
  })

  it('should call an onClick handler when clicked when clicked', () => {
    var spy = sinon.spy()

    panel = shallow(<Panel optClass={'test'}><PanelHeader onClick={spy} /><PanelContent optClass='test-class'>Test Content</PanelContent></Panel>)
    panelHeader = panel.childAt(0).childAt(0)

    expect(typeof panelHeader.props().onClick).to.equal('function')
    panelHeader.simulate('click')
    expect(spy.calledOnce).to.be.true
  })
})
