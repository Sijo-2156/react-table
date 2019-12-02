import React from 'react'
import PropsList from 'private/modules/PropsList'
import docs from '!!docgen!react-ions/lib/components/Toggle/Toggle'
import CodeExample from 'private/modules/CodeExample'
import ExampleToggleDefault from './ExampleToggleDefault'
import exampleToggleDefaultCode from '!raw!./ExampleToggleDefault'
import ExampleToggleOn from './ExampleToggleOn'
import exampleToggleOnCode from '!raw!./ExampleToggleOn'
import ExampleToggleDisabled from './ExampleToggleDisabled'
import exampleToggleDisabledCode from '!raw!./ExampleToggleDisabled'
import ExampleToggleLoading from './ExampleToggleLoading'
import exampleToggleLoadingCode from '!raw!./ExampleToggleLoading'
import ExampleToggleOptClass from './ExampleToggleOptClass'
import exampleToggleOptClassCode from '!raw!./ExampleToggleOptClass'
import ExampleToggleCallback from './ExampleToggleCallback'
import exampleToggleCallbackCode from '!raw!./ExampleToggleCallback'
import ExampleToggleCustomText from './ExampleToggleCustomText'
import exampleToggleCustomText from '!raw!./ExampleToggleCustomText'
import ExampleToggleConfirmation from './ExampleToggleConfirmation'
import exampleToggleConfirmation from '!raw!./ExampleToggleConfirmation'
import styles from 'private/css/content'

const description = {
  toggleDefault: 'This is the `toggle component` as it appears by default.',
  toggleOn: 'This is the `toggle component` with initial state set to True.',
  toggleDisabled: 'This is the disabled `toggle component`.',
  toggleOptClass: 'This is the `toggle component` with an optional class.',
  toggleCallback: 'This is the `toggle component` with a callback function. __Note__: the `style import` and `code` tag is for display purposes only.',
  toggleCustomText: 'This is the `toggle component` with text.',
  toggleConfirmation: 'This is the `toggle component` with a confirmation.',
  toggleLoading: 'This is the `toggle component` with a loader.'
}

const TogglePage = () => (
  <div>
    <div className={styles.content}>
      <div className={styles.block}>
        <CodeExample
          title='Default Toggle'
          description={description.toggleDefault}
          markup={exampleToggleDefaultCode}>
          <ExampleToggleDefault />
        </CodeExample>
        <CodeExample
          title='Toggle On'
          description={description.toggleOn}
          markup={exampleToggleOnCode}>
          <ExampleToggleOn />
        </CodeExample>
        <CodeExample
          title='Disabled Toggle'
          description={description.toggleDisabled}
          markup={exampleToggleDisabledCode}>
          <ExampleToggleDisabled />
        </CodeExample>
        <CodeExample
          title='Toggle with optional class'
          description={description.toggleOptClass}
          markup={exampleToggleOptClassCode}>
          <ExampleToggleOptClass />
        </CodeExample>
        <CodeExample
          title='Toggle with callback function'
          description={description.toggleCallback}
          markup={exampleToggleCallbackCode}>
          <ExampleToggleCallback />
        </CodeExample>
        <CodeExample
          title='Toggle with Text'
          description={description.toggleCustomText}
          markup={exampleToggleCustomText}>
          <ExampleToggleCustomText />
        </CodeExample>
        <CodeExample
          title='Toggle with Confirmation'
          description={description.toggleConfirmation}
          markup={exampleToggleConfirmation}>
          <ExampleToggleConfirmation />
        </CodeExample>
        <CodeExample
          title='Toggle with Loader'
          description={description.toggleLoading}
          markup={exampleToggleLoadingCode}>
          <ExampleToggleLoading />
        </CodeExample>
        <div className={styles.block}>
          <h3>Props</h3>
          <PropsList list={docs[0].props} />
        </div>
      </div>
    </div>
  </div>
)

export default TogglePage
