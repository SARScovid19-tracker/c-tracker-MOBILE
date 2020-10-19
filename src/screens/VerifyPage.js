import React, { useState } from 'react'
import { Text, Button, View, TextInput, StyleSheet, Alert, KeyboardAvoidingView } from 'react-native'
import { Col, Grid } from 'react-native-easy-grid'
import axios from 'axios'
import qs from 'qs'
import { NavigationHelpersContext } from '@react-navigation/native'
// import { styles } from '../styles/styles'


//timer 10 menit 
// kalo udh 0.0 ada tombol request new otp

export default function VerifyPage({ navigation, route }) {
  // onChangeText={(text) => setPhone(text)
  // console.log(route, ">>>>>>>>>>>>>>")
  const [otp1, setOtp1] = useState(0)
  const [otp2, setOtp2] = useState(0)
  const [otp3, setOtp3] = useState(0)
  const [otp4, setOtp4] = useState(0)
  const [otp5, setOtp5] = useState(0)
  const [otp6, setOtp6] = useState(0)
  const { mobile, expoPushToken } = route.params.params
  // console.log(mobile, ">>>>>>>>>>>>>>>>>>>> verify mobile")

  function onVerify() {
    let data = qs.stringify({
      phone: mobile,
      code: `${otp1}${otp2}${otp3}${otp4}${otp5}${otp6}`,
      deviceId: expoPushToken
    });
    // console.log(data, ">>>>>>>>>>>>>>.data verify")

    let config = {
      method: 'post',
      url: 'https://bc548962eca3.ngrok.io/verify',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: data
    };

    axios(config)
      .then(function (response) {
        console.log(response.data,">>>>>>>>>>>>>.data berhasil verify");
        // toHome()

      })
      .catch(function (error) {
        console.log(error, ">>>>>>>>>>>>>> err in verify client");
        Alert.alert(error.response.data.errors[0])
      });

  }

  function onNewOtp() {
    let dataNewOtp = qs.stringify({
      phone: mobile,
      //deviceId: expoPushToken
    });
    console.log(dataNewOtp, ">>>>>>>.data new otp")

    // let logout = {
    //   method: 'patch',
    //   url: 'https://bc548962eca3.ngrok.io/logout',
    //   headers: {
    //     'Content-Type': 'application/x-www-form-urlencoded'
    //   },
    //   data: dataNewOtp
    // };

    // axios(logout)
    //   .then(function (response) {
    //     console.log(JSON.stringify(response.data))
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });


    let config = {
      method: 'patch',
      url: 'https://bc548962eca3.ngrok.io/login',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: dataNewOtp
    };

    axios(config)
      .then(function (response) {
        console.log('masuk req new otp axios  >>>>>>>>>>>>>>>>>>')
        // toVerify()
        // navigation.navigate('VerifyPage')
        console.log(JSON.stringify(response));

      })
      .catch(function (error) {
        console.log(error, ">>>>>>>>>>>>>>>>>>>> axios new otp");
      });
  }

  // function toHome(){
  //   navigation.navigate('HomePage')
  // }
  return (

    <View style={styles.bigBox}>

    <View style={styles.mediumBox}>

      <View style={styles.miniBox}>
        <TextInput
          maxLength={1}
          keyboardType="number-pad"
          style={styles.box}
          onChangeText={(text) => setOtp1(text)}
        />
      </View>
      <View style={styles.miniBox}>
        <TextInput
          maxLength={1}
          keyboardType="number-pad"
          style={styles.box}
          onChangeText={(text) => setOtp2(text)}
        />
      </View>
      <View style={styles.miniBox}>
        <TextInput
          maxLength={1}
          keyboardType="number-pad"
          style={styles.box}
          onChangeText={(text) => setOtp3(text)}
        />
      </View>
      <View style={styles.miniBox}>
        <TextInput
          maxLength={1}
          keyboardType="number-pad"
          style={styles.box}
          onChangeText={(text) => setOtp4(text)}
        />
      </View>
      <View style={styles.miniBox}>
        <TextInput
          maxLength={1}
          keyboardType="number-pad"
          style={styles.box}
          onChangeText={(text) => setOtp5(text)}
        />
      </View>
      <View style={styles.miniBox}>
        <TextInput
          maxLength={1}
          keyboardType="number-pad"
          style={styles.box}
          onChangeText={(text) => setOtp6(text)}
        />
      </View>

    </View>    

    <View style={styles.smMedBox}>
      {/* <View style={styles.miniBox}> */}
        <Button title="New Otp" onPress={() => onNewOtp()}>NewOtp</Button>
      {/* </View> */}
      {/* <View style={styles.miniBox}> */}
        <Button title="Verify" onPress={() => onVerify()}>VerifyPage</Button>
      {/* </View> */}
    </View>

    </View>

  )
}

const styles = StyleSheet.create({
  bigBox: {
    backgroundColor: 'blue',
    flex: 1,
    // flexDirection: "row",
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  mediumBox: {
    flex: 0.8,
    flexDirection: 'row'
  },
  smMedBox: {
    flex: 0.2
  },
  miniBox: {
    backgroundColor: 'yellow',
    // flex: 0.6,
    justifyContent: 'space-evenly',
  },
  box: {
    backgroundColor: 'white',
    fontWeight: '200',
    alignSelf: 'center',
    justifyContent: 'center',
    // marginLeft: 0,
    // marginRight:0,
    // padding:20,
    fontSize: 10,
    height: 55,
    width: 55,
    // width: '10%',
    borderWidth: 0.5,
    borderRadius: 5,
    borderColor: 'blue',
    textAlign: 'center',
    alignContent: 'center'
  },

})

