/**
 * @format
 */

import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  Button,
  Settings,
  ShadowPropTypesIOS,
  Image,
} from 'react-native';
import {name as appName} from './app.json';
import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from './components/Home';
import Bienbaocam from './components/bienbaoduongbo/Bienbaocam';
import * as All from './components/screenNames';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import Setting from './components/Setting';
import Guide from './components/Huongdan';
import {Icon} from 'react-native-elements';
import TipsComponent from './components/meothiketquacao/Tips';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Bienbaohieulenh from './components/bienbaoduongbo/Bienbaohieulenh';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Bienbaonguyhiem from './components/bienbaoduongbo/Bienbaonguyhiem';
import Bienbaophu from './components/bienbaoduongbo/Bienbaophu';
import Bienbaochidan from './components/bienbaoduongbo/Bienbaochidan';
import Vachkeduong from './components/bienbaoduongbo/Vachkeduong';
import Duongcaotoc from './components/bienbaoduongbo/Duongcaotoc';
import Tuyenduongdoingoai from './components/bienbaoduongbo/Tuyenduongdoingoai';
import Price_motobike from './components/banggiaxemay/Price_motobike';
import LawComponent from './components/tracuuluatnhanh/LawComponent';
// import Luatxemay from './components/tracuuluatnhanh/Luatxemay';
// import Luatoto from './components/tracuuluatnhanh/Luatoto';
// import Luatkhac from './components/tracuuluatnhanh/Luatkhac';
import Hoclythuyet from './components/hoclythuyet/Hoclythuyet';

import Motobike_detail from './components/banggiaxemay/Motobike_detail';
import Thisathach from './components/thisathach/Thisathach';
import Khainiemvaquytac from './components/hoclythuyet/Khainiemvaquytac';
import Hethongbienbaoduongbo from './components/hoclythuyet/Hethongbienbaoduongbo';
import Sahinh from './components/hoclythuyet/Sahinh';
import Vanhoavadaoduclaixe from './components/hoclythuyet/Vanhoavadaoduclaixe';
import Kiemtra from './components/thisathach/Kiemtra';
const Stack = createStackNavigator();

const Drawer = createDrawerNavigator();

const Tab = createMaterialTopTabNavigator();

function Tabbienbao({navigation}) {
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
        scrollEnabled: true,
      }}>
      <Tab.Screen name={All.BienBaoCamScreen} component={Bienbaocam} />
      <Tab.Screen
        name={All.BienBaoHieuLenhScreen}
        component={Bienbaohieulenh}
      />
      <Tab.Screen
        name={All.BienBaoNguyHiemScreen}
        component={Bienbaonguyhiem}
      />
      <Tab.Screen name={All.BienBaoPhuScreen} component={Bienbaophu} />
      <Tab.Screen name={All.BienBaoChiDanScreen} component={Bienbaochidan} />
      <Tab.Screen name={All.VachKeDuongScreen} component={Vachkeduong} />
      <Tab.Screen name={All.DuongCaoTocScreen} component={Duongcaotoc} />
      <Tab.Screen
        name={All.TuyenDuongDoiNgoaiScreen}
        component={Tuyenduongdoingoai}
      />
    </Tab.Navigator>
  );
}

// function Tabtracuuluat() {
//   return (
//     <Tab.Navigator
//       tabBarOptions={{
//         style: {
//           backgroundColor: '#4BB543',
//         },
//         activeTintColor: '#fff',
//         inactiveTintColor: '#fff',
//         indicatorStyle: {
//           backgroundColor: '#fff',
//           height: '5%',
//         },
//       }}>
//       <Tab.Screen name={All.LuatXeMayScreen} component={Luatxemay} />
//       <Tab.Screen name={All.LuatOtoScreen} component={Luatoto} />
//       <Tab.Screen name={All.LuatKhacScreen} component={Luatkhac} />
//     </Tab.Navigator>
//   );
// }

function DrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <View style={{height: 175}}>
        <Image
          source={require('./components/resources/thibanglai.jpg')}
          style={{flex: 1, height: 175, width: 280, resizeMode: 'stretch'}}
        />
      </View>
      <View>
        <DrawerItem
          label="Học bằng lái xe"
          onPress={() => props.navigation.navigate(All.MainScreen)}
          focused="true"
          icon={() => <Icon color="#4BB543" name="car" type="font-awesome" />}
        />
        <DrawerItem
          label="Hướng dẫn sử dụng"
          onPress={() => props.navigation.navigate(All.GuideScreen)}
          icon={() => (
            <Icon color="#4BB543" name="info-circle" type="font-awesome" />
          )}
        />
        <DrawerItem
          label="Email hỗ trợ"
          onPress={() => props.navigation.navigate(All.MainScreen)}
          icon={() => (
            <Icon color="#4BB543" name="envelope" type="font-awesome" />
          )}
        />
        <DrawerItem
          label="Cài đặt"
          onPress={() => props.navigation.navigate(All.SettingScreen)}
          icon={() => <Icon color="#4BB543" name="cog" type="font-awesome" />}
        />
        <DrawerItem
          label="Kỹ năng lái xe an toàn"
          onPress={() => props.navigation.navigate(All.MainScreen)}
          icon={() => <Icon color="#4BB543" name="car" type="font-awesome" />}
        />
        <DrawerItem
          label="Các ứng dụng khác"
          onPress={() => props.navigation.navigate(All.MainScreen)}
          icon={() => (
            <Icon color="#4BB543" name="download" type="font-awesome" />
          )}
        />
        <DrawerItem
          label="Chia sẻ ứng dụng"
          onPress={() => props.navigation.navigate(All.MainScreen)}
          icon={() => (
            <Icon color="#4BB543" name="share-alt" type="font-awesome" />
          )}
        />
        <DrawerItem
          label="Đánh giá ứng dụng"
          onPress={() => props.navigation.navigate(All.MainScreen)}
          icon={() => (
            <Icon color="#4BB543" name="thumbs-up" type="font-awesome" />
          )}
        />
        <DrawerItem
          label="Chính sách và điều khoản"
          onPress={() => props.navigation.navigate(All.MainScreen)}
          icon={() => <Icon color="#4BB543" name="user" type="font-awesome" />}
        />
      </View>
    </DrawerContentScrollView>
  );
}

function HomeScreenStack({navigation}) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#4BB543',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen
        name={All.MainScreen}
        component={Home}
        options={{
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.openDrawer();
              }}
              style={{width: 40}}>
              <Icon size={30} name="bars" type="font-awesome" color="white" />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen name={All.GuideScreen} component={Guide} />
      <Stack.Screen name={All.SettingScreen} component={Setting} />
      <Stack.Screen name={All.DetailScreen} component={Tabbienbao} />
      <Stack.Screen name={All.TipsScreen} component={TipsComponent} />
      <Stack.Screen name={All.BangGiaXeMayScreen} component={Price_motobike} />
      <Stack.Screen name={All.TraCuuLuatScreen} component={LawComponent} />

      <Stack.Screen name={All.HocLyThuyetScreen} component={Hoclythuyet} />
      <Stack.Screen name={All.ChiTietXeMayScreen} component={Motobike_detail} />
      <Stack.Screen name={All.ThiSatHachScreen} component={Thisathach} />
      <Stack.Screen
        name={All.KhaiNiemVaQuyTacScreen}
        component={Khainiemvaquytac}
      />
      <Stack.Screen
        name={All.HeThongBienBaoDuongBoScreen}
        component={Hethongbienbaoduongbo}
      />
      <Stack.Screen name={All.SaHinhScreen} component={Sahinh} />
      <Stack.Screen
        name={All.VanHoaVaDaoDucLaiXeScreen}
        component={Vanhoavadaoduclaixe}
      />
      <Stack.Screen name={All.KiemTraScreen} component={Kiemtra} />
    </Stack.Navigator>
  );
}

function Timer() {
  var time = 1200;
  var time_render = 'hello';
  setInterval(() => {
    var minutes = time / 60;
    var seconds = time % 60;
    time_render = minutes + ':' + seconds;
    time--;
  }, 1000);
  return <Text>{time_render}</Text>;
}

function HomeScreenDrawer({navigation}) {
  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen name={All.MainScreen} component={HomeScreenStack} />
    </Drawer.Navigator>
  );
}
function App({navigation}) {
  return (
    <NavigationContainer>
      <HomeScreenDrawer />
    </NavigationContainer>
  );
}

AppRegistry.registerComponent(appName, () => App);
