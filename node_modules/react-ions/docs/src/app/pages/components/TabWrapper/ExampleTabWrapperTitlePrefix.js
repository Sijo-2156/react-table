import React from 'react'
import { TabWrapper, Tab } from 'react-ions/lib/components/TabWrapper'
import Badge from 'react-ions/lib/components/Badge'
import classNames from 'classnames/bind'
import style from './style.scss'

class ExampleTabWrapperTitlePrefix extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const cx = classNames.bind(style)
    const iconGreenClasses = cx(style['tab-suffix'], style['icon-green'])

    return (
      <div>
        <TabWrapper onSelect={this.selectCallback} optClass="secondary">
          <Tab title="All Recent Activity" count={1723} optTabContentClass={style['tab-content-secondary']}>
            <p>Tab 1 content.</p>
          </Tab>
          <Tab
            titlePrefix={<Badge optClass={style['tab-prefix']} theme='sky' text='5' />}
            title="Custom Bookmark"
            count={50}
            optTabContentClass={style['tab-content-secondary']}>
            <p>Tab 2 content.</p>
          </Tab>
          <Tab
            titleSuffix={<Badge optClass={iconGreenClasses} theme='border' icon='md-check' />}
            title="Hello World"
            optTabContentClass={style['tab-content-secondary']}>
            <p>Tab 3 content.</p>
          </Tab>
          <Tab
            title="Both Prefix and Suffix"
            titlePrefix={<Badge optClass={style['tab-prefix']} theme='sky' text='5' />}
            titleSuffix={<Badge optClass={iconGreenClasses} theme='border' icon='md-check' />}
            optTabContentClass={style['tab-content-secondary']}>
            <p>Tab 3 content.</p>
          </Tab>
        </TabWrapper>
      </div>
    )
  }
}

export default ExampleTabWrapperTitlePrefix
