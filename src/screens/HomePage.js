import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  Pressable,
  Linking,
  Platform,
  StyleSheet,
  ScrollView,
  Alert
} from 'react-native'
import moment from 'moment'
import { Button, FAB, Portal, Provider } from 'react-native-paper'
import {
  styles,
  mainColor,
  secondColor,
  covidWidget,
  windowHeight,
  windowWidth
} from '../styles/styles'
import { getDataCovid, fetchOneUser } from '../actions/actions'
import { LinearGradient } from 'expo-linear-gradient'
import * as Animatable from 'react-native-animatable'
import AsyncStorage from '@react-native-community/async-storage';

// import Ionicons from '@expo/vector-icons/Ionicons'
// import Icons from '@expo/vector-icons/MaterialCommunityIcons'
// import RestaurantCheckInModal from '../components/RestaurantCheckInModal'

export default function HomePage({ route, navigation }) {
  const dispatch = useDispatch()
  const dataCovid = useSelector(state => state.dataCovid.data)
  const userData = useSelector(state => state.userReducer)
  const [qrLoading, setQrLoading] = React.useState(false)
  const [state, setState] = React.useState({ open: false })
  const onStateChange = ({ open }) => setState({ open })
  const { open } = state

  useEffect(() => {
    dispatch(getDataCovid())
    setTimeout(async () => {
      try {
        const userId = await AsyncStorage.getItem('userId')
        console.log('trigerred')
        console.log(userId, ">>>>>>>>>>>>>>>>>>>.home")
        if (userId) dispatch(fetchOneUser(userId))
        console.log('triggered last match dispatch team')
      } catch (error) { console.log(error) }
    }, 4000)
  }, [])
  // console.log(dataCovid, '>>>>>>>> dataCovid di home')

  function dialCall() {
    console.log('triger calll')
    let phoneNumber = ''
    if (Platform.OS === 'android') {
      phoneNumber = 'tel:${119}'
    }
    // else {
    //   phoneNumber = 'telprompt:${1234567890}';
    // }
    Linking.openURL(phoneNumber)
  }

  const reFetchUser = async () => {
    setQrLoading(true)
    try {
      const userId = await AsyncStorage.getItem('userId')
      console.log(userId, ">>>>>>>>>> dari button qr")
      if (userId) {
        dispatch(fetchOneUser(userId))
        setTimeout(() => {
          if (userData.user.status.toLowerCase() !== 'positive') {
            setQrLoading(false)
            navigation.navigate('QrCodeScanner')
          } else {
            setQrLoading(false)
            Alert.alert(`When you're negative your apps will available.`)
          }
        }, 2000)
      } else {
        setQrLoading(false)
        alert(userId)
      }
    } catch (error) {
      setQrLoading(false)
      Alert.alert('error')
    }
  }

  return (
    <Provider>
      <Portal>
        <View style={styles.container}>
          <LinearGradient
            colors={['#A1FFCE', '#FAFFD1']}
            style={{
              position: 'absolute',
              left: 0,
              right: 0,
              top: 0,
              height: windowHeight
            }}
          />
          <View style={styles.header}>
            <Image
              style={styles.img}
              source={require('../../assets/logo-removebg-preview-trimmed.png')}
            />
          </View>
          {/* <View style={styles2.MainContainer}>
            <TouchableOpacity
              onPress={() => dialCall()}
              activeOpacity={0.7}
              style={styles2.button}
            >
              <Text style={styles2.TextStyle}>🏥 Emergency Call</Text>
            </TouchableOpacity>
          </View> */}
          <View style={covidWidget.container}>
            <FAB
              style={{
                position: 'absolute',
                marginRight: 10,
                marginTop: 10,
                top: 0,
                right: 0,
                backgroundColor: 'orange',
                zIndex:2
              }}
              color="black"
              backgroundColor={mainColor.third}
              icon={'alarm-light'}
              onPress={() => dialCall()}
            />
            <View style={covidWidget.titleContainer}>
              <Text style={{ fontSize: 22, color: '#fff' }}>Data Covid-19</Text>
              <Text style={{ color: '#f4f4f4' }}>
                {moment(dataCovid.tanggal).format('ll')}
              </Text>
            </View>
            <View style={covidWidget.bodyContainer}>
              <View
                style={{
                  ...covidWidget.contentBox,
                  backgroundColor: mainColor.second
                }}
              >
                <Text>Recovery</Text>
                <Text style={{ fontSize: 24 }}>{dataCovid.dirawat}</Text>
              </View>
              <View
                style={{
                  ...covidWidget.contentBox,
                  backgroundColor: secondColor.yellow,
                  marginHorizontal: 5
                }}
              >
                <Text>Positive</Text>
                <Text style={{ fontSize: 24 }}>{dataCovid.positif}</Text>
              </View>
              <View
                style={{
                  ...covidWidget.contentBox,
                  backgroundColor: mainColor.fourth
                }}
              >
                <Text>Death</Text>
                <Text style={{ fontSize: 24 }}>{dataCovid.meninggal}</Text>
              </View>
            </View>
          </View>

          <View
            style={{
              ...styles.footer,
              justifyContent: 'flex-start',
              alignItems: 'center',
            }}
          >
            <Image
              style={{ width: windowWidth - 50, resizeMode: 'contain', height: windowWidth - 50 }}
              source={require('../assets/c-tracker-homescreen.png')}
            />
            <FAB
              style={{
                position: 'absolute',
                marginRight: 5,
                marginBottom: 20,
                bottom: 0,
                backgroundColor: "#285d8f"
              }}
              loading={qrLoading}
              color="white"
              backgroundColor={"#285d8f"}
              icon={'qrcode-scan'}
              onPress={() => reFetchUser()}
            />
          </View>
          {/* <FAB.Group
            fabStyle={{ backgroundColor: mainColor.third }}
            open={open}
            color="white"
            icon={open ? 'menu-open' : 'plus'}
            actions={[
              {
                icon: 'alarm-light',
                label: 'Emergency Call',
                onPress: () => dialCall()
              },
              {
                icon: 'qrcode-scan',
                label: 'Scan QR',
                onPress: () => navigation.navigate('QrCodeScanner')
              }
            ]}
            onStateChange={onStateChange}
            onPress={() => {
              if (open) {
                // do something if the speed dial is open
              }
            }}
          /> */}
        </View>
      </Portal>
    </Provider>
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
    backgroundColor: mainColor.third,
    // backgroundColor: '#FF6F00',
    borderRadius: 20,

  },

  TextStyle: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center'
  }
})
