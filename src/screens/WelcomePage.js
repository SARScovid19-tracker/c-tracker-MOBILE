import React from 'react'
import { Text, View, Button, Image, StyleSheet } from 'react-native'
import Onboarding from 'react-native-onboarding-swiper'

export default function WelcomePage({ navigation }) {
  return (
    <Onboarding
      onSkip={() => {
        console.log('triger skip')
        navigation.navigate('LoginPage')
      }}
      onDone={() => {
        console.log('ondone')
        navigation.navigate('LoginPage')
      }}
      pages={[
        {
          backgroundColor: '#fff',
          image: (
            <Image
              style={styles.imgLogo}
              source={require('../assets/logo-removebg-preview-trimmed.png')}
            />
          ),
          title: 'How it works?',
          subtitle: (
            <Text style={styles.textContent}>
              Scan a barcode in every restaurant you come in. We will track your visit. Only health care provider know your data!
            </Text>
          )
        },
        {
          backgroundColor: '#fe6e58',
          image: (
            <Image
              style={styles.img}
              source={require('../assets/doctor-woman.png')}
            />
          ),
          title:
            'How if I got Notification?',
          subtitle: (
            <Text style={styles.textContentBg}>
              Don't be panic! Check your status to hospital and do isolation!
            </Text>
            )
        },
        {
          backgroundColor: '#999',
          image: (
            <Image
              style={styles.img}
              source={require('../assets/hands-waving-flags-indonesia-removebg-preview.png')}
            />
          ),
          title: 'Together we can!',
          subtitle:
          <Text style={styles.textContentBg}>
            Help government to track, with you we can recover our community. Together we make Indonesia 🇮🇩  be great again!!
          </Text>
        }
      ]}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  img: {
    width: 200,
    height: 200,
    resizeMode: 'contain'
  },
  imgLogo: {
    width: 300,
    height: 200,
    resizeMode: 'contain'
  },
  textContent: {
    textAlign: 'center',
    fontSize: 16,
    marginHorizontal: "10%",
    lineHeight: 20,
    color: 'black'
  },
  textContentBg: {
    textAlign: 'center',
    fontSize: 16,
    marginHorizontal: "10%",
    lineHeight: 20,
    color: 'rgba(255,255,255,0.7)'
  }
})
