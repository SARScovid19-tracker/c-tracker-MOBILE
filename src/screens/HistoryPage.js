import React from 'react'
import { Text, View, Button } from 'react-native'
import { styles } from '../styles/styles'

export default function HistoryPage ({ navigation }) {
  return (
    <View style={{ flex:1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>HistoryPage</Text>
      {/* <Button
        title="refresh this page"
        onPress={() => navigation.push('HistoryPage')}
      />
      <Button
        title="go back"
        onPress={() => navigation.goBack()}
      />
      <Button
        title="go home"
        onPress={() => navigation.navigate('HomePage')}
      /> */}
    </View>
  )
}