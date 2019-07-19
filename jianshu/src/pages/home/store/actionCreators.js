import Axios from 'axios'


export const homeDataAction = () => {
  return (dispatch) => {
    console.log('getList')
    Axios('/api/homeData.json')
      .then(res => {
        let data = res.data.data
        const action = {
          type: 'chang_home_data',
          articleList: data.articleList,
          topicList: data.topicList,
          recommendList: data.recommendList
        }
        console.log('action', action)
        dispatch(action)
      })
  }
}