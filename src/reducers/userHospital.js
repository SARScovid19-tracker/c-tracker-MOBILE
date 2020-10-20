import {
  FETCH_HOSPITAL_FULFILLED,
  FETCH_HOSPITAL_PENDING,
  FETCH_HOSPITAL_REJECTED,
  CREATE_HOSPITAL_FULFILLED,
  CREATE_HOSPITAL_PENDING,
  CREATE_HOSPITAL_REJECTED,
  FETCH_ONE_HOSPITAL_FULFILLED
} from '../actions/action-type'

const initState = {
  hospitals: [],
  hospital: {},
  loading: false,
  error: null
}

export const userHospital = (state = initState, action) => {
  switch(action.type) {
    case FETCH_HOSPITAL_PENDING: {
      return {
        ...state,
        loading: true
      }
    }
    case FETCH_HOSPITAL_FULFILLED: {
      return {
        ...state,
        hospitals: action.payload,
        loading: false,
        error: null
      }
    }
    case FETCH_HOSPITAL_REJECTED: {
      return {
        ...state,
        error: action.payload,
        loading: false
      }
    }
    case FETCH_ONE_HOSPITAL_FULFILLED: {
      return {
        ...state,
        hospital: action.payload,
        loading: false,
        error: null
      }
    }
    case CREATE_HOSPITAL_PENDING: {
      return {
        ...state,
        loading: true
      }
    }
    case CREATE_HOSPITAL_REJECTED: {
      return {
        ...state,
        error: action.payload,
        loading: false
      }
    }
    case CREATE_HOSPITAL_FULFILLED: {
      return {
        ...state,
        restaurant: action.payload,
        loading: false,
        error: null
      }
    }
    default: {
      return state
    }
  }
}