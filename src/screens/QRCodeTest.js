import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Button } from 'react-native-paper'
import { BarCodeScanner } from 'expo-barcode-scanner'
import { qrCodeStyle, windowHeight, windowWidth, secondColor } from '../styles/styles'
import RestaurantCheckInModal from '../components/RestaurantCheckInModal'
import { useDispatch } from 'react-redux'
import HospitalCheckInModal from '../components/HospitalCheckInModal'

export default function QrCodeScanner ({ navigation }) {
  const dispatch = useDispatch()
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [isRestaurantModalVisible, setIsRestaurantModalVisible] = useState(false)
  const [isHospitalModalVisible, setIsHospitalModalVisible] = useState(false)
  const [data, setData] = useState({
    id: 0,
    address: '',
    name: '',
    email: ''
  })

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ data }) => {
    setScanned(true);
    console.log(JSON.parse(data))
    // todo => tunggi rifky selesai generate QR Code
    // const parsedData = data.split(',')
    // switch(parsedData[0].toLowerCase()) {
    //   case 'hospital': {
    //     toggleHospitalModal()
    //     setData(data)
    //     break
    //   }
    //   case 'restaurant': {
    //     toggleRestaurantModal()
    //     setData(data)
    //     break
    //   }
    //   default: {
    //     alert('error qr code')
    //     setScanned(false)
    //   }
    // }
  };

  const toggleRestaurantModal = () => setIsRestaurantModalVisible(!isRestaurantModalVisible)
  const toggleHospitalModal = () => setIsHospitalModalVisible(!isHospitalModalVisible)
  const backToHome = () => navigation.navigate('HomePage')

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }

  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }


  return (
    <>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={[StyleSheet.absoluteFill,qrCodeStyle.container]}
        type={'back'}
        barCodeTypes={'qr'}
      />
      <View style={{
        flex: 1,
        justifyContent: scanned ? 'flex-end' : 'center',
        paddingBottom: scanned ? 20 : 0,
        paddingHorizontal: scanned ? 80 : 0 }}>
      {
        scanned
        ?
        <Button
          icon="camera"
          mode="contained"
          color={secondColor.blue}
          onPress={() => setScanned(false)}
          style={{ borderRadius: 30 }}
        >Tap to Scan</Button>
        :
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
          <View style={{
            width: 200,
            height: 200,
            borderColor: '#fff',
            borderStyle: 'dashed',
            borderWidth: 5,
            borderRadius: 30
          }} />
        </View>
      }
      </View>
      {isRestaurantModalVisible &&
      <RestaurantCheckInModal
        isVisible={isRestaurantModalVisible}
        toggleModal={toggleRestaurantModal}
        isDone={backToHome}
        data={data}
      />}
      {isHospitalModalVisible &&
      <HospitalCheckInModal
        isVisible={isHospitalModalVisible}
        toggleModal={toggleHospitalModal}
        isDone={backToHome}
        data={data}
      />}
    </>
  )
}