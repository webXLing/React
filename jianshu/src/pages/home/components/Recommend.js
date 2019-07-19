import React from 'react';
import { connect } from 'react-redux'

class Recommend extends React.Component {
  render () {
    let { list } = this.props

    return (
      list.map(item => {
        return (
          <div className='recommend' key={item.get('id')}>
            <img src={item.get('src')} alt='图片' />
          </div>
        )
      })

    )
  }
}

const mapState = (state) => {
  return {
    list: state.getIn(['home', 'recommendList'])
  }
}

export default connect(mapState, null)(Recommend)