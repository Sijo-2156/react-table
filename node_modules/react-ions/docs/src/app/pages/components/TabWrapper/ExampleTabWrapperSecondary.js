import React from 'react'
import {TabWrapper, Tab} from 'react-ions/lib/components/TabWrapper'
import style from './style.scss'

class ExampleTabWrapperSecondary extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <TabWrapper onSelect={this.selectCallback} optClass="secondary">
          <Tab title="All Recent Activity" optTabContentClass={style['tab-content-secondary']}>
            <p>Tab 1 content.</p>
          </Tab>
          <Tab title="Custom Bookmark" optTabContentClass={style['tab-content-secondary']}>
            <p>Tab 2 content.</p>
          </Tab>
          <Tab title="Hello World" optTabContentClass={style['tab-content-secondary']}>
            <p>Tab 3 content.</p>
          </Tab>
        </TabWrapper>
      </div>
    )
  }
}

export default ExampleTabWrapperSecondary
