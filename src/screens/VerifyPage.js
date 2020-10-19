import React, { useState, } from 'react'
import { Text, Button, View, TextInput, StyleSheet, } from 'react-native'
import { Col, Grid } from 'react-native-easy-grid'
// import { styles } from '../styles/styles'


//timer 10 menit 
// kalo udh 0.0 ada tombol request new otp

export default function VerifyPage ({ navigation }) {

  return (
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
       {/* <Button title="Homepage" onPress={() => navigation.navigate('HomePage')}>VerifyPage</Button> */}
    </View>
   
  )
}



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

