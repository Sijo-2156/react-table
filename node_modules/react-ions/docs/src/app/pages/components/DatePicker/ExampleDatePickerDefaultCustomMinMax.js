import React from 'react'
import DatePicker from 'react-ions/lib/components/DatePicker'

const minCustomDate = { month: '10', day: '5', year: '2011' }
const maxCustomDate = { month: '7', day: '15', year: '2030' }
const maxCurrent = { month: 'current', day: 'current', year: 'current'}
const minCurrent = { month: 'current', day: 'current', year: 'current'}
const minCalc = { month: '-3', day: '-10', year: '-5'}
const maxCalc = { month: '+2', day: '+10', year: '+2'}

const ExampleDatePickerDefaultCustomMinMax = () => (
  <div>
    <code>Min date: {JSON.stringify(minCurrent)} | Max date: {JSON.stringify(maxCustomDate)}</code>
    <DatePicker min={minCurrent} max={maxCustomDate} />
    <code>Min date: {JSON.stringify(minCustomDate)} | Max date: {JSON.stringify(maxCurrent)}</code>
    <DatePicker min={minCustomDate} max={maxCurrent} />
    <code>Min date: {JSON.stringify(minCalc)} | Max date: {JSON.stringify(maxCalc)}</code>
    <DatePicker min={minCalc} max={maxCalc} />
  </div>
)

export default ExampleDatePickerDefaultCustomMinMax
