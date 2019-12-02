import React from 'react'
import PropsList from 'private/modules/PropsList'
import docs from '!!docgen!react-ions/lib/components/Radio/RadioGroup'
import CodeExample from 'private/modules/CodeExample'
import ExampleRadioDefault from './ExampleRadioGroupDefault'
import exampleRadioDefaultCode from '!raw!./ExampleRadioGroupDefault'
import ExampleRadioChecked from './ExampleRadioGroupChecked'
import exampleRadioCheckedCode from '!raw!./ExampleRadioGroupChecked'
import ExampleRadioDisabled from './ExampleRadioGroupDisabled'
import exampleRadioDisabledCode from '!raw!./ExampleRadioGroupDisabled'
import ExampleRadioCallback from './ExampleRadioGroupCallback'
import exampleRadioCallbackCode from '!raw!./ExampleRadioGroupCallback'
import ExampleRadioChild from './ExampleRadioChild'
import exampleRadioChildCode from '!raw!./ExampleRadioChild'
import ExampleRadioGroupDescription from './ExampleRadioGroupDescription'
import exampleRadioGroupDescriptionCode from '!raw!./ExampleRadioGroupDescription'
import styles from 'private/css/content'

const description = {
  radioDefault: 'This is the `radio component` as it appears by default.',
  radioChecked: 'This is the checked `radio component`.',
  radioDisabled: 'This is the disabled `radio component`.',
  radioCallback: 'This is the `radio component` with a callback function. __Note__: the `style import` and `code` tag is for display purposes only.',
  radioChild: 'This is the `radio component` with a child component.',
  radioGroupDescription: 'This is the `radio component` with a description.'
}

const RadioPage = () => (
  <div>
    <div className={styles.content}>
      <div className={styles.block}>
        <CodeExample
          title='Default Radio'
          description={description.radioDefault}
          markup={exampleRadioDefaultCode}>
          <ExampleRadioDefault />
        </CodeExample>
        <CodeExample
          title='Checked Radio'
          description={description.radioChecked}
          markup={exampleRadioCheckedCode}>
          <ExampleRadioChecked />
        </CodeExample>
        <CodeExample
          title='Disabled Radio'
          description={description.radioDisabled}
          markup={exampleRadioDisabledCode}>
          <ExampleRadioDisabled />
        </CodeExample>
        <CodeExample
          title='Radio with callback function'
          description={description.radioCallback}
          markup={exampleRadioCallbackCode}>
          <ExampleRadioCallback />
        </CodeExample>
        <CodeExample
          title='Radio with child'
          description={description.radioChild}
          markup={exampleRadioChildCode}>
          <ExampleRadioChild />
        </CodeExample>
        <CodeExample
          title='Radio with description'
          description={description.radioGroupDescription}
          markup={exampleRadioGroupDescriptionCode}>
          <ExampleRadioGroupDescription />
        </CodeExample>
        <div className={styles.block}>
          <h3>Props</h3>
          <PropsList list={docs[0].props} />
        </div>
      </div>
    </div>
  </div>
)

export default RadioPage
