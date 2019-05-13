import axios from 'axios'

export const getSource = () => axios.CancelToken.source()

export default axios.create({
  baseURL: 'https://swapi.co/api/',
  responseType: 'json',
})
