import axiosInstance from '../config/axios'
import qs from 'qs'
import { USER_LOGIN, USER_LOGOUT } from './action-type'
import axios from 'axios'
import { FETCH_DATA_COVID } from './action-type'

const userLogoutDispatch = () => {
  return {
    type: USER_LOGOUT
  }
}

export const userLogout = phone => {
  return async dispatch => {
    const phoneQs = qs.stringify({
      phone
    })
    try {
      await axiosInstance({
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

export const fetchOneUser = (id) => {
  return async (dispatch) => {
    try {
      dispatch({ type: 'USER_LOADING' })
      const result = await axiosInstance ({
        url: '/user/' + id,
        method: 'GET'
      })
      dispatch({ type: 'USER_FETCH', payload: result.data.user })
    } catch (error) {
      console.log(error)
      dispatch({ type: 'USER_ERROR', payload: error })
    }
  }
}

export const fetchDataCovid = payload => {
  return {
    type: FETCH_DATA_COVID,
    payload
  }
}

export function getDataCovid() {
  return dispatch => {
    axios({
      method: 'GET',
      url: 'https://apicovid19indonesia-v2.vercel.app/api/indonesia/more'
    })
      .then(({ data }) => {
        // console.log(data.penambahan, '>>>>>>>>>>>>>>> result action')
        dispatch(fetchDataCovid(data.penambahan))
      })
      .catch(err => {
        console.log(err, '>>>>>>>>>>>>> err get data covid')
      })
  }
}
