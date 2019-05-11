import { map, mergeMap, takeUntil } from 'rxjs/operators'
import { from } from 'rxjs'
import { ofType } from 'redux-observable'
import api from '../../utils/api'

export const API_GET_CHARACTERS_REQUEST = 'API_GET_CHARACTERS_REQUEST'
export const API_GET_CHARACTERS_SUCCESS = 'API_GET_CHARACTERS_SUCCESS'
export const API_GET_CHARACTERS_ERROR = 'API_GET_CHARACTERS_ERROR'
export const API_GET_CHARACTERS_CANCEL = 'API_GET_CHARACTERS_CANCEL'

export const getCharacters = () => ({
  type: API_GET_CHARACTERS_REQUEST,
})

const completeMockCall = () => {
  return { type: API_GET_CHARACTERS_SUCCESS }
}

export const cancelMockCall = () => {
  return async function dispatcher(dispatch) {
    dispatch({
      type: API_GET_CHARACTERS_CANCEL,
    })
  }
}

export const charactersEpic = (action$) =>
  action$.pipe(
    ofType(API_GET_CHARACTERS_REQUEST),
    mergeMap(() =>
      from(api.get('/films')).pipe(
        map((response) => completeMockCall(response)),
        takeUntil(action$.pipe(ofType(API_GET_CHARACTERS_CANCEL)))
      )
    )
  )
