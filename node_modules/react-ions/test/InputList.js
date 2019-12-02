import React from 'react'
import InputList from '../src/components/InputList/InputList'
import Input from '../src/components/Input/Input'
import Icon from '../src/components/Icon/Icon'
import TagList from '../src/components/internal/TagList'

describe('InputList', () => {
  let wrapper, inst, value

  beforeEach(() => {
    value = [
      'Test 1',
      'Test 2'
    ]
  })

  const options = [
    { display: 'Test 1', value: 'Test 1' },
    { display: 'Test 2', value: 'Test 2' }
  ]

  it('should shallow render itself', () => {
    const spy = sinon.spy()

    wrapper = shallow(<InputList optClass='test' value={[]} changeCallback={spy} placeholder='Type something and hit enter' />)

    expect(wrapper.props().className).to.equal('input-list-wrapper test')
    expect(wrapper.childAt(0).props().placeholder).to.equal('Type something and hit enter')
    expect(wrapper.find(Input)).to.have.length(1)
    expect(wrapper.find(Icon)).to.have.length(1)
    expect(wrapper.find(TagList)).to.have.length(1)
  })

  it('should return falsy for cWRP if same props.value is passed', () => {
    wrapper = shallow(<InputList optClass='test' value={value} placeholder='Type something and hit enter' />)
    expect(!!wrapper.instance().UNSAFE_componentWillReceiveProps({ value })).to.be.false
  })

  it('should build state from props', () => {
    const spy = sinon.spy()

    wrapper = shallow(<InputList value={value} changeCallback={spy} />)
    expect(wrapper.state().value).to.equal(value)
  })

  it('should generate an options list', () => {
    const spy = sinon.spy()

    wrapper = shallow(<InputList value={value} changeCallback={spy} />)
    expect(wrapper.state().options).to.deep.equal(options)
  })

  it('should handle keyUp', () => {
    const spy = sinon.spy()
    const keyUpValue = {
      target: {
        value: 'Key Upped'
      }
    }

    wrapper = shallow(<InputList value={value} changeCallback={spy} />)
    wrapper.childAt(0).simulate('keyUp', keyUpValue)
    expect(wrapper.state().currentValue).to.equal(keyUpValue.target.value)
  })

  it('should handle keyPress', () => {
    const spy = sinon.spy()
    const keyPressValue = {
      charCode: 13,
      target: {
        value: 'Key Pressed'
      }
    }

    wrapper = shallow(<InputList value={value} changeCallback={spy} />)
    wrapper.childAt(0).simulate('keyPress', keyPressValue)
    expect(wrapper.state().value).to.equal(value)
  })

  it('should handle click', () => {
    const spy = sinon.spy()
    const clickStateValue = [
      {display: 'Test 1', value: 'Test 1'},
      {display: 'Test 2', value: 'Test 2'},
      {display: 'Something', value: 'Something'}
    ]

    wrapper = mount(<InputList value={value} changeCallback={spy} />)
    wrapper.setState({ currentValue: 'Something' })
    wrapper.instance().handleClick()
    wrapper.update()
    expect(wrapper.state().options).to.deep.equal(clickStateValue)
  })

  it('should remove an item', () => {
    const spy = sinon.spy()
    const updatedState = ['Test 1', 'Test 2']

    wrapper = shallow(<InputList value={value} changeCallback={spy} />)
    inst = wrapper.instance()
    inst.onRemove(2)
    expect(wrapper.state().value).to.deep.equal(updatedState)
  })

  it('should receive props and set new state', () => {
    const spy = sinon.spy()
    const nextProps = {
      value: ['Test 1', 'Test 2', 'Tornado']
    }

    wrapper = shallow(<InputList value={value} changeCallback={spy} />)
    wrapper.setProps(nextProps)
    wrapper.update()
    expect(wrapper.state().value).to.deep.equal(nextProps.value)
  })

  it('should not set state when nextProps are the same as state', () => {
    const spy = sinon.spy()
    const nextProps = {
      value: ['Test 1', 'Test 2']
    }

    wrapper = shallow(<InputList value={value} changeCallback={spy} />)
    wrapper.setProps(nextProps)
    wrapper.update()
    expect(wrapper.state().value).to.deep.equal(nextProps.value)
  })
})
