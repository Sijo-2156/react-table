import React from 'react'
import Toggle from 'react-ions/lib/components/Toggle'

class ExampleToggleLoading extends React.Component {
    constructor(props) {
      super(props)
    }
  
    state = {
      loading: false
    }
  
    handleChange = event => {
      this.setState({loading: true})

      setTimeout(() => {
        this.setState({loading: false})
      }, 2000)
    }
  
    render() {
      return (
        <div>
          <Toggle label='Click to view the loading state' value={false} loading={this.state.loading} changeCallback={this.handleChange} name='toggle_name' />
        </div>
      )
    }
  }
  

export default ExampleToggleLoading
