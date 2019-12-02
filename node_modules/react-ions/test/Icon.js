import React from 'react'
import Icon from '../src/components/Icon/Icon'

describe('Icon', () => {
  it('should render an svg with attribute values', () => {
    const wrapper = shallow(<Icon name='icon-check-1-1' width='12' height='24' fill='green' className='custom' />)

    expect(wrapper.find('svg')).to.have.length(1)
    expect(wrapper.props().width).to.equal('12')
    expect(wrapper.props().height).to.equal('24')
    expect(wrapper.props().fill).to.equal('green')
    expect(wrapper.props().className).to.equal('custom')
  })
})
