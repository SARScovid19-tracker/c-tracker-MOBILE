import React from 'react'
import { Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { styles, mainColor } from '../styles/styles'
// import Ionicons from '@expo/vector-icons/Ionicons'
import Icons from '@expo/vector-icons/MaterialCommunityIcons'
import HistoryPage from './HistoryPage'
import UserPage from './UserPage'
import DrawerPage from './Drawer'
import Drawer from './Drawer'

export default function HomePage () {
  return (
    <>
      <Text>Test</Text>
      <Drawer />
    </>
  )
}