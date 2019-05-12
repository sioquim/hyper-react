import { map, mergeMap, takeUntil } from 'rxjs/operators'
import { from } from 'rxjs'
import { ofType } from 'redux-observable'
import idx from 'idx'
import api from '../../utils/api'

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
        map((movies) => completeMoviesCall(movies)),
        takeUntil(action$.pipe(ofType(API_GET_MOVIES_CANCEL)))
      )
    )
  )
