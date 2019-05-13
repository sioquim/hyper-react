import {
  map,
  mergeMap,
  catchError,
  tap,
  filter,
  takeUntil,
} from 'rxjs/operators'
import { of, from } from 'rxjs'
import { ofType } from 'redux-observable'
import idx from 'idx'
import api, { getSource } from '../../utils/api'
import getDefaultActions from '../../utils/getDefaultActions'

export const API_GET_MOVIES = 'API_GET_MOVIES'
export const [
  API_GET_MOVIES_REQUEST,
  API_GET_MOVIES_SUCCESS,
  API_GET_MOVIES_ERROR,
  API_GET_MOVIES_CANCEL,
] = getDefaultActions(API_GET_MOVIES)

export const getMovies = () => ({
  type: API_GET_MOVIES_REQUEST,
})

export const completeMovies = (data) => ({ type: API_GET_MOVIES_SUCCESS, data })

export const getMoviesError = (error) => ({
  type: API_GET_MOVIES_ERROR,
  error,
})

export const cancelMovies = () => ({ type: API_GET_MOVIES_CANCEL })

/**
 * Movie characters are returned as an array of character URLs.
 * This function converts the array to a new array with character Ids
 */
const transformCharacterUrlsToId = (response) => {
  const movieList = idx(response, (_) => _.data.results)
  if (movieList) {
    const transformedMovies = movieList.map((movie) => ({
      ...movie,
      characters:
        movie.characters &&
        movie.characters.map((characterUrl) =>
          characterUrl
            .split('/')
            .filter((el) => el)
            .pop()
        ),
    }))
    const updatedResponse = { ...response }
    updatedResponse.data.results = transformedMovies
    return updatedResponse
  }
  return response
}

export const moviesEpic = (action$) =>
  action$.pipe(
    ofType(API_GET_MOVIES_REQUEST),
    mergeMap(() => {
      const source = getSource()
      return from(
        api.get('/films', {
          cancelToken: source.cancelToken,
        })
      ).pipe(
        map((response) => transformCharacterUrlsToId(response)),
        map((response) => {
          const data = idx(response, (_) => _.data.results)
          return data.reduce(
            (acc, curr) => ({
              ...acc,
              [curr.episode_id]: curr,
            }),
            {}
          )
        }),
        map((movies) => completeMovies(movies)),
        takeUntil(
          action$.pipe(
            filter((action) => action.type === API_GET_MOVIES_CANCEL),
            tap(() => source.cancel('cancelled'))
          ),
          catchError((error) => of(getMoviesError(error)))
        )
      )
    })
  )
