import React, { useState, useEffect, useRef } from 'react'
import {
  View,
  Image,
  StyleSheet,
  Text,
  TextInput,
  Alert,
  ToastAndroid,
  TouchableOpacity,
  Platform,
  Dimensions
} from 'react-native'
import { Button } from 'react-native-paper'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import Feather from '@expo/vector-icons/Feather'
import { LoginScreenStyle, mainColor, secondColor, windowWidth } from '../styles/styles'
import axios from '../config/axios'
import qs from 'qs'
import Constants from "expo-constants";

const Toast = ({ visible, message }) => {
  if (visible) {
    ToastAndroid.showWithGravityAndOffset(
      message,
      ToastAndroid.LONG,
      ToastAndroid.CENTER,
      25,
      50
    );
    return null;
  }
  return null;
};

export default function RegisterPage({ navigation }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [nik, setNik] = useState(0)
  const [submitLoginLoading, setSubmitLoginLoading] = useState(false)
  const [visibleToast, setvisibleToast] = useState(false);

 useEffect(() => setvisibleToast(false), [visibleToast]);
  
  async function submitRegister() {
    setSubmitLoginLoading(true)
    let mobile = ''
    if (phone.startsWith('0')) {
      let temp = phone.substring(1, phone.length)
      mobile = '+62' + temp

      console.log(mobile, '<>>>>>>>>>>>> phone to +62')
    } else {
      mobile = phone
    }
    if (name !== '' && email !== '' && phone !== '' && nik !== '') {
      let data = {
        phone: mobile,
        nik,
        name,
        email
      }
      // tambahin alert untk cek email setelah berhasul register
      console.log(data, '<<<< data register')
      // setTimeout(() => {
      axios
        .post('/register', qs.stringify(data), {
          headers: { 'content-type': 'application/x-www-form-urlencoded' }
        })
        .then(function (res) {
          setSubmitLoginLoading(false)
          // setLoading(true)
          setvisibleToast(true)
          toLogin()
          // Alert.alert('Please verify your email')
          console.log(`RESP: ${res.data}`)
        })
        .catch(function (error) {
          setSubmitLoginLoading(false)
          Alert.alert(error.response.data.errors)
          console.log(`ERR: ${error.response.data.errors},>>>>>>>>>>>>>> register err axuos`)
        })
      //}, 2000)

    } else {
      setSubmitLoginLoading(false)
      if (name === '') {
        Alert.alert('Name must be filled in!')
      } else if (email === '') {
        Alert.alert('Email must be filled in!')
      } else if (phone === '') {
        Alert.alert('phone must be filled in!')
      } else if (nik < 6 || nik === '') {
        Alert.alert('Input your first six number NIK')
      }
    }
  }
  function toLogin(){
    console.log('funct register page to login triggered')
    navigation.navigate('LoginPage')
  }

  return (
    <View style={styles.container}>
         <Toast  visible={visibleToast} message="Succesfully Registered, please verify your email!" />
      <View style={styles.header}>
        <Image
          style={styles.img}
          source={require('../assets/logo-removebg-preview-trimmed.png')}
        />
      </View>
      <View style={styles.footer}>
        <Text style={styles.text_footer}>Name</Text>
        <View style={styles.action}>
          <Feather
            name="edit-3"
            color={mainColor.third}
            size={20}
          />
          <TextInput
            onChangeText={text => setName(text)}
            underlineColorAndroid="#bbb"
            placeholderTextColor="#999"
            keyboardType="email-address"
            style={styles.textInput}
          />
        </View>
        <Text style={styles.text_footer}>Email</Text>
        <View style={styles.action}>
          <Feather
            name="mail"
            color={mainColor.third}
            size={20}
          />
          <TextInput
            onChangeText={text => setEmail(text)}
            underlineColorAndroid="#bbb"
            placeholderTextColor="#999"
            keyboardType="email-address"
            style={styles.textInput}
          />
        </View>
        <Text style={styles.text_footer}>Phone</Text>
        <View style={styles.action}>
          <Feather
            name="phone"
            color={mainColor.third}
            size={20}
          />
          <TextInput
            onChangeText={num => setPhone(num)}
            underlineColorAndroid="#bbb"
            placeholderTextColor="#999"
            keyboardType="phone-pad"
            style={styles.textInput}
          />
        </View>
        <Text style={styles.text_footer}>First Six Digit NIK</Text>
        <View style={styles.action}>
          <Feather
            name="credit-card"
            color={mainColor.third}
            size={20}
          />
          <TextInput //maxlength
            underlineColorAndroid="#bbb"
            placeholderTextColor="#999"
            maxLength={6}
            // coba cari set max nya 6
            keyboardType="phone-pad"
            style={styles.textInput}
            onChangeText={num => setNik(num)}
          />
        </View>

        <View style={{ alignSelf: 'auto', flex: 1, justifyContent: 'center' }}>
          <Button
            icon="page-next"
            title="Register"
            mode="contained"
            dark={false}
            style={{ borderRadius: 30 }}
            loading={submitLoginLoading}
            color={mainColor.second}
            onPress={event => submitRegister(event)}
          >
            Submit
          </Button>
        </View>
      </View>
    </View>
  )
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ABD98B',
  },
  header: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  footer: {
    flex: 4,
    backgroundColor: mainColor.first,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 20,
    paddingHorizontal: 30,
  },
  text_header: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  text_footer: {
    color: mainColor.third,
    fontSize: 16,
    marginBottom: 4,
    marginTop: 5
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5
  },
  textInput: {
    flex: 1,
    marginTop: Platform.os === 'ios' ? 0 : -12,
    paddingBottom: 8,
    paddingTop: 2,
    paddingLeft: 10,
    color: '#666',
    fontSize: 16
  },
  button: {
    alignItems: 'center',
    marginTop: 50
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  img: {
    width: windowWidth / 2,
    resizeMode: 'contain',
  },
  toast:{
    flex: 1,
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#FF6F00",
    padding: 15
  }
})
