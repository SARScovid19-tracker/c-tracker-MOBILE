import { StyleSheet, Dimensions } from 'react-native'
export const windowWidth = Dimensions.get('window').width
export const windowHeight = Dimensions.get('window').height
export const opacity = 'rgba(0, 0, 0, .6)'
export const {height} = Dimensions.get('screen')
export const height_logo = height * 0.28

export const mainColor = {
  first: '#f7f7f7',
  second: '#cceabb',
  third: '#3f3f44',
  fourth: '#fdcb9e',
  white: '#fff'
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

export const AuthScreenStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: mainColor.white,
  },
  header: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  footer: {
    flex: 1,
    backgroundColor: mainColor.second,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
  logo: {
    width: windowWidth - 90,
  },
  title: {
    color: mainColor.second,
    fontSize: 30,
    fontWeight: 'bold'
  },
  button: {
    alignItems: 'flex-end',
    marginTop: 30
  },
  signIn: {
    width: 150,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    flexDirection: 'row'
  },
  textSign: {
    color: 'white',
    fontWeight: 'bold'
  }
})