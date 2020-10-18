import React from 'react'
import { Text, View, Button } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { styles, mainColor } from '../styles/styles'
// import Ionicons from '@expo/vector-icons/Ionicons'
import Icons from '@expo/vector-icons/MaterialCommunityIcons'
import HistoryPage from './HistoryPage'
import UserPage from './UserPage'

export default function HomePage ({ navigation }) {
  return (
    <View style={{ flex:1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>HomePages</Text>
      <Button
        title="Scan QR"
        onPress={() => navigation.navigate('QrCodeScanner')}
      />
    </View>
  )
}