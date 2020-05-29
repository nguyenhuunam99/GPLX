import React, { Component } from 'react';
import { View, Text, Image, Dimensions } from 'react-native';
import Slideshow from 'react-native-slideshow';
import { Button, Icon, ButtonGroup } from 'react-native-elements';
import { MainScreen,ThiSatHachScreen, DetailScreen, TipsScreen, BangGiaXeMayScreen, TraCuuLuatScreen, HocLyThuyetScreen } from './screenNames';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native-gesture-handler';

const windowHeight = Dimensions.get('window').height; 

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      position: 1,
      interval: null,
      dataSource: [
        {
          title: 'Mẹo thi sa hình chắc chắn đỗ',
          // caption: 'Mẹo thi sa hình chắc chắn đỗ',
          url: require('./resources/slide/meothisahinh.jpg'),
        }, {
          title: 'Học 450 câu lý thuyết chắc chắn đỗ',
          // caption: 'Học 450 câu lý thuyết chắc chắn đỗ',
          url: require('./resources/slide/thibanglai.jpg'),
        }, {
          title: 'Học về hệ thống biển báo đường bộ',
          // caption: 'Học về hệ thống biển báo đường bộ',
          url: require('./resources/slide/bienbao.jpg'),
        }, {
          title: 'Tra cứu luật giao thông mới nhất',
          //caption: 'Tra cứu luật giao thông mới nhất',
          url: require('./resources/slide/tracuuluat.jpg'),
        }, {
          title: 'Thi thử đề thi giống như thật',
          //caption: 'Thi thử đề thi giống như thật',
          url: require('./resources/slide/thithu.jpg'),
        }
      ],
    };
  }
  UNSAFE_componentWillMount() {
    this.setState({
      interval: setInterval(() => {
        this.setState({
          position: this.state.position === this.state.dataSource.length ? 0 : this.state.position + 1
        });
      }, 2000)
    });
  }

  componentWillUnmount() {
    clearInterval(this.state.interval);
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 3 }}>
          <Slideshow
            height={windowHeight*0.3}
            dataSource={this.state.dataSource}
            position={this.state.position}
            onPositionChanged={position => this.setState({ position })}
          />
        </View>
        <View style={{ flex: 4 }}>

          <View style={{ flex: 1 }}>
            <View style={{ flexDirection: 'row', flex: 1 }}>
              <View style={{ flex: 1, backgroundColor: 'white', borderRightWidth:0.5 }}>
                <TouchableOpacity style={{justifyContent: 'center', alignItems: 'center', }} onPress={() => { this.props.navigation.navigate(ThiSatHachScreen)}}>
                  <Image source={require('./resources/home/thisathach.jpg')} style={{ width: 100, height: 90 }}  />
                  <Text style={{ textAlign: 'center' }}>THI SÁT</Text>
                  <Text style={{ textAlign: 'center' }}>HẠCH</Text>
                </TouchableOpacity>
              </View>
              <View style={{ flex: 1, backgroundColor: 'white', borderRightWidth:0.5}}>
                <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center'}} onPress={() => { this.props.navigation.navigate(HocLyThuyetScreen)}}>
                  <Image source={require('./resources/home/lythuyet.jpg')} style={{ width: 100, height: 90 }} />
                  <Text style={{ textAlign: 'center' }}>HỌC LÝ</Text>
                  <Text style={{ textAlign: 'center' }}>THUYẾT</Text>
                </TouchableOpacity>
              </View>
              <View style={{ flex: 1, backgroundColor: 'white'}}>
                <TouchableOpacity style={{  justifyContent: 'center', alignItems: 'center' }} onPress={() => { this.props.navigation.navigate(DetailScreen) }}>
                  <Image source={require('./resources/home/bienbao.jpg')} style={{ width: 100, height: 90 }} />
                  <Text style={{ textAlign: 'center' }}>BIỂN BÁO</Text>
                  <Text style={{ textAlign: 'center' }}>ĐƯỜNG BỘ</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={{ flex: 1 , borderTopWidth:0.5}}>
            <View style={{ flexDirection: 'row', flex: 1 }}>
              <View style={{ flex: 1, backgroundColor: 'white' }}>
                <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center',borderRightWidth:0.5 }} onPress={() => { this.props.navigation.navigate(TipsScreen) }}>
                  <Image source={require('./resources/home/meothi.jpg')} style={{ width: 100, height: 90 }} />
                  <Text style={{ textAlign: 'center' }}>MẸO THI</Text>
                  <Text style={{ textAlign: 'center' }}>KẾT QUẢ CAO</Text>
                </TouchableOpacity>
              </View>
              <View style={{ flex: 1, backgroundColor: 'white' }}>
                <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center' , borderRightWidth:0.5}} onPress={()=>{this.props.navigation.navigate(TraCuuLuatScreen)}}>
                  <Image source={require('./resources/home/tracuuluat.jpg')} style={{ width: 100, height: 90 }} />
                  <Text style={{ textAlign: 'center' }}>TRA CỨU LUẬT</Text>
                  <Text style={{ textAlign: 'center' }}>(NĐ 100/2019)</Text>
                </TouchableOpacity>
              </View>
              <View style={{ flex: 1, backgroundColor: 'white' }}>
                <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center'}}>
                    <Image source={require('./resources/home/haysai.jpg')} style={{ width: 100, height: 90 }} />
                    <Text style={{ textAlign: 'center' }}>CÁC CÂU HAY</Text>
                    <Text style={{ textAlign: 'center' }}>SAI</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <View style={{ flex: 2 ,borderTopWidth:0.5}}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate(BangGiaXeMayScreen)}>
            <Image
              source={require('./resources/banggiaxemay.jpg')}
              style={{ height: 140, width: 410, resizeMode:'stretch' }}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}