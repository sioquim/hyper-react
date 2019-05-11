import {
  API_GET_CHARACTERS_CANCEL,
  API_GET_CHARACTERS_REQUEST,
  API_GET_CHARACTERS_SUCCESS,
} from './actions'

export default function mockReducer(state = {}, action) {
  switch (action.type) {
    case API_GET_CHARACTERS_REQUEST: {
      return {
        ...state,
        [action.delay]: true,
      }
    }
    case API_GET_CHARACTERS_SUCCESS: {
      return {
        ...state,
        [action.delay]: false,
      }
    }
    case API_GET_CHARACTERS_CANCEL: {
      return Object.keys(state)
        .filter((callDelayKey) => {
          return state[callDelayKey] === false
        })
        .reduce((obj, key) => {
          return {
            ...obj,
            [key]: state[key],
          }
        }, {})
    }
    default:
      return state
  }
}
