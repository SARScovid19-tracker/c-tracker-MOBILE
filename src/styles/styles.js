import { StyleSheet, Dimensions, Platform } from 'react-native'
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
  white: '#fff',
}

export const secondColor = {
  blue: '#bbdaea',
  red: '#eabbbc',
  yellow: '#eaeabb'
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 10
  },
  footer: {
    flex: 4,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 20,
    paddingHorizontal: 30,
  },
  img: {
    width: 150,
    height: 50,
    resizeMode: 'contain'
  },
})

export const qrCodeStyle = StyleSheet.create({
  container: {
    flex: 0.95,
    backgroundColor: '#000',
  }
})

export const LoginScreenStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: mainColor.white,
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 50
  },
  footer: {
    flex: 1,
    backgroundColor: mainColor.first,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 20,
    paddingHorizontal: 30,
  },
  text_header: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  },
  text_footer: {
    color: mainColor.third,
    fontSize: 16,
    marginBottom: 8
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5
  },
  textInput: {
    flex:1,
    marginTop: Platform.os === 'ios' ? 0 : -12,
    paddingBottom: 12,
    paddingTop: 2,
    paddingLeft: 10,
    color: '#666',
    fontSize: 17
  },
  button:{
    alignItems: 'center',
    marginTop: 50
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold'
  }
})

export const covidWidget = StyleSheet.create({
  container: {
    flex: 2,
    marginHorizontal: 10,
    borderRadius: 25,
    backgroundColor: mainColor.white,
    shadowColor: 'grey',
    shadowOpacity: 0.7,
    shadowRadius: 0.2
  },
  titleContainer: {
    flex: 0.3,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 5
  },
  bodyContainer: {
    flex: 0.7,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row'
  },
  contentBox: {
    flex: 1,
    width: windowWidth / 5,
    height: windowWidth / 5,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderRadius: 25,
    marginHorizontal: 5
  }
})