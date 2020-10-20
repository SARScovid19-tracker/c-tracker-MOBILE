import React, { useState, useEffect } from 'react'
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  Alert,
  ToastAndroid,
  KeyboardAvoidingView
} from 'react-native'
import { Button } from 'react-native-paper'
import { Col, Grid } from 'react-native-easy-grid'
import axios from '../config/axios'
import qs from 'qs'
import { NavigationHelpersContext } from '@react-navigation/native'
import { mainColor, secondColor, windowWidth } from '../styles/styles'
import { AuthContext } from '../components/context'
import Constants from "expo-constants";


const Toast = ({ visible, message }) => {
  if (visible) {
    ToastAndroid.showWithGravityAndOffset(
      message,
      ToastAndroid.LONG,
      ToastAndroid.TOP,
      25,
      50
    );
    return null;
  }
  return null;
};

//timer 10 menit
// kalo udh 0.0 ada tombol request new otp

export default function VerifyPage({ navigation, route }) {

  const [otp1, setOtp1] = useState('')
  const [otp2, setOtp2] = useState('')
  const [otp3, setOtp3] = useState('')
  const [otp4, setOtp4] = useState('')
  const [otp5, setOtp5] = useState('')
  const [otp6, setOtp6] = useState('')
  const { mobile, expoPushToken } = route.params.params

  const [visibleToast, setvisibleToast] = useState(false);

  useEffect(() => setvisibleToast(false), [visibleToast]);

  // ! demo
  const { login } = React.useContext(AuthContext)

  function onVerify() {
    let data = qs.stringify({
      phone: mobile,
      code: `${otp1}${otp2}${otp3}${otp4}${otp5}${otp6}`,
      deviceId: expoPushToken
    })

    let config = {
      method: 'post',
      url: '/verify',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: data
    }

    axios(config)
      .then(function (response) {
        setvisibleToast(true)
        console.log(response.data, '>>>>>>>>>>>>>.data berhasil verify')
        // toHome()
        login(response.data)
      })
      .catch(function (error) {
        console.log(error, '>>>>>>>>>>>>>> err in verify client')
        Alert.alert(error.response.data.errors)
      })
  }

  function onNewOtp() {
    let dataNewOtp = qs.stringify({
      phone: mobile
    })
    console.log(dataNewOtp, '>>>>>>>.data new otp')

    let config = {
      method: 'patch',
      url: '/login',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: dataNewOtp
    }

    axios(config)
      .then(function (response) {
        console.log('masuk req new otp axios  >>>>>>>>>>>>>>>>>>')
        console.log(JSON.stringify(response))
      })
      .catch(function (error) {
        console.log(error, '>>>>>>>>>>>>>>>>>>>> axios new otp')
      })
  }

  // function toHome(){
  //   navigation.navigate('HomePage')
  // }
  const otp1ref = React.useRef()
  const otp2ref = React.useRef()
  const otp3ref = React.useRef()
  const otp4ref = React.useRef()
  const otp5ref = React.useRef()
  const otp6ref = React.useRef()

  return (
    <View style={styles.bigBox}>
      <View style={styles.mediumBox}>
      <Toast visible={visibleToast} message="You're verified!" />
          <TextInput
            maxLength={1}
            keyboardType="number-pad"
            style={styles.box}
            onChangeText={(text) => {
              setOtp1(text)
              if(otp1 >= 0 && otp1 <= 9) {
                otp2ref.current.focus()
              }
            }}
            ref={otp1ref}
          />
          <TextInput
            maxLength={1}
            keyboardType="number-pad"
            style={styles.box}
            onChangeText={text => {
              setOtp2(text)
              if(otp2 >= 0 && otp2 <= 9) {
                otp3ref.current.focus()
              }
            }}
            ref={otp2ref}
          />
          <TextInput
            maxLength={1}
            keyboardType="number-pad"
            style={styles.box}
            onChangeText={text => {
              setOtp3(text)
              if(otp3 >= 0 && otp3 <= 9) {
                otp4ref.current.focus()
              }
            }}
            ref={otp3ref}
          />
          <TextInput
            maxLength={1}
            keyboardType="number-pad"
            style={styles.box}
            onChangeText={text => {
              setOtp4(text)
              if(otp4 >= 0 && otp4 <= 9) {
                otp5ref.current.focus()
              }
            }}
            ref={otp4ref}
          />
          <TextInput
            maxLength={1}
            keyboardType="number-pad"
            style={styles.box}
            onChangeText={text => {
              setOtp5(text)
              if(otp5 >= 0 && otp5 <= 9) {
                otp6ref.current.focus()
              }
            }}
            ref={otp5ref}
          />
          <TextInput
            maxLength={1}
            keyboardType="number-pad"
            style={styles.box}
            onChangeText={text => setOtp6(text)}
            ref={otp6ref}
          />
      </View>

      <View style={styles.smMedBox}>
        {/* <View style={styles.miniBox}> */}
        <Button
          title="New Otp"
          color="#000"
          onPress={() => onNewOtp()}>
          Request new OTP
        </Button>
        {/* </View> */}
        {/* <View style={styles.miniBox}> */}
        <Button
          icon="account-arrow-right"
          title="Verify"
          mode="contained"
          color={secondColor.blue}
          onPress={() => onVerify()}
        >
          Verify
        </Button>
        {/* </View> */}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  bigBox: {
    flex: 1,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  mediumBox: {
    flex: 1.2,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-evenly',
    alignSelf: 'stretch',
    paddingBottom: 10
  },
  smMedBox: {
    flex: 1,
    paddingTop: 10,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    alignSelf: 'stretch',
    paddingHorizontal: 20
  },
  miniBox: {
    backgroundColor: 'yellow',
    justifyContent: 'space-evenly'
  },
  box: {
    backgroundColor: 'white',
    fontWeight: '200',
    fontSize: windowWidth / 15,
    height: windowWidth / 7,
    width: windowWidth / 7,
    borderWidth: 0.5,
    borderRadius: 5,
    borderColor: 'blue',
    textAlign: 'center',
    alignContent: 'center'
  },
  toast:{
    flex: 1,
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#888888",
    padding: 8
  }
})
