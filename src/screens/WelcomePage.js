import React from 'react'
import {
  Text,
  View,
  Button,
  Image
} from 'react-native'
import { AuthScreenStyle as styles } from '../styles/styles'

export default function WelcomePage ({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../assets/logo-removebg-preview-trimmed.png')}
          style={styles.logo}
          resizeMode="stretch"
        />
      </View>
      <View style={styles.footer} >

      </View>
    </View>
  )
}