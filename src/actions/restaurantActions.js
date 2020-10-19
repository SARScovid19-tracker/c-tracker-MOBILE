import {
  FETCH_RESTAURANT_FULFILLED,
  FETCH_RESTAURANT_PENDING,
  FETCH_RESTAURANT_REJECTED,
  CREATE_RESTAURANT_FULFILLED,
  CREATE_RESTAURANT_PENDING,
  CREATE_RESTAURANT_REJECTED,
  FETCH_ONE_RESTAURANT_FULFILLED
} from './action-type'
import axios from '../config/axios'

export const fetchRestaurantPending = () => {
  return {
    type: FETCH_RESTAURANT_PENDING
  }
}

export const fetchRestaurantRejected = (payload) => {
  return {
    type: FETCH_RESTAURANT_REJECTED,
    payload
  }
}

export const fetchRestaurantFulfilled = (payload) => {
  return {
    type: FETCH_RESTAURANT_FULFILLED,
    payload
  }
}

export const fetchOneRestaurantFulfilled = (payload) => {
  return {
    type: FETCH_ONE_RESTAURANT_FULFILLED,
    payload
  }
}

export const fetchRestaurant = (userId) => {
  return async (dispatch) => {
    try {
      dispatch(fetchRestaurantPending())
      const result = await axios({
        url: '/history/Restaurants/' + userId,
        method: 'GET'
      })
      dispatch(fetchRestaurantFulfilled(result.data.history))
    } catch(error) {
      console.log(error.response)
      dispatch(fetchRestaurantRejected(error))
    }
  }
}

export const fetchOneRestaurant = (id) => {
  return async (dispatch) => {
    try {
      dispatch(fetchRestaurantPending())
      const result = await axios({
        url: '/restaurants/' + id,
        method: 'GET'
      })
      dispatch(fetchOneRestaurantFulfilled(result.data))
    } catch(error) {
      console.log(error.response)
      dispatch(fetchRestaurantRejected(error))
    }
  }
}

export const createRestaurantPending = () => {
  return {
    type: CREATE_RESTAURANT_PENDING
  }
}

export const createRestaurantRejected = (payload) => {
  return {
    type: CREATE_RESTAURANT_REJECTED,
    payload
  }
}

export const createRestaurantFulfilled = (payload) => {
  return {
    type: CREATE_RESTAURANT_FULFILLED
  }
}

export const createRestaurant = (userId, data) => {
  return async (dispatch) => {
    try {
      dispatch(createRestaurantPending())
      const result = await axios({
        url: '/history/Restaurants',
        method: 'POST',
        data: data
      })
      if (result) {
        dispatch(fetchRestaurant(userId))
      }
    } catch (error) {
      console.log(error)
      dispatch(createRestaurantRejected(error))
    }
  }
}