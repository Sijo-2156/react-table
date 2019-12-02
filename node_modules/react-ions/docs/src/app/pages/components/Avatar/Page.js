import React from 'react'
import PropsList from 'private/modules/PropsList'
import docs from '!!docgen!react-ions/lib/components/Avatar/Avatar'
import CodeExample from 'private/modules/CodeExample'
import styles from 'private/css/content'
import ExampleAvatar from './ExampleAvatar'
import exampleAvatarCode from '!raw!./ExampleAvatar'
import FallbackAvatar from './FallbackAvatar'
import fallbackAvatarCode from '!raw!./FallbackAvatar'
import ExampleAvatarNoFade from './ExampleAvatarNoFade'
import exampleAvatarNoFadeCode from '!raw!./ExampleAvatarNoFade'

const description = {
  avatar: 'This is the `avatar component`.',
  fallbackAvatar: 'This is the `avatar component` with fallback letters and color',
  avatarNoFade: 'This is the `avatar component` with no fade in effect.'
}

const AvatarPage = () => (
  <div>
    <div className={styles.content}>
      <div className={styles.block}>
        <CodeExample
          title='Example Avatar'
          description={description.avatar}
          markup={exampleAvatarCode}>
          <ExampleAvatar />
        </CodeExample>
        <CodeExample
          title='Fallback Avatar'
          description={description.fallbackAvatar}
          markup={fallbackAvatarCode}>
          <FallbackAvatar />
        </CodeExample>
        <CodeExample
          title='Avatar with no Fade'
          description={description.avatarNoFade}
          markup={exampleAvatarNoFadeCode}>
          <ExampleAvatarNoFade />
        </CodeExample>
      </div>
      <div className={styles.block}>
        <h3>Props</h3>
        <PropsList list={docs[0].props} />
      </div>
    </div>
  </div>
)

export default AvatarPage
