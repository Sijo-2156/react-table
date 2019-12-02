import React from 'react'
import CodeExample from 'private/modules/CodeExample'
import Icon from 'react-ions/lib/components/Icon'
import baseStyle from 'private/css/content'
import localStyle from './styles.scss'

// TODO: add alias
import list from '../../../../../../src/assets/icons/master-list';
import normalizeIconList from '../../../../../../scripts/normalize-icon-list'

const IconographyPage = () => {
  const sharedContent = (index, icon) => {
    return <div key={index} className={localStyle['icon-block']}>
      <Icon name={icon} className={localStyle.icon} width='24' height='24'></Icon>
      <span>{icon}</span>
    </div>
  }

  const icons = () => normalizeIconList(list).map((icon, index) => sharedContent(index, icon.split('#')[1]))

  return (
    <div>
      <div className={baseStyle.content}>
        <div className={baseStyle.block}>
          <h2>Icons</h2>
          <p>Our apps primarily use Material UI icons, along with a handful of social icons.</p>
          <p>For details on how to manage the icons available in React:ions, visit the <a href='https://github.com/GetAmbassador/react-ions/blob/master/README.md' target='_blank'>README</a>.</p>
          <CodeExample title='Master Icon list'>
            <div className={localStyle['icon-list']}>
              {icons()}
            </div>
          </CodeExample>
        </div>
      </div>
    </div>
  )
}

export default IconographyPage
