import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Provider } from 'react-redux'
import store from './src/store'
import { HomePage, HistoryPage, LoginPage, RegisterPage,
TestPage, VerifyPage } from './src/screens/index'

export default function App() {
  const Stack = createStackNavigator()
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>

          <Stack.Screen
            name="LoginPage"
            component={LoginPage}
            options={{ title: 'Login' }}
          />

          <Stack.Screen
            name="RegisterPage"
            component={RegisterPage}
            options={{ title: 'Register' }}
          />

          <Stack.Screen
            name="VerifyPage"
            component={VerifyPage}
            options={{ title: 'Verify' }}
          />

          <Stack.Screen
            name="HomePage"
            component={HomePage}
            options={{ title: 'Home' }}
          />

          <Stack.Screen
            name="HistoryPage"
            component={HistoryPage}
            options={{ title: 'History' }}
          />

          <Stack.Screen
            name="TestPage"
            component={TestPage}
            options={{ title: 'Test' }}
          />

        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
