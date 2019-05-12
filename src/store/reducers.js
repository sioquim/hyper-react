import { combineReducers } from 'redux'
import movies from './movies/reducer'
import characters from './characters/reducer'
import progress from './progress/reducer'

const reducers = combineReducers({
  movies,
  characters,
  progress,
})

export default reducers
