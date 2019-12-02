import React from 'react'
import ProgressBarLabel from '../src/components/ProgressBar/ProgressBarLabel'

describe('ProgressBarLabel', () => {
  let wrapper
  let showPercentage = true
  const text = 'Ambassador export'
  const percentage = 10

  it('should shallow render itself with proper tags and show percentage', () => {
    wrapper = shallow(<ProgressBarLabel text={text} showPercentage={showPercentage} percentage={percentage} />)

    expect(wrapper.find('label')).to.have.length(1)
    expect(wrapper.first().props().className).to.equal('label')
    expect(wrapper.first().hasClass('label')).to.equal(true)
    expect(wrapper.childAt(0).text()).to.equal(text)
    expect(wrapper.first().find('span')).to.have.length(1)
    expect(wrapper.first().children().length).to.equal(2)
    expect(wrapper.childAt(1).props().className).to.equal('percentage')
    expect(wrapper.childAt(1).hasClass('percentage')).to.equal(true)
  })

  it('should not show percentage', () => {
    showPercentage = false
    wrapper = shallow(<ProgressBarLabel text={text} showPercentage={showPercentage} percentage={percentage} />)

    expect(wrapper.find('label')).to.have.length(1)
    expect(wrapper.first().props().className).to.equal('label')
    expect(wrapper.first().hasClass('label')).to.equal(true)
    expect(wrapper.first().children().length).to.equal(1)
    expect(wrapper.childAt(0).text()).to.equal(text)
    expect(wrapper.first().find('span')).to.have.length(0)
  })
})
