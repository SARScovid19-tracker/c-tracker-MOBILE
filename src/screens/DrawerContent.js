import React from 'react'
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
import Icon from '@expo/vector-icons/MaterialCommunityIcons'

export function DrawerContent ( props ) {
  return (
    <View style={{ flex: 1, backgroundColor: mainColor.first }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{ flexDirection: 'row', marginTop: 15 }}>
              <Avatar.Image
                source={{
                  uri: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Rt72Wz9DlwH5nbncevF-0AHaEJ%26pid%3DApi%26h%3D160&f=1'
                }}
                size={50}
              />
              <View style={{ marginLeft: 15 , flexDirection: 'column'}}>
                <Text style={styles.title}>Surya Permana</Text>
                <Caption style={styles.caption}>verified</Caption>
              </View>
            </View>
            <View style={styles.col}>
                <View style={styles.sectionCol}>
                  <Paragraph style={[styles.Paragraph]}>Email</Paragraph>
                  <Caption style={styles.caption}>suryapermana996@gmail.com</Caption>
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
          label="Sign Out"
          onPress={() => {props.navigation.navigate('login')}}
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