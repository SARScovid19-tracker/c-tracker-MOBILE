import {
  FETCH_HOSPITAL_FULFILLED,
  FETCH_HOSPITAL_PENDING,
  FETCH_HOSPITAL_REJECTED,
  CREATE_HOSPITAL_FULFILLED,
  CREATE_HOSPITAL_PENDING,
  CREATE_HOSPITAL_REJECTED,
  FETCH_ONE_HOSPITAL_FULFILLED
} from './action-type'
import axios from '../config/axios'

export const fetchHospitalPending = () => {
  return {
    type: FETCH_HOSPITAL_PENDING
  }
}

export const fetchHospitalRejected = (payload) => {
  return {
    type: FETCH_HOSPITAL_REJECTED,
    payload
  }
}

export const fetchHospitalFulfilled = (payload) => {
  return {
    type: FETCH_HOSPITAL_FULFILLED,
    payload
  }
}

const fetchOneHospitalFulfilled = (payload) => {
  return {
    type: FETCH_ONE_HOSPITAL_FULFILLED,
    payload
  }
}

export const fetchHospital = (userId) => {
  return async (dispatch) => {
    try {
      dispatch(fetchHospitalPending())
      const result = await axios({
        url: '/history/hospitals/' + userId,
        method: 'GET'
      })
      console.log(result)
      dispatch(fetchHospitalFulfilled(result.data.history))
    } catch(error) {
      console.log(error)
      dispatch(fetchHospitalRejected(error))
    }
  }
}

export const fetchOneHospital = (id) => {
  return async (dispatch) => {
    try {
      console.log(id, '>>>>>>>>>>. from dispatch')
      dispatch(fetchHospitalPending())
      const result = await axios({
        url: '/hospitals/' + id,
        method: 'GET'
      })
      dispatch(fetchOneHospitalFulfilled(result.data))
    } catch (error) {
      dispatch(fetchHospitalRejected(error))
    }
  }
}

export const createHospitalPending = () => {
  return {
    type: CREATE_HOSPITAL_PENDING
  }
}

export const createHospitalRejected = (payload) => {
  return {
    type: CREATE_HOSPITAL_REJECTED,
    payload
  }
}

export const createHospitalFulfilled = (payload) => {
  return {
    type: CREATE_HOSPITAL_FULFILLED
  }
}

export const createHospital = (userId, data) => {
  return async (dispatch) => {
    try {
      dispatch(createHospitalPending())
      const result = await axios({
        url: '/history/hospitals',
        method: 'POST',
        data: data
      })
      if (result) {
        console.log(result.data)
        dispatch(fetchHospital(userId))
      }
    } catch (error) {
      console.log(error)
      dispatch(createHospitalRejected(error))
    }
  }
}