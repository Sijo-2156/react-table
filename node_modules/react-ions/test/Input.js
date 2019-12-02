import React from 'react'
import Input from '../src/components/Input/Input'

class WrappedInput extends Input {
  constructor(props) {
    super(props)
    this._prefix = document.createElement('div')
    this._suffix = document.createElement('div')
  }
}

describe('Input', () => {
  let wrapper

  it('should shallow render itself', () => {
    wrapper = shallow(<WrappedInput label='Default input' placeholder='Placeholder text' value='Initial value.' />)
    expect(wrapper.find('input')).to.have.length(1)
    expect(wrapper.find('label')).to.have.length(1)
    expect(wrapper.find('label').text()).to.equal('Default input')
    expect(wrapper.find('div')).to.have.length(2)
    expect(wrapper.hasClass('input-component')).to.equal(true)
    expect(wrapper.childAt(1).childAt(0).props().placeholder).to.equal('Placeholder text')
    expect(wrapper.childAt(1).childAt(0).props().value).to.equal('Initial value.')
  })

  it('should shallow render a prefix and suffix', () => {
    wrapper = shallow(<WrappedInput prefix='$' suffix='days' />)
    expect(wrapper.find('div')).to.have.length(6)
    expect(wrapper.childAt(0).childAt(0).childAt(0).props().className).to.equal('prefix')
    expect(wrapper.childAt(0).childAt(2).childAt(0).props().className).to.equal('suffix')
  })

  it('should be disabled', () => {
    const disabled = true

    wrapper = mount(<WrappedInput label='Disabled input' value='' disabled={disabled} />)
    expect(wrapper.find('input').prop('disabled')).to.be.true
  })

  it('should have an extra class', () => {
    wrapper = shallow(<WrappedInput label='Input with error' value='' optClass='input-error' />)
    expect(wrapper.hasClass('input-component')).to.equal(true)
    expect(wrapper.hasClass('input-error')).to.equal(true)
  })

  it('should have state set to an initial value', () => {
    wrapper = shallow(<WrappedInput label='Input with initial value' value='' />)
    wrapper.setState({ value: 'testing' })
    expect(wrapper.childAt(1).childAt(0).props().value).to.equal('testing')
  })

  it('should update the value onChange', () => {
    const afterChange = { target: { value: 'New value' }, persist: () => {} }

    wrapper = mount(<WrappedInput value='test' />)
    expect(wrapper.state('value')).to.equal('test')
    wrapper.instance().handleChange(afterChange)
    wrapper.update()
    expect(wrapper.state('value')).to.equal('New value')
  })

  it('should run the changeCallback on change', () => {
    const spy = sinon.spy()

    wrapper = mount(<WrappedInput value='test' changeCallback={spy} />)
    wrapper.instance().handleChange({ target: { value: 'New value' }, persist: () => {} })
    wrapper.update()
    expect(spy.calledOnce).to.be.true
  })

  it('should run the blurCallback on blur', () => {
    const spy = sinon.spy()

    wrapper = mount(<WrappedInput value='test' blurCallback={spy} />)
    wrapper.instance().handleBlur()
    expect(spy.calledOnce).to.be.true
  })

  it('should run the focusCallback on focus', () => {
    const spy = sinon.spy()

    wrapper = mount(<WrappedInput value='test' focusCallback={spy} />)
    wrapper.instance().handleFocus()
    expect(spy.calledOnce).to.be.true
  })

  it('should not result in an error if changeCallback is not defined', () => {
    const spy = sinon.spy(console, 'error')

    wrapper = mount(<WrappedInput value='test' />)
    wrapper.instance().handleChange({ target: { value: 'New value' }, persist: () => {} })
    wrapper.update()

    expect(spy.calledOnce).to.be.false
    spy.restore()
  })

  it('should not result in an error if blurCallback is not defined', () => {
    const spy = sinon.spy(console, 'error')

    wrapper = mount(<WrappedInput value='test' />)
    wrapper.instance().handleBlur()

    expect(spy.calledOnce).to.be.false
    spy.restore()
  })

  it('should not result in an error if focusCallback is not defined', () => {
    const spy = sinon.spy(console, 'error')

    wrapper = mount(<WrappedInput value='test' />)
    wrapper.instance().handleFocus()

    expect(spy.calledOnce).to.be.false
    spy.restore()
  })

  it('should pass value as string to changeCallback', () => {
    const spy = sinon.spy()

    wrapper = mount(<WrappedInput value='14.10' changeCallback={spy} />)
    wrapper.instance().handleChange({ persist: () => {}, target: { value: '19.89' } })
    wrapper.update()
    expect(spy.calledOnce).to.be.true
    expect(spy.getCall(0).args[0].target.value).to.equal('19.89')
  })

  it('should pass value as number to changeCallback', () => {
    const spy = sinon.spy()

    wrapper = mount(<WrappedInput valueType='number' value={14.10} changeCallback={spy} />)
    wrapper.instance().handleChange({ persist: () => {}, target: { value: '19.89', valueAsNumber: 19.89 } })
    expect(spy.calledOnce).to.be.true
    expect(spy.getCall(0).args[0].target.value).to.equal(19.89)
  })

  it('should render an inline style tag', () => {
    wrapper = shallow(<WrappedInput width='100px' />)
    expect(wrapper.childAt(0).props().style).to.deep.equal({width: '100px'})
  })

  it('should handle inline styles for prefix', () => {
    wrapper = shallow(<WrappedInput width='100px' prefix='$' />)

    wrapper.instance()._prefix = {
      getBoundingClientRect: () => {
        return {
          width: 40
        }
      }
    }

    wrapper.instance().handleInlineStyles()
    expect(wrapper.state().inputStyles).to.deep.equal({paddingLeft: 64})
  })

  it('should handle inline styles for suffix', () => {
    wrapper = shallow(<WrappedInput width='100px' suffix='$' />)

    wrapper.instance()._suffix = {
      getBoundingClientRect: () => {
        return {
          width: 40
        }
      }
    }

    wrapper.instance().handleInlineStyles()
    expect(wrapper.state().inputStyles).to.deep.equal({paddingRight: 64})
  })

  it('should handle inline styles when component updates', () => {
    wrapper = shallow(<WrappedInput width='100px' />)

    const spy = sinon.spy(wrapper.instance(), 'handleInlineStyles')

    wrapper.instance().componentDidUpdate({
      prefix: '$'
    })

    expect(spy.calledOnce).to.be.true
  })

  it('should not render inline styles when suffix or prefix don\'t change', () => {
    wrapper = shallow(<WrappedInput width='100px' prefix='$' />)

    const spy = sinon.spy(wrapper.instance(), 'handleInlineStyles')

    wrapper.instance().componentDidUpdate({
      prefix: '$'
    })

    expect(spy.calledOnce).to.be.false
  })

  it('should handle null values', () => {
    const changeCallbackSpy = sinon.spy()

    wrapper = shallow(<WrappedInput name='input_field' value={null} changeCallback={changeCallbackSpy} nullValue='' />)
    const inst = wrapper.instance()

    expect(wrapper.state().value).to.equal('')

    wrapper.setProps({ value: 'a' })
    expect(wrapper.state().value).to.equal('a')

    wrapper.setProps({ value: null })
    expect(wrapper.state().value).to.equal('')
  })
})
