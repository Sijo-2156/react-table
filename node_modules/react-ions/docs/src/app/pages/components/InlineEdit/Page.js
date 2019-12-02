import React from 'react'
import PropsList from 'private/modules/PropsList'
import docs from '!!docgen!react-ions/lib/components/InlineEdit/InlineEdit'
import CodeExample from 'private/modules/CodeExample'
import ExampleInlineEditDefault from './ExampleInlineEditDefault'
import exampleInlineEditDefaultCode from '!raw!./ExampleInlineEditDefault'
import ExampleInlineEditTrigger from './ExampleInlineEditTrigger'
import exampleInlineEditTriggerCode from '!raw!./ExampleInlineEditTrigger'
import ExampleInlineEditInline from './ExampleInlineEditInline'
import exampleInlineEditInlineCode from '!raw!./ExampleInlineEditInline'
import ExampleInlineEditReadonly from './ExampleInlineEditReadonly'
import exampleInlineEditReadonlyCode from '!raw!./ExampleInlineEditReadonly'
import ExampleInlineEditLoading from './ExampleInlineEditLoading'
import exampleInlineEditLoadingCode from '!raw!./ExampleInlineEditLoading'
import ExampleInlineEditError from './ExampleInlineEditError'
import exampleInlineEditErrorCode from '!raw!./ExampleInlineEditError'
import ExampleInlineEditCopy from './ExampleInlineEditCopy'
import exampleInlineEditCopyCode from '!raw!./ExampleInlineEditCopy'
import ExampleInlineEditTooltip from './ExampleInlineEditTooltip'
import exampleInlineEditTooltipCode from '!raw!./ExampleInlineEditTooltip'
import ExampleInlineEditEmpty from './ExampleInlineEditEmpty'
import exampleInlineEditEmptyCode from '!raw!./ExampleInlineEditEmpty'
import ExampleInlineEditSelect from './ExampleInlineEditSelect'
import exampleInlineEditSelectCode from '!raw!./ExampleInlineEditSelect'
import styles from 'private/css/content'

const description = {
  inlineEditDefault: 'This is the default **inline edit component**.',
  inlineEditTrigger: 'This is the **inline edit component** with an external edit trigger.',
  inlineEditInline: 'This is the **inline edit component** that is inline with other components.',
  inlineEditReadonly: 'This is the readonly **inline edit component**.',
  inlineEditLoading: 'This is the **inline edit component** with a loader.',
  inlineEditError: 'This is the **inline edit component** with an error.',
  inlineEditCopy: 'This is the **inline edit component** with a copy to clipboard icon.',
  inlineEditTooltip: 'This is the **inline edit component** with a tooltip.',
  inlineEditEmpty: 'This is the empty (value is null) **inline edit component**.',
  inlineEditSelect: 'This is the select **inline edit component**.'
}

const InlineEditPage = () => (
  <div>
    <div className={styles.content}>
      <div className={styles.block}>
        <CodeExample
          title='Default Inline Edit'
          description={description.inlineEditDefault}
          markup={exampleInlineEditDefaultCode}>
          <ExampleInlineEditDefault />
        </CodeExample>
        <CodeExample
          title='Inline Edit with an external edit trigger'
          description={description.inlineEditTrigger}
          markup={exampleInlineEditTriggerCode}>
          <ExampleInlineEditTrigger />
        </CodeExample>
        <CodeExample
          title='Inline Edit inline'
          description={description.inlineEditInline}
          markup={exampleInlineEditInlineCode}>
          <ExampleInlineEditInline />
        </CodeExample>
        <CodeExample
          title='Inline Edit readonly'
          description={description.inlineEditReadonly}
          markup={exampleInlineEditReadonlyCode}>
          <ExampleInlineEditReadonly />
        </CodeExample>
        <CodeExample
          title='Inline Edit with a loader'
          description={description.inlineEditLoading}
          markup={exampleInlineEditLoadingCode}>
          <ExampleInlineEditLoading />
        </CodeExample>
        <CodeExample
          title='Inline Edit with an error'
          description={description.inlineEditError}
          markup={exampleInlineEditErrorCode}>
          <ExampleInlineEditError />
        </CodeExample>
        <CodeExample
          title='Inline Edit with a copy to clipboard icon'
          description={description.inlineEditCopy}
          markup={exampleInlineEditCopyCode}>
          <ExampleInlineEditCopy />
        </CodeExample>
        <CodeExample
          title='Inline Edit with tooltip'
          description={description.inlineEditTooltip}
          markup={exampleInlineEditTooltipCode}>
          <ExampleInlineEditTooltip />
        </CodeExample>
        <CodeExample
          title='Empty Inline Edit'
          description={description.inlineEditEmpty}
          markup={exampleInlineEditEmptyCode}>
          <ExampleInlineEditEmpty />
        </CodeExample>
        <CodeExample
          title='Select Inline Edit'
          description={description.inlineEditSelect}
          markup={exampleInlineEditSelectCode}>
          <ExampleInlineEditSelect />
        </CodeExample>
      </div>
      <div className={styles.block}>
        <h3>Props</h3>
        <PropsList list={docs[0].props} />
      </div>
    </div>
  </div>
)

export default InlineEditPage
