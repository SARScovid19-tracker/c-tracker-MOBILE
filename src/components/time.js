import React from 'react'
import { Text } from 'react-native'
import moment from 'moment'

export default function Time (props) {
  const time = moment( props.time || moment.now() ).fromNow()
  return (
    <Text style={{ fontSize: 13, color: 'grey' }}>{time}</Text>
  )
}