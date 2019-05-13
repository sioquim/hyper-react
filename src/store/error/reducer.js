import { createSelector } from 'reselect'
import idx from 'idx'

export default function errorReducer(state = {}, action) {
  const { type, error } = action
  const matches = /(.*)_(REQUEST|ERROR)/.exec(type)

  // not a *_REQUEST / *_SUCCESS /  *_FAILURE actions, so we ignore them
  if (!matches) return state

  const [, requestName, requestState] = matches

  // omit requestName from state
  const { [requestName]: requestNameToOmit, ...noRequestName } = state

  // Adds an error object to the requestName and removes requestName from state on Request
  return requestState === 'REQUEST'
    ? {
        ...noRequestName,
      }
    : {
        ...state,
        [requestName]: error,
      }
}

export const getError = createSelector(
  [(state, action) => idx(state, (_) => _.error[`${action}`])],
  (actionError) => actionError
)
