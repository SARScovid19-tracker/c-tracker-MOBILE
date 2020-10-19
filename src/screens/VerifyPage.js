import React, { useState } from 'react'
import { Text, Button, View, TextInput, StyleSheet, KeyboardAvoidingView } from 'react-native'
import { Col, Grid } from 'react-native-easy-grid'
// import { styles } from '../styles/styles'


//timer 10 menit 
// kalo udh 0.0 ada tombol request new otp

export default function VerifyPage ({ navigation }) {
 const [otp, setOtp] = useState(0)
 
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
        />
      </View>
      <View style={ styles.miniBox }>
        <TextInput 
        maxLength={1}
        keyboardType="number-pad"
        style={styles.box}
        />
      </View>
      <View style={ styles.miniBox }>
        <TextInput 
        maxLength={1}
        keyboardType="number-pad"
        style={styles.box}
        />
      </View>
      <View style={ styles.miniBox }>
        <TextInput 
        maxLength={1}
        keyboardType="number-pad"
        style={styles.box}
        />
      </View>
      <View style={ styles.miniBox }>
        <TextInput 
        maxLength={1}
        keyboardType="number-pad"
        style={styles.box}
        />
      </View>
      <View style={ styles.miniBox }>
        <TextInput 
        maxLength={1}
        keyboardType="number-pad"
        style={styles.box}
        />
      </View>
       <Button title="Homepage" onPress={() => navigation.navigate('HomePage')}>VerifyPage</Button>
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

