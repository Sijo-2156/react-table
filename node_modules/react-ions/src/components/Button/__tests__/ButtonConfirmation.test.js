import React from 'react'
import ButtonConfirmation from '../ButtonConfirmation'

describe('ButtonConfirmation', () => {
  let wrapper, inst

  beforeEach(() => {
    window.matchMedia = () => ({
      addListener: sinon.spy(),
      removeListener: sinon.spy()
    })
  })

  afterEach(() => {
    window.matchMedia = null
  })

  describe('render', () => {
    it('displays confirmation button without prompt', () => {
      expect(mount(<ButtonConfirmation>Delete</ButtonConfirmation>)).toMatchSnapshot()
    })

    it('handles collapse with confirmation button', () => {
      expect(mount(<ButtonConfirmation collapse={true}>Delete</ButtonConfirmation>)).toMatchSnapshot()
    })
  })

  describe('handleOpen', () => {
    it('handles opening and closing on the confirmation button', () => {
      wrapper = mount(<ButtonConfirmation hasBeenOpened={true}>Delete</ButtonConfirmation>)
      inst = wrapper.instance()

      inst.handleOpen()
      expect(wrapper.state().confirmationOverlayOpen).toBeTruthy()

      inst.handleOpen()
      expect(wrapper.state().confirmationOverlayOpen).toBeFalsy()
    })
  })

  describe('handleConfirmation', () => {
    it('handles confirmation on the confirmation button', () => {
      const handleConfirmation = sinon.spy()
      wrapper = mount(<ButtonConfirmation handleConfirmation={handleConfirmation}>Delete</ButtonConfirmation>)
      wrapper.setState({ confirmationOverlayOpen: true })

      wrapper.instance().handleConfirmation()
      expect(wrapper.state().confirmationOverlayOpen).toBeFalsy()
      expect(handleConfirmation.called).toBeFalsy()
    })

    it('calls the handleConfirmation prop if it is a function and if true is passed to the method', () => {
      const handleConfirmation = sinon.spy()
      wrapper = mount(<ButtonConfirmation handleConfirmation={handleConfirmation}>Delete</ButtonConfirmation>)
      wrapper.setState({ confirmationOverlayOpen: true })

      wrapper.instance().handleConfirmation(true)
      expect(wrapper.state().confirmationOverlayOpen).toBeFalsy()
      expect(handleConfirmation.called).toBeTruthy()
    })
  })

  describe('getStyles', () => {
    it('get styles on the confirmation button when position not passed', () => {
      wrapper = mount(<ButtonConfirmation>Delete</ButtonConfirmation>)
      wrapper.setState({
        overlayWidth: 20,
        triggerWidth: 10
      })

      expect(wrapper.instance().getStyles()).toMatchSnapshot()
    })

    it('get styles on the confirmation button when position right', () => {
      wrapper = mount(<ButtonConfirmation position='right'>Delete</ButtonConfirmation>)
      wrapper.setState({confirmationOverlayOffset: 40})

      expect(wrapper.instance().getStyles()).toMatchSnapshot()
    })

    it('get styles on the confirmation button when position left', () => {
      wrapper = mount(<ButtonConfirmation position='left'>Delete</ButtonConfirmation>)
      wrapper.setState({confirmationOverlayOffset: 40})

      expect(wrapper.instance().getStyles()).toMatchSnapshot()
    })
  })

  describe('getCaretStyles', () => {
    it('get caret styles on the confirmation button when position not passed and is not wide', () => {
      wrapper = mount(<ButtonConfirmation>Delete</ButtonConfirmation>)
      wrapper.setState({ wide: false })

      expect(wrapper.instance().getCaretStyles()).toMatchSnapshot()
    })

    it('get caret styles on the confirmation button when position not passed and is wide', () => {
      wrapper = mount(<ButtonConfirmation>Delete</ButtonConfirmation>)
      wrapper.setState({ wide: true })

      expect(wrapper.instance().getCaretStyles()).toMatchSnapshot()
    })

    it('get caret styles on the confirmation button when position right', () => {
      wrapper = mount(<ButtonConfirmation position={'right'}>Delete</ButtonConfirmation>)
      wrapper.setState({triggerWidth: 40})

      expect(wrapper.instance().getCaretStyles()).toMatchSnapshot()
    })

    it('get caret styles on the confirmation button when position left', () => {
      wrapper = mount(<ButtonConfirmation position={'left'}>Delete</ButtonConfirmation>)
      wrapper.setState({triggerWidth: 40})

      expect(wrapper.instance().getCaretStyles()).toMatchSnapshot()
    })
  })

  describe('handleSetup', () => {
    it('handles setup on the confirmation button', () => {
      wrapper = mount(<ButtonConfirmation>Delete</ButtonConfirmation>)
      wrapper.instance()._trigger = {
        children: [{
          getBoundingClientRect: () => {
            return {
              width: 40
            }
          }
        }],
        querySelector: () => {
          return {
            getBoundingClientRect: () => {
              return {
                width: 40
              }
            }
          }
        }
      }

      wrapper.instance().handleSetup()
      expect(wrapper.state().triggerWidth).toEqual(40)
      expect(wrapper.state().overlayWidth).toEqual(40)
    })
  })

  describe('handleWide', () => {
    it('handles wide on the confirmation button', () => {
      wrapper = mount(<ButtonConfirmation prompt={'This is a test.'}>Delete</ButtonConfirmation>)
      inst = wrapper.instance()

      inst.handleWide()
      expect(wrapper.state().wide).toBeFalsy()

      wrapper.setProps({ prompt: 'This is a test that will make it wide' })
      wrapper.update()

      // Mocking handleSetup because it was already tested and requires a decent setup
      inst.handleSetup = sinon.spy()

      inst.handleWide()
      expect(wrapper.state().wide).toBeTruthy()
    })
  })

  describe('shouldComponentUpdate', () => {
    let state, shouldComponentUpdate
    const props = {
      size: 'large',
      disabled: false,
      loading: false,
      collapse: false,
      optClass: 'test-class',
      onClick: () => {},
      prompt: 'Test prompt'
    }

    beforeEach(() => {
      wrapper = mount(<ButtonConfirmation {...props}>Delete</ButtonConfirmation>)
      state = wrapper.state()
      shouldComponentUpdate = wrapper.instance().shouldComponentUpdate
    })

    it('does not update when props and state have not changed', () => {
      expect(shouldComponentUpdate(props, state)).toBeFalsy()
    })

    it('updates when loading is changed', () => {
      expect(shouldComponentUpdate({ ...props, loading: true }, state)).toBeTruthy()
    })

    it('updates when prompt is changed', () => {
      expect(shouldComponentUpdate({ ...props, prompt: 'New prompt' }, state)).toBeTruthy()
    })

    it('updates when confirmationOverlayOpen is changed', () => {
      expect(shouldComponentUpdate(props, { ...state, confirmationOverlayOpen: true })).toBeTruthy()
    })

    it('updates when triggerWidth is changed', () => {
      expect(shouldComponentUpdate(props, { ...state, triggerWidth: 10 })).toBeTruthy()
    })

    it('updates when overlayWidth is changed', () => {
      expect(shouldComponentUpdate(props, { ...state, overlayWidth: 50 })).toBeTruthy()
    })

    it('updates when wide is changed', () => {
      expect(shouldComponentUpdate(props, { ...state, wide: true })).toBeTruthy()
    })
  })
})
