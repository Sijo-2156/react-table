import React from 'react'
import PropsList from 'private/modules/PropsList'
import docs from '!!docgen!react-ions/lib/components/Modal/Modal'
import CodeExample from 'private/modules/CodeExample'
import styles from 'private/css/content'
import ExampleModalDefault from './ExampleModalDefault'
import exampleModalDefaultCode from '!raw!./ExampleModalDefault'
import ExampleModalActions from './ExampleModalActions'
import exampleModalActionsCode from '!raw!./ExampleModalActions'
import ExampleModalSmall from './ExampleModalSmall'
import exampleModalSmallCode from '!raw!./ExampleModalSmall'
import ExampleModalLarge from './ExampleModalLarge'
import exampleModalLargeCode from '!raw!./ExampleModalLarge'
import ExampleModalCustomTitle from './ExampleModalCustomTitle'
import exampleModalCustomTitleCode from '!raw!./ExampleModalCustomTitle'
import ExampleModalColorSplash from './ExampleModalColorSplash'
import exampleModalColorSplashCode from '!raw!./ExampleModalColorSplash'

const description = {
  modalDefault: 'This is the `modal component` as it appears by default.',
  modalActions: 'This is the `modal component` with actions.',
  modalSmall: 'This is the small `modal component`.',
  modalLarge: 'This is the large `modal component`.',
  modalCustomTitle: 'This is the `modal component` with a custom title element.',
  modalColorSplash: 'This is the `modal component` with the color splash theme.'
}

const ModalPage = () => (
  <div>
    <div className={styles.content}>
      <div className={styles.block}>
        <CodeExample
          title='Default Modal'
          description={description.modalDefault}
          markup={exampleModalDefaultCode}>
          <ExampleModalDefault />
        </CodeExample>
        <CodeExample
          title='Modal With Actions'
          description={description.modalActions}
          markup={exampleModalActionsCode}>
          <ExampleModalActions />
        </CodeExample>
        <CodeExample
          title='Small Modal'
          description={description.modalSmall}
          markup={exampleModalSmallCode}>
          <ExampleModalSmall />
        </CodeExample>
        <CodeExample
          title='Large Modal'
          description={description.modalLarge}
          markup={exampleModalLargeCode}>
          <ExampleModalLarge />
        </CodeExample>
        <CodeExample
          title='Modal With Custom Title'
          description={description.modalCustomTitle}
          markup={exampleModalCustomTitleCode}>
          <ExampleModalCustomTitle />
        </CodeExample>
        <CodeExample
          title='Modal With Color Splash Theme'
          description={description.modalColorSplash}
          markup={exampleModalColorSplashCode}>
          <ExampleModalColorSplash />
        </CodeExample>
        <div className={styles.block}>
          <h3>Props</h3>
          <PropsList list={docs[0].props} />
        </div>
      </div>
    </div>
  </div>
)

export default ModalPage
