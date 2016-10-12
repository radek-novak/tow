import { combineReducers } from 'redux'
import todos from './todos'
import increment from './increment'

const rootReducer = combineReducers({
  todos,
  counter: increment
})

export default rootReducer
