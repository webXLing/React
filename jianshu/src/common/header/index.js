import React from 'react';
// import style from './header.module.scss';
import './header.scss';
import { HeaderWraper, Logo } from './style'
import { connect } from 'react-redux'
import { actionCreators } from './store'

const Header = (props) => {
  return (
    <HeaderWraper>
      <Logo />
      <div className="nav_center">
        <div className="nav_left pri">首页</div>
        <div className='nav_left'>下载App</div>
        <div className='inpbox'>
          <input
            placeholder='搜索'
            className={props.focus ? "top_input focus" : "top_input"}
            onFocus={props.inputFocus}
            onBlur={props.inputBlur}
          />
          <span className="iconfont fdj">&#xe62d;</span>
        </div>
        <div className='nav_right color96'>登录</div>
        <div className='nav_right'>Aa</div>
      </div>
      <div className='zc_box'>
        <button className='xwz_class'><span className="iconfont">&#xe60e;</span>写文章</button>
        <button className='zc_class'>注册</button>
      </div>


    </HeaderWraper>
  )
}
// class Header extends React.Component {
//   render () {
//     return (
//       <HeaderWraper>
//         <Logo />
//         <div className="nav_center">
//           <div className="nav_left pri">首页</div>
//           <div className='nav_left'>下载App</div>
//           <div className='inpbox'>
//             <input
//               placeholder='搜索'
//               className={this.props.focus ? "top_input focus" : "top_input"}
//               onFocus={this.props.inputFocus}
//               onBlur={this.props.inputBlur}
//             />
//             <span className="iconfont fdj">&#xe62d;</span>
//           </div>
//           <div className='nav_right color96'>登录</div>
//           <div className='nav_right'>Aa</div>
//         </div>
//         <div className='zc_box'>
//           <button className='xwz_class'><span className="iconfont">&#xe60e;</span>写文章</button>
//           <button className='zc_class'>注册</button>
//         </div>


//       </HeaderWraper>
//     );
//   }
//   inputFocus () {
//     this.setState({
//       focus: true
//     })
//   }
//   inputBlur () {
//     this.setState({
//       focus: false
//     })
//   }
// }
//将state里面的数据 映射到props
const mapStateToProps = (state) => {
  return {
    focus: state.header.focus
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    inputFocus () {
      dispatch(actionCreators.searchFocus())
    },
    inputBlur () {
      dispatch(actionCreators.searchBlur())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
