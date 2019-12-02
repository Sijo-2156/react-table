import React from 'react'
import PropsList from 'private/modules/PropsList'
import buttonDocs from '!!docgen!react-ions/lib/components/Button/Button'
import CodeExample from 'private/modules/CodeExample'
import styles from 'private/css/content'
import ExampleButtonDefault from './ExampleButtonDefault'
import exampleButtonDefaultCode from '!raw!./ExampleButtonDefault'
import ExampleButtonIcon from './ExampleButtonIcon'
import exampleButtonIconCode from '!raw!./ExampleButtonIcon'
import ExampleButtonDisabled from './ExampleButtonDisabled'
import exampleButtonDisabledCode from '!raw!./ExampleButtonDisabled'
import ExampleButtonTypes from './ExampleButtonTypes'
import exampleButtonTypesCode from '!raw!./ExampleButtonTypes'
import ExampleButtonLoaders from './ExampleButtonLoaders'
import exampleButtonLoadersCode from '!raw!./ExampleButtonLoaders'
import ExampleButtonMultipleOptClasses from './ExampleButtonMultipleOptClasses'
import exampleButtonMultipleOptClassesCode from '!raw!./ExampleButtonMultipleOptClasses'
import ExampleButtonAnchor from './ExampleButtonAnchor'
import exampleButtonAnchorCode from '!raw!./ExampleButtonAnchor'
import ExampleButtonConfirmation from './ExampleButtonConfirmation'
import exampleButtonConfirmationCode from '!raw!./ExampleButtonConfirmation'
import ExampleButtonConfirmationCallback from './ExampleButtonConfirmationCallback'
import exampleButtonConfirmationCallbackCode from '!raw!./ExampleButtonConfirmationCallback'
import ExampleButtonConfirmationLoader from './ExampleButtonConfirmationLoader'
import exampleButtonConfirmationLoaderCode from '!raw!./ExampleButtonConfirmationLoader'
import ExampleStyledButton from './ExampleStyledButton'
import exampleStyledButtonCode from '!raw!./ExampleStyledButton'
import ExampleButtonMouseEvent from './ExampleButtonMouseEvent'
import exampleButtonMouseEventCode from '!raw!./ExampleButtonMouseEvent'

const description = {
  buttonDefault: 'This is the `button component` as it appears by default.',
  buttonIcon: 'This is the `button component` with a single icon. The icon can be displayed on the left or right.',
  buttonDisabled: 'This is the disabled `button component`.',
  buttonTypes: 'Here are a more than a few of the button types available on the `button component`.',
  buttonLoaders: 'Here are the available button types with loaders.',
  buttonMultipleOptClassesCode: 'This is the `button component` with multiple optClasses',
  buttonAnchor: 'The `<ButtonAnchor />` component generates an anchor tag.',
  buttonConfirmation: 'The `<ButtonConfirmation />` component generates an overlay to confirm an action.',
  buttonConfirmationCallback: 'This is `<ButtonConfirmation />` component showing the callback in action.',
  buttonConfirmationLoader: 'This is `<ButtonConfirmation />` component with a loader.',
  styledButton: 'This is a `<Button />` that has been styled using `styled-components` < 💅 >',
  buttonMouseEvent: 'This is a `<Button />` that has a couple of mouse events.'
}

const ButtonsPage = () => (
  <div>
    <div className={styles.content}>
      <div className={styles.block}>
        <CodeExample
          title='Default Button'
          description={description.buttonDefault}
          markup={exampleButtonDefaultCode}>
          <ExampleButtonDefault />
        </CodeExample>
        <CodeExample
          title='Button with Icon'
          description={description.buttonIcon}
          markup={exampleButtonIconCode}>
          <ExampleButtonIcon />
        </CodeExample>
        <CodeExample
          title='Disabled Button'
          description={description.buttonDisabled}
          markup={exampleButtonDisabledCode}>
          <ExampleButtonDisabled />
        </CodeExample>
        <CodeExample
          title='Button Types (aka variety pack)'
          description={description.buttonTypes}
          markup={exampleButtonTypesCode}>
          <ExampleButtonTypes />
        </CodeExample>
        <CodeExample
          title='Buttons With Loaders'
          description={description.buttonLoaders}
          markup={exampleButtonLoadersCode}>
          <ExampleButtonLoaders />
        </CodeExample>
        <CodeExample
          title='Button With Multiple optClasses'
          description={description.buttonMultipleOptClassesCode}
          markup={exampleButtonMultipleOptClassesCode}>
          <ExampleButtonMultipleOptClasses />
        </CodeExample>
        <CodeExample
          title='Button Anchor'
          description={description.buttonAnchor}
          markup={exampleButtonAnchorCode}>
          <ExampleButtonAnchor />
        </CodeExample>
        <CodeExample
          title='Button with Confirmation'
          description={description.buttonConfirmation}
          markup={exampleButtonConfirmationCode}>
          <ExampleButtonConfirmation />
        </CodeExample>
        <CodeExample
          title='Button with Confirmation callback'
          description={description.buttonConfirmationCallback}
          markup={exampleButtonConfirmationCallbackCode}>
          <ExampleButtonConfirmationCallback />
        </CodeExample>
        <CodeExample
          title='Button with Confirmation & loader'
          description={description.buttonConfirmationCallback}
          markup={exampleButtonConfirmationLoaderCode}>
          <ExampleButtonConfirmationLoader />
        </CodeExample>
        <CodeExample
          title='Styled Button'
          description={description.styledButton}
          markup={exampleStyledButtonCode}>
          <ExampleStyledButton />
        </CodeExample>
        <CodeExample
          title='Button with mouse events'
          description={description.buttonMouseEvent}
          markup={exampleButtonMouseEventCode}>
          <ExampleButtonMouseEvent />
        </CodeExample>
      </div>
      <div className={styles.block}>
        <h3>Button Props</h3>
        <PropsList list={buttonDocs[0].props} />
      </div>
      <div className={styles.block}>
        <h3>Button Anchor Props</h3>
        <p>TBD</p>
      </div>
    </div>
  </div>
)

export default ButtonsPage
