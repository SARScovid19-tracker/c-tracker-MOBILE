const initState = {
  users: [],
  user: {
    email: '',
    name: '',
    status: '',
    nik: 0,
    phone: ''
  },
  isLogin : false,
  loading: false,
  error: null
}

export const userReducer = (state = initState, action) => {
  switch (action.type) {
    case 'USER_LOGIN': 
    return {  }
    default: {
      return state
    }
  }
}