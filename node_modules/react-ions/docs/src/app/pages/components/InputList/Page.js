import React from 'react'
import PropsList from 'private/modules/PropsList'
import docs from '!!docgen!react-ions/lib/components/InputList/InputList'
import CodeExample from 'private/modules/CodeExample'
import ExampleInputList from './ExampleInputList'
import exampleInputListCode from '!raw!./ExampleInputList'
import styles from 'private/css/content'

const description = {
  inputList: 'This is the `input-list component`.'
}

const InputListPage = () => (
  <div>
    <div className={styles.content}>
      <div className={styles.block}>
        <CodeExample
          title='Input List'
          description={description.inputList}
          markup={exampleInputListCode}>
          <ExampleInputList />
        </CodeExample>
        <div className={styles.block}>
          <h3>Props</h3>
          <PropsList list={docs[0].props} />
        </div>
      </div>
    </div>
  </div>
)

export default InputListPage
