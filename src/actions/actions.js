import axios from '../config/axios'
import qs from 'qs'
import {
  USER_LOGIN,
  USER_LOGOUT
} from './action-type'

const userLogoutDispatch = () => {
  return {
    type: USER_LOGOUT
  }
}

export const userLogout = (phone) => {
  return async (dispatch) => {
    const phoneQs = qs.stringify({
      phone
    })
    try {
      await axios({
        url: '/logout',
        method: 'PATCH',
        data: phoneQs,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      dispatch(userLogoutDispatch())
    } catch (error) {
      console.log(error.response)
    }
  }
}