import { FETCH_DATA_COVID } from '../actions/action-type'
  
  const initState = {
    data: [],
    loading: false,
    error: null
  }
  
  export const dataCovid = (state = initState, action) => {
    switch(action.type) {
      case FETCH_DATA_COVID: {
        return { ...state, data: action.payload }
      }
      default: {
        return state
      }
    }
  }