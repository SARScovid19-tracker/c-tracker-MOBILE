import React, { useState, useEffect } from 'react'
import { Text, View, Image } from 'react-native'
import { Button } from 'react-native-paper'
import { styles, mainColor, secondColor } from '../styles/styles'
// import Ionicons from '@expo/vector-icons/Ionicons'
// import Icons from '@expo/vector-icons/MaterialCommunityIcons'
// import RestaurantCheckInModal from '../components/RestaurantCheckInModal'

export default function HomePage ({ route, navigation }) {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image style={styles.img}
            source={require('../../assets/logo-removebg-preview-trimmed.png')}
          />
        </View>
        <View style={{...styles.footer, justifyContent: 'flex-end', alignItems: 'stretch'}}>
          <Text></Text>
          <Button
            icon="qrcode-scan"
            title="Scan QR"
            mode="contained"
            color={secondColor.blue}
            onPress={() => navigation.navigate('QrCodeScanner')}
          >Tap to Scan</Button>
        </View>
      </View>
    </>
  )
}