import React from 'react'
import { View, Image, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native'


export default function RegisterPage() {

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

  return (
    <>

      <View style={styles.container}>
        <Image style={styles.img}
          source={require('../../assets/logo-removebg-preview.png')}
        />
      </View>
      <View
        behavior="padding"
        style={styles.Wrapper}>
        <Text>
          Name
      </Text>
        <TextInput
          underlineColorAndroid='black'
          placeholderTextColor='black'
          keyboardType='email-address'
          style={styles.inputField} />
        <Text>
          Email
      </Text>
        <TextInput
          underlineColorAndroid='black'
          placeholderTextColor='black'
          keyboardType='email-address'
          style={styles.inputField} />

        <Text>
          Phone Number
      </Text>
        <TextInput
          underlineColorAndroid='black'
          placeholderTextColor='black'
          keyboardType='email-address'
          style={styles.inputField} />

        <Text>
          First Six Digit NIK
      </Text>
        <TextInput
          underlineColorAndroid='black'
          placeholderTextColor='black'
          // coba cari set max nya 6
          keyboardType='number'
          style={styles.inputField} />


        <View >
          <Button title="Register" mode="outlined" dark={true}>
            {/* onPress={() => toRegister()} */}
            {/* berhasil ke login , kalo belum muncul validasi */}
          </Button>
        </View>
      </View>
    </>
  )
}