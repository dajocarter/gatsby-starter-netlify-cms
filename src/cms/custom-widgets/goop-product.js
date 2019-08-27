import React, { Component } from 'react'

export class EazeProductControl extends Component {
  constructor (props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (e) {
    const { onChange } = this.props
    onChange(e.target.value.split(',').map(e => e.trim()))
  }

  render () {
    const { value } = this.props
    return (
      <input type='text' value={value ? value.join(', ') : ''} onChange={this.handleChange} />
    )
  }
}

export class EazeProductPreview extends Component {
  render () {
    const { value } = this.props
    return (
      <ul>
        {value.map((val, index) => (
          <li key={index}>{val}</li>
        ))}
      </ul>
    )
  }
}
