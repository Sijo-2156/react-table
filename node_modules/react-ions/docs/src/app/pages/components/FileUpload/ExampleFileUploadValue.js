import React from 'react'
import FileUpload from 'react-ions/lib/components/FileUpload'
import Button from 'react-ions/lib/components/Button'
import Input from 'react-ions/lib/components/Input'
import style from './style'

class ExampleFileUploadCallback extends React.Component {
  constructor(props) {
    super(props)
  }

  state = {
    files: []
  }

  updateValue = () => {
    this.setState({ files: [this._imageUrl.state.value] })
  }

  changeCallback = event => {
    console.log(event)
  }

  render() {
    return (
      <div>
        <div className={style.update}>
          <Input value='' placeholder='Paste an image URL here' ref={c => this._imageUrl = c} />
          <Button onClick={this.updateValue}>Update Value</Button>
        </div>
        <FileUpload label="File upload with value" showPreview={true} changeCallback={this.changeCallback} value={this.state.files[0]} />
      </div>
    )
  }
}

export default ExampleFileUploadCallback
