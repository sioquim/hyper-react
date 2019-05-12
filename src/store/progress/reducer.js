import { createSelector } from 'reselect'
import idx from 'idx'

export default function progressReducer(state = {}, action) {
  const { type } = action
  const matches = /(.*)_(REQUEST|SUCCESS|ERROR|CANCEL)/.exec(type)

  // not a *_REQUEST / *_SUCCESS /  *_FAILURE actions, so we ignore them
  if (!matches) return state

  const [, requestName, requestState] = matches

  // omit requestName from state
  const { [requestName]: requestNameToOmit, ...noRequestName } = state

  // Adds an error object to the requestName and removes requestName from state on Request
  return requestState === 'CANCEL'
    ? {
        ...noRequestName,
      }
    : {
        ...state,
        [requestName]: requestState === 'REQUEST',
      }
}

export const getProgress = createSelector(
  [(state, action) => idx(state, (_) => _.progress[`${action}`])],
  (actionProgress) => actionProgress || false
)
