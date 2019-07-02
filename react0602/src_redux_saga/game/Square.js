import React, { Component } from 'react'

// 每个小方块
class Square extends Component {
  constructor(props) {
    // console.log('props', props)
    super(props)
    this.state = {
      value: ''
    }
  }

  render () {
    return (
      <button
        className='square'
        onClick={() => { this.props.onClick() }}>
        {this.props.value}
      </button>
    )
  }
}

export default Square