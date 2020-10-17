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

export default function TabsPage () {
  const Tab = createBottomTabNavigator()

  return (
    <>
      <Tab.Navigator
        initialRouteName="Homepage"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Homepage') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'format-list-bulleted' : 'format-list-bulleted';
            } else if(route.name === 'History') {
              iconName = focused ? 'clock-check' : 'clock-check-outline';
            }
            // You can return any component that you like here!
            return <Icons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: mainColor.second,
          inactiveTintColor: mainColor.first,
          activeBackgroundColor: mainColor.third,
          inactiveBackgroundColor: mainColor.third,
          showLabel: false
        }}
      >
        <Tab.Screen name="History" component={HistoryPage} options={{ tabBarBadge: 10 }} />
      </Tab.Navigator>
    </>
  )
}