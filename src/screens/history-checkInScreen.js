import React, { useEffect } from 'react'
import { Text, View, ScrollView, FlatList, StyleSheet } from 'react-native'
import { mainColor, styles, windowHeight } from '../styles/styles'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRestaurant } from '../actions/restaurantActions'
import Loading from '../components/Loading'

export default function CheckInHistory () {
  const dispatch = useDispatch()
  const history = useSelector(state => state.userRestaurant)
  const { restaurants, error, loading } = history

  useEffect(() => {
    dispatch(fetchRestaurant(1))
  }, [dispatch])

  if (loading) return <Loading />
  if (error) return <Text>Error...</Text>

  return (
    <ScrollView>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {
          !loading && restaurants.map((each, i) => (
            <View style={card.CardContainer} key={i}>
              <View style={card.CardTitle}>
                <Text>{each.Restaurant.name}</Text>
              </View>
              <View style={card.CardBody}>
                <Text>Address: {each.Restaurant.address}</Text>
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