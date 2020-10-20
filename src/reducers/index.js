import { combineReducers } from 'redux'
import { userReducer } from './userReducers'
import { userHospital } from './userHospital'
import { userRestaurant } from './userRestaurant'
import { dataCovid } from './dataCovid'

export const reducers = combineReducers({
  userReducer,
  userHospital,
  userRestaurant,
  dataCovid
})