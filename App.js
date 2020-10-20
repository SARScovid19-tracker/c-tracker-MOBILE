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
  }

  const authReducer = (prevState, action) => {
    switch (action.type) {
      case 'LOADING' :
        return {
          ...prevState,
          loading:true
        }
      case 'USER_RETRIEVE':
        return {
          ...prevState,
          user: action.payload,
          loading: false
        }
      case 'USER_LOGIN':
        return {
          ...prevState,
          user: action.payload,
          loading: false
        }
      case 'USER_LOGOUT' :
        return {
          ...prevState,
          user: {},
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
      } catch (error) { console.log(error) }
      dispatch({ type: 'USER_LOGIN', payload })
    },
    logout: async() => {
      dispatch({ type: 'LOADING' })
      try {
        const getUser = await AsyncStorage.getItem('user')
        if (getUser) {
          const dataUser = JSON.parse(getUser)
          let dataNewOtp = qs.stringify({
            phone: dataUser.phone
          })
          console.log(dataNewOtp)
          const userLogout = await axios({
            method: 'patch',
            url: '/logout',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: dataNewOtp
          })
          console.log(userLogout, '<<<<<<<<<<<<<<<<,user logout')
          await AsyncStorage.removeItem('user')
        }
      } catch (error) { console.log(error.response) }
      dispatch({ type: 'USER_LOGOUT' })
    }
  }), [])

  React.useEffect(() => {
    setTimeout(async() => {
      let user = {};
      try {
        const getUser = await AsyncStorage.getItem('user')
        user = JSON.parse(getUser)
      } catch (error) { console.log(error) }
      dispatch({ type: 'USER_RETRIEVE', payload: user })
    }, 1000)
  }, [authContext])

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
        { !authState.user
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
