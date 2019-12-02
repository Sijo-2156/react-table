import React from 'react'
import PropsList from 'private/modules/PropsList'
import docs from '!!docgen!react-ions/lib/components/ButtonGroup/ButtonGroup'
import CodeExample from 'private/modules/CodeExample'
import ExampleButtonGroupDefault from './ExampleButtonGroupDefault'
import exampleButtonGroupDefaultCode from '!raw!./ExampleButtonGroupDefault'
import ExampleButtonGroupChecked from './ExampleButtonGroupChecked'
import exampleButtonGroupCheckedCode from '!raw!./ExampleButtonGroupChecked'
import ExampleButtonGroupRequired from './ExampleButtonGroupRequired'
import exampleButtonGroupRequiredCode from '!raw!./ExampleButtonGroupRequired'
import ExampleButtonGroupDisabled from './ExampleButtonGroupDisabled'
import exampleButtonGroupDisabledCode from '!raw!./ExampleButtonGroupDisabled'
import ExampleButtonGroupCallback from './ExampleButtonGroupCallback'
import exampleButtonGroupCallbackCode from '!raw!./ExampleButtonGroupCallback'
import ExampleButtonGroupStyles from './ExampleButtonGroupStyles'
import exampleButtonGroupStylesCode from '!raw!./ExampleButtonGroupStyles'
import styles from 'private/css/content'

const description = {
  buttonGroupDefault: 'This is the `ButtonGroup component` as it appears by default.',
  buttonGroupChecked: 'This is the checked `ButtonGroup component`.',
  buttonGroupDisabled: 'This is the disabled `ButtonGroup component`.',
  buttonGroupRequired: 'This is the required `ButtonGroup component`.',
  buttonGroupCallback: 'This is the `ButtonGroup component` with a callback function. __Note__: the `style import` and `code` tag is for display purposes only.',
  buttonGroupStyles: 'This is the `ButtonGroup component` with different styles applied to the buttons. __Note__: the `style import` is for display purposes only.'
}

const ButtonGroupPage = () => (
  <div>
    <div className={styles.content}>
      <div className={styles.block}>
        <CodeExample
          title='Default Button Group'
          description={description.buttonGroupDefault}
          markup={exampleButtonGroupDefaultCode}>
          <ExampleButtonGroupDefault />
        </CodeExample>
        <CodeExample
          title='Checked Button Group'
          description={description.buttonGroupChecked}
          markup={exampleButtonGroupCheckedCode}>
          <ExampleButtonGroupChecked />
        </CodeExample>
        <CodeExample
          title='Required Button Group'
          description={description.buttonGroupRequired}
          markup={exampleButtonGroupRequiredCode}>
          <ExampleButtonGroupRequired />
        </CodeExample>
        <CodeExample
          title='Disabled Button Group'
          description={description.buttonGroupDisabled}
          markup={exampleButtonGroupDisabledCode}>
          <ExampleButtonGroupDisabled />
        </CodeExample>
        <CodeExample
          title='Button Group With Callback Function'
          description={description.buttonGroupCallback}
          markup={exampleButtonGroupCallbackCode}>
          <ExampleButtonGroupCallback />
        </CodeExample>
        <CodeExample
          title='Button Group Styles'
          description={description.buttonGroupStyles}
          markup={exampleButtonGroupStylesCode}>
          <ExampleButtonGroupStyles />
        </CodeExample>
        <div className={styles.block}>
          <h3>Props</h3>
          <PropsList list={docs[0].props} />
        </div>
      </div>
    </div>
  </div>
)

export default ButtonGroupPage
