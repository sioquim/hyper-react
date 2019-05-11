import { API_MOCK_CANCEL, API_MOCK_REQUEST, API_MOCK_SUCCESS } from './actions'

export default function mockReducer(state = {}, action) {
  switch (action.type) {
    case API_MOCK_REQUEST: {
      return {
        ...state,
        [action.delay]: true,
      }
    }
    case API_MOCK_SUCCESS: {
      return {
        ...state,
        [action.delay]: false,
      }
    }
    case API_MOCK_CANCEL: {
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
