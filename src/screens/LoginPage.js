import React, { useState, useEffect, useRef } from 'react'
import Constants from 'expo-constants';
import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';
import axios from 'axios'
import qs from 'qs'
import {
  View,
  Image,
  StyleSheet,
  Text,
  TextInput,
  Button,
  TouchableOpacity
} from 'react-native'


export default function LoginPage({ navigation }) {

  const [expoPushToken, setExpoPushToken] = useState('');
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();
  const [phone, setPhone] = useState('');

  useEffect(() => {
    registerForPushNotificationsAsync().then(token => setExpoPushToken(token));

    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      setNotification(notification);
    });

    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      console.log(response);
    });

    return () => {
      Notifications.removeNotificationSubscription(notificationListener);
      Notifications.removeNotificationSubscription(responseListener);
    };
  }, []);


  function submitLogin() {
    let mobile = "";
    if (phone.startsWith("0")) {
      let temp = phone.substring(1, phone.length);
      mobile = "+62" + temp;

      console.log(mobile, "<>>>>>>>>>>>> phone to +62");
    }else{
      mobile = phone
    }

    let data = qs.stringify({
      phone: mobile,
      deviceId: expoPushToken
    });
    console.log(data, ">>>>>>>.data")
    let config = {
      method: 'patch',
      url: 'https://9bb75df1866b.ngrok.io/login',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: data
    };

    axios(config)
      .then(function (response) {
        console.log('masuk login axios client >>>>>>>>>>>>>>>>>>')
        toVerify()
        // navigation.navigate('VerifyPage')
        console.log(JSON.stringify(response.data));
      
      })
      .catch(function (error) {
        console.log(error,">>>>>>>>>>>>>>>>>>>> axios login");
      });

  }

  function toVerify(){
    console.log('funct toverify triggred')
    navigation.navigate('VerifyPage',{
      params: { mobile: mobile }
    })
  }
  //navigation.navigate('LoginPage')
  function toRegister() {
    // navigation.navigate('RegisterPage')
    navigation.navigate('VerifyPage')
  }
  return (
    <>
      <View style={styles.containerLogo}>
        <Image style={styles.img}
          source={require('../../assets/logo-removebg-preview-trimmed.png')}
        />
        {/* <Image style={styles.imgNormal}
        source={require('../../assets/new-normal.jpg')}
      /> */}
      </View>
      <View behavior="padding" style={styles.Wrapper}>
        <Text>Phone Number</Text>
        <TextInput
          onChangeText={(text) => setPhone(text)}
          underlineColorAndroid="black"
          placeholder='+621234567890'
          placeholderTextColor="black"
          keyboardType="numeric"
          style={styles.inputField}
        />

        <View>
          <Button title="Login" mode="outlined" dark={true} onPress={() => submitLogin()}>
          </Button>
        </View>
        <View>
          <Button
            title="Register"
            onPress={() => toRegister()}
            mode="outlined"
            dark={true}
          ></Button>
        </View>
      </View>
    </>
  )
}


async function registerForPushNotificationsAsync() {
  let token;
  if (Constants.isDevice) {
    const { status: existingStatus } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification!');
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log(token);
  } else {
    alert('Must use physical device for Push Notifications');
  }

  if (Platform.OS === 'android') {
    Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }
  console.log(token)
  return token;
}


const styles = StyleSheet.create({
  containerLogo: {
    padding: 20,
    marginHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    paddingTop: 5,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'blue'
  },
  img: {
    width: 200,
    height: 50,
    resizeMode: 'contain'
  },
  imgNormal: {
    paddingTop: 0,
    height: 200,
    width: 200
  },
  inputField: {
    width: 280,
    color: 'black',
    borderColor: 'black',
    marginTop: 5
  },
  Wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
    // backgroundColor: '#1F3A93'
  },
  text: {
    color: 'blue',
    fontSize: 23
  }
})
