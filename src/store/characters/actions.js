import {
  map,
  filter,
  catchError,
  tap,
  mergeMap,
  switchMap,
  takeUntil,
} from 'rxjs/operators'
import { of, from, forkJoin } from 'rxjs'
import { ofType } from 'redux-observable'
import api, { getSource } from '../../utils/api'
import getDefaultActions from '../../utils/getDefaultActions'

export const API_GET_CHARACTERS = 'API_GET_CHARACTERS'
export const [
  API_GET_CHARACTERS_REQUEST,
  API_GET_CHARACTERS_SUCCESS,
  API_GET_CHARACTERS_ERROR,
  API_GET_CHARACTERS_CANCEL,
] = getDefaultActions(API_GET_CHARACTERS)

export const getCharacters = (characterIds) => ({
  type: API_GET_CHARACTERS_REQUEST,
  characterIds,
})

const completeGetCharacters = (characters) => {
  return { type: API_GET_CHARACTERS_SUCCESS, data: characters }
}

export const getCharactersError = (error) => ({
  type: API_GET_CHARACTERS_ERROR,
  error,
})

export const cancelGetCharacters = () => {
  //  source.cancel()
  return {
    type: API_GET_CHARACTERS_CANCEL,
  }
}

/**
 * Retrieve characters by calling each character URL identified by `characterIds`
 */
export const charactersEpic = (action$, store) =>
  action$.pipe(
    ofType(API_GET_CHARACTERS_REQUEST),
    mergeMap(({ characterIds }) => {
      const source = getSource()

      return of(characterIds).pipe(
        map((characterIdsData) => {
          const { characters: existingCharacters } = store.value

          return (
            characterIdsData
              // avoid calling the same id twice
              .filter(
                (characterId) =>
                  Object.keys(existingCharacters).indexOf(characterId) === -1
              )
              .map((characterId) =>
                from(
                  api.get(`/people/${characterId}`, {
                    cancelToken: source.token,
                  })
                ).pipe(
                  switchMap((response) => {
                    return of({ ...response.data, character_id: characterId })
                  })
                )
              )
          )
        }),
        switchMap((parallelObservables) =>
          parallelObservables.length
            ? forkJoin(parallelObservables).pipe(
                switchMap((response) => {
                  const normalizedResponse = response.reduce(
                    (acc, curr) => ({
                      ...acc,
                      [curr.character_id]: curr,
                    }),
                    {}
                  )
                  return of(completeGetCharacters(normalizedResponse))
                })
              )
            : of(completeGetCharacters([]))
        ),
        takeUntil(
          action$.pipe(
            filter((action) => action.type === API_GET_CHARACTERS_CANCEL),
            tap(() => source.cancel('cancelled'))
          )
        ),
        catchError((error) => of(getCharactersError(error.response)))
      )
    })
  )
