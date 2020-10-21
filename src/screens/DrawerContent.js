import React, { useEffect } from 'react'
import { View, StyleSheet } from 'react-native'
import { mainColor } from '../styles/styles'
import {
  DrawerContentScrollView,
  DrawerItem
} from '@react-navigation/drawer'
import {
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch
} from 'react-native-paper'
import { Alert } from 'react-native'
import Icon from '@expo/vector-icons/MaterialCommunityIcons'
import { AuthContext } from '../components/context'
import { useSelector, useDispatch } from 'react-redux'
import { userLogout } from '../actions/actions'

export function DrawerContent ( props ) {
  const dispatch = useDispatch()
  const { logout } = React.useContext(AuthContext)
  const { user } = useSelector(state => state.userReducer)
  const { name, phone, isEmailVerify, status } = user

  const handleLogout = () => {
    Alert.alert(
      "Logout",
      "confirm to logout?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => {
          setTimeout(() => {
            dispatch(userLogout(phone))
          }, 2000)
          logout()
        }}
      ],
      { cancelable: false }
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: mainColor.first }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{ flexDirection: 'row', marginTop: 15 }}>
              <Avatar.Image
                source={{
                  uri: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.RoBqmg0saGRp7u-E_-RznAHaHa%26pid%3DApi%26h%3D160&f=1'
                }}
                size={50}
              />
              <View style={{ marginLeft: 15 , flexDirection: 'column'}}>
                <Text style={styles.title}>{name && name}</Text>
                <Caption style={styles.caption}>{isEmailVerify ? 'verified' : ''}</Caption>
              </View>
            </View>
            <View style={styles.col}>
                <View style={styles.sectionCol}>
                  <Paragraph style={[styles.Paragraph]}>Phone</Paragraph>
                  <Caption style={styles.caption}>{phone && phone}</Caption>
                </View>

                <View style={styles.sectionCol}>
                  <Paragraph style={[styles.Paragraph]}>Status</Paragraph>
                  <Caption style={styles.caption}>{status && status}</Caption>
                </View>
            </View>
          </View>
          <Drawer.Section style={styles.drawerSection}>
                <DrawerItem
                  icon={({color, size}) => (
                    <Icon
                      name="home-outline"
                      color={color}
                      size={size}
                    />
                  )}
                  label="Home"
                  onPress={() => {props.navigation.navigate('HomePage')}}
                />
                <DrawerItem
                  icon={({color, size}) => (
                    <Icon
                      name="history"
                      color={color}
                      size={size}
                    />
                  )}
                  label="History"
                  onPress={() => {props.navigation.navigate('HistoryPage', { page: 'Covid-Test' })}}
                />
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({color, size }) => (
            <Icon
              name="exit-to-app"
              color={color}
              size={size}
            />
          )}
          label="Logout"
          onPress={() => handleLogout()}
        />
      </Drawer.Section>
    </View>
  )
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold'
  },
  caption: {
    fontSize: 14,
    lineHeight: 14
  },
  row: {
    marginTop:20,
    flexDirection: 'row',
    alignItems: 'center'
  },
  col: {
    marginTop:20,
    flexDirection: 'column',
    alignItems: 'flex-start'
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
    marginBottom: 10
  },
  sectionCol: {
    flexDirection: 'column',
    alignItems: 'baseline',
    marginRight: 15,
    marginBottom: 10
  },
  Paragraph: {
    fontWeight: 'bold',
    marginRight: 3
  },
  drawerSection: {
    marginTop: 15
  },
  bottomDrawerSection: {
    marginBottom: 0,
    borderTopColor: mainColor.fourth,
    borderTopWidth: 1,
    backgroundColor: mainColor.first
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16
  }
})