import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://f378486d8358.ngrok.io',
})

export default instance
