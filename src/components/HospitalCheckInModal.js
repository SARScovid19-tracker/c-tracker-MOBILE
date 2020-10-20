import React, { useState } from 'react'
import { View, Text, Alert } from 'react-native'
import { Button } from 'react-native-paper'
import Modal from 'react-native-modal'
import { mainColor, secondColor, windowWidth } from '../styles/styles'
import { useDispatch, useSelector } from 'react-redux'
import { fetchOneHospital, createHospital } from '../actions/hospitalActions'

export default props => {
  const dispatch = useDispatch()
  const userId = useSelector(state => state.userReducer.user.id)

  const submitTest = testType => {
    console.log(testType, ' userid: ' , userId, ' hospitalId: ', Number(props.data.hospitalId))
    setTimeout(() => {
      dispatch(
        createHospital(userId, {
          userId: userId,
          hospitalId: Number(props.data.hospitalId),
          testingType: testType
        })
      )
    }, 2000)
    props.isDone()
  }

  return (
    <View>
      <Modal
        isVisible={props.isVisible}
        hasBackdrop={true}
        backdropOpacity={0.9}
        backdropColor={mainColor.third}
        onBackdropPress={() => props.toggleModal()}
      >
        <View
          style={{
            flex: 0.3,
            marginHorizontal: 30,
            paddingVertical: 10,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 15,
            backgroundColor: mainColor.first
          }}
        >
          <View
            style={{
              flex: 1.7,
              justifyContent: 'space-evenly',
              alignItems: 'center'
            }}
          >
            <Text style={{ fontSize: 19 }}>
              {props.isVisible && props.data.name}
            </Text>
            <Text>{props.isVisible && props.data.address}</Text>
            <Text>Choose which test you'll take!</Text>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'flex-end'
            }}
          >
            <Button
              mode="contained"
              marginHorizontal={5}
              borderRadius={5}
              color={secondColor.blue}
              onPress={() => submitTest('Rapid')}
            >
              Rapid Test
            </Button>
            <Button
              mode="contained"
              marginHorizontal={5}
              borderRadius={5}
              color={secondColor.yellow}
              onPress={() => submitTest('Swab')}
            >
              Swab Test
            </Button>
          </View>
        </View>
      </Modal>
    </View>
  )
}
