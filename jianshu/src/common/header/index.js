import React from 'react';
// import style from './header.module.scss';
import './header.scss';
import { HeaderWraper, Logo, SearchInfo } from './style'
import { connect } from 'react-redux'
import { actionCreators } from './store'

// const getList = (show) => {
//   if (show) {
//     return (
//       <SearchInfo>
//         <div className='hottitle'>
//           <span >热门搜索</span>
//           <span>换一批</span>
//         </div>
//         <div>
//           <a className='aclass' href='/#'>教育</a>
//           <a className='aclass' href='/#'>教育</a>
//           <a className='aclass' href='/#'>教育</a>
//           <a className='aclass' href='/#'>教育</a>
//         </div>
//       </SearchInfo>
//     )
//   } else {
//     return null
//   }
// }


// const Header = (props) => {
//   return (
//     <HeaderWraper>
//       <Logo />
//       <div className="nav_center">
//         <div className="nav_left pri">首页</div>
//         <div className='nav_left'>下载App</div>
//         <div className='inpbox'>
//           <input
//             placeholder='搜索'
//             className={props.focus ? "top_input focus" : "top_input"}
//             onFocus={props.inputFocus}
//             onBlur={props.inputBlur}
//           />
//           <span className="iconfont fdj">&#xe62d;</span>
//           {getList(props.focus)}
//         </div>
//         <div className='nav_right color96'>登录</div>
//         <div className='nav_right'>Aa</div>
//       </div>
//       <div className='zc_box'>
//         <button className='xwz_class'><span className="iconfont">&#xe60e;</span>写文章</button>
//         <button className='zc_class'>注册</button>
//       </div>
//     </HeaderWraper>
//   )
// }
class Header extends React.Component {
  render () {
    const { focus, inputFocus, inputBlur } = this.props
    return (
      <HeaderWraper>
        <Logo />
        <div className="nav_center">
          <div className="nav_left pri">首页</div>
          <div className='nav_left'>下载App</div>
          <div className='inpbox'>
            <input
              placeholder='搜索'
              className={focus ? "top_input focus" : "top_input"}
              onFocus={inputFocus}
              onBlur={inputBlur}
            />
            <span className="iconfont fdj">&#xe62d;</span>
            {this.getList()}
          </div>
          <div className='nav_right color96'>登录</div>
          <div className='nav_right'>Aa</div>
        </div>
        <div className='zc_box'>
          <button className='xwz_class'><span className="iconfont">&#xe60e;</span>写文章</button>
          <button className='zc_class'>注册</button>
        </div>


      </HeaderWraper>
    );
  }
  getList () {

    const {
      focus,
      mouseIn,
      inputList,
      handleMouseEnter,
      handleMouseLeave,
      totalPage,
      page,
      changePage
    } = this.props
    let pageList = []
    let newList = inputList.toJS() //将 immutable对象 不能直接arr[1] 转换为js 对象 
    for (let i = page * 4; i < (page + 1) * 4; i++) {
      if (newList[i] !== void 0) {
        pageList.push(<a className='aclass' href='/#' key={i}>{newList[i]}</a>)
      }
    }

    if (focus || mouseIn) {
      // 
      return (
        <SearchInfo onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <div className='hottitle'>
            <span >热门搜索</span>
            <span onClick={() => { changePage(page, totalPage) }}>换一批</span>
          </div>
          <div>
            {/* {
              inputList.map((item, index) => {
                return <a className='aclass' href='/#' key={index}>{item}</a>
              })
            } */}
            {pageList}
          </div>
        </SearchInfo>
      )
    } else {
      return null
    }
  }

}
//将state里面的数据 映射到props
const mapStateToProps = (state) => {
  return {
    // focus: state.get('header').get('focus')
    focus: state.getIn(['header', 'focus']),
    inputList: state.getIn(['header', 'list']),  // inputList 是一个immutable 对象
    mouseIn: state.getIn(['header', 'mouseIn']),
    page: state.getIn(['header', 'page']),
    totalPage: state.getIn(['header', 'totalPage']),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    inputFocus () {
      dispatch(actionCreators.getList())
      dispatch(actionCreators.searchFocus())
    },
    inputBlur () {
      dispatch(actionCreators.searchBlur())
    },
    handleMouseEnter () {
      dispatch(actionCreators.MouseChange(true))
    },
    handleMouseLeave () {
      dispatch(actionCreators.MouseChange(false))
    },
    changePage (page, totalPage) {
      if (page < totalPage - 1) {
        dispatch(actionCreators.changePageAc(page + 1))
      } else {
        dispatch(actionCreators.changePageAc(0))
      }
    }

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
