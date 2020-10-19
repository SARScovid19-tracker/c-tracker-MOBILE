import React, { useState, useEffect } from 'react'
import { Text, View, Button, Image } from 'react-native'
import { styles, mainColor } from '../styles/styles'
// import Ionicons from '@expo/vector-icons/Ionicons'
import Icons from '@expo/vector-icons/MaterialCommunityIcons'
import RestaurantCheckInModal from '../components/RestaurantCheckInModal'

export default function HomePage ({ route, navigation }) {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image style={styles.img}
            source={require('../../assets/logo-removebg-preview-trimmed.png')}
          />
        </View>
        <View style={styles.footer}>
          <Button
            title="Pop Up"
          />
          <Text></Text>
          <Button
            title="Scan QR"
            onPress={() => navigation.navigate('QrCodeScanner')}
          />
        </View>
      </View>
    </>
  )
}