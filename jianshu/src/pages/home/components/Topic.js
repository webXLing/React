import React from 'react';
import { connect } from 'react-redux'

class Topic extends React.Component {
  render () {
    let { list } = this.props
    return (
      <div className='topic'>
        {
          list.map(item => {
            return (
              <div key={item.get('id')} className='topic_item'>
                <img src={item.get('src')} alt='540' />
                {item.get('title')}
              </div>
            )
          })
        }


      </div>
    )
  }
}

const mapState = state => ({
  list: state.get('home').get('topicList')
})

export default connect(mapState, null)(Topic)