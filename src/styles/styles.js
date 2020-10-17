import { StyleSheet, Dimensions } from 'react-native'
export const windowWidth = Dimensions.get('window').width

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
})