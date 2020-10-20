import {
  FETCH_RESTAURANT_FULFILLED,
  FETCH_RESTAURANT_PENDING,
  FETCH_RESTAURANT_REJECTED,
  CREATE_RESTAURANT_PENDING,
  CREATE_RESTAURANT_REJECTED,
  FETCH_ONE_RESTAURANT_FULFILLED
} from '../actions/action-type'

const initState = {
  restaurants: [],
  restaurant: {},
  loading: false,
  error: null
}

export const userRestaurant = (state = initState, action) => {
  switch(action.type) {
    case FETCH_RESTAURANT_PENDING: {
      return {
        ...state,
        loading: true
      }
    }
    case FETCH_RESTAURANT_FULFILLED: {
      return {
        ...state,
        restaurants: action.payload,
        loading: false,
        error: null
      }
    }
    case FETCH_RESTAURANT_REJECTED: {
      return {
        ...state,
        error: action.payload,
        loading: false
      }
    }
    case FETCH_ONE_RESTAURANT_FULFILLED: {
      return {
        ...state,
        restaurant: action.payload,
        loading: false,
        error: null
      }
    }
    case CREATE_RESTAURANT_PENDING: {
      return {
        ...state,
        loading: true
      }
    }
    case CREATE_RESTAURANT_REJECTED: {
      return {
        ...state,
        error: action.state,
        loading: false
      }
    }
    default: {
      return state
    }
  }
}