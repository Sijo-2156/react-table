import React from 'react'
import PropsList from 'private/modules/PropsList'
import tabWrapperDocs from '!!docgen!react-ions/lib/components/TabWrapper/TabWrapper'
import tabDocs from '!!docgen!react-ions/lib/components/TabWrapper/Tab'
import CodeExample from 'private/modules/CodeExample'
import styles from 'private/css/content'
import ExampleTabWrapperDefault from './ExampleTabWrapperDefault'
import exampleTabWrapperDefaultCode from '!raw!./ExampleTabWrapperDefault'
import ExampleTabWrapperSecondary from './ExampleTabWrapperSecondary'
import exampleTabWrapperSecondaryCode from '!raw!./ExampleTabWrapperSecondary'
import ExampleTabWrapperTitlePrefix from './ExampleTabWrapperTitlePrefix'
import exampleTabWrapperTitlePrefixCode from '!raw!./ExampleTabWrapperTitlePrefix'

const TabWrapperPage = () => (
  <div>
    <div className={styles.content}>
      <div className={styles.block}>
        <CodeExample
          title='Default Tabs'
          markup={exampleTabWrapperDefaultCode}>
          <ExampleTabWrapperDefault />
        </CodeExample>
        <CodeExample
          title='Secondary tab style'
          markup={exampleTabWrapperSecondaryCode}>
          <ExampleTabWrapperSecondary />
        </CodeExample>
        <CodeExample
          title='Prefixed and Suffixed Tabs'
          markup={exampleTabWrapperTitlePrefixCode}>
          <ExampleTabWrapperTitlePrefix />
        </CodeExample>
        <div className={styles.block}>
          <h3>Tab Wrapper Props</h3>
          <PropsList list={tabWrapperDocs[0].props} />
        </div>
        <div className={styles.block}>
          <h3>Tab Props</h3>
          <PropsList list={tabDocs[0].props} />
        </div>
      </div>
    </div>
  </div>
)

export default TabWrapperPage
