import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'

import WelcomePage from './WelcomePage'
import LoginPage from './LoginPage'
import RegisterPage from './RegisterPage'
import VerifyPage from './VerifyPage'

const RootStack = createStackNavigator()

const RootStackScreen = ({ navigation }) => (
  <RootStack.Navigator headerMode='none' initialRouteName="WelcomePage">
    <RootStack.Screen name="WelcomePage" component={WelcomePage} />
    <RootStack.Screen name="LoginPage" component={LoginPage} />
    <RootStack.Screen name="VerifyPage" component={VerifyPage} />
    <RootStack.Screen name="RegisterPage" component={RegisterPage} />
  </RootStack.Navigator>
)

export default RootStackScreen