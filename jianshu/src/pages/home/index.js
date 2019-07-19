import React from 'react';
import './style.scss';
import Topic from './components/Topic'
import List from './components/List'
import Recommend from './components/Recommend'
// import Axios from 'axios'
import { connect } from 'react-redux'
import { actionCreators } from './store'

class Home extends React.Component {
  render () {
    return (
      <div className='home_container'>
        <div className='left_box'>
          <img className='img1' src='//upload.jianshu.io/admin_banners/web_images/4677/a6d5d4ae2540976a7bd62e9db466b0301414d319.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540' alt='alt' />
          <Topic />
          <List />
        </div>
        <div className='right_box'>

          <Recommend />
        </div>
      </div>
    )
  }

  componentDidMount () {
    this.props.changeList()

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeList () {
      console.log(11)
      // list.size === 0 && dispatch(actionCreators.getList())
      const action = actionCreators.homeDataAction()
      dispatch(action)
    },
  }
}

export default connect(null, mapDispatchToProps)(Home)