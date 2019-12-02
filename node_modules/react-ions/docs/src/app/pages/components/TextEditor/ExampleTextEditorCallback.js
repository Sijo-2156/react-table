import React from 'react'
import TextEditor from 'react-ions/lib/components/TextEditor'

const changeCallback = event => {
  console.log(event.target.value)
}
const ExampleTextEditorCallback = () => (
  <TextEditor changeCallback={changeCallback} placeholder='I have a callback...' />
)

export default ExampleTextEditorCallback
