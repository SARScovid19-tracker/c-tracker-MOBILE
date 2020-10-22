import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://e344fae6fa6c.ngrok.io',
})

export default instance
