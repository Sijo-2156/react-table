import React from 'react'
import style from 'private/css/props'

class PropsList extends React.Component {
  static defaultProps = {
    list: {}
  }

  constructor(props) {
    super(props)
  }

  render() {
    let hasRequiredProps = false
    let propsList = Object.keys(this.props.list).map((name, index) => {
      if (this.props.list[name].required) {
        hasRequiredProps = true
      }
      let types = null

      if (this.props.list[name].type.name === 'enum') {
        types = this.props.list[name].type.value.map(v => <span key={v.value} className={style['enum-values']}> {v.value}</span>)
      }
      if (this.props.list[name].type.name === 'union') {
        types = this.props.list[name].type.value.map(v => <span key={v.name} className={style['enum-values']}>{v.name}</span>)
      }
      return (
        <tr key={name}>
          <td>{name}{this.props.list[name].required ? '*' : ''}</td>
          <td className={style['cell-monospaced']}>{this.props.list[name].type.name !== 'union' ? this.props.list[name].type.name : null}{types}</td>
          <td className={style['cell-monospaced']}>{this.props.list[name].defaultValue ? this.props.list[name].defaultValue.value : ''}</td>
          <td>{this.props.list[name].description}</td>
        </tr>
      )
    })

    return (
      <div className={style.wrapper}>
        <table className={style.table}>
          <thead>
            <tr>
              <th className={style['cell-md']}>Name</th>
              <th className={style['cell-sm']}>Type</th>
              <th className={style['cell-sm']}>Default</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {propsList}
          </tbody>
        </table>
        {hasRequiredProps ? <div className={style['has-required-props']}>* required property</div> : null}
      </div>
    )
  }
}

export default PropsList
