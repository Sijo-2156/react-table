import React from 'react'
import StyledDiv from '../src/components/StyledDiv'
import { Popover } from '../src/components/Popover/Popover'
import styles from '../src/components/Popover/styles.css'

describe('Popover', () => {
  const defaultProps = {
    showing: false,
    defaultPosition: 'top',
    content: (<p>Test Content</p>),
    width: '400px',
    optClass: 'popover',
    className: 'popoverClass',
    onRequestClose: sinon.spy()
  }
  let props = defaultProps

  beforeEach(() => {
    props = defaultProps
  })

  describe('handleClickOutside', () => {
    it('does nothing when closed', () => {
      shallow(<Popover {...props} />).instance().handleClickOutside()
      expect(props.onRequestClose.calledOnce).to.be.false
    })

    it('requests close when it is open', () => {
      shallow(<Popover {...props} showing={true} />).instance().handleClickOutside()
      expect(props.onRequestClose.calledOnce).to.be.true
    })
  })

  describe('render', () => {
    const wrapper = shallow(<Popover {...props} />)

    it('is a StyledDiv', () => {
      expect(wrapper.type()).to.equal(StyledDiv)
    })

    it('uses optClass for class', () => {
      expect(wrapper.hasClass(props.optClass)).to.be.true
    })

    it('uses className for class', () => {
      expect(wrapper.hasClass(props.className)).to.be.true
    })
  })

  describe('styles', () => {
    const defaultStyleProps = {
      ...defaultProps,
      position: defaultProps.defaultPosition,
      parent: { width: 100, height: 50 }
    }

    beforeEach(() => {
      props = defaultStyleProps
    })

    it('has uses the provided width', () => {
      expect(styles({ width: '600px' })['> .popoverInner'].width).to.equal('600px')
    })

    it('has visibility hidden when showing is false', () => {
      const renderedStyle = styles(props)['> .popoverInner']

      expect(renderedStyle.visibility).to.equal('hidden')
      expect(renderedStyle.opacity).to.equal(0)
    })

    it('has visibility visible, opacity 1 when showing is true', () => {
      const renderedStyle = styles({ ...props, showing: true })['> .popoverInner']

      expect(renderedStyle.visibility).to.equal('visible')
      expect(renderedStyle.opacity).to.equal(1)
    })

    it('is on the top when position is top', () => {
      const renderedStyle = styles(props)['> .popoverInner']

      expect(renderedStyle.bottom).to.equal('70px')
      expect(renderedStyle.transform).to.equal('translateX(calc(-50% + 50px))')
    })

    it('is on the left when position is left', () => {
      const renderedStyle = styles({ ...props, position: 'left' })['> .popoverInner']

      expect(renderedStyle.right).to.equal('120px')
      expect(renderedStyle.transform).to.equal('translateY(calc(-50% + 25px))')
    })

    it('is on the topLeft when position is topLeft', () => {
      const renderedStyle = styles({ ...props, position: 'topLeft' })['> .popoverInner']

      expect(renderedStyle.right).to.equal(0)
      expect(renderedStyle.bottom).to.equal('70px')
    })
  })
})
