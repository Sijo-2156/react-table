import React from 'react'
import SelectField from 'react-ions/lib/components/SelectField/SelectField'
import Button from 'react-ions/lib/components/Button'
import style from './style.scss'

const options = [
  {id: 0, display: 'test really long option'},
  {id: 1, display: 'test really really long option'},
  {id: 2, display: 'test really really really long option'}
]

class ExampleSelectFieldSelected extends React.Component {
  constructor(props) {
    super(props)
  }

  state = {
    selected: 0
  }

  updateSelected = index => {
    this.setState({ selected: index })
  }

  changeCallback = event => {
    this.setState({ selected: event.target.value, status: 'The callback was triggered and the chosen option is ' + event.target.value })
  }

  render() {
    return (
      <div>
        <div className={style.update}>
          <Button onClick={this.updateSelected.bind(this, 0)}>Select 1st item</Button>
          <Button onClick={this.updateSelected.bind(this, 1)}>Select 2nd item</Button>
          <Button onClick={this.updateSelected.bind(this, 2)}>Select 3rd item</Button>
        </div>
        <SelectField
          options={options}
          valueProp='id'
          displayProp='display'
          value={this.state.selected}
          changeCallback={this.changeCallback}
          optClass={style['update-select']}>
        </SelectField>
        <code className={style['callback-status']}>{this.state.status}</code>
      </div>
    )
  }
}

export default ExampleSelectFieldSelected
