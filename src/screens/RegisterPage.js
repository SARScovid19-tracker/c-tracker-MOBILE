import React, { useState, useEffect, useRef } from 'react'
import { View, Image, StyleSheet, Text, TextInput, Button, Alert, TouchableOpacity } from 'react-native'
import axios from 'axios'
import qs from 'qs'
export default function RegisterPage({ navigation }) {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [nik, setNik] = useState(0);


  async function submitRegister() {
    let mobile = "";
    if (phone.startsWith("0")) {
      let temp = phone.substring(1, phone.length);
      mobile = "+62" + temp;

      console.log(mobile, "<>>>>>>>>>>>> phone to +62");
    }else{
      mobile = phone
    }
    if (name !== '' && email !== '' && phone !== '' && nik !== '') {
      let data = {
        phone: mobile,
        nik,
        name,
        email,
      }
      axios
        .post(' https://9bb75df1866b.ngrok.io/register',
          qs.stringify(data), {
          headers: { 'content-type': 'application/x-www-form-urlencoded' }
        })
        .then(function (res) {
          console.log(`RESP: ${res.data}`)
        })
        .catch(function (error) {
          console.log(`ERR: ${error}`)
        })
      navigation.navigate('LoginPage')
    } else {
      if (name === '') {
        Alert.alert('Name must be filled in!')
      } else if (email === '') {
        Alert.alert('Email must be filled in!')
      } else if (phone === '') {
        Alert.alert('phone must be filled in!')
      } else if (nik > 7 || nik < 7 || nik === '') {
        Alert.alert('Input your first six number NIK')
      } 
    }

  }

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
        {/* <Text>Your expo push token: {expoPushToken}</Text> */}
        <Text>
          Name
      </Text>
        <TextInput
          onChangeText={(text) => setName(text)}
          underlineColorAndroid='black'
          placeholderTextColor='black'
          keyboardType='email-address'
          style={styles.inputField} />
        <Text>
          Email
      </Text>
        <TextInput
          onChangeText={(text) => setEmail(text)}
          underlineColorAndroid='black'
          placeholderTextColor='black'
          keyboardType='email-address'
          style={styles.inputField} />

        <Text>
          Phone
      </Text>
        <TextInput
          onChangeText={(num) => setPhone(num)}
          underlineColorAndroid='black'
          placeholderTextColor='black'
          keyboardType='number-pad'
          style={styles.inputField} />

        <Text>
          First Six Digit NIK
      </Text>
        <TextInput
          onChangeText={(num) => setNik(num)}
          underlineColorAndroid='black'
          placeholderTextColor='black'
          // coba cari set max nya 6
          keyboardType='number-pad'
          style={styles.inputField} />


        <View >
          <Button onPress={(event) => submitRegister(event)} title="Register" mode="outlined" dark={true}>

            {/* berhasil ke login , kalo belum muncul validasi */}
          </Button>
        </View>
      </View>
    </>
  )
}

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
    color: 'black',
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