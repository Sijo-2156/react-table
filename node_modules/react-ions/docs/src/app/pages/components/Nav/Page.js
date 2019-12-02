import React from 'react'
import PropsList from 'private/modules/PropsList'
import docs from '!!docgen!react-ions/lib/components/Nav/Nav'
import CodeExample from 'private/modules/CodeExample'
import ExampleNavDefault from './ExampleNavDefault'
import exampleNavDefaultCode from '!raw!./ExampleNavDefault'
import style from 'private/css/content'

const description = {
  navDefault: 'This is the `nav component`.'
}

const NavPage = () => {
  return (
    <div>
      <div className={style.content}>
        <div className={style.block}>
          <CodeExample
            title='Nav Example'
            description={description.navDefault}
            markup={exampleNavDefaultCode}
          >
            <ExampleNavDefault />
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

export default NavPage
