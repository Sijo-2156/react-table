import React from 'react'
import {PanelGroup, Panel, PanelHeader, PanelContent} from 'react-ions/lib/components/PanelGroup'
import Badge from 'react-ions/lib/components/Badge'
import style from './style.scss'

const content = {
  lorum1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vehicula finibus purus, in ultrices mi ullamcorper in. Vestibulum porta varius sem, eu consectetur dui. Aliquam erat volutpat. Aliquam fringilla ullamcorper faucibus. Praesent purus lacus, interdum ac augue in, accumsan lacinia lorem. Nam pharetra lacus nisl, quis sagittis justo scelerisque ac. Phasellus euismod risus sit amet quam finibus, id sodales lectus scelerisque. Sed rhoncus magna neque, sed vulputate augue lobortis pharetra. Praesent placerat dui vitae fermentum tristique. Ut lobortis lacus scelerisque justo porta, quis porta nunc faucibus. Mauris ornare sem vel ornare ullamcorper. Nam tincidunt lacus ut varius faucibus. Maecenas varius lacus eget nisl condimentum, sed commodo justo euismod. Curabitur at justo quam.',
  lorum2: 'Sed rhoncus magna neque, sed vulputate augue lobortis pharetra. Praesent placerat dui vitae fermentum tristique.'
}

const ExamplePanelGroupNested = () => (
  <PanelGroup accordion={true} optClass='multi-step'>
    <Panel>
      <PanelHeader title='Multi-step' contextNode={<Badge text='1' />} toggleIcon={{name: 'mbsy-caret', size: '14'}} />
      <PanelContent>
        <PanelGroup accordion={true} optClass='simple'>
          <Panel>
            <PanelHeader title='Simple' contextIcon='md-keyboard-down' contextIconSize='16' />
            <PanelContent optClass={style['rating-specific']}>
              <p className={style.paragraph}>{content.lorum1}</p>
            </PanelContent>
          </Panel>
          <Panel>
            <PanelHeader title='What happens after a user submits their response?' contextIcon='md-keyboard-down' contextIconSize='16' />
            <PanelContent>
              <p className={style.paragraph}>{content.lorum2}</p>
            </PanelContent>
          </Panel>
        </PanelGroup>
      </PanelContent>
    </Panel>
  </PanelGroup>
)

export default ExamplePanelGroupNested
