import React from 'react'
import { PanelGroup, Panel, PanelHeader, PanelContent } from '../src/components/PanelGroup'

describe('PanelGroup', () => {
  let panelGroup, panel

  it('should shallow render itself', () => {
    panelGroup = shallow(<PanelGroup />)
    expect(panelGroup.find('div')).to.have.length(1)
    expect(panelGroup.hasClass('panel-group')).to.equal(true)
  })

  it('should render with an optional CSS class', () => {
    panelGroup = shallow(<PanelGroup optClass='test' />)
    expect(panelGroup.hasClass('panel-group test')).to.equal(true)
  })

  it('should render with one panel active', () => {
    panelGroup = shallow(<PanelGroup activePanels={[0]}><Panel><PanelHeader title='Rating' /><PanelContent>Test Content</PanelContent></Panel></PanelGroup>)
    panel = panelGroup.childAt(0)
    expect(panel.props().panelIndex).to.equal(0)
    expect(panel.props().active).to.equal(true)
    expect(typeof panel.props().onPanelClick).to.equal('function')
  })

  it('should render with two panels active', () => {
    panelGroup = shallow(<PanelGroup activePanels={[0, 1]}><Panel><PanelHeader title='Rating' /><PanelContent>Test Content</PanelContent></Panel><Panel><PanelHeader title='Rating' /><PanelContent>Test Content</PanelContent></Panel></PanelGroup>)
    panel = panelGroup.childAt(1)
    expect(panel.props().panelIndex).to.equal(1)
    expect(panel.props().active).to.equal(true)
  })

  it('should render with no active panels', () => {
    panelGroup = shallow(<PanelGroup><Panel><PanelHeader title='Rating' /><PanelContent>Test Content</PanelContent></Panel></PanelGroup>)
    panel = panelGroup.childAt(0)
    expect(panel.props().active).to.equal(false)
  })

  it('should trigger a panel toggle callback when a panel header is clicked', () => {
    const onPanelToggleStub = sinon.stub()

    panelGroup = shallow(<PanelGroup onPanelToggle={onPanelToggleStub}><Panel><PanelHeader title='Rating' /><PanelContent>Test Content</PanelContent></Panel><Panel><PanelHeader title='Rating' /><PanelContent>Test Content</PanelContent></Panel></PanelGroup>)
    panelGroup.instance().onPanelToggle()

    expect(onPanelToggleStub.calledOnce).to.be.true
    expect(onPanelToggleStub.calledWithExactly([])).to.be.true
  })

  it('should return a PanelHeader', () => {
    panelGroup = shallow(<PanelGroup activePanels={[0]}><Panel><PanelHeader title='Rating' /><PanelContent>Test Content</PanelContent></Panel></PanelGroup>)
    expect(panelGroup.find(PanelHeader)).to.be.length(1)
  })
})
