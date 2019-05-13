import { API_GET_MOVIES_SUCCESS } from './actions'

export default function moviesReducer(state = {}, action) {
  switch (action.type) {
    case API_GET_MOVIES_SUCCESS: {
      return {
        ...state,
        ...action.data,
      }
    }
    default:
      return state
  }
}
