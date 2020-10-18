import React from 'react'
import { Text, Button } from 'react-native'
import { styles } from '../styles/styles'

export default function VerifyPage ({ navigation }) {
  return (
    <Button title="Homepage" onPress={() => navigation.navigate('HomePage')}>VerifyPage</Button>
  )
}