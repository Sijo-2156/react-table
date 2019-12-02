import React from 'react'
import PropsList from 'private/modules/PropsList'
import docs from '!!docgen!react-ions/lib/components/Input/Input'
import CodeExample from 'private/modules/CodeExample'
import styles from 'private/css/content'
import ExampleInputDefault from './ExampleInputDefault'
import exampleInputDefaultCode from '!raw!./ExampleInputDefault'
import ExampleInputPlaceholder from './ExampleInputPlaceholder'
import exampleInputPlaceholderCode from '!raw!./ExampleInputPlaceholder'
import ExampleInputDisabled from './ExampleInputDisabled'
import exampleInputDisabledCode from '!raw!./ExampleInputDisabled'
import ExampleInputError from './ExampleInputError'
import exampleInputErrorCode from '!raw!./ExampleInputError'
import ExampleInputLabel from './ExampleInputLabel'
import exampleInputLabel from '!raw!./ExampleInputLabel'
import ExampleInputCallback from './ExampleInputCallback'
import exampleInputCallbackCode from '!raw!./ExampleInputCallback'
import ExampleInputPopulated from './ExampleInputPopulated'
import exampleInputPopulatedCode from '!raw!./ExampleInputPopulated'
import ExampleInputNumber from './ExampleInputNumber'
import exampleInputNumberCode from '!raw!./ExampleInputNumber'
import ExampleInputPrefixSuffix from './ExampleInputPrefixSuffix'
import exampleInputPrefixSuffixCode from '!raw!./ExampleInputPrefixSuffix'
import ExampleInputCopy from './ExampleInputCopy'
import exampleInputCopyCode from '!raw!./ExampleInputCopy'

const description = {
  inputDefault: 'This is the `input component` as it appears by default.',
  inputPlaceholder: 'This is the `input component` with placeholder text.',
  inputDisabled: 'This is the disabled `input component`.',
  inputError: 'This is the `input component` with error.',
  inputWithLabel: 'This is the `input component` with a label and helper text.',
  inputCallback: 'This is the `input component` with a callback function. __Note__: the `style import` and `code` tag is for display purposes only.',
  inputNumber: 'This is the `input component` with different types.',
  inputPrefixSuffix: 'This is the `input component` with a variety of prefix and suffix.',
  inputCopy: 'This is the `input component` with click to copy.'
}

const InputPage = () => (
  <div>
    <div className={styles.content}>
      <div className={styles.block}>
        <CodeExample
          title='Default Input'
          description={description.inputDefault}
          markup={exampleInputDefaultCode}>
          <ExampleInputDefault />
        </CodeExample>
        <CodeExample
          title='Input with Placeholder Text'
          description={description.inputPlaceholder}
          markup={exampleInputPlaceholderCode}>
          <ExampleInputPlaceholder />
        </CodeExample>
        <CodeExample
          title='Disabled Input'
          description={description.inputDisabled}
          markup={exampleInputDisabledCode}>
          <ExampleInputDisabled />
        </CodeExample>
        <CodeExample
          title='Error Input'
          description={description.inputError}
          markup={exampleInputErrorCode}>
          <ExampleInputError />
        </CodeExample>
        <CodeExample
          title='Input with Label and Helper Text'
          description={description.inputWithLabel}
          markup={exampleInputLabel}>
          <ExampleInputLabel />
        </CodeExample>
        <CodeExample
          title='Input with callback function(s)'
          description={description.inputCallback}
          markup={exampleInputCallbackCode}>
          <ExampleInputCallback />
        </CodeExample>
        <CodeExample
          title='Handling updates via props'
          description={description.inputCallback}
          markup={exampleInputPopulatedCode}>
          <ExampleInputPopulated />
        </CodeExample>
        <CodeExample
          title='Input with different types'
          description={description.inputNumber}
          markup={exampleInputNumberCode}>
          <ExampleInputNumber />
        </CodeExample>
        <CodeExample
          title='Input with a variety of prefix and suffix'
          description={description.inputPrefixSuffix}
          markup={exampleInputPrefixSuffixCode}>
          <ExampleInputPrefixSuffix />
        </CodeExample>
        <CodeExample
          title='Input with click to copy'
          description={description.inputCopy}
          markup={exampleInputCopyCode}>
          <ExampleInputCopy id='test-input-copy' value='Copy me to your clipboard' />
        </CodeExample>
        <div className={styles.block}>
          <h3>Props</h3>
          <PropsList list={docs[0].props} />
        </div>
      </div>
    </div>
  </div>
)

export default InputPage
