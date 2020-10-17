import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import { Provider } from 'react-redux'
import store from './src/store'
import { styles } from './src/styles/styles'
import QrCodeScanner from './src/screens/QRCodeTest'

export default function App() {
  return (
  <Provider store={store}>
      <QrCodeScanner />
      <StatusBar style="auto" />
  </Provider>
  );
}
