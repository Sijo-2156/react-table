import React from 'react'
import Icon from '../src/components/Icon/Icon'
import Button from '../src/components/Button/Button'
import Header from '../src/components/Modal/Header'

describe('Header', () => {
  let wrapper
  const handleClose = () => {}

  it('should render itself', () => {
    wrapper = shallow(<Header handleClose={handleClose}>Test title</Header>)
    expect(wrapper.hasClass('header-wrapper')).to.be.true
    expect(wrapper.find(Icon)).to.be.length(1)
    expect(wrapper.find(Icon).props().onClick).to.equal(handleClose)
    expect(wrapper.childAt(0).text()).to.equal('Test title')

    wrapper = shallow(<Header closeIcon={<Button>Test Button</Button>} />)
    expect(wrapper.find(Button)).to.have.length(1)
  })
})
