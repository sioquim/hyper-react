import { map, mergeMap, takeUntil } from 'rxjs/operators'
import { from } from 'rxjs'
import { ofType } from 'redux-observable'
import api, { normalizeResults } from '../../utils/api'
import { movieListSchema, MOVIES_SCHEMA } from './schema'

export const API_GET_MOVIES_REQUEST = 'API_GET_MOVIES_REQUEST'
export const API_GET_MOVIES_SUCCESS = 'API_GET_MOVIES_SUCCESS'
export const API_GET_MOVIES_ERROR = 'API_GET_MOVIES_ERROR'
export const API_GET_MOVIES_CANCEL = 'API_GET_MOVIES_CANCEL'

export const getMovies = () => ({
  type: API_GET_MOVIES_REQUEST,
})

const completeMoviesCall = (data) => {
  return { type: API_GET_MOVIES_SUCCESS, data }
}

export const cancelMoviesCall = () => {
  return async function dispatcher(dispatch) {
    dispatch({
      type: API_GET_MOVIES_CANCEL,
    })
  }
}

export const moviesEpic = (action$) =>
  action$.pipe(
    ofType(API_GET_MOVIES_REQUEST),
    mergeMap(() =>
      from(api.get('/films')).pipe(
        map((response) =>
          normalizeResults(response, movieListSchema, MOVIES_SCHEMA)
        ),
        map((results) => completeMoviesCall(results)),
        takeUntil(action$.pipe(ofType(API_GET_MOVIES_CANCEL)))
      )
    )
  )
