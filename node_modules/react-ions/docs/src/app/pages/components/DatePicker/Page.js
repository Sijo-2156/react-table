import React from 'react'
import CodeExample from 'private/modules/CodeExample'
import ExampleDatePickerDefault from './ExampleDatePickerDefault'
import exampleDatePickerDefaultCode from '!raw!./ExampleDatePickerDefault'
import ExampleDatePickerDefaultCustomMinMax from './ExampleDatePickerDefaultCustomMinMax'
import exampleDatePickerDefaultCustomMinMaxCode from '!raw!./ExampleDatePickerDefaultCustomMinMax'
import ExampleDatePickerSelectedCustomMinMax from './ExampleDatePickerSelectedCustomMinMax'
import exampleDatePickerSelectedCustomMinMaxCode from '!raw!./ExampleDatePickerSelectedCustomMinMax'
import ExampleDatePickerSelected from './ExampleDatePickerSelected'
import exampleDatePickerSelectedCode from '!raw!./ExampleDatePickerSelected'
import ExampleDatePickerCallback from './ExampleDatePickerCallback'
import exampleDatePickerCallbackCode from '!raw!./ExampleDatePickerCallback'
import ExampleDatePickerLabel from './ExampleDatePickerLabel'
import exampleDatePickerLabelCode from '!raw!./ExampleDatePickerLabel'
import ExampleDatePickerDisabled from './ExampleDatePickerDisabled'
import exampleDatePickerDisabledCode from '!raw!./ExampleDatePickerDisabled'
import PropsList from 'private/modules/PropsList'
import docs from '!!docgen!react-ions/lib/components/DatePicker/DatePicker'
import styles from 'private/css/content'

const DatePickerPage = () => (
  <div>
    <div className={styles.content}>
      <div className={styles.block}>
        <CodeExample
          title='Default Date Picker'
          description='This is the `DatePicker component` with default current date and min date: -10 years & max date: +10 years.'
          markup={exampleDatePickerDefaultCode}>
          <ExampleDatePickerDefault />
        </CodeExample>
        <CodeExample
          title='Date Picker with custom min & max dates'
          description='This is the `DatePicker component` with custom min & max dates.'
          markup={exampleDatePickerDefaultCustomMinMaxCode}>
          <ExampleDatePickerDefaultCustomMinMax />
        </CodeExample>
        <CodeExample
          title='Date Picker with Selected Date'
          description='This is the `DatePicker component` with a selected date.'
          markup={exampleDatePickerSelectedCode}>
          <ExampleDatePickerSelected />
        </CodeExample>
        <CodeExample
          title='Date Picker with Selected Date and custom min & max dates'
          description='This is the `DatePicker component` with Selected Date and custom min & max dates.'
          markup={exampleDatePickerSelectedCustomMinMaxCode}>
          <ExampleDatePickerSelectedCustomMinMax />
        </CodeExample>
        <CodeExample
          title='Example Date Picker with Callback'
          description='This is the `DatePicker component` with a callback.'
          markup={exampleDatePickerCallbackCode}>
          <ExampleDatePickerCallback />
        </CodeExample>
        <CodeExample
          title='Example Date Picker with a Label'
          description='This is the `DatePicker component` with a label.'
          markup={exampleDatePickerLabelCode}>
          <ExampleDatePickerLabel />
        </CodeExample>
        <CodeExample
          title='Example Disabled Date'
          description='This is the `DatePicker component` disabled.'
          markup={exampleDatePickerDisabledCode}>
          <ExampleDatePickerDisabled />
        </CodeExample>
        <div className={styles.block}>
          <h3>Props</h3>
          <PropsList list={docs[0].props} />
        </div>
      </div>
    </div>
  </div>
)

export default DatePickerPage
