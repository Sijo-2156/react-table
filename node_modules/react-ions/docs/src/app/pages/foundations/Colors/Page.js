import React from 'react'
import Color from '../../components/Colors/Color'
import baseStyles from 'private/css/content'
import list from './ColorList'
import localStyles from './styles.scss'

const ColorsPage = () => {
  let neutralColorList = list.neutralColors.map((color, index) =>
    <div key={index} className={localStyles['color-wrapper']}>
      <Color hex={color.hex} sass={color.sass} />
    </div>
  )
  let primaryColorList = list.primaryColors.map((color, index) =>
    <div key={index} className={localStyles['color-wrapper']}>
      <Color hex={color.hex} sass={color.sass} />
    </div>
  )
  let secondaryColorList = list.secondaryColors.map((color, index) =>
    <div key={index} className={localStyles['color-wrapper']}>
      <Color hex={color.hex} sass={color.sass} />
    </div>
  )

  return (
    <div>
      <div className={baseStyles.content}>
        <div className={baseStyles.block}>
          <h3>Color</h3>
          <p>Ambassador uses a specific color palette to communicate meaning, convey visual differentation, and provide a consistent look and feel.</p>
        </div>
        <div className={baseStyles.block}>
          <h3>Neutrals</h3>
          <p>Ambassador uses cool-toned grays injected with a hint of teal to create a lively and modern mood for the interface.</p>
          <p>In general, color is used sparingly to keep the content center stage and not distract end users.</p>

          <div className={localStyles['color-list']}>
            {neutralColorList}
          </div>
        </div>
        <div className={baseStyles.block}>
          <h3>Primary Colors</h3>
          <p>Ambassador’s primary brand color is a bright, friendly blue. We also use some darker blues for various other use cases.</p>

          <div className={localStyles['color-list']}>
            {primaryColorList}
          </div>
        </div>
        <div className={baseStyles.block}>
          <h3>Secondary Colors</h3>
          <p>We use a broad range of secondary colors that complement the neutral and primary colors.</p>
          <p>The level of saturation is vibrant but not neon, mellow but not muted.</p>

          <div className={localStyles['color-list']}>
            {secondaryColorList}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ColorsPage
