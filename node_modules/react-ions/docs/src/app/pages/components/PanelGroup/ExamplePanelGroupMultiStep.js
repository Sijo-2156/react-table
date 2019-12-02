import React from 'react'
import {PanelGroup, Panel, PanelHeader, PanelContent} from 'react-ions/lib/components/PanelGroup'
import Badge from 'react-ions/lib/components/Badge'
import style from './style.scss'

const content = {
  lorum1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vehicula finibus purus, in ultrices mi ullamcorper in. Vestibulum porta varius sem, eu consectetur dui. Aliquam erat volutpat. Aliquam fringilla ullamcorper faucibus. Praesent purus lacus, interdum ac augue in, accumsan lacinia lorem. Nam pharetra lacus nisl, quis sagittis justo scelerisque ac. Phasellus euismod risus sit amet quam finibus, id sodales lectus scelerisque. Sed rhoncus magna neque, sed vulputate augue lobortis pharetra. Praesent placerat dui vitae fermentum tristique. Ut lobortis lacus scelerisque justo porta, quis porta nunc faucibus. Mauris ornare sem vel ornare ullamcorper. Nam tincidunt lacus ut varius faucibus. Maecenas varius lacus eget nisl condimentum, sed commodo justo euismod. Curabitur at justo quam.',
  lorum2: 'Sed rhoncus magna neque, sed vulputate augue lobortis pharetra. Praesent placerat dui vitae fermentum tristique.',
  lorum3: 'Ut lobortis lacus scelerisque justo porta, quis porta nunc faucibus. Mauris ornare sem vel ornare ullamcorper. Nam tincidunt lacus ut varius faucibus. Maecenas varius lacus eget nisl condimentum, sed commodo justo euismod. Curabitur at justo quam.',
  lorum4: 'Maecenas sit amet tellus vitae nisl gravida consectetur in vitae nibh. Quisque bibendum consectetur sagittis. Cras nec mauris maximus, egestas magna eget, vehicula ligula. Duis vestibulum leo at nisl placerat, euismod posuere ante accumsan. Vivamus gravida velit eu accumsan vulputate. Maecenas risus neque, mollis mollis est sit amet, porta feugiat nisi. Praesent maximus ut ante vel aliquet. Nunc mattis pharetra tellus, non volutpat lorem. Vestibulum odio arcu, laoreet a mi non, bibendum eleifend lorem. Nunc turpis lectus, malesuada id augue non, lacinia tristique orci. In fermentum, nibh id venenatis iaculis, lorem ipsum faucibus enim, vitae tincidunt lorem nunc eu tortor. Vestibulum gravida augue risus, non rhoncus velit feugiat vel. Vestibulum imperdiet velit a ligula eleifend rutrum. Vestibulum consequat, arcu sed aliquam pretium, metus metus consectetur lectus, in rutrum tellus metus a felis. Praesent lacus justo, pretium ac lacinia eu, luctus quis nisl.'
}

const ExamplePanelGroupMultiStep = () => (
  <div>
    <PanelGroup accordion={true} optClass='multi-step'>
      <Panel>
        <PanelHeader title='What will your survey look like for each channel?' contextNode={<Badge text='1' />} toggleIcon={{name: 'md-keyboard-down', size: '14'}} />
        <PanelContent optClass={style['rating-specific']}>
          <p className={style.paragraph}>{content.lorum1}</p>
        </PanelContent>
      </Panel>
      <Panel>
        <PanelHeader title='What happens after a user submits their response?' contextNode={<Badge text='2' />} toggleIcon={{name: 'md-keyboard-down', size: '14'}} />
        <PanelContent>
          <p className={style.paragraph}>{content.lorum2}</p>
        </PanelContent>
      </Panel>
      <Panel>
        <PanelHeader title='Who should we send this survey to?' contextNode={<Badge text='3' />} toggleIcon={{name: 'md-keyboard-down', size: '14'}} />
        <PanelContent>
          <p className={style.paragraph}>{content.lorum3}</p>
        </PanelContent>
      </Panel>
      <Panel>
        <PanelHeader title='Who should we not send this survey to?' contextNode={<Badge text='4' />} toggleIcon={{name: 'md-keyboard-down', size: '14'}} />
        <PanelContent>
          <p className={style.paragraph}>{content.lorum4}</p>
        </PanelContent>
      </Panel>
      <Panel>
        <PanelHeader title='Where should we send survey notifications?' contextNode={<Badge text='5' />} toggleIcon={{name: 'md-keyboard-down', size: '14'}} />
        <PanelContent>
          <p className={style.paragraph}>{content.lorum1}</p>
        </PanelContent>
      </Panel>
    </PanelGroup>
  </div>
)

export default ExamplePanelGroupMultiStep
