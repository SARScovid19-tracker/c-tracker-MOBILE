import { StyleSheet, Dimensions } from 'react-native'
export const windowWidth = Dimensions.get('window').width
export const windowHeight = Dimensions.get('window').height
export const opacity = 'rgba(0, 0, 0, .6)'
export const mainColor = {
  first: '#f7f7f7',
  second: '#cceabb',
  third: '#3f3f44',
  fourth: '#fdcb9e'
}
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  }
})

export const qrCodeStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: mainColor.second,
  }
})