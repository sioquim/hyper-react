import { combineEpics } from 'redux-observable'
import { charactersEpic } from './characters/actions'
import { moviesEpic } from './movies/actions'

export const rootEpic = combineEpics(charactersEpic, moviesEpic)
export default rootEpic
