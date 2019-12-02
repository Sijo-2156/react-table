import React from 'react'
import PropsList from 'private/modules/PropsList'
import docs from '!!docgen!react-ions/lib/components/SortableList/SortableList'
import CodeExample from 'private/modules/CodeExample'
import ExampleSortableListDefault from './ExampleSortableListDefault'
import exampleSortableListDefaultCode from '!raw!./ExampleSortableListDefault'
import ExampleSortableListNodes from './ExampleSortableListNodes'
import exampleSortableListNodesCode from '!raw!./ExampleSortableListNodes'
import ExampleSortableListModal from './ExampleSortableListModal'
import exampleSortableListModalCode from '!raw!./ExampleSortableListModal'
import styles from 'private/css/content'

const description = {
  sortableListDefault: 'This is the `sortable list component` as it appears by default.',
  sortableListNodes: 'This is the `sortable list component` with nodes as the text prop.',
  sortableListModal: 'This is the `sortable list component` inside a modal.'
}

const SortableListPage = () => (
  <div>
    <div className={styles.content}>
      <div className={styles.block}>
        <CodeExample
          title='Default Sortable List'
          description={description.sortableListDefault}
          markup={exampleSortableListDefaultCode}>
          <ExampleSortableListDefault />
        </CodeExample>
        <CodeExample
          title='Sortable List with nodes as the text prop'
          description={description.sortableListNodes}
          markup={exampleSortableListNodesCode}>
          <ExampleSortableListNodes />
        </CodeExample>
        <CodeExample
          title='Sortable List inside a Modal'
          description={description.sortableListModal}
          markup={exampleSortableListModalCode}>
          <ExampleSortableListModal />
        </CodeExample>
        <div className={styles.block}>
          <h3>Props</h3>
          <PropsList list={docs[0].props} />
        </div>
      </div>
    </div>
  </div>
)

export default SortableListPage
