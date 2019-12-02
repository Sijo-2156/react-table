import React from 'react'
import PropsList from 'private/modules/PropsList'
import panelGroupDocs from '!!docgen!react-ions/lib/components/PanelGroup/PanelGroup'
import panelDocs from '!!docgen!react-ions/lib/components/PanelGroup/Panel'
import panelHeaderDocs from '!!docgen!react-ions/lib/components/PanelGroup/PanelHeader'
import panelContentDocs from '!!docgen!react-ions/lib/components/PanelGroup/PanelContent'
import CodeExample from 'private/modules/CodeExample'
import styles from 'private/css/content'
import ExamplePanelGroup from './ExamplePanelGroup'
import examplePanelGroupCode from '!raw!./ExamplePanelGroup'
import ExamplePanelGroupAccordion from './ExamplePanelGroupAccordion'
import examplePanelGroupAccordionCode from '!raw!./ExamplePanelGroupAccordion'
import ExamplePanelGroupMultiStep from './ExamplePanelGroupMultiStep'
import ExamplePanelGroupMultiStepCode from '!raw!./ExamplePanelGroupMultiStep'
import ExamplePanelGroupSimple from './ExamplePanelGroupSimple'
import ExamplePanelGroupSimpleCode from '!raw!./ExamplePanelGroupSimple'
import ExamplePanelGroupNested from './ExamplePanelGroupNested'
import ExamplePanelGroupNestedCode from '!raw!./ExamplePanelGroupNested'
import ExamplePanelGroupNode from './ExamplePanelGroupNode'
import examplePanelGroupNodeCode from '!raw!./ExamplePanelGroupNode'
import ExamplePanelSlider from './ExamplePanelSlider'
import ExamplePanelSliderCode from '!raw!./ExamplePanelSlider'

const description = {
  panelGroup: 'This is the default `panel group component`.',
  panelGroupAccordion: 'This is the default `panel group component` with accordion functionality.',
  panelGroupMultiStep: 'This is the `panel group component` with a multi-step design variation.',
  panelGroupSimple: 'This is the `panel group component` with simple styles.',
  panelGroupNested: 'This is a `panel group component` within another component.',
  panelGroupNode: 'This is a `panel group component` within nodes for titles.',
  panelSlider: 'This is a `panel slider component` Note: when implementing the panel-slider, add `overflow-x: hidden; overflow-y: scroll;` to a containing wrapper element, to avoid horizontal scrolling. This has the benefit of allowing slider contents to "overflow" eg: custom dropdowns, etc.'
}

const PanelGroupPage = () => (
  <div>
    <div className={styles.content}>
      <div className={styles.block}>
        <CodeExample
          title='Default Panel Group'
          description={description.panelGroup}
          markup={examplePanelGroupCode}>
          <ExamplePanelGroup />
        </CodeExample>
        <CodeExample
          title='Default Panel Group with Accordion'
          description={description.panelGroupAccordion}
          markup={examplePanelGroupAccordionCode}>
          <ExamplePanelGroupAccordion />
        </CodeExample>
        <CodeExample
          title='Panel Group: Multi-Step'
          description={description.panelGroupMultiStep}
          markup={ExamplePanelGroupMultiStepCode}>
          <ExamplePanelGroupMultiStep />
        </CodeExample>
        <CodeExample
          title='Panel Group: Simple'
          description={description.panelGroupSimple}
          markup={ExamplePanelGroupSimpleCode}>
          <ExamplePanelGroupSimple />
        </CodeExample>
        <CodeExample
          title='Panel Group: Nested'
          description={description.panelGroupNested}
          markup={ExamplePanelGroupNestedCode}>
          <ExamplePanelGroupNested />
        </CodeExample>
        <CodeExample
          title='Panel Group with nodes for titles'
          description={description.panelGroupNode}
          markup={examplePanelGroupNodeCode}>
          <ExamplePanelGroupNode />
        </CodeExample>
        <CodeExample
          title='Panel Slider'
          description={description.panelSlider}
          markup={ExamplePanelSliderCode}>
          <ExamplePanelSlider />
        </CodeExample>
      </div>
      {/* <div className={styles.block}>
        <h3>Panel Group Props</h3>
        <PropsList list={panelGroupDocs[0].props} />
      </div>
      <div className={styles.block}>
        <h3>Panel Slider Props</h3>
        <PropsList list={panelSliderDocs[0].props} />
      </div>
      <div className={styles.block}>
        <h3>Panel Props</h3>
        <PropsList list={panelDocs[0].props} />
      </div>
      <div className={styles.block}>
        <h3>Panel Header Props</h3>
        <PropsList list={panelHeaderDocs[0].props} />
      </div>
      <div className={styles.block}>
        <h3>Panel Content Props</h3>
        <PropsList list={panelContentDocs[0].props} />
      </div>*/}
    </div>
  </div>
)

export default PanelGroupPage
