import React from 'react'
import {PanelSlider, PanelHeader, Panel, PanelContent} from '../src/components/PanelGroup'

describe('PanelSlider', () => {
  let panelSlider, panel

  it('should shallow render itself', () => {
    panelSlider = shallow(<PanelSlider />)

    expect(panelSlider.find('div')).to.have.length(4)
    expect(panelSlider.hasClass('panel-slider')).to.equal(true)
  })

  it('should render with an optional CSS class', () => {
    panelSlider = shallow(<PanelSlider optClass='test' />)
    expect(panelSlider.hasClass('panel-slider test')).to.equal(true)
  })

  it('should render with one panel active', () => {
    panelSlider = shallow(<PanelSlider activePanel={0}><Panel><PanelContent>Test Content</PanelContent></Panel><Panel><PanelContent>Test Content</PanelContent></Panel></PanelSlider>)
    panel = panelSlider.childAt(0).childAt(0).childAt(0).childAt(0)

    expect(panel.props().panelIndex).to.equal(0)
  })

  it('should return a transform value', () => {
    panelSlider = shallow(<PanelSlider activePanel={0}><Panel><PanelContent>Test Content</PanelContent></Panel><Panel><PanelContent>Test Content</PanelContent></Panel></PanelSlider>)
    expect(panelSlider.instance().getStyle(1)).to.deep.equal({
      'transform': 'translateX(-100%)'
    })
  })

  it('should set an active panel in-state', () => {
    panelSlider = shallow(<PanelSlider activePanel={0}><Panel><PanelContent>Test Content</PanelContent></Panel><Panel><PanelContent>Test Content</PanelContent></Panel></PanelSlider>)
    panelSlider.instance().activatePanel(1)

    expect(panelSlider.state().panels).to.deep.equal([{active: false}, {active: true}])
  })

  it('should not return a PanelHeader', () => {
    panelSlider = shallow(<PanelSlider activePanels={[0]}><Panel><PanelContent>Test Content</PanelContent></Panel></PanelSlider>)

    expect(panelSlider.find(PanelHeader)).to.be.length(0)
  })
})
