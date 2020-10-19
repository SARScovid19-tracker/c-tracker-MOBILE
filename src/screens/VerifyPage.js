import React, { useState } from 'react'
import { Text, Button, View, TextInput, StyleSheet, KeyboardAvoidingView } from 'react-native'
import { Col, Grid } from 'react-native-easy-grid'
import axios from 'axios'
import qs from 'qs'
import { NavigationHelpersContext } from '@react-navigation/native'
// import { styles } from '../styles/styles'


//timer 10 menit 
// kalo udh 0.0 ada tombol request new otp

export default function VerifyPage ({ navigation, route }) {
  // onChangeText={(text) => setPhone(text)
  console.log(route,">>>>>>>>>>>>>>")
 const [otp1, setOtp1] = useState(0)
 const [otp2, setOtp2] = useState(0)
 const [otp3, setOtp3] = useState(0)
 const [otp4, setOtp4] = useState(0)
 const [otp5, setOtp5] = useState(0)
 const [otp6, setOtp6] = useState(0)
 const { mobile } = route.params.params
 console.log(mobile,">>>>>>>>>>>>>>>>>>>> verify mobile")

 function onVerify() {
  let data = qs.stringify({
    phone: mobile,
   code: `${otp1}${otp2}${otp3}${otp4}${otp5}${otp6}`
   });
   console.log(data,">>>>>>>>>>>>>>.data verify")

  let config = {
    method: 'post',
    url: 'https://bc548962eca3.ngrok.io/verify',
    headers: { 
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data : data
  };
  
  axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
    // toHome()
 
  })
  .catch(function (error) {
    console.log(error,">>>>>>>>>>>>>> err in verify client");
  });
 
 }

// function toHome(){
//   navigation.navigate('HomePage')
// }
  return (
    // <View style={ styles.container }>
    //   <KeyboardAvoidingView
    //   keyboardVerticalOffset={50}
    //   behavior={padding}
    //   style= {styles.containerAvoidingView}
    //   >
    //       <Text style={styles.textTitle}>
    //         {"Input your OTP code sent via SMS"}
    //       </Text>
    //       <View>
    //         <TextInput
    //         onChangeText= { onChangeText }
    //         style= {{ width:0, height:0 }}
    //         value={intervalVal}
    //         maxLength={1}
    //         keyboardType="numeric"
    //         />

           
    //       </View>
    //   </KeyboardAvoidingView>
    // </View>

    
    <View style={ styles.bigBox }>
      <View style={ styles.miniBox }>
        <TextInput 
        maxLength={1}
        keyboardType="number-pad"
        style={styles.box}
          onChangeText={(text) => setOtp1(text)}
        />
      </View>
      <View style={ styles.miniBox }>
        <TextInput 
        maxLength={1}
        keyboardType="number-pad"
        style={styles.box}
        onChangeText={(text) => setOtp2(text)}
        />
      </View>
      <View style={ styles.miniBox }>
        <TextInput 
        maxLength={1}
        keyboardType="number-pad"
        style={styles.box}
        onChangeText={(text) => setOtp3(text)}
        />
      </View>
      <View style={ styles.miniBox }>
        <TextInput 
        maxLength={1}
        keyboardType="number-pad"
        style={styles.box}
        onChangeText={(text) => setOtp4(text)}
        />
      </View>
      <View style={ styles.miniBox }>
        <TextInput 
        maxLength={1}
        keyboardType="number-pad"
        style={styles.box}
        onChangeText={(text) => setOtp5(text)}
        />
      </View>
      <View style={ styles.miniBox }>
        <TextInput 
        maxLength={1}
        keyboardType="number-pad"
        style={styles.box}
        onChangeText={(text) => setOtp6(text)}
        />
      </View>
      <View>
      <Button title="Verify" onPress={() => onVerify()}>VerifyPage</Button>
      </View>
       
    </View>
   
  )
}



// const styles = StyleSheet.create({
// container:{
//   flex: 1
// },
// containerAvoidingView:{
//   flex: 1,
//   alignItems: 'center',
//   padding : 10
// },
// textTitle:{
//   marginTop: 50,
//   marginBottom: 50,
//   fontSize: 16
// }
// })

const styles = StyleSheet.create({
  bigBox:{
    backgroundColor:'blue',
    flex: 1,
    flexDirection:"row",
    marginRight: 20,
    marginLeft:20
  },
  miniBox: {
    backgroundColor:'yellow',
    flex : 0.6,
    justifyContent:'space-evenly',
  },
  box: {
    backgroundColor: 'white', 
    fontWeight:'200', 
    alignSelf: 'center',
    justifyContent: 'center',
    // marginLeft: 0,
    // marginRight:0,
    // padding:20,
    fontSize: 10,
    height: 55,
    width: '10%',
    borderWidth: 0.5,
    borderRadius: 5,
    borderColor: 'blue',
    textAlign: 'center',
    alignContent:'center'
  },

})

