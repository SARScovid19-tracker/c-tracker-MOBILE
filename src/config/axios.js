import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://206ced602e5f.ngrok.io',
})

export default instance
