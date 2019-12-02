import React from 'react'
import Tooltip from '../src/components/Tooltip/Tooltip'

describe.skip('Tooltip', () => {
  let wrapper, tip, spy, stub, inst

  // Mocking the #app div, so we can render the tooltip
  const appDiv = global.document.createElement('div')

  appDiv.setAttribute('id', 'app')
  global.document.body.appendChild(appDiv)

  const gbcrObject = {
    width: 100,
    left: 100,
    right: 200,
    top: 0,
    bottom: 50
  }

  const willUnmount = sinon.spy()

  const mountRender = props => {
    const mountWrapper = mount(<Tooltip content='Testing the top tooltip' {...props}>Test text</Tooltip>, { attachTo: appDiv })

    return mountWrapper
  }

  const shallowRender = props => {
    const shallowWrapper = mount(<Tooltip content='Testing the top tooltip' {...props}>Test text</Tooltip>)

    return shallowWrapper
  }

  it('should shallow render itself with default options (top placement)', () => {
    wrapper = mountRender()
    tip = appDiv.childNodes[1]

    expect(tip.getAttribute('class')).to.equal('tip-wrapper')
    expect(tip.getAttribute('id')).to.equal('tip-wrapper')
    expect(willUnmount.callCount).to.equal(0)

    wrapper.unmount()
  })

  it.skip('should display the tooltip when the show prop is passed', done => {
    wrapper = mountRender({
      show: true
    })
    inst = wrapper.instance()
    tip = appDiv.childNodes[1]
    stub = sinon.stub(inst, 'getTipElementBoundingRect').returns(gbcrObject)

    setTimeout(() => {
      expect(tip.getAttribute('class')).to.equal('tip-wrapper is-visible top')
      expect(tip.textContent).to.equal('Testing the top tooltip')
      done()
    }, 1500)

    wrapper.unmount()
  })

  it.skip('should render with an alternate tip wrapper and an optClass', done => {
    wrapper = mountRender({
      tipWrapper: 'random-wrapper',
      optClass: 'opt-class',
      show: true
    })
    inst = wrapper.instance()
    tip = appDiv.childNodes[1]
    stub = sinon.stub(inst, 'getTipElementBoundingRect').returns(gbcrObject)

    setTimeout(() => {
      expect(tip.getAttribute('id')).to.equal('random-wrapper')
      expect(tip.getAttribute('class')).to.equal('random-wrapper is-visible opt-class top')
      done()
    }, 1500)

    wrapper.unmount()
  })

  it.skip('should render with a different tip placement', done => {
    wrapper = mountRender({
      tooltipPlacement: 'right',
      show: true
    })
    inst = wrapper.instance()
    tip = appDiv.childNodes[1]
    stub = sinon.stub(inst, 'getTipElementBoundingRect').returns(gbcrObject)

    setTimeout(() => {
      expect(tip.getAttribute('class')).to.equal('tip-wrapper is-visible right')
      done()
    }, 1500)

    wrapper.unmount()
  })

  it('should return a node', () => {
    wrapper = mountRender()
    tip = appDiv.childNodes[1]

    expect(wrapper.instance().nodeReference().getAttribute('id')).to.equal('tip-wrapper')

    wrapper.unmount()
  })

  it('should return a node with a custom ID', () => {
    wrapper = mountRender({tipWrapper: 'test-wrapper'})
    tip = appDiv.childNodes[1]

    expect(wrapper.instance().nodeReference().getAttribute('id')).to.equal('test-wrapper')

    wrapper.unmount()
  })

  it('should set the tooltip placement', () => {
    wrapper = mountRender()
    inst = wrapper.instance()
    stub = sinon.stub(inst, 'getTipElementBoundingRect').returns(gbcrObject)
    inst.tooltipPlacement()

    expect(inst._tooltipPlacement.left).to.equal(150)
    expect(inst._tooltipPlacement.top).to.equal(0)
    expect(inst._tooltipPlacement.translate).to.equal(50)

    wrapper.setProps({tooltipPlacement: 'bottom'})
    inst.tooltipPlacement()

    expect(inst._tooltipPlacement.left).to.equal(150)
    expect(inst._tooltipPlacement.top).to.equal(50)
    expect(inst._tooltipPlacement.translate).to.equal(50)

    wrapper.setProps({tooltipPlacement: 'right'})
    inst.tooltipPlacement()

    expect(inst._tooltipPlacement.left).to.equal(200)
    expect(inst._tooltipPlacement.top).to.equal(25)
    expect(inst._tooltipPlacement.translate).to.equal(50)

    wrapper.setProps({tooltipPlacement: 'left'})
    inst.tooltipPlacement()

    expect(inst._tooltipPlacement.left).to.equal(100)
    expect(inst._tooltipPlacement.top).to.equal(25)
    expect(inst._tooltipPlacement.translate).to.equal(50)

    wrapper.unmount()
    stub.restore()
  })

  it('should create a tip wrapper if one hasn\'t been created already', () => {
    wrapper = mountRender()
    tip = appDiv.childNodes[1]

    wrapper.instance().renderTipWrapper()

    expect(tip.getAttribute('id')).to.equal('tip-wrapper')

    wrapper.unmount()
  })

  it('should determine whether the node has an ellipsis', () => {
    wrapper = mountRender()
    tip = appDiv.childNodes[1]

    expect(wrapper.instance().isEllipsisActive()).to.be.false

    wrapper.unmount()
  })

  it('should return a computed style value', () => {
    wrapper = mountRender()
    tip = appDiv.childNodes[1]

    // Because global font sizes vary, we need to get the value of the
    // "remote" rendered node
    const fontSize = global.getComputedStyle(tip, null).getPropertyValue('font-size')

    expect(wrapper.instance().getComputedStyle('font-size')).to.equal(fontSize)

    wrapper.unmount()
  })

  it('should call tooltip placement and set state when showTip is called', () => {
    wrapper = shallowRender()
    inst = wrapper.instance()

    const tooltipPlacementSpy = sinon.spy(inst, 'tooltipPlacement')
    const renderTooltipSpy = sinon.spy(inst, 'renderTooltip')

    inst.showTip()

    expect(tooltipPlacementSpy.calledOnce).to.be.true
    expect(renderTooltipSpy.calledOnce).to.be.true
    expect(wrapper.state().showing).to.be.true
  })

  it('should render the wrapper when the component mounts', () => {
    wrapper = shallowRender()
    inst = wrapper.instance()
    spy = sinon.spy(inst, 'renderTipWrapper')

    inst.componentDidMount()

    expect(spy.calledOnce).to.be.true
  })

  it('should render based on sCU logic', () => {
    wrapper = shallowRender()
    inst = wrapper.instance()

    expect(inst.shouldComponentUpdate({ show: true })).to.be.true
    expect(inst.shouldComponentUpdate({ show: true, tooltipPlacement: 'bottom' })).to.be.true
    expect(inst.shouldComponentUpdate({ show: true, tooltipPlacement: 'bottom' }, { showing: true })).to.be.true
    expect(inst.shouldComponentUpdate({ show: true, tooltipPlacement: 'bottom', content: 'different content' }, { showing: true })).to.be.true
    expect(inst.shouldComponentUpdate({
      content: 'Testing the top tooltip',
      tooltipPlacement: 'top',
      tipContent: null,
      tipWrapper: 'tip-wrapper'
    }, { showing: false })).to.be.false
  })

  it('should show the tooltip if it is hidden and needs to be shown', () => {
    wrapper = shallowRender()
    inst = wrapper.instance()
    const showTipStub = sinon.stub(inst, 'showTip')

    inst.UNSAFE_componentWillReceiveProps({ show: true })
    expect(showTipStub.called).to.be.true
  })

  it('should show the tooltip if it needs to be shown and the content changed', () => {
    wrapper = shallowRender()
    inst = wrapper.instance()
    const showTipStub = sinon.stub(inst, 'showTip')

    wrapper.setState({ showing: true })

    inst.UNSAFE_componentWillReceiveProps({ show: true, content: 'test' })
    expect(showTipStub.called).to.be.true
  })

  it('should not show the tooltip if the content changed but it needs to be hidden', () => {
    wrapper = shallowRender()
    inst = wrapper.instance()
    const showTipStub = sinon.stub(inst, 'showTip')

    inst.UNSAFE_componentWillReceiveProps({ show: false, content: 'test' })
    expect(showTipStub.called).to.be.false
  })

  it('should hide the tooltip if it is visible and needs to be hidden', () => {
    wrapper = shallowRender()
    inst = wrapper.instance()
    const hideTipStub = sinon.stub(inst, 'hideTip')

    wrapper.setState({ showing: true })

    inst.UNSAFE_componentWillReceiveProps({ show: false })
    expect(hideTipStub.called).to.be.true
  })
})
