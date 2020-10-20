import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://ca5668cda6ba.ngrok.io',
})

export default instance
