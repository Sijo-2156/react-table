import React from 'react'
import {PanelGroup, Panel, PanelHeader, PanelContent} from 'react-ions/lib/components/PanelGroup'
import RadioGroup from 'react-ions/lib/components/Radio/RadioGroup'

const options = [
  {
    value: 'option_1',
    label: 'Display your own custom message'
  }, {
    value: 'option_2',
    label: 'Display a refer a friend'
  }, {
    value: 'option_3',
    label: 'Show them another survey'
  }, {
    value: 'option_4',
    label: 'Redirect them'
  }
]

const ExamplePanelGroupSimple = () => (
  <div>
    <PanelGroup accordion={true} optClass='simple'>
      <Panel>
        <PanelHeader title='Promoter' contextIcon='mbsy-caret' contextIconSize='12' />
        <PanelContent>
          <h3>What happens after a promoter submits their score?</h3>
          <RadioGroup
            name='default-radio-group'
            options={options}>
          </RadioGroup>
        </PanelContent>
      </Panel>
      <Panel>
      <PanelHeader title='Passive' contextIcon='mbsy-caret' contextIconSize='12' />
        <PanelContent>
          <h3>What happens after a promoter submits their score?</h3>
          <RadioGroup
            name="default-radio-group"
            options={options}>
          </RadioGroup>
        </PanelContent>
      </Panel>
      <Panel>
      <PanelHeader title='Detractor' contextIcon='mbsy-caret' contextIconSize='12' />
        <PanelContent>
        <h3>What happens after a promoter submits their score?</h3>
        <RadioGroup
          name="default-radio-group"
          options={options}>
        </RadioGroup>
        </PanelContent>
      </Panel>
    </PanelGroup>
  </div>
)

export default ExamplePanelGroupSimple
