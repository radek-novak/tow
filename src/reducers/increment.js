import { INCR } from '../constants/ActionTypes'

const initialState = 0

export default function todos(state = initialState, action) {
  switch (action.type) {
    case INCR:
      return ++state

    default:
      return state
  }
}
