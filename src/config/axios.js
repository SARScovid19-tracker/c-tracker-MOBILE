import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://ac0231232ab1.ngrok.io',
})

export default instance
