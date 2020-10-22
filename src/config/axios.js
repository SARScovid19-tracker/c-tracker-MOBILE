import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://8694ad225673.ngrok.io',
})

export default instance
