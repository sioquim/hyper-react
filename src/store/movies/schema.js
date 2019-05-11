import { schema } from 'normalizr'

export const MOVIES_SCHEMA = 'movies'
export const moviesSchema = new schema.Entity(
  MOVIES_SCHEMA,
  {},
  {
    idAttribute: 'episode_id',
  }
)

export const movieListSchema = [moviesSchema]
