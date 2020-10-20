import React from 'react'
import { View, Text } from 'react-native'
import { Button } from 'react-native-paper'
import Modal from 'react-native-modal'
import { mainColor, secondColor, windowWidth } from '../styles/styles'
import { useDispatch, useSelector } from 'react-redux'
import { fetchOneRestaurant, createRestaurant } from '../actions/restaurantActions'

export default function RestaurantModal (props) {
  const dispatch = useDispatch()
  const userId = useSelector(state => state.userReducer.user.id)

  const checkedIn = () => {
    console.log(' userid: ' , userId, ' hospitalId: ', Number(props.data.restaurantId))
    setTimeout(() => {
      dispatch(createRestaurant(userId, { userId, restaurantId: props.data.restaurantId }))
    }, 2000)
    props.isDone()
  }

  return (
    <View>
      <Modal
        isVisible={props.isVisible}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        animationInTiming={300}
        animationOutTiming={300}
        hasBackdrop={true}
        backdropOpacity={0.9}
        backdropColor={mainColor.third}
        // onBackdropPress={() => props.toggleModal()}
      >
        <View
          style={{
            flex: 0.3,
            marginHorizontal: 30,
            paddingVertical: 5,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 15,
            backgroundColor: mainColor.first
          }}
        >
          <View style={{ flex: 1, justifyContent: 'space-evenly', alignItems: 'center' }}>
            <Text>Restaurant</Text>
            <Text>{props.isVisible && props.data.name}</Text>
            <Text>{props.isVisible && props.data.address}</Text>
          </View>
          <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'stretch' }}>
            <Button
              mode="contained"
              marginHorizontal={5}
              borderRadius={5}
              color={secondColor.red}
              onPress={() => checkedIn()}
            >Checked In</Button>
          </View>
        </View>
      </Modal>
    </View>
  )
}
