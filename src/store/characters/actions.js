import { mergeMap, switchMap } from 'rxjs/operators'
import { of, from, forkJoin } from 'rxjs'
import { ofType } from 'redux-observable'
import api from '../../utils/api'

export const API_GET_CHARACTERS_REQUEST = 'API_GET_CHARACTERS_REQUEST'
export const API_GET_CHARACTERSS_REQUEST = 'API_GET_CHARACTERSS_REQUEST'
export const API_GET_CHARACTERS_SUCCESS = 'API_GET_CHARACTERS_SUCCESS'
export const API_GET_CHARACTERS_ERROR = 'API_GET_CHARACTERS_ERROR'
export const API_GET_CHARACTERS_CANCEL = 'API_GET_CHARACTERS_CANCEL'

export const getCharacters = (characterIds) => ({
  type: API_GET_CHARACTERS_REQUEST,
  characterIds,
})

const completeGetCharacterCall = (characters) => {
  return { type: API_GET_CHARACTERS_SUCCESS, data: characters }
}

export const cancelGetCharacterCall = () => {
  return async function dispatcher(dispatch) {
    dispatch({
      type: API_GET_CHARACTERS_CANCEL,
    })
  }
}

export const charactersEpic = (action$, store) =>
  action$.pipe(
    ofType(API_GET_CHARACTERS_REQUEST),
    mergeMap(({ characterIds }) => {
      const { characters: existingCharacters } = store.value
      const parallelObservables = characterIds
        // avoid calling the same id twice
        .filter(
          (characterId) =>
            Object.keys(existingCharacters).indexOf(characterId) === -1
        )
        .map((characterId) =>
          from(api.get(`/people/${characterId}`)).pipe(
            switchMap((response) => {
              return of({ ...response.data, character_id: characterId })
            })
          )
        )

      return forkJoin(parallelObservables).pipe(
        switchMap((response) => {
          const normalizedResponse = response.reduce(
            (acc, curr) => ({
              ...acc,
              [curr.character_id]: curr,
            }),
            {}
          )
          return of(completeGetCharacterCall(normalizedResponse))
        })
      )
    })
  )
