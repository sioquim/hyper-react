import { combineEpics } from 'redux-observable'
import { mockCallEpic } from './mock/actions'
import { charactersEpic } from './characters/actions'
import { moviesEpic } from './movies/actions'

export const rootEpic = combineEpics(mockCallEpic, charactersEpic, moviesEpic)
export default rootEpic
