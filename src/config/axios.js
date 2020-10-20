import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://67bc10104c39.ngrok.io',
})

export default instance
