import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from '@expo/vector-icons/Ionicons'
import { HomePage, HistoryPage, TestPage } from './index'
import { mainColor } from '../styles/styles'
import { TouchableOpacity, View } from 'react-native'
import { color } from 'react-native-reanimated';
const HomeStack = createStackNavigator()
const HistoryStack = createStackNavigator()
const Tab = createMaterialBottomTabNavigator();

const CreateNewPlaceholder = () => <View />

export default MainTabScreen  = ({ navigation }) => (
  <Tab.Navigator
    initialRouteName="HomePage"
    activeColor={mainColor.third}
    inactiveColor={mainColor.third}
    // barStyle={{ backgroundColor: mainColor.third }}
    shifting={true}
  >
    <Tab.Screen
      name="Settings"
      component={CreateNewPlaceholder}
      options={{
        tabBarLabel: 'Menu',
        tabBarColor: mainColor.second,
        tabBarIcon: ({ color }) => (
          <Icon name="ios-menu" color={color} size={26} />
        ),
      }}
      listeners={({ navigation }) => ({
        tabPress: event => {
          event.preventDefault()
          navigation.openDrawer()
        }
      })}
    />
    {/* <Icon name="ios-home" color="#000" size={26} /> */}
    <Tab.Screen
      name="HomePage"
      component={HomeStackScreen}
      options={{
        tabBarLabel: 'Home',
        tabBarColor: mainColor.second,
        tabBarIcon: ({ color }) => (
          <Icon name="ios-home" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="HistoryPage"
      component={HistoryStackScreen}
      options={{
        tabBarLabel: 'HistoryPage',
        tabBarColor: mainColor.fourth,
        tabBarIcon: ({ color }) => (
          <Icon name="ios-clock" color={color} size={26} />
        ),
        tabBarBadge: true
      }}
      onPress={() => alert()}
    />
  </Tab.Navigator>
)

export const HomeStackScreen = ({ navigation }) => (
  <HomeStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: mainColor.second
      },
      headerTintColor: mainColor.third,
      headerTitleAlign: 'center',
      headerStatusBarHeight: 0
    }}
    initialRouteName="Home"
  >
    <HomeStack.Screen
      name="HomePage"
      component={HomePage}
      options={{
        title: 'Home',
        headerShown: false,
      }}
    />
  </HomeStack.Navigator>
)

export const HistoryStackScreen = ({ navigation }) => (
  <HistoryStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: mainColor.fourth
      },
      headerTintColor: mainColor.third,
      headerTitleAlign: 'center',
      headerStatusBarHeight: 0
    }}
    initialRouteName="Home"
  >
    <HistoryStack.Screen
      name="HistoryPage"
      component={HistoryPage}
      options={{
        title: 'History',
        headerShown: false,
      }}
    />
  </HistoryStack.Navigator>
)