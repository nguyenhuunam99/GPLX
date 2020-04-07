/**
 * @format
 */

import { AppRegistry, StyleSheet, View, Text, Button, Settings, ShadowPropTypesIOS, Image } from 'react-native';
import { name as appName } from './app.json';
import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './components/Home';
import Bienbaocam from './components/Bienbaocam';
import { MainScreen, DetailScreen, SettingScreen, GuideScreen, TipsScreen, BienBaoCamScreen, BienBaoHieuLenhScreen,BienBaoNguyHiemScreen,BienBaoChiDanScreen,VachKeDuongScreen,DuongCaoTocScreen, TuyenDuongDoiNgoaiScreen,BienBaoPhuScreen, BangGiaXeMayScreen } from './components/screenNames';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import Setting from './components/Setting';
import Guide from './components/Huongdan';
import { Icon } from 'react-native-elements';
import TipsComponent from './components/Tips';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Bienbaohieulenh from './components/Bienbaohieulenh';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Bienbaonguyhiem from './components/Bienbaonguyhiem';
import Bienbaophu from './components/Bienbaophu';
import Bienbaochidan from './components/Bienbaochidan';
import Vachkeduong from './components/Vachkeduong';
import Duongcaotoc from './components/Duongcaotoc';
import Tuyenduongdoingoai from './components/Tuyenduongdoingoai';
import Price_motobike from './components/Price_motobike';
const Stack = createStackNavigator();

const Drawer = createDrawerNavigator();

const Tab = createMaterialTopTabNavigator();

function MyTabs({ navigation }) {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {
          backgroundColor: '#4BB543',
        },
        activeTintColor: '#fff',
        inactiveTintColor: '#fff',
        indicatorStyle: {
          backgroundColor: '#fff',
          height: '5%',
        },
        scrollEnabled:true
      }}
    >
      <Tab.Screen name={BienBaoCamScreen} component={Bienbaocam} />
      <Tab.Screen name={BienBaoHieuLenhScreen} component={Bienbaohieulenh} />
      <Tab.Screen name={BienBaoNguyHiemScreen} component={Bienbaonguyhiem} />
      <Tab.Screen name={BienBaoPhuScreen} component={Bienbaophu} />
      <Tab.Screen name={BienBaoChiDanScreen} component={Bienbaochidan} />
      <Tab.Screen name={VachKeDuongScreen} component={Vachkeduong} />
      <Tab.Screen name={DuongCaoTocScreen} component={Duongcaotoc} />
      <Tab.Screen name={TuyenDuongDoiNgoaiScreen} component={Tuyenduongdoingoai} />

    </Tab.Navigator>
  );
}
  function DrawerContent(props) {
    return (
      <DrawerContentScrollView {...props}>
        <View style={{ height: 175 }}>
          <Image source={require('./components/resources/thibanglai.jpg')} style={{ flex: 1, height: 175, width: 280, resizeMode: 'stretch' }} />
        </View>
        <View>
          <DrawerItem
            label="Học bằng lái xe"
            onPress={() => props.navigation.navigate(MainScreen)}
            focused="true"
            icon={() => <Icon color='#4BB543' name="car" type="font-awesome" />}
          />
          <DrawerItem
            label="Hướng dẫn sử dụng"
            onPress={() => props.navigation.navigate(GuideScreen)}
            icon={() => <Icon color='#4BB543' name="info-circle" type="font-awesome" />}
          />
          <DrawerItem
            label="Email hỗ trợ"
            onPress={() => props.navigation.navigate(MainScreen)}
            icon={() => <Icon color='#4BB543' name="envelope" type="font-awesome" />}
          />
          <DrawerItem
            label="Cài đặt"
            onPress={() => props.navigation.navigate(SettingScreen)}
            icon={() => <Icon color='#4BB543' name="cog" type="font-awesome" />}
          />
          <DrawerItem
            label="Kỹ năng lái xe an toàn"
            onPress={() => props.navigation.navigate(MainScreen)}
            icon={() => <Icon color='#4BB543' name="car" type="font-awesome" />}
          />
          <DrawerItem
            label="Các ứng dụng khác"
            onPress={() => props.navigation.navigate(MainScreen)}
            icon={() => <Icon color='#4BB543' name="download" type="font-awesome" />}
          />
          <DrawerItem
            label="Chia sẻ ứng dụng"
            onPress={() => props.navigation.navigate(MainScreen)}
            icon={() => <Icon color='#4BB543' name="share-alt" type="font-awesome" />}
          />
          <DrawerItem
            label="Đánh giá ứng dụng"
            onPress={() => props.navigation.navigate(MainScreen)}
            icon={() => <Icon color='#4BB543' name="thumbs-up" type="font-awesome" />}
          />
          <DrawerItem
            label="Chính sách và điều khoản"
            onPress={() => props.navigation.navigate(MainScreen)}
            icon={() => <Icon color='#4BB543' name="user" type="font-awesome" />}
          />
        </View>
      </DrawerContentScrollView>
    );
  }

  function HomeScreenStack({ navigation }) {
    return (
      <Stack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: '#4BB543',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
        <Stack.Screen name={MainScreen} component={Home} options={{
          headerLeft: () => (
            <TouchableOpacity onPress={() => { navigation.openDrawer() }}>
              <Icon name="bars" type="font-awesome" color="white" />
            </TouchableOpacity>
          )
        }} />
        <Stack.Screen name={GuideScreen} component={Guide} />
        <Stack.Screen name={SettingScreen} component={Setting} />
        <Stack.Screen name={DetailScreen} component={MyTabs} />
        <Stack.Screen name={TipsScreen} component={TipsComponent} />
        <Stack.Screen name={BangGiaXeMayScreen} component={Price_motobike} />
      </Stack.Navigator>
    );
  }

  function HomeScreenDrawer({ navigation }) {
    return (
      <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
        <Drawer.Screen name={MainScreen} component={HomeScreenStack} />
      </Drawer.Navigator>
    );

  }
  function App({ navigation }) {
    return (
      <NavigationContainer>
        <HomeScreenDrawer />
      </NavigationContainer>
    );
  }

  AppRegistry.registerComponent(appName, () => App);


