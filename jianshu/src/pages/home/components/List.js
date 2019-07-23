import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class List extends React.Component {
  render () {
    let { list } = this.props

    return (
      list.map((item, index) => {
        return (
          <Link to='/detail' key={item.get('id')}>
            <div className='list' >
              <img src='https://upload-images.jianshu.io/upload_images/4426190-faf9482ee6733f94.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240' alt='图片' />
              <div className='content'>
                <h3>{item.get('title')}</h3>
                <p>{item.get('desc')}</p>
              </div>
            </div>
          </Link>
        )
      })

    )
  }
}

const mapState = (state) => {
  return {
    list: state.getIn(['home', 'articleList'])
  }
}

export default connect(mapState, null)(List)