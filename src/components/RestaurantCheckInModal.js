import React from 'react'
import { View, Text } from 'react-native'
import { Button } from 'react-native-paper'
import Modal from 'react-native-modal'
import { mainColor, secondColor, windowWidth } from '../styles/styles'

export default props => {
  return (
    <View>
      <Modal
        isVisible={props.isVisible}
        // isVisible={true}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        animationInTiming={300}
        animationOutTiming={300}
        hasBackdrop={true}
        backdropOpacity={0.8}
        backdropColor={mainColor.third}
        onBackdropPress={() => props.toggleModal()}
      >
        <View
          style={{
            marginHorizontal: 30,
            paddingVertical: 10,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 15,
            backgroundColor: mainColor.first
          }}
        >
          <Text>Modal</Text>
        </View>
      </Modal>
    </View>
  )
}
