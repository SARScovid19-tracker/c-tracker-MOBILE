import React, { useState, useEffect, useRef } from 'react'
import Constants from 'expo-constants';
import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';
import axios from '../config/axios'
import qs from 'qs'
import {
  View,
  Image,
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  Dimensions,
  Alert
} from 'react-native'
import { Button } from 'react-native-paper'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import Feather from '@expo/vector-icons/Feather'
import { LoginScreenStyle, mainColor, secondColor } from '../styles/styles'



const Toast = ({ visible, message }) => {
  if (visible) {
    ToastAndroid.showWithGravityAndOffset(
      message,
      ToastAndroid.LONG,
      ToastAndroid.TOP,
      25,
      50
    );
    return null;
  }
  return null;
};

export default function LoginPage({ navigation }) {

  const [expoPushToken, setExpoPushToken] = useState('');
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();
  const [phone, setPhone] = useState('');
  const [visibleToast, setvisibleToast] = useState(false);

  useEffect(() => setvisibleToast(false), [visibleToast]);


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

  let mobile = "";
  let temp = phone.substring(1, phone.length);
  function submitLogin() {
    if (phone.startsWith("0")) {
      mobile = "+62" + temp;
      console.log(mobile, "<>>>>>>>>>>>> phone to +62");
    }else{
      mobile = phone
    }

    let data = qs.stringify({
      phone: mobile,
    });
    console.log(data, ">>>>>>>.data")
    let config = {
      method: 'patch',
      url: '/login',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: data
    };

    axios(config)
      .then(function (response) {
        setvisibleToast(true)
        console.log('masuk login axios client >>>>>>>>>>>>>>>>>>')
        toVerify()
        // navigation.navigate('VerifyPage')
        console.log(JSON.stringify(response.data));
      
      })
      .catch(function (error) {
        console.log(error.response,">>>>>>>>>>>>>>>>>>>> axios login");
        // Alert.alert(error.response.data.errors[0])
      })
      .catch(console.log)
  }

  function toVerify(){
    console.log('funct toverify triggred')
    navigation.navigate('VerifyPage',{
      params: { mobile:mobile, expoPushToken: expoPushToken}
    })
  }

  function toRegister() {
    navigation.navigate('RegisterPage')
    // navigation.navigate('VerifyPage', {
    //   params: { mobile:mobile }
    // })
  }


  return (
    <View style={LoginScreenStyle.container}>
      <View style={LoginScreenStyle.header}>
      <Toast visible={visibleToast} message="Check your otp sms" />
        <Image style={styles.img}
          source={require('../../assets/logo-removebg-preview-trimmed.png')}
        />
        {/* <Image style={styles.imgNormal}
        source={require('../../assets/new-normal.jpg')}
      /> */}
      </View>
      <View style={LoginScreenStyle.footer}>
          <Text style={LoginScreenStyle.text_footer}>Phone Number</Text>
          <View style={LoginScreenStyle.action}>
            <FontAwesome
              name="phone"
              color={mainColor.third}
              size={20}
            />
            <TextInput
              underlineColorAndroid="#eee"
              placeholder='+621234567890'
              placeholderTextColor="#999"
              keyboardType="phone-pad"
              style={LoginScreenStyle.textInput}
              onChangeText={(text) => setPhone(text)}
            />
            <Feather
              name="check-circle"
              color="green"
              size={15}
            />
          </View>
          <View style={{ alignSelf: 'auto', flex: 1, justifyContent: 'center' }}>
            <Button
              icon="login"
              title="Login"
              mode="contained"
              dark={false}
              style={{ borderRadius: 30 }}
              color={secondColor.blue}
              onPress={() => submitLogin()}
              // onPress={() => toVerify()}
            >Login</Button>
         
            <Text style={{ textAlign: 'center', marginVertical: 10 }}>OR</Text>
            <Button
              icon="account-plus"
              title="Register"
              mode="outlined"
              dark={false}
              style={{ borderRadius: 30 }}
              color="blue"
              onPress={() => toRegister()}
            >Register</Button>
               {/* <VerifyPage mobile={mobile} /> */}
          </View>
      </View>
    </View>
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
    width: 300,
    height: 400,
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
  },
  text: {
    color: 'blue',
    fontSize: 23
  },
  toast:{
    flex: 1,
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#888888",
    padding: 8
  }
})
