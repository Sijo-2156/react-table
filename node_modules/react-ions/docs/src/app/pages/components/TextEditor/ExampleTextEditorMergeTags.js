import React from 'react'
import TextEditor from 'react-ions/lib/components/TextEditor'

const mergeTags = [
  { name: 'Tag 1', tag: '{tag_1}' },
  { name: 'Tag 2', tag: '{tag_2}' },
  { name: 'Tag 3', tag: '{tag_3}' }
]
const ExampleTextEditorMergeTags = () => (
  <TextEditor mergeTags={mergeTags} />
)

export default ExampleTextEditorMergeTags
