import React, { useState } from 'react'
import { View, Image, StyleSheet, Text, TextInput,Button, TouchableOpacity } from 'react-native'

const styles = StyleSheet.create({
  container: {
    paddingTop: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    height: 200,
    width: 200
  },
  imgNormal: {
    paddingTop: 0,
    height: 200,
    width: 200
  },
  inputField: {
    width: 280,
    color: 'white',
    borderColor: 'white',
    marginTop: 5
  },
  Wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#1F3A93'
  },
  text: {
    color: 'blue',
    fontSize: 23
  }
});

export default function LoginPage({ navigation }) {

  function submit(){
   navigation.navigate('Verify')
  }
  function toRegister(){
    navigation.navigate('RegisterPage')
   }
  return (
    <>
      <View style={styles.container}>
        <Image style={styles.img}
          source={require('../../assets/logo-removebg-preview.png')}
        />
        {/* <Image style={styles.imgNormal}
        source={require('../../assets/new-normal.jpg')}
      /> */}
      </View>
      <View
        behavior="padding"
        style={styles.Wrapper}>
        <Text>
          Email / Phone Number
      </Text>
        <TextInput
          underlineColorAndroid='black'
          placeholderTextColor='black'
          keyboardType='email-address'
          style={styles.inputField} />

        <View >
          <Button title="Login" mode="outlined" dark={true}>
            {/* onPress={() => submit()} */}
          </Button>
        </View>
        <View >
          <Button title="Register" onPress={() => toRegister()} mode="outlined" dark={true}>
            
          </Button>
        </View>
      </View>

    </>

  )
}