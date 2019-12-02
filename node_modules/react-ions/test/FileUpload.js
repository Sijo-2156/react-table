import React from 'react'
import FileUpload from '../src/components/FileUpload/FileUpload'
import Icon from '../src/components/Icon/Icon'

describe('FileUpload', () => {
  let wrapper

  it('should shallow render itself', () => {
    wrapper = shallow(<FileUpload />)

    expect(wrapper.find('Dropzone')).to.have.length(1)
    expect(wrapper.find('label')).to.have.length(0)
    expect(wrapper.find('.preview').children()).to.have.length(0)
  })

  it('should have a label', () => {
    wrapper = shallow(<FileUpload label='Default file upload' />)

    expect(wrapper.find('Dropzone')).to.have.length(1)
    expect(wrapper.find('label')).to.have.length(1)
    expect(wrapper.find('label').text()).to.equal('Default file upload')
  })

  it('should be disabled', () => {
    wrapper = shallow(<FileUpload label='Default file upload' disabled />)

    expect(wrapper.hasClass('disabled')).to.be.true
    expect(wrapper.childAt(1).prop('disabled')).to.be.true
  })

  it('should have a preview', () => {
    wrapper = mount(<FileUpload label='Default file upload' value='test.jpg' showPreview={true} />)

    expect(wrapper.find('.preview').children()).to.have.length(1)
  })

  it('should update the preview when the value property changes', () => {
    wrapper = mount(<FileUpload label='Default file upload' value='test.jpg' showPreview={true} />)

    expect(wrapper.find('img').html()).to.be.equal('<img src="test.jpg" style="max-width: 200px; max-height: 200px;">')

    wrapper.setProps({value: 'test2.jpg'})
    wrapper.update()

    expect(wrapper.find('img').html()).to.be.equal('<img src="test2.jpg" style="max-width: 200px; max-height: 200px;">')
  })

  it('should update the preview when the value property changes to a file array', () => {
    wrapper = mount(<FileUpload label='Default file upload' value='test.jpg' showPreview={true} />)

    expect(wrapper.find('img').html()).to.be.equal('<img src="test.jpg" style="max-width: 200px; max-height: 200px;">')

    wrapper.setProps({ value: [{ preview: 'test2.jpg'}] })
    wrapper.update()

    expect(wrapper.find('img').html()).to.be.equal('<img src="test2.jpg" style="max-width: 200px; max-height: 200px;">')
  })

  it('should have custom preview size', () => {
    wrapper = mount(<FileUpload label='Default file upload' value='test.jpg' showPreview={true} previewSize={300} />)

    expect(wrapper.find('img').html()).to.be.equal('<img src="test.jpg" style="max-width: 300px; max-height: 300px;">')
  })

  it('should not have a preview if showPreview is not set to true', () => {
    wrapper = mount(<FileUpload label='Default file upload' value='test.jpg' />)

    expect(wrapper.find('.preview').children()).to.have.length(0)
  })

  it('should not have a preview if value is not set', () => {
    wrapper = mount(<FileUpload label='Default file upload' value='' showPreview={true} />)

    expect(wrapper.find('.preview').children()).to.have.length(0)
  })

  it('should remove a file when the close icon is clicked', () => {
    wrapper = mount(<FileUpload label='Default file upload' value='test.jpg' showPreview={true} />)

    expect(wrapper.find('.preview').children()).to.have.length(1)

    wrapper.find(Icon).at(0).simulate('click')

    expect(wrapper.find('.preview').children()).to.have.length(0)
  })

  it('should have a callback', () => {
    const callback = sinon.spy()

    wrapper = shallow(<FileUpload label='Default file upload' value='test.jpg' showPreview={true} changeCallback={callback} />)

    wrapper.instance().handleChange()

    expect(callback.calledOnce).to.be.true
  })

  it('should not result in an error if changeCallback is not defined', () => {
    const spy = sinon.spy(console, 'error')

    wrapper = shallow(<FileUpload label='Default file upload' value='test.jpg' showPreview={true} />)
    wrapper.instance().handleChange()

    expect(spy.calledOnce).to.be.false
    spy.restore()
  })

  it('should set the state when a file is uploaded', () => {
    wrapper = mount(<FileUpload label='Default file upload' showPreview={true} />)

    expect(wrapper.state('files')).to.have.length(0)

    wrapper.instance().handleUpload([{preview: 'test.jpg'}])
    wrapper.update()

    expect(wrapper).to.be.ok
  })

  it('should not set the state when a file is dropped if the component is disabled', () => {
    wrapper = mount(<FileUpload label='Default file upload' showPreview={true} disabled />)

    expect(wrapper.state('files')).to.have.length(0)

    wrapper.instance().handleUpload([{preview: 'test.jpg'}])
    wrapper.update()

    expect(wrapper.state('files')).to.have.length(0)
  })
})
