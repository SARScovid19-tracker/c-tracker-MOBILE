import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  Linking,
  Platform,
  StyleSheet
} from 'react-native'
import { Button } from 'react-native-paper'
import { styles, mainColor, secondColor, covidWidget } from '../styles/styles'
import { getDataCovid } from '../actions/actions'
// import Ionicons from '@expo/vector-icons/Ionicons'
// import Icons from '@expo/vector-icons/MaterialCommunityIcons'
// import RestaurantCheckInModal from '../components/RestaurantCheckInModal'

export default function HomePage({ route, navigation }) {
  const dispatch = useDispatch()
  const dataCovid = useSelector(state => state.dataCovid.data)

  useEffect(() => {
    dispatch(getDataCovid())
  }, [])
  console.log(dataCovid, '>>>>>>>> dataCovid di home')

  function dialCall() {
    let phoneNumber = ''

    if (Platform.OS === 'android') {
      phoneNumber = 'tel:${+6281236001528}'
    }
    // else {
    //   phoneNumber = 'telprompt:${1234567890}';
    // }

    Linking.openURL(phoneNumber)
  }
  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            style={styles.img}
            source={require('../../assets/logo-removebg-preview-trimmed.png')}
          />
        </View>
        <View style={styles2.MainContainer}>
          <TouchableOpacity
            onPress={() => dialCall()}
            activeOpacity={0.7}
            style={styles2.button}
          >
            <Text style={styles2.TextStyle}>Emergency Call?</Text>
          </TouchableOpacity>
        </View>
        <View style={covidWidget.container}>
          <View style={covidWidget.titleContainer}>
            <Text>Data Covid {dataCovid.tanggal}</Text>
          </View>
          <View style={covidWidget.bodyContainer}>
            <View style={{...covidWidget.contentBox, backgroundColor: mainColor.second}}>
              <Text>Recovery</Text>
              <Text>{dataCovid.dirawat}</Text>
            </View>
            <View style={{...covidWidget.contentBox, backgroundColor: secondColor.yellow}}>
              <Text>Positive</Text>
              <Text>{dataCovid.positif}</Text>
            </View>
            <View style={{...covidWidget.contentBox, backgroundColor: mainColor.fourth}}>
              <Text>Death</Text>
              <Text>{dataCovid.meninggal}</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            ...styles.footer,
            justifyContent: 'flex-end',
            alignItems: 'stretch'
          }}
        >
          <Text></Text>
          <Button
            icon="qrcode-scan"
            title="Scan QR"
            mode="contained"
            color={secondColor.blue}
            onPress={() => navigation.navigate('QrCodeScanner')}
          >
            Tap to Scan
          </Button>
        </View>
      </View>
    </>
  )
}

const styles2 = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    width: '80%',
    padding: 6,
    backgroundColor: '#FF6F00',
    borderRadius: 7
  },

  TextStyle: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center'
  }
})
