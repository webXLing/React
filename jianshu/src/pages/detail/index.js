import React from 'react';
import { connect } from 'react-redux'
import { actionCreators } from './store'

import './index.scss'


class Detail extends React.Component {
  render () {
    return (
      <div className='page_detail'>
        <div className='title'>{this.props.title}</div>
        <div className='content' dangerouslySetInnerHTML={{ __html: this.props.content }}></div>
      </div>
    )
  }
  componentDidMount () {
    this.props.getDetail()
  }
}
const mapState = (state) => {
  return {
    title: state.getIn(['detail', 'title']),
    content: state.getIn(['detail', 'content']),
  }
}

const mapDispatch = (dispatch) => {
  return {
    getDetail () {
      // 生成action  派发 action
      dispatch(actionCreators.getDetailAc())
    }
  }
}

export default connect(mapState, mapDispatch)(Detail)