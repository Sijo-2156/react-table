import React from 'react'
import EnhanceWithCopy from '../src/components/EnhanceWithCopy'
import Input from '../src/components/Input'
import Tooltip from '../src/components/Tooltip'

describe('EnhanceWithCopy', () => {
  let wrapper, inst, props

  const EnhancedInput = EnhanceWithCopy(Input)

  const shallowRender = props => {
    wrapper = shallow(<EnhancedInput {...props} />)
    inst = wrapper.instance()
  }

  beforeEach(() => {
    props = {
      id:'test-input-copy',
      value:'Test'
    }

    shallowRender(props)
  })

  it('should shallow render itself', () => {
    expect(wrapper.find(Input)).to.have.length(1)
    expect(wrapper.find(Tooltip)).to.have.length(1)

    const inputEl = wrapper.find(Input).at(0)
    expect(inputEl.prop('id')).to.equal('test-input-copy')
    expect(inputEl.prop('value')).to.equal('Test')

    const tooltipEl = wrapper.find(Tooltip).at(0)
    expect(tooltipEl.prop('content')).to.equal('Click to copy')
    expect(tooltipEl.prop('tooltipPlacement')).to.equal('top')
    expect(tooltipEl.prop('show')).to.be.false
  })

  describe('shouldComponentUpdate', () => {
    it('should should update accoring to sCU', () => {
      const state = {
        copied: false,
        showTooltip: false
      }

      expect(inst.shouldComponentUpdate(props, state)).to.be.false

      expect(inst.shouldComponentUpdate({ ...props, id: ''}, state)).to.be.false
      expect(inst.shouldComponentUpdate({ ...props, value: ''}, state)).to.be.false

      expect(inst.shouldComponentUpdate(props, { ...state, copied: true })).to.be.true
      expect(inst.shouldComponentUpdate(props, { ...state, showTooltip: true })).to.be.true
    })
  })

  describe('componentDidMount', () => {
    it('should call activateCopyToClipboard', () => {
      const activateCopyToClipboardStub = sinon.stub(inst, 'activateCopyToClipboard')
      inst.componentDidMount()

      expect(activateCopyToClipboardStub.called).to.be.true
    })
  })

  describe('componentWillUnmount', () => {
    it('should destroy the clipboard', () => {
      inst._clipboard = {
        destroy: sinon.spy()
      }
      inst.componentWillUnmount()

      expect(inst._clipboard.destroy.called).to.be.true
    })
  })

  describe('getValue', () => {
    it('should set the local trigger variable and return the value for specific node types', () => {
      expect(inst._trigger).to.be.undefined

      let trigger = {
        nodeName: 'DIV',
        textContent: 'Text content',
        value: 'Value'
      }

      let value = ''

      value = inst.getValue(trigger)
      expect(inst._trigger).to.deep.equal(trigger)
      expect(value).to.equal('Text content')

      trigger.nodeName = 'INPUT'
      value = inst.getValue(trigger)
      expect(inst._trigger).to.deep.equal(trigger)
      expect(value).to.equal('Value')
    })

    it('should use the custom getValue method if it is provided', () => {
      shallowRender({ ...props, getValue: () => 'Custom value' })
      expect(inst._trigger).to.be.undefined

      const trigger = {
        nodeName: 'DIV',
        textContent: 'Text content',
        value: 'Value'
      }

      const value = inst.getValue(trigger)
      expect(inst._trigger).to.deep.equal(trigger)
      expect(value).to.equal('Custom value')
    })
  })

  describe('focusTriggerElement', () => {
    it('should focus the trigger element if it has a focus method', () => {
      inst._trigger = {
        focus: sinon.spy()
      }

      inst.focusTriggerElement()
      expect(inst._trigger.focus.called).to.be.true
    })
  })

  describe('activateCopyToClipboard', () => {
    it('should configure clipboard', () => {
      const handleCopyStub = sinon.stub(inst, 'handleCopy')

      inst.activateCopyToClipboard()
      expect(inst._clipboard).to.be.defined

      inst._clipboard.e.success[0].fn()
      expect(handleCopyStub.called).to.be.true
    })
  })

  describe('handleCopy', () => {
    it('should configure clipboard', () => {
      const clock = sinon.useFakeTimers()
      const focusTriggerElementStub = sinon.stub(inst, 'focusTriggerElement')

      expect(wrapper.state('copied')).to.be.false

      inst.handleCopy()
      expect(wrapper.state('copied')).to.be.true
      expect(focusTriggerElementStub.calledOnce).to.be.true

      clock.tick(1900)

      expect(wrapper.state('copied')).to.be.false
      expect(focusTriggerElementStub.calledTwice).to.be.true

      clock.restore()
    })
  })

  describe('handleMouseEnterLeave', () => {
    it('should set the showTooltip state', () => {
      expect(wrapper.state('showTooltip')).to.be.false

      inst.handleMouseEnterLeave({ type: 'mouseenter' })
      expect(wrapper.state('showTooltip')).to.be.true

      inst.handleMouseEnterLeave({ type: 'mouseleave' })
      expect(wrapper.state('showTooltip')).to.be.false
    })
  })
})
