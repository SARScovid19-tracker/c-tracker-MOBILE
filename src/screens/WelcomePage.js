import React from 'react'
import {
  Text,
  View,
  Button,
  Image,
  StyleSheet
} from 'react-native'
import Onboarding from 'react-native-onboarding-swiper';

export default function WelcomePage ({ navigation }) {
  return (
    <Onboarding
        onSkip={() =>{
            console.log('triger skip')
            navigation.navigate('LoginPage')
        } }
        onDone={() => {

            console.log('ondone')
        navigation.navigate('LoginPage')
        }}
        pages={[
            {
                backgroundColor: '#fff',
                image: <Image source={require('../assets/onboarding-img1.png')} />,
                title: 'How it works?',
                subtitle: `Scan a barcode in every restaurant you come in. We will track your visit. No one will know about your data!`
            },
            {
                backgroundColor: '#fe6e58',
                image: <Image style={styles.img} source={require('../assets/doctor-woman.png')}  />,
                title: 'How if you got notification about around with someone positive?',
                subtitle: `Don't be panic! Check your status to hospital and do isolation!`
            },
            {
                backgroundColor: '#999',
                image: <Image source={require('../assets/onboarding-img3.png')} />,
                title: 'Together we can!',
                subtitle: 'Help government to track, with you we can recover our community. Together we make Indonesia be great again!!'
            },
        ]}
    />
);
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    img:{
      width: 200,
      height: 200,
      resizeMode:'contain'
    }
  });