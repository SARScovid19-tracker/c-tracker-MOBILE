import React, { useEffect, useState } from 'react'
import { Text } from 'react-native'
import { styles } from '../styles/styles'

export default function CheckInHistory ({ route, navigation }) {
  const [id, setId] = useState(0)
  const [type, setType] = useState('')

  useEffect(() => {
    setId(route.params.id)
    setType(route.params.type)
  }, [])

  return (
    <>
      <Text>Scanned {id} {type}</Text>
    </>
  )
}