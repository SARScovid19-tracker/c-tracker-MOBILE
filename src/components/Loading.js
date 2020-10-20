import React from 'react'
import { View, ActivityIndicator } from 'react-native'
import { mainColor, secondColor } from '../styles/styles'

export default function Loading() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: mainColor.third
      }}
    >
      <ActivityIndicator size="large" color={secondColor.blue} />
    </View>
  )
}
