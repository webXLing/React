const defaultSate = {
  iptValue: '',
  list: []
}

export default (state = defaultSate, action) => {
  console.log(action)
  let newState = JSON.parse(JSON.stringify(state))
  if (action.type === 'changeInput') {
    newState.iptValue = action.value
    return newState
  }

  if (action.type === 'addItem') {
    newState.list.push(newState.iptValue)
    newState.iptValue = ''
    return newState
  }

  return state
}