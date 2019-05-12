import { createSelector } from 'reselect'
import memoize from 'lodash.memoize'
import { API_GET_CHARACTERS_SUCCESS } from './actions'

export const getCharactersByIds = createSelector(
  (state) => state.characters,
  (characters) =>
    memoize((characterIds) =>
      characters
        ? Object.values(characters)
            .filter(
              (character) => characterIds.indexOf(character.character_id) > -1
            )
            .sort((a, b) => {
              if (a.name < b.name) {
                return -1
              }
              if (a.name > b.name) {
                return 1
              }
              return 0
            })
        : []
    )
)

export default function charactersReducer(state = {}, action) {
  switch (action.type) {
    case API_GET_CHARACTERS_SUCCESS: {
      return { ...state, ...action.data }
    }
    default:
      return state
  }
}
