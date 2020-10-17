import Constants from 'expo-constants';
import React, { useState, useEffect, useRef } from 'react'
import { View, Image, StyleSheet, Text, TextInput, Button, Alert, TouchableOpacity } from 'react-native'
import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';
import axios from 'axios'
import qs from 'qs'
export default function RegisterPage({ navigation }) {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setphone] = useState(0);
  const [nik, setNik] = useState(0);

  const [expoPushToken, setExpoPushToken] = useState('');
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  useEffect(() => {
    registerForPushNotificationsAsync().then(token => setExpoPushToken(token));

    // This listener is fired whenever a notification is received while the app is foregrounded
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


  async function submitRegister() {
    if (name !== '' && email !== '' && phone !== '' && nik !== '' && expoPushToken !== '') {
      let data = {
        phone,
        nik,
        name,
        email,
        deviceId: expoPushToken
      }
      axios
      .post('https://068537906b97.ngrok.io/register',
      qs.stringify(data), {
        headers: { 'content-type': 'application/x-www-form-urlencoded' }
      })
      .then( function(res) {
        console.log(`RESP: ${res.data}`)
      })
      .catch( function(error){
        console.log(`ERR: ${error}`)
      })
    // navigation.navigate('LoginPage')
  } else {
    if (name === '') {
      Alert.alert('Name must be filled in!')
    } else if (email === '') {
      Alert.alert('Email must be filled in!')
    } else if (phone === '') {
      Alert.alert('phone must be filled in!')
    } else if (nik > 7 || nik < 7) {
      Alert.alert('Input your first six number NIK')
    } else if (!expoPushToken) {
      Alert.alert('Use a reliable device')
    }
  }

}

return (
  <>
    <View style={styles.container}>
      <Image style={styles.img}
        source={require('../../assets/logo-removebg-preview.png')}
      />
    </View>
    <View
      behavior="padding"
      style={styles.Wrapper}>
      {/* <Text>Your expo push token: {expoPushToken}</Text> */}
      <Text>
        Name
      </Text>
      <TextInput
        onChangeText={(text) => setName(text)}
        underlineColorAndroid='black'
        placeholderTextColor='black'
        keyboardType='email-address'
        style={styles.inputField} />
      <Text>
        Email
      </Text>
      <TextInput
        onChangeText={(text) => setEmail(text)}
        underlineColorAndroid='black'
        placeholderTextColor='black'
        keyboardType='email-address'
        style={styles.inputField} />

      <Text>
        Phone
      </Text>
      <TextInput
        onChangeText={(num) => setphone(num)}
        underlineColorAndroid='black'
        placeholderTextColor='black'
        keyboardType='number-pad'
        style={styles.inputField} />

      <Text>
        First Six Digit NIK
      </Text>
      <TextInput
        onChangeText={(num) => setNik(num)}
        underlineColorAndroid='black'
        placeholderTextColor='black'
        // coba cari set max nya 6
        keyboardType='number-pad'
        style={styles.inputField} />


      <View >
        <Button onPress={(event) => submitRegister(event)} title="Register" mode="outlined" dark={true}>

          {/* berhasil ke login , kalo belum muncul validasi */}
        </Button>
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
  container: {
    paddingTop: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    height: 200,
    width: 200
  },
  imgNormal: {
    paddingTop: 0,
    height: 200,
    width: 200
  },
  inputField: {
    width: 280,
    color: 'black',
    borderColor: 'white',
    marginTop: 5
  },
  Wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#1F3A93'
  },
  text: {
    color: 'blue',
    fontSize: 23
  }
});