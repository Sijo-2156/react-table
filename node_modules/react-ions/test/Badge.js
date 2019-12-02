import React from 'react'
import Badge from '../src/components/Badge'
import Icon from '../src/components/Icon'

describe('Badge', () => {
  let wrapper

  it('displays a button', () => {
    wrapper = shallow(<Badge icon='icon-link-1' text='Word' theme='success' />)
    expect(wrapper.props().className).to.equal('badge success padded')
    expect(wrapper.childAt(0).type()).to.equal(Icon)
    expect(wrapper.find('span').text()).to.equal('Word')
    expect(wrapper.find('div')).to.have.length(1)
  })

  it('displays an optional CSS class', () => {
    wrapper = shallow(<Badge optClass='test' />)
    expect(wrapper.props().className).to.equal('badge test')
  })

  it('should have heavy styling', () => {
    wrapper = shallow(<Badge size='heavy' />)
    expect(wrapper.props().className).to.equal('badge heavy')
  })

  it('has no icon if none passed', () => {
    wrapper = shallow(<Badge />)
    expect(wrapper.find(Icon)).to.have.length(0)
  })

  it('has no text if none passed', () => {
    wrapper = shallow(<Badge />)
    expect(wrapper.find('span')).to.have.length(0)
  })

})
