import React, { Component } from 'react';
import { Text, Image, View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

export default class Luatxemay extends Component {
    render() {
        return (
            <ScrollView style={{backgroundColor:'white'}}>
                <View style={{ flex: 1, flexDirection: 'row',paddingTop:10}}>
                    <View style={{ flex: 1 }}>
                        <TouchableOpacity style={{ alignItems:'center'}}>
                            <Image source={require('../resources/bienbaocam/camxedap.jpg')} style={{width:100,height:100,resizeMode:'stretch'}}></Image>
                            <Text style={{textAlign:'center',fontSize:15}}>Hiệu lệnh, chỉ dẫn</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 1 }}>
                        <TouchableOpacity style={{alignItems:'center'}}>
                            <Image source={require('../resources/bienbaocam/camxedap.jpg')} style={{width:100,height:100,resizeMode:'stretch'}}></Image>
                            <Text style={{textAlign:'center',fontSize:15}}>Chuyển hướng, nhường đường</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 1 }}>
                        <TouchableOpacity style={{alignItems:'center'}}>
                            <Image source={require('../resources/bienbaocam/camxedap.jpg')} style={{width:100,height:100,resizeMode:'stretch'}}></Image>
                            <Text style={{textAlign:'center',fontSize:15}}>Dừng xe, đỗ xe</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ flex: 1, flexDirection: 'row' ,paddingTop:10}}>
                    <View style={{ flex: 1 }}>
                        <TouchableOpacity style={{alignItems:'center'}}>
                            <Image source={require('../resources/bienbaocam/camxedap.jpg')} style={{width:100,height:100,resizeMode:'stretch'}}></Image>
                            <Text style={{textAlign:'center',fontSize:15}}>Thiết bị ưu tiên, còi</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 1 }}>
                        <TouchableOpacity style={{alignItems:'center'}}>
                            <Image source={require('../resources/bienbaocam/camxedap.jpg')} style={{width:100,height:100,resizeMode:'stretch'}}></Image>
                            <Text style={{textAlign:'center',fontSize:15}}>Tốc độ, khoảng cách an toàn</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 1 }}>
                        <TouchableOpacity style={{alignItems:'center'}}>
                            <Image source={require('../resources/bienbaocam/camxedap.jpg')} style={{width:100,height:100,resizeMode:'stretch'}}></Image>
                            <Text style={{textAlign:'center',fontSize:15}}>Vận chuyển người, hàng hóa</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ flex: 1, flexDirection: 'row' ,paddingTop:10}}>
                    <View style={{ flex: 1 }}>
                        <TouchableOpacity style={{alignItems:'center'}}>
                            <Image source={require('../resources/bienbaocam/camxedap.jpg')} style={{width:100,height:100,resizeMode:'stretch'}}></Image>
                            <Text style={{textAlign:'center',fontSize:15}}>Trang thiết bị phương tiện</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 1 }}>
                        <TouchableOpacity style={{alignItems:'center'}}>
                            <Image source={require('../resources/bienbaocam/camxedap.jpg')} style={{width:100,height:100,resizeMode:'stretch'}}></Image>
                            <Text style={{textAlign:'center',fontSize:15}}>Đường cấm, đường một</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 1 }}>
                        <TouchableOpacity style={{alignItems:'center'}}>
                            <Image source={require('../resources/bienbaocam/camxedap.jpg')} style={{width:100,height:100,resizeMode:'stretch'}}></Image>
                            <Text style={{textAlign:'center',fontSize:15}}>Nồng độ cồn, chất kích thích</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ flex: 1, flexDirection: 'row' ,paddingTop:10}}>
                    <View style={{ flex: 1 }}>
                        <TouchableOpacity style={{alignItems:'center'}}>
                            <Image source={require('../resources/bienbaocam/camxedap.jpg')} style={{width:100,height:100,resizeMode:'stretch'}}></Image>
                            <Text style={{textAlign:'center',fontSize:15}}>Giấy tờ xe</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 1 }}>
                        <TouchableOpacity style={{alignItems:'center'}}>
                            <Image source={require('../resources/bienbaocam/camxedap.jpg')} style={{width:100,height:100,resizeMode:'stretch'}}></Image>
                            <Text style={{textAlign:'center',fontSize:15}}>Khác</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 1}}>

                    </View>
                </View>
            </ScrollView>
        );
    }
}