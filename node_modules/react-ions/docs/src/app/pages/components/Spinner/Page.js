import React from 'react'
import PropsList from 'private/modules/PropsList'
import docs from '!!docgen!react-ions/lib/components/Spinner/Spinner'
import CodeExample from 'private/modules/CodeExample'
import ExampleSpinnerDefault from './ExampleSpinnerDefault'
import exampleSpinnerDefaultCode from '!raw!./ExampleSpinnerDefault'
import ExampleSpinnerBounce from './ExampleSpinnerBounce'
import exampleSpinnerBounceCode from '!raw!./ExampleSpinnerBounce'
import ExampleSpinnerInline from './ExampleSpinnerInline'
import exampleSpinnerInlineCode from '!raw!./ExampleSpinnerInline'
import ExampleSpinnerDelay from './ExampleSpinnerDelay'
import exampleSpinnerDelayCode from '!raw!./ExampleSpinnerDelay'
import ExampleStyledSpinner from './ExampleStyledSpinner'
import exampleStyledSpinnerCode from '!raw!./ExampleStyledSpinner'
import ExampleSpinnerCircular from './ExampleSpinnerCircular'
import exampleSpinnerCircularCode from '!raw!./ExampleSpinnerCircular'
import style from 'private/css/content'
import localStyle from './style.scss'

const description = {
  spinnerDefault: 'This is the default **spinner component**. When `position=\'fixed\'` is passed as a prop, the spinner will fill the entire screen.',
  spinnerBounce: 'This is a variation of the **spinner component**.',
  spinnerCircular: 'This is a variation of the **spinner component**.',
  spinnerInline: 'This is a variation of the **spinner component** that allows it to sit inline.',
  spinnerDelay: 'This is spinner with a five second delay before it\'s shown',
  styledSpinner: 'This is a `<Spinner />` that has been styled using `styled-components` < 💅 >'
}

const SpinnerPage = () => {
  return (
    <div>
      <div className={style.content}>
        <div className={style.block}>
          <CodeExample
            title='Spinner Example'
            description={description.spinnerDefault}
            markup={exampleSpinnerDefaultCode}
            optClass={localStyle['component-override']}>
            <ExampleSpinnerDefault />
          </CodeExample>
          <CodeExample
            title='Spinner Bounce Example'
            description={description.spinnerBounce}
            markup={exampleSpinnerBounceCode}
            optClass={localStyle['component-override']}>
            <ExampleSpinnerBounce />
          </CodeExample>
          <CodeExample
            title='Circular Spinner Example'
            description={description.spinnerCircular}
            markup={exampleSpinnerCircularCode}
            optClass={localStyle['component-override']}>
            <ExampleSpinnerCircular />
          </CodeExample>
          <CodeExample
            title='Spinner Inline Example'
            description={description.spinnerInline}
            markup={exampleSpinnerInlineCode}>
            <ExampleSpinnerInline />
          </CodeExample>
          <CodeExample
            title='Spinner Inline Delay'
            description={description.spinnerDelay}
            markup={exampleSpinnerDelayCode}
            optClass={localStyle['component-override']}>
            <ExampleSpinnerDelay />
          </CodeExample>
          <CodeExample
            title='Styled Spinner'
            description={description.styledSpinner}
            markup={exampleStyledSpinnerCode}
            optClass={localStyle['component-override']}>
            <ExampleStyledSpinner />
          </CodeExample>
        </div>
        <div className={style.block}>
          <h3>Props</h3>
          <PropsList list={docs[0].props} />
        </div>
      </div>
    </div>
  )
}

export default SpinnerPage
