import { combineReducers } from 'redux'
import movies from './movies/reducer'
import characters from './characters/reducer'
import progress from './progress/reducer'
import error from './error/reducer'

const reducers = combineReducers({
  movies,
  characters,
  progress,
  error,
})

export default reducers
