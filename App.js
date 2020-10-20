import React from 'react'
import store from './src/store'
import axios from './src/config/axios'
import qs from 'qs'
import { Provider } from 'react-redux'
import { StatusBar, View, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { mainColor, secondColor } from './src/styles/styles'
import { AuthContext } from './src/components/context'
import MainTabScreen from './src/screens/MainTabScreen.js'
import { DrawerContent } from './src/screens/DrawerContent'
import AsyncStorage from '@react-native-community/async-storage';

// * RootStack for authentication pages (welcome screen, login, verify and register)
import RootStackScreen from './src/screens/RootStackScreen'

export default function App() {
  const Drawer = createDrawerNavigator()
  const initAuthState = {
    user: {},
    loading: true,
    token: null
  }

  const authReducer = (prevState, action) => {
    switch (action.type) {
      case 'LOADING' :
        return {
          ...prevState,
          loading:true,
        }
      case 'USER_RETRIEVE':
        return {
          ...prevState,
          loading: false,
          token: action.payload
        }
      case 'USER_LOGIN':
        return {
          ...prevState,
          user: action.payload,
          loading: false,
          token: action.payload.token
        }
      case 'USER_LOGOUT' :
        return {
          ...prevState,
          user: {},
          token: null,
          loading: false
        }
    }
  }

  const [authState, dispatch] = React.useReducer(authReducer, initAuthState)

  const authContext = React.useMemo(() => ({
    login: async(payload) => {
      dispatch({ type: 'LOADING' })
      try {
        await AsyncStorage.setItem('user', JSON.stringify(payload))
        await AsyncStorage.setItem('userToken', payload.token)
        console.log('login -->>>', payload)
      } catch (error) { console.log(error) }
      dispatch({ type: 'USER_LOGIN', payload })
    },
    logout: async() => {
      dispatch({ type: 'LOADING' })
      try {
        const userData = await AsyncStorage.getItem('user')
        const phone = JSON.parse(userData).phone
        const phoneQS = qs.stringify({
          phone: phone
        })
        console.log(phoneQS, '<<<<<<< logout phone num')
        const userLogout = await axios({
          method: 'patch',
          url: '/logout',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          data: phoneQS
        })
        console.log(userLogout.data, '<<<<<<<<<<<<<<<<,user logout')
        await AsyncStorage.removeItem('user')
        await AsyncStorage.removeItem('userToken')
      } catch (error) { console.log(error.response) }
      dispatch({ type: 'USER_LOGOUT' })
    }
  }), [])

  React.useEffect(() => {
    setTimeout(async() => {
      let userToken = null;
      try {
        const getUserToken = await AsyncStorage.getItem('userToken')
        userToken = getUserToken
        console.log(userToken)
      } catch (error) { console.log(error) }
      dispatch({ type: 'USER_RETRIEVE', payload: userToken })
    }, 1000)
  }, [])

  if (authState.loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: mainColor.third }}>
        <ActivityIndicator size="large" color={secondColor.blue} />
      </View>
    )
  }

  return (
    <Provider store={store}>
      <AuthContext.Provider value={authContext}>
        <StatusBar barStyle="light-content" backgroundColor={ mainColor.third } />
        <NavigationContainer>
        {/* condition for token, if no token then render authentication screens, 
        else redirect to home */}
        { !authState.token
          ? (<RootStackScreen />)
          : (<Drawer.Navigator
              initialRouteName="MainTabScreen"
              drawerContent={props => <DrawerContent {...props} />}
            >
              <Drawer.Screen name="MainTabScreen" component={MainTabScreen} options={{ title: 'Home' }} />
            </Drawer.Navigator>)
        }
        </NavigationContainer>
      </AuthContext.Provider>
    </Provider>
  )
}
