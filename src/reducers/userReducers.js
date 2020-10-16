const initState = {
  users: [],
  user: {
    email: '',
    name: '',
    status: '',
    nik: 0,
    phone: ''
  },
  loading: false,
  error: null
}

export const userReducer = (state = initState, action) => {
  switch (action.type) {
    default: {
      return state
    }
  }
}