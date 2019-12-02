import React from 'react'
import PropsList from 'private/modules/PropsList'
import alertDocs from '!!docgen!react-ions/lib/components/Alerts/Alert'
import alertSystemDocs from '!!docgen!react-ions/lib/components/Alerts/AlertSystem'
import CodeExample from 'private/modules/CodeExample'
import styles from 'private/css/content'
import ExampleAlertDefault from './ExampleAlertDefault'
import exampleAlertDefaultCode from '!raw!./ExampleAlertDefault'
import ExampleAlertSystemDefault from './ExampleAlertSystemDefault'
import exampleAlertSystemDefaultCode from '!raw!./ExampleAlertSystemDefault'
import ExampleAlertSystemTimeout from './ExampleAlertSystemTimeout'
import exampleAlertSystemTimeoutCode from '!raw!./ExampleAlertSystemTimeout'

const description = {
  alertDefault: 'This is the `alert component`.',
  alertSystemDefault: 'This is the `alert system component`.',
  alertSystemTimeout: 'This is the `alert system component` with alerts that can have a timeout.'
}

const AlertsPage = () => (
  <div>
    <div className={styles.content}>
      <div className={styles.block}>
        <CodeExample
          title='Default Alerts'
          description={description.alertDefault}
          markup={exampleAlertDefaultCode}>
          <ExampleAlertDefault />
        </CodeExample>
        <CodeExample
          title='Default Alert System with slide-in® technology'
          description={description.alertSystemDefault}
          markup={exampleAlertSystemDefaultCode}>
          <ExampleAlertSystemDefault />
        </CodeExample>
        <CodeExample
          title='Alert System With Timeouts'
          description={description.alertSystemTimeout}
          markup={exampleAlertSystemTimeoutCode}>
          <ExampleAlertSystemTimeout />
        </CodeExample>
        <div className={styles.block}>
          <h3>Alert Props</h3>
          <PropsList list={alertDocs[0].props} />
        </div>
        <div className={styles.block}>
          <h3>Alert System Props</h3>
          <PropsList list={alertSystemDocs[0].props} />
        </div>
      </div>
    </div>
  </div>
)

export default AlertsPage
