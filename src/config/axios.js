import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://c-trackerr.herokuapp.com',
})

export default instance
