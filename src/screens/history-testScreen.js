import React, { useEffect } from 'react'
import { Text, View, ScrollView, StyleSheet } from 'react-native'
import { mainColor, styles, windowHeight } from '../styles/styles'
import { useDispatch, useSelector } from 'react-redux'
import { fetchHospital } from '../actions/hospitalActions'
import Loading from '../components/Loading'
import Time from '../components/time'
// import Loader from '../components/Loading'

export default function CovidTestHistory () {
  const dispatch = useDispatch()
  const history = useSelector(state => state.userHospital)
  const userId = useSelector(state => state.userReducer.user.id)
  const { hospitals, error, loading } = history

  useEffect(() => {
    dispatch(fetchHospital(userId))
  }, [dispatch])

  if (loading) return <Loading />
  if (error) return <Text>Error...</Text>

  return (
    <ScrollView>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
        {
          !loading && hospitals.length > 0 ? hospitals.map(each => (
            <View style={card.CardContainer} key={each.id}>
              <View style={card.CardTitle}>
                <Text>{each.Hospital.name}</Text>
              </View>
              <View style={card.CardBody}>
                <Text>{each.testingType} Test</Text>
                <Text>Status: {each.isWaitingResult ? 'waiting result' : each.User.status}</Text>
                <Text>Location: {each.Hospital.address}</Text>
                <Time time={each.createdAt} />
              </View>
            </View>
          )) : <Text>You don't have any Covid Test history</Text>
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
    borderBottomColor: '#f2f2f2',
    paddingVertical: 5
  },
  CardBody: {
    flex: 2,
  }
})