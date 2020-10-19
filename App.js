import React from 'react'
import store from './src/store'
import { Provider } from 'react-redux'
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { mainColor } from './src/styles/styles'
import MainTabScreen from './src/screens/MainTabScreen'
// import { CheckInHistory, CovidTestHistory } from './src/screens'

import { DrawerContent } from './src/screens/DrawerContent'

// * RootStack for authentication pages (welcome screen, login, verify and register)
import RootStackScreen from './src/screens/RootStackScreen'

export default function App() {
  const Drawer = createDrawerNavigator()

  return (
    <Provider store={store}>
      <StatusBar barStyle="light-content" backgroundColor={ mainColor.third } />
      <NavigationContainer>
        <RootStackScreen />
        {/* <Drawer.Navigator
          initialRouteName="MainTabScreen"
          drawerContent={props => <DrawerContent {...props} />}
        >
          <Drawer.Screen name="MainTabScreen" component={MainTabScreen} options={{ title: 'Home' }} />
        </Drawer.Navigator> */}
      </NavigationContainer>
    </Provider>
  )
}
