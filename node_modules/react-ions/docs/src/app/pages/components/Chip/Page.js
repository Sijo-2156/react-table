import React from 'react'
import PropsList from 'private/modules/PropsList'
import docs from '!!docgen!react-ions/lib/components/Chip/Chip'
import CodeExample from 'private/modules/CodeExample'
import ExampleChipDefault from './ExampleChipDefault'
import exampleChipDefaultCode from '!raw!./ExampleChipDefault'
import ExampleChipLarger from './ExampleChipLarger'
import exampleChipLargerCode from '!raw!./ExampleChipLarger'
import ExampleChipSmaller from './ExampleChipSmaller'
import exampleChipSmallerCode from '!raw!./ExampleChipSmaller'
import ExampleChipCallback from './ExampleChipCallback'
import exampleChipCallbackCode from '!raw!./ExampleChipCallback'
import styles from 'private/css/content'

const description = {
  chipDefault: 'This is the `chip component` as it appears by default.',
  chipLarger: 'This is the larger `chip component`.',
  chipSmaller: 'This is the smaller `chip component`.',
  chipClickCallback: 'This is the `chip component` with a click callback.'
}

const ChipPage = () => (
  <div>
    <div className={styles.content}>
      <div className={styles.block}>
        <CodeExample
          title='Default Chip'
          description={description.chipDefault}
          markup={exampleChipDefaultCode}>
          <ExampleChipDefault />
        </CodeExample>
        <CodeExample
          title='Larger Chip'
          description={description.chipLarger}
          markup={exampleChipLargerCode}>
          <ExampleChipLarger />
        </CodeExample>
        <CodeExample
          title='Smaller Chip'
          description={description.chipSmaller}
          markup={exampleChipSmallerCode}>
          <ExampleChipSmaller />
        </CodeExample>
        <CodeExample
          title='Chip with click callback'
          description={description.chipClickCallback}
          markup={exampleChipCallbackCode}>
          <ExampleChipCallback />
        </CodeExample>
        <div className={styles.block}>
          <h3>Props</h3>
          <PropsList list={docs[0].props} />
        </div>
      </div>
    </div>
  </div>
)

export default ChipPage
