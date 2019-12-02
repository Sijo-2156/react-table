import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router'
import Immutable from 'immutable'
import Breadcrumb from '../src/components/Breadcrumb/Breadcrumb'
import Icon from '../src/components/Icon/Icon'

describe('Breadcrumb', () => {
  let wrapper
  let routes = [
    {
      path: '/',
      title: undefined
    }
  ]

  let updatedRoutes = Immutable.fromJS([
    {
      path: '/',
      title: 'Defined'
    }
  ])

  it('should shallow render with no children', () => {
    wrapper = shallow(<Breadcrumb routes={routes} />)
    expect(wrapper.find('div')).to.have.length(4)
    expect(wrapper.find('span')).to.have.length(0)
    expect(wrapper.find(Icon)).to.have.length(0)
    expect(wrapper.childAt(0).hasClass('overflow-gradient')).to.be.true
  })

  it('should shallow render itself with only a primary tag', () => {
    routes.push({
      path: 'foundations',
      title: 'Foundations'
    })

    wrapper = shallow(<Breadcrumb routes={routes} />)

    expect(wrapper.find('div')).to.have.length(4)
    expect(wrapper.childAt(1).childAt(0).hasClass('breadcrumb')).to.equal(true)
    expect(wrapper.find('em')).to.have.length(1)
    expect(wrapper.contains(<span>Foundations</span>)).to.equal(true)
  })

  it('should shallow render itself with a primary tag, secondary tag, and an arrow icon', () => {
    routes.push({
      path: 'colors',
      title: 'Colors'
    })

    wrapper = shallow(<Breadcrumb routes={routes} />)
    expect(wrapper.find('em')).to.have.length(2)
    expect(wrapper.find(Icon)).to.have.length(1)
    expect(wrapper.contains(<span>Foundations</span>)).to.equal(true)
    expect(wrapper.contains(<span>Colors</span>)).to.equal(true)
  })

  it('should shallow render itself with a primary tag, two secondary tags, and two arrow icons', () => {
    routes.push({
      path: 'test',
      title: 'Test'
    })

    wrapper = shallow(<Breadcrumb routes={routes} />)
    expect(wrapper.find('em')).to.have.length(3)
    expect(wrapper.find(Icon)).to.have.length(2)
    expect(wrapper.contains(<span>Foundations</span>)).to.equal(true)
    expect(wrapper.contains(<span>Colors</span>)).to.equal(true)
    expect(wrapper.contains(<span>Test</span>)).to.equal(true)
  })

  it('should render clickable tags', () => {
    wrapper = shallow(<Breadcrumb routes={routes} clickable={true} />)
    const breadcrumbs = wrapper.instance().getTags()
    expect(breadcrumbs.get(1).type).to.equal(Link)
    expect(breadcrumbs.get(1).props.to).to.equal('/foundations')
    expect(breadcrumbs.get(2).type).to.equal(Link)
    expect(breadcrumbs.get(2).props.to).to.equal('/foundations/colors')
    expect(breadcrumbs.get(3).type).to.equal('em')
  })

  it('should return a gradient style', () => {
    wrapper = shallow(<Breadcrumb routes={routes} gradientColor='red' />)
    expect(wrapper.instance().getGradientStyles()).to.deep.equal({background: 'linear-gradient(90deg, rgba(255, 255, 255, 000.1), red)'})
  })

  it('should return a container style', () => {
    wrapper = shallow(<Breadcrumb routes={routes} padding={25} />)
    expect(wrapper.instance().getContainerStyles()).to.deep.equal({marginLeft: 25, paddingRight: 25})
  })

  it('should update only if the route changes', () => {
    wrapper = shallow(<Breadcrumb routes={routes} />)

    wrapper.setState({
      routes: updatedRoutes
    })

    expect(wrapper.instance().shouldComponentUpdate(null, updatedRoutes)).to.be.true
  })

  it('can take an optclass', () => {
    wrapper = shallow(<Breadcrumb routes={routes} optClass='test' />)

    expect(wrapper.hasClass('breadcrumbs-outer test')).to.be.true
  })
})
