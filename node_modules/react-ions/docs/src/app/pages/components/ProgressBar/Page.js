import React from 'react'
import PropsList from 'private/modules/PropsList'
import docs from '!!docgen!react-ions/lib/components/ProgressBar/ProgressBar'
import CodeExample from 'private/modules/CodeExample'
import ExampleProgressBarDefault from './ExampleProgressBarDefault'
import exampleProgressBarDefaultCode from '!raw!./ExampleProgressBarDefault'
import ExampleProgressBarLabel from './ExampleProgressBarLabel'
import exampleProgressBarLabelCode from '!raw!./ExampleProgressBarLabel'
import styles from 'private/css/content'

const description = {
  progressBarDefault: 'This is the default `Progress Bar`',
  progressBarLabel: 'This is the `Progress Bar` with a `label` and `percentage`.'
}

const ProgressBarPage = () => (
  <div>
    <div className={styles.content}>
      <div className={styles.block}>
        <CodeExample
          title='Default Progress Bar'
          description={description.progressBarDefault}
          markup={exampleProgressBarDefaultCode}>
          <ExampleProgressBarDefault />
        </CodeExample>
        <CodeExample
          title='Progress Bar with Label and percentage'
          description={description.progressBarLabel}
          markup={exampleProgressBarLabelCode}>
          <ExampleProgressBarLabel />
        </CodeExample>
      </div>
      <div className={styles.block}>
        <h3>Props</h3>
        <PropsList list={docs[0].props} />
      </div>
    </div>
  </div>
)

export default ProgressBarPage
