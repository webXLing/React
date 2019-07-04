import * as constants from './constants'
import Axios from 'axios'
import { fromJS } from 'immutable';

const changeList = (data) => ({
  type: constants.CHANGE_LIST,
  data: fromJS(data),
  totalPage: Math.ceil(data.length / 4)
});

export const searchFocus = () => ({
  type: constants.SEARCH_FOCUS
});

export const searchBlur = () => ({
  type: constants.SEARCH_BLUR
});

export const MouseChange = (data) => ({
  type: constants.MOUSECHANGGE,
  data
});


export const changePageAc = (page) => ({
  type: constants.CHANGREPAGE,
  page
});


export const getList = () => {
  return (dispatch) => {
    console.log('getList')
    Axios('/api/headerList.json')
      .then(res => {
        console.log(res)
        if (res.data.code === 1000) {
          const data = res.data.data
          dispatch(changeList(data))
        }
      })
  }
}