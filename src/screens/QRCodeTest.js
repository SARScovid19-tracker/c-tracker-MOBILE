import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Button } from 'react-native-paper'
import { BarCodeScanner } from 'expo-barcode-scanner'
import { qrCodeStyle, windowHeight, windowWidth, secondColor } from '../styles/styles'
import RestaurantCheckInModal from '../components/RestaurantCheckInModal'

export default function QrCodeScanner ({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [isRestaurantModalVisible, setIsRestaurantModalVisible] = useState(false)

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ data }) => {
    setScanned(true);
    const parsedData = data.split(',')
    switch(parsedData[0].toLowerCase()) {
      case 'hospital': {
        navigation.navigate('HomePage', { id: parsedData[1], type: 'hospital' })
        break
      }
      case 'restaurant': {
        toggleRestaurantModal()
        break
      }
      default: {
        alert('error qr code')
        setScanned(false)
      }
    }
  };

  const toggleRestaurantModal = () => setIsRestaurantModalVisible(!isRestaurantModalVisible)

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
      <RestaurantCheckInModal
        isVisible={isRestaurantModalVisible}
        toggleModal={toggleRestaurantModal}
      />
    </>
  )
}