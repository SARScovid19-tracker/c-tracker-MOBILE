import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import CovidTestHistory from './history-testScreen'
import CheckInHistory from './history-checkInScreen'
import { mainColor, secondColor } from '../styles/styles'
import { color } from 'react-native-reanimated';

const Tab = createMaterialTopTabNavigator();

export default function HistoryPage ({ route, navigation }) {
  const [pageRequest, setPageRequest ] = React.useState('Checked-In')

  return (
    <Tab.Navigator
      initialRouteName={pageRequest}
      tabBarOptions={{
        labelStyle: {fontSize: 14, textTransform: 'capitalize'},
        indicatorStyle: {backgroundColor: secondColor.blue, height: 5},
      }}
    >
      <Tab.Screen
        name="Covid-Test"
        component={CovidTestHistory}
      />
      <Tab.Screen
        name="Checked-In"
        component={CheckInHistory}
      />
    </Tab.Navigator>
  )
}