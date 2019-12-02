import React from 'react'
import PropsList from 'private/modules/PropsList'
import docs from '!!docgen!react-ions/lib/components/Popover/Popover'
import CodeExample from 'private/modules/CodeExample'
import styles from 'private/css/content'
import ExampleLeftPopover from './ExampleLeftPopover'
import exampleLeftPopoverCode from '!raw!./ExampleLeftPopover'
import ExampleRightPopover from './ExampleRightPopover'
import exampleRightPopoverCode from '!raw!./ExampleRightPopover'
import ExampleTopPopover from './ExampleTopPopover'
import exampleTopPopoverCode from '!raw!./ExampleTopPopover'
import ExampleBottomPopover from './ExampleBottomPopover'
import exampleBottomPopoverCode from '!raw!./ExampleBottomPopover'
import ExampleBottomLeftPopover from './ExampleBottomLeftPopover'
import exampleBottomLeftPopoverCode from '!raw!./ExampleBottomLeftPopover'

const description = {
  popoverLeft: 'This is the `Popover` component with the position prop as `left` as it appears by default.',
  popoverRight: 'This is the `Popover` component with the position prop as `right` as it appears by default.',
  popoverTop: 'This is the `Popover` component with the position prop as `top` as it appears by default.',
  popoverBottom: 'This is the `Popover` component with the position prop as `bottom` as it appears by default.',
  popoverBottomLeft: 'This is the `Popover` component with the position prop as `bottomLeft` as it appears by default.'
}

const PopoverPage = () => (
  <div>
    <div className={styles.content}>
      <div className={styles.block}>
        <CodeExample
          title='Example Left Popover'
          description={description.popoverLeft}
          markup={exampleLeftPopoverCode}>
          <ExampleLeftPopover />
        </CodeExample>
      </div>

      <div className={styles.block}>
        <CodeExample
          title='Example Right Popover'
          description={description.popoverRight}
          markup={exampleRightPopoverCode}>
          <ExampleRightPopover />
        </CodeExample>
      </div>

      <div className={styles.block}>
        <CodeExample
          title='Example Top Popover'
          description={description.popoverTop}
          markup={exampleTopPopoverCode}>
          <ExampleTopPopover />
        </CodeExample>
      </div>

      <div className={styles.block}>
        <CodeExample
          title='Example Bottom Popover'
          description={description.popoverBottom}
          markup={exampleBottomPopoverCode}>
          <ExampleBottomPopover />
        </CodeExample>
      </div>

      <div className={styles.block}>
        <CodeExample
          title='Example Bottom Left Popover'
          description={description.popoverBottomLeft}
          markup={exampleBottomLeftPopoverCode}>
          <ExampleBottomLeftPopover />
        </CodeExample>
      </div>

      <div className={styles.block}>
        <h3>Props</h3>
        <PropsList list={docs[0].props} />
      </div>
    </div>
  </div>
)

export default PopoverPage
