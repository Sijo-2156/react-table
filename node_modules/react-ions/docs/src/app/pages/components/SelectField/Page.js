import React from 'react'
import PropsList from 'private/modules/PropsList'
import docs from '!!docgen!react-ions/lib/components/SelectField/SelectField'
import CodeExample from 'private/modules/CodeExample'
import ExampleSelectFieldDefault from './ExampleSelectFieldDefault'
import exampleSelectFieldDefaultCode from '!raw!./ExampleSelectFieldDefault'
import ExampleSelectFieldPlaceholder from './ExampleSelectFieldPlaceholder'
import exampleSelectFieldPlaceholderCode from '!raw!./ExampleSelectFieldPlaceholder'
import ExampleSelectFieldDisabled from './ExampleSelectFieldDisabled'
import exampleSelectFieldDisabledCode from '!raw!./ExampleSelectFieldDisabled'
import ExampleSelectFieldError from './ExampleSelectFieldError'
import exampleSelectFieldErrorCode from '!raw!./ExampleSelectFieldError'
import ExampleSelectFieldSelected from './ExampleSelectFieldSelected'
import exampleSelectFieldSelectedCode from '!raw!./ExampleSelectFieldSelected'
import ExampleSelectFieldCallback from './ExampleSelectFieldCallback'
import exampleSelectFieldCallbackCode from '!raw!./ExampleSelectFieldCallback'
import ExampleSelectFieldIcon from './ExampleSelectFieldIcon'
import exampleSelectFieldIconCode from '!raw!./ExampleSelectFieldIcon'
import ExampleSelectFieldOptionIcons from './ExampleSelectFieldOptionIcons'
import exampleSelectFieldOptionIconsCode from '!raw!./ExampleSelectFieldOptionIcons'
import ExampleSelectFieldHideProp from './ExampleSelectFieldHideProp'
import exampleSelectFieldHidePropCode from '!raw!./ExampleSelectFieldHideProp'
import ExampleSelectFieldLabel from './ExampleSelectFieldLabel'
import exampleSelectFieldLabelCode from '!raw!./ExampleSelectFieldLabel'
import styles from 'private/css/content'

const description = {
  selectFieldDefault: 'This is the `select field component` as it appears by default.',
  selectFieldPlaceholder: 'This is the `select field component` with a placeholder.',
  selectFieldDisabled: 'This is the disabled `select field component`.',
  selectFieldError: 'This is the `select field component` with an error.',
  selectFieldSelected: 'This is the `select field component` with a default option selected.',
  selectFieldCallback: 'This is the `select field component` with a callback function. __Note__: the `style import` and `code` tag is for display purposes only.',
  selectFieldIcon: 'This is the `select field component` with an icon on the left.',
  selectFieldOptionIcons: 'This is the `select field component` with an icon for each option.',
  selectFieldHideOptions: 'This is the `select field component` with the hidden option that is selected.',
  selectFieldLabel: 'This is the `select field component` with a label.'
}

const SelectFieldPage = () => (
  <div>
    <div className={styles.content}>
      <div className={styles.block}>
        <CodeExample
          title='Default Select Field'
          description={description.selectFieldDefault}
          markup={exampleSelectFieldDefaultCode}>
          <ExampleSelectFieldDefault />
        </CodeExample>
        <CodeExample
          title='Select Field with Placeholder'
          description={description.selectFieldPlaceholder}
          markup={exampleSelectFieldPlaceholderCode}>
          <ExampleSelectFieldPlaceholder />
        </CodeExample>
        <CodeExample
          title='Disabled Select Field'
          description={description.selectFieldDisabled}
          markup={exampleSelectFieldDisabledCode}>
          <ExampleSelectFieldDisabled />
        </CodeExample>
        <CodeExample
          title='Error Select Field'
          description={description.selectFieldError}
          markup={exampleSelectFieldErrorCode}>
          <ExampleSelectFieldError />
        </CodeExample>
        <CodeExample
          title='Select Field with Default Option Selected'
          description={description.selectFieldSelected}
          markup={exampleSelectFieldSelectedCode}>
          <ExampleSelectFieldSelected />
        </CodeExample>
        <CodeExample
          title='Select Field with Callback'
          description={description.selectFieldCallback}
          markup={exampleSelectFieldCallbackCode}>
          <ExampleSelectFieldCallback />
        </CodeExample>
        <CodeExample
          title='Select Field with Icon'
          description={description.selectFieldIcon}
          markup={exampleSelectFieldIconCode}>
          <ExampleSelectFieldIcon />
        </CodeExample>
        <CodeExample
          title='Select Field with Option Icons'
          description={description.selectFieldOptionIcons}
          markup={exampleSelectFieldOptionIconsCode}>
          <ExampleSelectFieldOptionIcons />
        </CodeExample>
        <CodeExample
          title='Select Field with Hidden Selected Option'
          description={description.selectFieldHideOptions}
          markup={exampleSelectFieldHidePropCode}>
          <ExampleSelectFieldHideProp />
        </CodeExample>
        <CodeExample
          title='Select Field with a Label'
          description={description.selectFieldLabel}
          markup={exampleSelectFieldLabelCode}>
          <ExampleSelectFieldLabel />
        </CodeExample>
        <div className={styles.block}>
          <h3>Props</h3>
          <PropsList list={docs[0].props} />
        </div>
      </div>
    </div>
  </div>
)

export default SelectFieldPage
