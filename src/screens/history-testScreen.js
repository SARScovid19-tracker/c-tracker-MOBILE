import React, { useEffect } from 'react'
import { Text, View, ScrollView, FlatList, StyleSheet } from 'react-native'
import { mainColor, styles, windowHeight } from '../styles/styles'
import { useDispatch, useSelector } from 'react-redux'
import { fetchHospital } from '../actions/hospitalActions'
import Loader from '../components/Loading'

export default function CovidTestHistory () {
  const dispatch = useDispatch()
  const history = useSelector(state => state.userHospital)
  const { hospitals, error, loading } = history

  useEffect(() => {
    dispatch(fetchHospital(3))
  }, [dispatch])

  if (loading) return <Loader />
  if (error) return <Text>Error...</Text>

  return (
    <ScrollView>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {
          !loading && hospitals.map(each => (
            <View style={card.CardContainer} key={each.id}>
              <View style={card.CardTitle}>
                <Text>{each.Hospital.name}</Text>
              </View>
              <View style={card.CardBody}>
                <Text>Test type: {each.testingType}</Text>
                <Text>Status: {each.User.status}</Text>
                <Text>Address: {each.Hospital.address}</Text>
              </View>
            </View>
          ))
        }
      </View>
    </ScrollView>
  )
}

const card = StyleSheet.create({
  CardContainer : {
    flex: 1,
    minHeight: windowHeight / 7,
    marginVertical: 3,
    marginHorizontal: 5,
    backgroundColor: mainColor.white,
    alignSelf: "stretch",
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    shadowRadius: 1
  },
  CardTitle: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#000'
  },
  CardBody: {
    flex: 2,
  }
})