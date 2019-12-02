import React from 'react'
import Snippet from '../../modules/Snippet'
import { Alert } from 'react-ions/lib/components/Alerts'
import buttonExampleSnippet from '!raw!./Buttons/ExampleButtonDefault'
import inputExampleSnippet from '!raw!./Input/ExampleInputOptClass'
import snippetStyles from 'private/css/snippet'
import styles from 'private/css/content'

const fontCss = 'font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'

const ComponentsPage = () => (
  <div>
    <div className={styles.content}>
      <div className={styles.block}>
        <h2>Installation, Prerequisites and Basic Usage</h2>
        <p>React&#123;ions&#125; is a suite of <a href="http://facebook.github.io/react/">React</a> components that implement <a href="http://getambassador.com">Ambassador's</a> Design and UX patterns. They are designed to be re-usable and composable across large-scale web applications. They are powered by <a href="https://github.com/css-modules/css-modules">CSS Modules</a> and integrate with your <a href="http://webpack.github.io/">webpack</a> workflow, or any other module bundler.</p>
      </div>

      <div className={styles.block}>
        <h3>Installation</h3>
        <Snippet markup='npm install --save react-ions' />
      </div>

      <div className={styles.block}>
        <h3>Prerequisites</h3>
        <p>React&#123;ions&#125; currently requires <b>React 15.1+</b></p>
        <p>We use <a href="https://github.com/css-modules/css-modules">CSS Modules</a> by default to import stylesheets written in SASS. In case you want to import the components already bundled with CSS, your module bundler should be able to require these SASS modules.</p>
        <p>To allow your app to render SCSS and import CSS into JavaScript, you'll need the following: <i>node-sass sass-loader & style-loader</i></p>
      </div>

      <div className={styles.block}>
        <h3>Basic Usage</h3>
        <p>In this minimal example, we import a Button with styles already bundled:</p>
        <Snippet markup={buttonExampleSnippet} />
        <Alert type="info" optClass={styles['alert-override']}>If you are not seeing any styles when you load a component, please make sure your project configuration (Webpack, etc.) is using CSS modules to process SASS.</Alert>
      </div>

      <div className={styles.block}>
        <h3>Example Webpack Config</h3>
        <p>Here is an <a href="https://github.com/GetAmbassador/reactions-webpack-example" target="_blank">example Rect&#123;ions&#125; Webpack app</a> to get you started.</p>
      </div>

      <div className={styles.block}>
        <h3>Customizing components</h3>
        <p>Each React&#123;ion&#125; component exposes an <code className={snippetStyles['snippet-inline']}>optClass</code> prop, to enable style overrides.</p>
        <Snippet markup={inputExampleSnippet} />
        <p>You can now override <code className={snippetStyles['snippet-inline']}>Input</code> styles with the <code className={snippetStyles['snippet-inline']}>.input-overrides</code> class.</p>
      </div>

      <div className={styles.block}>
        <h2>Fonts</h2>
        <p>This site and our components are designed to use <b>Promima Nova</b>, which we own under license.</p>
        <p>If you do not own <b>Proxima Nova</b>, the font-family will render the following:</p>
        <Snippet markup={fontCss} />
      </div>
    </div>
  </div>
)

export default ComponentsPage
