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
import * as Notifications from 'expo-notifications'

// * RootStack for authentication pages (welcome screen, login, verify and register)
import RootStackScreen from './src/screens/RootStackScreen'

export default function App() {
  const Drawer = createDrawerNavigator()
  const initAuthState = {
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
          loading: false,
          token: action.payload
        }
      case 'USER_LOGOUT' :
        return {
          ...prevState,
          token: null,
          loading: false
        }
    }
  }

  const [authState, dispatch] = React.useReducer(authReducer, initAuthState)

  const authContext = React.useMemo(() => ({
    login: async(payload) => {
      try {
        await AsyncStorage.setItem('userToken', payload)
      } catch (error) { console.log(error) }
      dispatch({ type: 'USER_LOGIN', payload })
    },
    logout: async() => {
      try {
        await AsyncStorage.removeItem('userToken')
      } catch (error) { console.log(error.response) }
      dispatch({ type: 'USER_LOGOUT' })
    }
  }), [])

  React.useEffect(() => {
    let userToken = null;
    setTimeout(async() => {
      try {
        const getUserToken = await AsyncStorage.getItem('userToken')
        userToken = getUserToken
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
        <NavigationContainer >
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
