import React from 'react'
import { NavigationContainer, StackActions } from '@react-navigation/native'
import { StatusBar } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import { Provider } from 'react-redux'
import store from './src/store'
import { mainColor } from './src/styles/styles'
import {
  HomePage,
  LoginPage,
  RegisterPage,
  VerifyPage,
} from './src/screens'

export default function App() {
  const Stack = createStackNavigator()
  return (
    <Provider store={store}>
      <StatusBar barStyle="dark-content" backgroundColor={ mainColor.second } />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: mainColor.third
            },
            headerTintColor: mainColor.second,
          }}
        >
          <Stack.Screen
            name="LoginPage"
            component={LoginPage}
            options={{
              title: 'Login',
              headerShown: false
            }}
          />

          <Stack.Screen
            name="RegisterPage"
            component={RegisterPage}
            options={{ title: 'Register' }}
          />

          <Stack.Screen
            name="Verify"
            component={VerifyPage}
            options={{ title: 'Verify' }}
          />

          <Stack.Screen
            name="HomePage"
            component={HomePage}
            options={{
              title: 'Home',
              headerShown: false
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}
