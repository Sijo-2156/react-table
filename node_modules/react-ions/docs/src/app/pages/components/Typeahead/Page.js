import React from 'react'
import PropsList from 'private/modules/PropsList'
import docs from '!!docgen!react-ions/lib/components/Typeahead/Typeahead'
import CodeExample from 'private/modules/CodeExample'
import ExampleTypeaheadDefault from './ExampleTypeaheadDefault'
import exampleTypeaheadDefaultCode from '!raw!./ExampleTypeaheadDefault'
import ExampleTypeaheadDisabled from './ExampleTypeaheadDisabled'
import exampleTypeaheadDisabledCode from '!raw!./ExampleTypeaheadDisabled'
import ExampleTypeaheadDefaultValue from './ExampleTypeaheadDefaultValue'
import exampleTypeaheadDefaultValueCode from '!raw!./ExampleTypeaheadDefaultValue'
import ExampleTypeaheadCallback from './ExampleTypeaheadCallback'
import exampleTypeaheadCallbackCode from '!raw!./ExampleTypeaheadCallback'
import ExampleTypeaheadCustomSearch from './ExampleTypeaheadCustomSearch'
import exampleTypeaheadCustomSearchCode from '!raw!./ExampleTypeaheadCustomSearch'
import ExampleTypeaheadDebounce from './ExampleTypeaheadDebounce'
import exampleTypeaheadDebounceCode from '!raw!./ExampleTypeaheadDebounce'
import ExampleTypeaheadLabel from './ExampleTypeaheadLabel'
import exampleTypeaheadLabelCode from '!raw!./ExampleTypeaheadLabel'
import ExampleTypeaheadCustomValue from './ExampleTypeaheadCustomValue'
import exampleTypeaheadCustomValueCode from '!raw!./ExampleTypeaheadCustomValue'
import styles from 'private/css/content'

const description = {
  typeaheadDefault: 'This is the `typeahead component` as it appears by default.',
  typeaheadDisabled: 'This is the `typeahead component` in a disabled state.',
  typeaheadDefaultValue: 'This is the `typeahead component` with a default value.',
  typeaheadCallback: 'This is the `typeahead component` with a callback.',
  typeaheadCustomSearch: 'This is the `typeahead component` with custom search.',
  typeaheadDebounce: 'This is the `typeahead component` with search debounce.',
  typeaheadLabel: 'This is the `typeahead component` with a label.',
  typeaheadCustomValue: 'This is the `typeahead component` that allows for a custom value to be added.'
}

const TypeaheadPage = () => (
  <div>
    <div className={styles.content}>
      <div className={styles.block}>
        <CodeExample
          title='Default Typeahead with Placeholder text'
          description={description.typeaheadDefault}
          markup={exampleTypeaheadDefaultCode}>
          <ExampleTypeaheadDefault />
        </CodeExample>
        <CodeExample
          title='Disabled Typeahead'
          description={description.typeaheadDisabled}
          markup={exampleTypeaheadDisabledCode}>
          <ExampleTypeaheadDisabled />
        </CodeExample>
        <CodeExample
          title='Typeahead with default value selected'
          description={description.typeaheadDefaultValue}
          markup={exampleTypeaheadDefaultValueCode}>
          <ExampleTypeaheadDefaultValue />
        </CodeExample>
        <CodeExample
          title='Typeahead with callback'
          description={description.typeaheadCallback}
          markup={exampleTypeaheadCallbackCode}>
          <ExampleTypeaheadCallback />
        </CodeExample>
        <CodeExample
          title='Typeahead with custom search'
          description={description.typeaheadCustomSearch}
          markup={exampleTypeaheadCustomSearchCode}>
          <ExampleTypeaheadCustomSearch />
        </CodeExample>
        <CodeExample
          title='Typeahead with debounce'
          description={description.typeaheadDebounce}
          markup={exampleTypeaheadDebounceCode}>
          <ExampleTypeaheadDebounce />
        </CodeExample>
        <CodeExample
          title='Typeahead with a label'
          description={description.typeaheadLabel}
          markup={exampleTypeaheadLabelCode}>
          <ExampleTypeaheadLabel />
        </CodeExample>
        <CodeExample
          title='Typeahead that allows a custom value'
          description={description.typeaheadCustomValue}
          markup={exampleTypeaheadCustomValueCode}>
          <ExampleTypeaheadCustomValue />
        </CodeExample>
        <div className={styles.block}>
          <h3>Props</h3>
          <PropsList list={docs[0].props} />
        </div>
      </div>
    </div>
  </div>
)

export default TypeaheadPage
