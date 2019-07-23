import Axios from "axios";
import * as constants from './constants'

export const setDetai = (data) => {
  const { title, content } = data
  return { // action  
    type: constants.SET_DETAIL,
    title,
    content
  }
}

export const getDetailAc = () => {
  return (dispatch) => {
    console.log(1, dispatch)
    Axios('/api/detailData.json')
      .then(res => {
        const data = res.data
        console.log(data)
        dispatch(setDetai(data.data))
      })
      .catch(res => {
        console.log(res)
      })
  }
} 