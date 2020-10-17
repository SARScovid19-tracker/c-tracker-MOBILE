import React, { useState } from 'react'
import {
  View,
  Image,
  StyleSheet,
  Text,
  TextInput,
  Button,
  TouchableOpacity
} from 'react-native'

const styles = StyleSheet.create({
  containerLogo: {
    padding: 20,
    marginHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center'
  }, 
  container: {
    paddingTop: 5,
    justifyContent: 'center',
<<<<<<< HEAD
    alignItems: 'center'
=======
    alignItems: 'center',
    // backgroundColor: 'blue'
>>>>>>> 04ba89063e1954bbee99acb8bfd2013c0c4a3636
  },
  img: {
    width: 200,
    height: 50,
    resizeMode: 'contain'
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
    alignItems: 'center'
    // backgroundColor: '#1F3A93'
  },
  text: {
    color: 'blue',
    fontSize: 23
  }
})

export default function LoginPage({ navigation }) {
<<<<<<< HEAD
  function submit() {
    navigation.navigate('Verify')
  }
  function toRegister() {
=======

  // function submit(){
  //  navigation.navigate('Verify')
  // }
  function toRegister(){
>>>>>>> 04ba89063e1954bbee99acb8bfd2013c0c4a3636
    navigation.navigate('RegisterPage')
  }
  return (
    <>
<<<<<<< HEAD
      <View style={styles.container}>
        <Image
          style={styles.img}
          source={require('../../assets/logo-removebg-preview.png')}
=======
      <View style={styles.containerLogo}>
        <Image style={styles.img}
          source={require('../../assets/logo-removebg-preview-trimmed.png')}
>>>>>>> 04ba89063e1954bbee99acb8bfd2013c0c4a3636
        />
        {/* <Image style={styles.imgNormal}
        source={require('../../assets/new-normal.jpg')}
      /> */}
      </View>
      <View behavior="padding" style={styles.Wrapper}>
        <Text>Email / Phone Number</Text>
        <TextInput
          underlineColorAndroid="black"
          placeholderTextColor="black"
          keyboardType="email-address"
          style={styles.inputField}
        />

        <View>
          <Button title="Login" mode="outlined" dark={true} onPress={submit}>
            {/* onPress={() => submit()} */}
          </Button>
        </View>
        <View>
          <Button
            title="Register"
            onPress={() => toRegister()}
            mode="outlined"
            dark={true}
          ></Button>
        </View>
      </View>
    </>
  )
}
