import React from 'react'
import Button from '../Button'

describe('Button', () => {
  let wrapper

  it('displays a button', () => {
    expect(shallow(<Button disabled optClass='danger' size='lg'>Test</Button>)).toMatchSnapshot()
  })

  it('displays a disabled button with a loader', () => {
    expect(shallow(<Button loading={true}>Test</Button>)).toMatchSnapshot()
  })

  it('hides text when collapse prop is passed', () => {
    expect(shallow(<Button collapse={true}>Test</Button>)).toMatchSnapshot()
  })

  it('should have an extra class', () => {
    expect(shallow(<Button optClass="test-class" />)).toMatchSnapshot()
  })

  it('should have extra classes', () => {
    const optClasses = ['test-class', 'test-class-2', 'test-class-3']
    expect(shallow(<Button size='lg' optClass={optClasses} />)).toMatchSnapshot()
  })

  it('should have mouse event handlers', () => {
    expect(shallow(<Button onClick={sinon.spy()} onMouseEnter={sinon.spy()} onMouseLeave={sinon.spy()} onMouseDown={sinon.spy()} onMouseOut={sinon.spy()} onMouseOver={sinon.spy()} onMouseUp={sinon.spy()}>Test</Button>)).toMatchSnapshot()
  })

  it('should have touch event handlers', () => {
    expect(shallow(<Button onTouchCancel={sinon.spy()} onTouchEnd={sinon.spy()} onTouchMove={sinon.spy()} onTouchStart={sinon.spy()}>Test</Button>)).toMatchSnapshot()
  })
})
