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
    backgroundColor: mainColor.first
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
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
  button: {
    borderRadius: 30,
    paddingVertical: 1,
  }
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
    backgroundColor: '#ABD98B'
  },
  header: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  footer: {
    flex: 1,
    backgroundColor: mainColor.first,
    borderRadius: 30,
    paddingVertical: 20,
    paddingHorizontal: 30,
    marginBottom: 10,
    marginHorizontal: 10,
    
  },
  text_header: {
    color: '#fff',
    fontSize: 35,
    fontWeight: '600',
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
    paddingBottom: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textInput: {
    flex:1,
    marginTop: Platform.os === 'ios' ? 0 : -12,
    paddingBottom: 10,
    paddingTop: 10,
    paddingLeft: 10,
    color: '#666',
    fontSize: 18,
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