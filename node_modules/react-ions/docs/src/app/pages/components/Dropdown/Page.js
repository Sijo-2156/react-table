import React from 'react'
import PropsList from 'private/modules/PropsList'
import docs from '!!docgen!react-ions/lib/components/Dropdown/Dropdown'
import CodeExample from 'private/modules/CodeExample'
import ExampleDropdownButton from './ExampleDropdownButton'
import exampleDropdownButtonCode from '!raw!./ExampleDropdownButton'
import ExampleDropdownCallback from './ExampleDropdownCallback'
import exampleDropdownCallbackCode from '!raw!./ExampleDropdownCallback'
import ExampleDropdownList from './ExampleDropdownList'
import exampleDropdownListCode from '!raw!./ExampleDropdownList'
import ExampleDropdownConfirmation from './ExampleDropdownConfirmation'
import exampleDropdownConfirmationCode from '!raw!./ExampleDropdownConfirmation'
import ExampleDropdownRightAlign from './ExampleDropdownRightAlign'
import exampleDropdownRightAlignCode from '!raw!./ExampleDropdownRightAlign'
import ExampleDropdownDisabled from './ExampleDropdownDisabled'
import exampleDropdownDisabledCode from '!raw!./ExampleDropdownDisabled'
import styles from 'private/css/content'

const description = {
  dropdownButtonDefault: 'This is the **dropdown component** with a `<Button />` trigger.',
  dropdownButtonCallback: 'This is the **dropdown component** with a callback function to open.',
  dropdownList: 'This is the **dropdown component** that displays a list.',
  dropdownConfirmation: 'This is the **dropdown component** that displays a list with a confirmation overlay when clicked.',
  dropdownRightAlign: 'This is the **dropdown component** aligned to the right of the trigger.',
  dropdownDisabled: 'This is the disabled **dropdown component**.'
}

const DropdownPage = () => (
  <div>
    <div className={styles.content}>
      <div className={styles.block}>
        <CodeExample
          title='Button Dropdown'
          description={description.dropdownButtonDefault}
          markup={exampleDropdownButtonCode}>
          <ExampleDropdownButton />
        </CodeExample>
        <CodeExample
          title='Dropdown with callback for open/close'
          description={description.dropdownButtonCallback}
          markup={exampleDropdownCallbackCode}>
          <ExampleDropdownCallback />
        </CodeExample>
        <CodeExample
          title='Dropdown with list'
          description={description.dropdownList}
          markup={exampleDropdownListCode} >
          <ExampleDropdownList />
        </CodeExample>
        <CodeExample
          title='Dropdown with confirmation'
          description={description.dropdownConfirmation}
          markup={exampleDropdownConfirmationCode} >
          <ExampleDropdownConfirmation />
        </CodeExample>
        <CodeExample
          title='Dropdown with right alignment'
          description={description.dropdownRightAlign}
          markup={exampleDropdownRightAlignCode} >
          <ExampleDropdownRightAlign />
        </CodeExample>
        <CodeExample
          title='Disabled Dropdown'
          description={description.dropdownDisabled}
          markup={exampleDropdownDisabledCode} >
          <ExampleDropdownDisabled />
        </CodeExample>
      </div>
      <div className={styles.block}>
        <h3>Dropdown Props</h3>
        <PropsList list={docs[0].props} />
      </div>
    </div>
  </div>
)

export default DropdownPage
