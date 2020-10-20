const initState = {
  user: {},
  loading: false,
  error: null
}

export const userReducer = (state = initState, action) => {
  switch (action.type) {
    case 'USER_LOADING': {
      return {
        ...state,
        loading: true
      }
    }
    case 'USER_LOGIN': {
      return {
        ...state,
        user: action.payload,
        loading: false
      }
    }
    case 'USER_LOGOUT': {
      return {
        ...state,
        user: {},
        loading: false
      }
    }
    case 'USER_ERROR': {
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    }
    default: {
      return state
    }
  }
}