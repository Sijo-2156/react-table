import React from 'react'
import PropsList from 'private/modules/PropsList'
import docs from '!!docgen!react-ions/lib/components/Icon/Icon'
import CodeExample from 'private/modules/CodeExample'
import ExampleIconDefault from './ExampleIconDefault'
import exampleIconDefaultCode from '!raw!./ExampleIconDefault'
import ExampleIconCustom from './ExampleIconCustom'
import exampleIconCustomCode from '!raw!./ExampleIconCustom'
import styles from 'private/css/content'

const description = {
  iconDefault: 'This is the `icon component` with only a `name` property, which is required.',
  iconCustom: 'This is the `icon component` customized with additional `width`, `height`, `fill`, and `className` properties.'
}

const IconsPage = () => (
  <div>
    <div className={styles.content}>
      <div className={styles.block}>
        <CodeExample
          title='Default Icon'
          description={description.iconDefault}
          markup={exampleIconDefaultCode}>
          <ExampleIconDefault />
        </CodeExample>
        <CodeExample
          title='Custom Icon'
          description={description.iconCustom}
          markup={exampleIconCustomCode}>
          <ExampleIconCustom />
        </CodeExample>
      </div>
      <div className={styles.block}>
        <h3>Props</h3>
        <PropsList list={docs[0].props} />
      </div>
    </div>
  </div>
)

export default IconsPage
