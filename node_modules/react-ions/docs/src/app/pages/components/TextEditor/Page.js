import React from 'react'
import PropsList from 'private/modules/PropsList'
import docs from '!!docgen!react-ions/lib/components/TextEditor/TextEditor'
import CodeExample from 'private/modules/CodeExample'
import styles from 'private/css/content'
import ExampleTextEditorDefault from './ExampleTextEditorDefault'
import exampleTextEditorDefaultCode from '!raw!./ExampleTextEditorDefault'
import ExampleTextEditorDisabled from './ExampleTextEditorDisabled'
import exampleTextEditorDisabledCode from '!raw!./ExampleTextEditorDisabled'
import ExampleTextEditorCallback from './ExampleTextEditorCallback'
import exampleTextEditorCallbackCode from '!raw!./ExampleTextEditorCallback'
import ExampleTextEditorPopulated from './ExampleTextEditorPopulated'
import exampleTextEditorPopulatedCode from '!raw!./ExampleTextEditorPopulated'
import ExampleTextEditorMergeTags from './ExampleTextEditorMergeTags'
import exampleTextEditorMergeTagsCode from '!raw!./ExampleTextEditorMergeTags'

const description = {
  textEditorDefault: 'This is the `text editor component` as it appears by default.',
  textEditorDisabled: 'This is the disabled `text editor component`.',
  textEditorCallback: 'This is the `text editor component` with a callback and a placeholder.',
  textEditorPopulated: 'This is the `text editor component` with a set value.',
  textEditorMergeTags: 'This is the `text editor component` with merge tags.'
}

const TextEditorPage = () => (
  <div>
    <div className={styles.content}>
      <div className={styles.block}>
        <CodeExample
          title='Default text editor'
          description={description.textEditorDefault}
          markup={exampleTextEditorDefaultCode}>
          <ExampleTextEditorDefault />
        </CodeExample>
        <CodeExample
          title='Disabled text editor'
          description={description.textEditorDisabled}
          markup={exampleTextEditorDisabledCode}>
          <ExampleTextEditorDisabled />
        </CodeExample>
        <CodeExample
          title='Text editor with a callback and placeholder'
          description={description.textEditorCallback}
          markup={exampleTextEditorCallbackCode}>
          <ExampleTextEditorCallback />
        </CodeExample>
        <CodeExample
          title='Text editor with a set value'
          description={description.textEditorPopulated}
          markup={exampleTextEditorPopulatedCode}>
          <ExampleTextEditorPopulated />
        </CodeExample>
        <CodeExample
          title='Text editor with merge tags'
          description={description.textEditorMergeTags}
          markup={exampleTextEditorMergeTagsCode}>
          <ExampleTextEditorMergeTags />
        </CodeExample>
        <div className={styles.block}>
          <h3>Props</h3>
          <PropsList list={docs[0].props} />
        </div>
      </div>
    </div>
  </div>
)

export default TextEditorPage
