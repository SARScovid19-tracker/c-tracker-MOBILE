import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://e67185045482.ngrok.io',
})

export default instance
