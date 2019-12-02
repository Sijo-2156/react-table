import React from 'react'
import PropsList from 'private/modules/PropsList'
import docs from '!!docgen!react-ions/lib/components/Tooltip/Tooltip'
import CodeExample from 'private/modules/CodeExample'
import styles from 'private/css/content'
import ExampleTooltipDefault from './ExampleTooltipDefault'
import exampleTooltipDefaultCode from '!raw!./ExampleTooltipDefault'
import ExampleTooltipVisible from './ExampleTooltipVisible'
import exampleTooltipVisibleCode from '!raw!./ExampleTooltipVisible'
import ExampleTooltipCallbacks from './ExampleTooltipCallbacks'
import ExampleTooltipCallbacksCode from '!raw!./ExampleTooltipCallbacks'
import ExampleTooltipEllipsis from './ExampleTooltipEllipsis'
import ExampleTooltipEllipsisCode from '!raw!./ExampleTooltipEllipsis'

const description = {
  tooltipDefault: 'This is the default `tooltip component`.',
  tooltipVisible: 'This is the `tooltip component` that is visible by default.',
  tooltipCallbacks: 'This is the `tooltip component` with callbacks.',
  tooltipEllipsis: 'This is the `tooltip component` which only shows with ellipsis.'
}

const TooltipPage = () => (
  <div>
    <div className={styles.content}>
      <div className={styles.block}>
        <CodeExample
          title='Default tooltip'
          description={description.tooltipDefault}
          markup={exampleTooltipDefaultCode}>
          <ExampleTooltipDefault />
        </CodeExample>
        <CodeExample
          title='Tooltip visible by default'
          description={description.tooltipVisible}
          markup={exampleTooltipVisibleCode}>
          <ExampleTooltipVisible />
        </CodeExample>
        <CodeExample
          title='Tooltip with onMouseOver and onMouseOut callbacks'
          description={description.tooltipCallbacks}
          markup={ExampleTooltipCallbacksCode}>
          <ExampleTooltipCallbacks />
        </CodeExample>
        <CodeExample
          title='Tooltip which only shows with ellipsis'
          description={description.tooltipEllipsis}
          markup={ExampleTooltipEllipsisCode}>
          <ExampleTooltipEllipsis />
        </CodeExample>
        <div className={styles.block}>
          <h3>Props</h3>
          <PropsList list={docs[0].props} />
        </div>
      </div>
    </div>
  </div>
)

export default TooltipPage
