import React from 'react'
import {TabWrapper, Tab} from 'react-ions/lib/components/TabWrapper'
import Button from 'react-ions/lib/components/Button'
import style from './style.scss'

class ExampleTabWrapperDefault extends React.Component {
  constructor(props) {
    super(props)
  }

  state = {
    selected: '1st',
    selectedTabIndex: 0
  }

  selectCallback = index => {
    let selectedTab

    switch (index) {
      case 0:
        selectedTab = '1st'
        break
      case 1:
        selectedTab = '2nd'
        break
    }

    this.setState({ selected: selectedTab, selectedTabIndex: index })
  }

  render() {
    return (
      <div>
        <p>The {this.state.selected} tab is selected.</p>
        <div className={style.update}>
          <Button onClick={this.selectCallback.bind(this, 0)}>Select 1st tab</Button>
          <Button onClick={this.selectCallback.bind(this, 1)}>Select 2nd tab</Button>
        </div>
        <TabWrapper onSelect={this.selectCallback} initialSelectedIndex={this.state.selectedTabIndex}>
          <Tab title='All Recent Activity' count={1723} optTabContentClass={style['tab-content']}>
            <p>Tab 1 content.</p>
          </Tab>
          <Tab title='Custom Bookmark' count={50} optTabContentClass={style['tab-content']}>
            <p>Tab 2 content.</p>
          </Tab>
          <Tab title='Disabled' optTabContentClass={style['tab-content']} disabled={true}>
            <p>Tab 3 content.</p>
          </Tab>
        </TabWrapper>
      </div>
    )
  }
}

export default ExampleTabWrapperDefault
