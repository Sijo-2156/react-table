import React from 'react'
import Modal from '../src/components/Modal/Modal'
import Header from '../src/components/Modal/Header'
import Icon from '../src/components/Icon/Icon'

describe('Modal', () => {
  describe('Methods', () => {
    let wrapper, props

    beforeEach(() => {
      props = {
        actions: <div />,
        open: true,
        closeOnAction: true,
        onRequestClose: sinon.spy(),
        title: 'Test',
        optClass: 'test-class',
        size: 'sm',
        theme: 'color-splash'
      }
      wrapper = shallow(<Modal {...props} />)
    })

    describe('handleKeyUp', () => {
      let handleKeyUp, requestClose

      beforeEach(() => {
        handleKeyUp = wrapper.instance().handleKeyUp
        requestClose = sinon.spy(wrapper.instance(), 'requestClose')
      })

      it('calls its requestClose method when esc is pressed', () => {
        handleKeyUp({ keyCode: 27 })
        expect(requestClose.calledWithExactly(false)).to.be.true
      })

      it('calls does not call its requestClose method when the key press is not esc', () => {
        handleKeyUp({ keyCode: 'potato' })
        expect(requestClose.calledOnce).to.be.false
      })
    })

    describe('handleClick', () => {
      let handleClick, handleCloseClick, event

      beforeEach(() => {
        handleClick = wrapper.instance().handleClick
        handleCloseClick = sinon.spy(wrapper.instance(), 'handleCloseClick')
        event = { persist: () => {}, target: {} }
      })

      it('calls its handleCloseClick method when when the target has .modal-scroll-container', () => {
        event.target.className = 'modal-scroll-container class'
        handleClick(event)
        expect(handleCloseClick.calledOnce).to.be.true
      })

      it('does not call handleCloseClick when the target does not have .modal-scroll-container', () => {
        event.target.className = 'some-class some-other-class'
        handleClick(event)
        expect(handleCloseClick.calledOnce).to.be.false
      })

      it('does not call handleCloseClick when the target does not have a class', () => {
        handleClick(event)
        expect(handleCloseClick.calledOnce).to.be.false
      })
    })

    describe('handleCloseClick', () => {
      let handleCloseClick, requestClose

      beforeEach(() => {
        handleCloseClick = wrapper.instance().handleCloseClick
        requestClose = sinon.spy(wrapper.instance(), 'requestClose')
      })

      it('calls its requestClose method passing false', () => {
        handleCloseClick()
        expect(requestClose.calledWithExactly(false)).to.be.true
      })
    })

    describe('requestClose', () => {
      let requestClose

      beforeEach(() => {
        requestClose = wrapper.instance().requestClose
      })

      it('does not call onRequestClose when buttonClicked is false and closeOnAction is true', () => {
        requestClose(false)
        expect(props.onRequestClose.calledOnce).to.be.false
      })

      it('calls the onRequestClose function when provided and buttonClicked is true', () => {
        requestClose(true)
        expect(props.onRequestClose.calledWithExactly(true)).to.be.true
      })

      it('calls the onRequestClose function when provided and closeOnAction is false', () => {
        wrapper = shallow(<Modal {...props} closeOnAction={false} />)
        wrapper.instance().requestClose(false)

        expect(props.onRequestClose.calledWithExactly(false)).to.be.true
      })
    })

    // TODO: figure out how to spy on window methods
    describe.skip('setKeyupListener', () => {
      let setKeyupListener, addEventSpy, removeEventSpy

      beforeEach(() => {
        setKeyupListener = wrapper.instance().setKeyupListener
        addEventSpy = sinon.spy(window, addEventListener)
        removeEventSpy = sinon.spy(window, removeEventListener)
      })

      it('adds a key up event listener when open', () => {
        setKeyupListener()
        expect(addEventSpy.calledOnce).to.be.true
        exepct(removeEventSpy.calledOnce).to.be.false
      })

      it('removes a key up event listener when not open', () => {
        wrapper = shallow(<Modal {...props} open={false} />)
        setKeyupListener = wrapper.instance().setKeyupListener

        setKeyupListener()
        expect(addEventSpy.calledOnce).to.be.false
        exepct(removeEventSpy.calledOnce).to.be.true
      })
    })
  })

  describe('Header', () => {
    let wrapper

    it('has custom Icon', () => {
      wrapper = shallow(<Header closeIcon={<div className='super-secret-class' /> } />)

      expect(wrapper.find('.super-secret-class')).to.have.length(1)
      expect(wrapper.find(Icon)).to.have.length(0)
    })

    it('has the default close Icon', () => {
      wrapper = shallow(<Header />)

      expect(wrapper.find(Icon)).to.have.length(1)
    })
  })

  describe('renderModal', () => {
    let wrapper
    const props = {
      actions: <div></div>,
      open: true,
      closeOnAction: false,
      onRequestClose: sinon.spy(),
      title: 'Test',
      optClass: 'test-class',
      theme: 'color-splash'
    }

    const renderModal = propOverrides => shallow(shallow(<Modal {...props} {...propOverrides} />).instance().renderModal())

    it('is open', () => {
      wrapper = renderModal()

      expect(wrapper.hasClass('modal-open')).to.be.true
    })

    it('is closed', () => {
      wrapper = renderModal({ open: false })

      expect(wrapper.hasClass('modal-open')).to.be.false
    })

    it('is small', () => {
      wrapper = renderModal({ size: 'sm' })

      expect(wrapper.find('.modal-content').hasClass('modal-sm')).to.be.true
    })

    it('is medium', () => {
      wrapper = renderModal({ size: 'md' })
      expect(wrapper.find('.modal-content').hasClass('modal-sm')).to.be.false
      expect(wrapper.find('.modal-content').hasClass('modal-lg')).to.be.false
    })

    it('is medium by default', () => {
      wrapper = renderModal()
      expect(wrapper.find('.modal-content').hasClass('modal-sm')).to.be.false
      expect(wrapper.find('.modal-content').hasClass('modal-lg')).to.be.false
    })

    it('is large', () => {
      wrapper = renderModal({ size: 'lg' })

      expect(wrapper.find('.modal-content').hasClass('modal-lg')).to.be.true
    })

    it('has a custom class', () => {
      wrapper = renderModal()

      expect(wrapper.hasClass('test-class')).to.be.true
    })

    it('has a theme class', () => {
      wrapper = renderModal()

      expect(wrapper.hasClass('color-splash')).to.be.true
    })

    it('renders a the title as a node, with no close icon', () => {
      wrapper = renderModal({ title: <div className='super-secret-class' /> })

      expect(wrapper.find('.super-secret-class')).to.have.length(1)
    })

    it('renders a the title as an <h1 />', () => {
      wrapper = renderModal()

      expect(wrapper.find('h1'))
    })

    it('has a close button', () => {
      wrapper = renderModal()

      expect(wrapper.find(Icon)).to.have.length(1)
    })

    it('does not have a close button when closeOnAction', () => {
      wrapper = renderModal({ closeOnAction: true })

      expect(wrapper.find(Icon)).to.have.length(0)
    })

    it('does not have a close button when the title is an element', () => {
      wrapper = renderModal({ title: <div className='super-secret-class' /> })

      expect(wrapper.find(Icon)).to.have.length(0)
    })
  })
})
