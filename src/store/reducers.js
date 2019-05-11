import { combineReducers } from 'redux'
import movies from './movies/reducer'
import characters from './characters/reducer'

const reducers = combineReducers({
  movies,
  characters,
})

export default reducers
