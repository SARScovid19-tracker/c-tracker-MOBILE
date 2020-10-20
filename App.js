import React from 'react'
import store from './src/store'
import axios from './src/config/axios'
import { Provider } from 'react-redux'
import { StatusBar, View, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { mainColor, secondColor } from './src/styles/styles'
import { AuthContext } from './src/components/context'
import MainTabScreen from './src/screens/MainTabScreen.js'

// * RootStack for authentication pages (welcome screen, login, verify and register)
import RootStackScreen from './src/screens/RootStackScreen'

export default function App() {
  const Drawer = createDrawerNavigator()
  const [isLoading, setIsLoading] = React.useState(true)
  const [userToken, setUserToken] = React.useState(null)

  const authContext = React.useMemo(() => ({
    login: () => {
      setUserToken('surya')
      setIsLoading(false)
    },
    logout: () => {
      setUserToken(null)
      setIsLoading(false)
    }
  }))

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }, [])

  if (isLoading) {
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
        { !userToken
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
