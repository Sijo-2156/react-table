import React from 'react'
import PropsList from 'private/modules/PropsList'
import docs from '!!docgen!react-ions/lib/components/FileUpload/FileUpload'
import CodeExample from 'private/modules/CodeExample'
import styles from 'private/css/content'
import ExampleFileUploadDefault from './ExampleFileUploadDefault'
import exampleFileUploadDefault from '!raw!./ExampleFileUploadDefault'
import ExampleFileUploadPreview from './ExampleFileUploadPreview'
import exampleFileUploadPreview from '!raw!./ExampleFileUploadPreview'
import ExampleFileUploadCustomPreview from './ExampleFileUploadCustomPreview'
import exampleFileUploadCustomPreview from '!raw!./ExampleFileUploadCustomPreview'
import ExampleFileUploadDisabled from './ExampleFileUploadDisabled'
import exampleFileUploadDisabled from '!raw!./ExampleFileUploadDisabled'
import ExampleFileUploadCallback from './ExampleFileUploadCallback'
import exampleFileUploadCallback from '!raw!./ExampleFileUploadCallback'
import ExampleFileUploadValue from './ExampleFileUploadValue'
import exampleFileUploadValue from '!raw!./ExampleFileUploadValue'

const description = {
  fileUploadDefault: 'This is the `file upload component` as it appears by default.',
  fileUploadPreview: 'This is the `file upload component` with preview.',
  fileUploadCustomPreview: 'This is the `file upload component` with custom preview size.',
  fileUploadDisabled: 'This is the disabled `file upload component`.',
  fileUploadCallback: 'This is the `file upload component` with a callback.',
  fileUploadValue: 'This is the `file upload component` with a populated value property.'
}

const FileUploadPage = () => (
  <div>
    <div className={styles.content}>
      <div className={styles.block}>
        <CodeExample
          title='Default File Upload'
          description={description.fileUploadDefault}
          markup={exampleFileUploadDefault}>
          <ExampleFileUploadDefault />
        </CodeExample>
        <CodeExample
          title='File Upload with Preview'
          description={description.fileUploadPreview}
          markup={exampleFileUploadPreview}>
          <ExampleFileUploadPreview />
        </CodeExample>
        <CodeExample
          title='File Upload with Custom Preview Size'
          description={description.fileUploadCustomPreview}
          markup={exampleFileUploadCustomPreview}>
          <ExampleFileUploadCustomPreview />
        </CodeExample>
        <CodeExample
          title='Disabled File Upload'
          description={description.fileUploadDisabled}
          markup={exampleFileUploadDisabled}>
          <ExampleFileUploadDisabled />
        </CodeExample>
        <CodeExample
          title='File Upload with Callback'
          description={description.fileUploadCallback}
          markup={exampleFileUploadCallback}>
          <ExampleFileUploadCallback />
        </CodeExample>
        <CodeExample
          title='File Upload with Value'
          description={description.fileUploadValue}
          markup={exampleFileUploadValue}>
          <ExampleFileUploadValue />
        </CodeExample>
        <div className={styles.block}>
          <h3>Props</h3>
          <PropsList list={docs[0].props} />
        </div>
      </div>
    </div>
  </div>
)

export default FileUploadPage
