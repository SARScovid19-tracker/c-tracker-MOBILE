import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'

import WelcomePage from './WelcomePage'
import LoginPage from './LoginPage'
import RegisterPage from './RegisterPage'
import VerifyPage from './VerifyPage'
import { StatusBar } from 'react-native'

const RootStack = createStackNavigator()

const RootStackScreen = ({ navigation }) => (
  <>
  <StatusBar hidden={true}  />
  <RootStack.Navigator headerMode='none' initialRouteName="WelcomePage" screenOptions={{ animationEnabled: false }}>
    <RootStack.Screen name="WelcomePage" component={WelcomePage} />
    <RootStack.Screen name="LoginPage" component={LoginPage} />
    <RootStack.Screen name="VerifyPage" component={VerifyPage} />
    <RootStack.Screen name="RegisterPage" component={RegisterPage} />
  </RootStack.Navigator>
  </>
)

export default RootStackScreen