import React from 'react'
import classNames from 'classnames/bind'
import baseStyles from 'private/css/content'
import localStyles from './styles'
import ButtonAnchor from 'react-ions/lib/components/Button/ButtonAnchor'
import Icon from 'react-ions/lib/components/Icon'

const HomePage = () => {
  const cx = classNames.bind(baseStyles)
  var heroClass = cx(baseStyles.block, localStyles.hero)
  var secondaryClass = cx(baseStyles.block, localStyles.secondary)

  return (
    <div>
      <div className={heroClass}>
        <div className={localStyles.skew}>
          <h1>React &#123;ions&#125;</h1>
          <h3>A suite of React components that implement Ambassador's Design and UX patterns.</h3>
          <ButtonAnchor path='/components' internal={true} size='lg' optClass='inverted'>Get Started</ButtonAnchor>
          <ButtonAnchor path='https://github.com/GetAmbassador/react-ions' external={true} target='_blank' size='lg' optClass='inverted'>Github</ButtonAnchor>
        </div>
      </div>
    </div>
  )
}

export default HomePage
