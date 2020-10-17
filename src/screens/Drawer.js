import React from 'react';
import { View, Text, StyleSheet, Button, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomePage from './HomePage';
import HistoryPage from './HistoryPage';
import UserPage from './UserPage'

const Drawer = createDrawerNavigator();

export default function DrawerMenu() {
	return (
    <>
    <Drawer.Navigator>
      <Drawer.Screen name="Contact" component={HistoryPage} />
    </Drawer.Navigator>
    </>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});