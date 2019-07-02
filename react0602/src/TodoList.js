import React, { Fragment } from 'react'
import store from './store';
import { connect } from 'react-redux'

const TodoList = (props) => {
  const { iptValue, handleChange, list, clickButton } = props
  return (
    <Fragment>
      <input value={iptValue} onChange={handleChange}></input>
      <button onClick={clickButton}>确定</button>
      <ul>
        {
          list.map((item, index) => {
            return (
              <li key={index}>{item}</li>
            )
          })
        }
      </ul>
    </Fragment>
  )
}
// class TodoList extends React.Component {

//   render () {
//     return (
//       <Fragment>
//         <input value={this.props.iptValue} onChange={this.props.handleChange}></input>
//         <button onClick={this.props.clickButton}>确定</button>
//         <ul>
//           {
//             this.props.list.map((item, index) => {
//               return (
//                 <li key={index}>{item}</li>
//               )
//             })
//           }
//         </ul>
//       </Fragment>
//     )
//   }
// }

const mapStateToProps = (state) => {//映射关系  将state里面的数据映射到props
  return {
    iptValue: state.iptValue,
    list: state.list
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleChange (e) {
      const action = {
        type: 'changeInput',
        value: e.target.value
      }
      dispatch(action)
    },
    clickButton () {
      const action = {
        type: 'addItem'
      }
      dispatch(action)
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(TodoList) //和store连接
// TodoList 是一个无状态组件 ui组件 经过connect 后成为一个容器组件