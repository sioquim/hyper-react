import axios from 'axios'
import { normalize } from 'normalizr'
import idx from 'idx'

export default axios.create({
  baseURL: 'https://swapi.co/api/',
  responseType: 'json',
})

export const normalizeResults = (response, schema, entityName) => {
  const data = idx(response, (_) => _.data.results)
  if (data) {
    const normalizedData = normalize(data, schema)
    return idx(normalizedData, (_) => _.entities[entityName]) || []
  }
  return []
}
