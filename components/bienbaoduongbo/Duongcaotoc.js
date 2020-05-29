import React, { Component } from 'react';
import { Text, Image, View, StyleSheet, ScrollView } from 'react-native';
export default class Duongcaotoc extends Component{
    state= {
        names: [
            {'image': require('../resources/bienbaocam/291_.webp'),'name':'Biển chỉ dẫn sơ đồ lối vào và khoảng cách đến đường cao tốc','describe':'Biển mô tả sơ đồ lối vào đường cao tốc. Biển đặt cách lối vào tối thiểu bằng tầm nhìn một chiều của cấp đường xe đang chạy.','id':1},
            {'image': require('../resources/bienbaocam/322_.webp'),'name':'Các dịch vụ tiếp theo.','describe':'','id':2},
            {'image': require('../resources/bienbaocam/292_.webp'),'name':'Biển chỉ dẫn khoảng cách đến đường cao tốc','describe':'Dùng để báo trước khoảng cách sắp vào đường cao tốc, còn cách cửa vào đường cao tốc 1km.','id':3},
            {'image': require('../resources/bienbaocam/293_.webp'),'name':'Biển chỉ dẫn khoảng cách đến đường cao tốc','describe':'Dùng để báo trước khoảng cách sắp vào đường cao tốc, còn cách cửa vào đường cao tốc 500m.','id':4},
            {'image': require('../resources/bienbaocam/294_.webp'),'name':'Biển chỉ dẫn khoảng cách đến đường cao tốc','describe':'Dùng để báo trước khoảng cách sắp vào đường cao tốc, còn cách cửa vào đường cao tốc 200m.','id':5},
            {'image': require('../resources/bienbaocam/295_.webp'),'name':'Biển chỉ dẫn khoảng cách đến đường cao tốc','describe':'Biển này đặt ở vị trí bắt đầu vào làn đường cao tốc','id':6},
            {'image': require('../resources/bienbaocam/296_.webp'),'name':'Biển chỉ dẫn sơ đồ lối vào và khoảng cách đến đường cao tốc','describe':'Bắt đầu đường cao tốc.','id':7},
            {'image': require('../resources/bienbaocam/297_.webp'),'name':'Biển chỉ dẫn sơ đồ lối vào và khoảng cách đến đường cao tốc','describe':'Biển chỉ khoảng cách đến điểm kết thúc đường cao tốc.','id':8},
            {'image': require('../resources/bienbaocam/298_.webp'),'name':'Biển chỉ dẫn sơ đồ lối vào và khoảng cách đến đường cao tốc','describe':'Chỉ khoảng cách đến hết điểm kết thúc đường cao tốc, có chữ viết, viền màu đen trên nền vàng.','id':9},
            {'image': require('../resources/bienbaocam/299_.webp'),'name':'Biển chỉ dẫn sơ đồ lối vào và khoảng cách đến đường cao tốc','describe':'Kết thúc đường cao tốc','id':10},
            {'image': require('../resources/bienbaocam/325_.webp'),'name':'Biển báo hiệu lối ra một chiều','describe':'Sẽ được sử dụng mà không có mũi tên hướng xuống dưới (xem biển số 464). Biển có chữ viết và hình mũi tên (nếu có) màu đen trên nền màu vàng','id':11}
        ]
    }
    render(){
        return (
            <View style={{backgroundColor:'white'}}>
                <ScrollView>
                    {
                        this.state.names.map((item, index) => (
                            <View key = {item.id} style = {{flexDirection:'row',flex:1,borderWidth:0.5,paddingTop:5, paddingBottom:5}}>
                                <View style={{flex:3,alignItems:'center'}}>
                                    <Image source={item.image} style={{width:100,height:100,resizeMode:'stretch',marginLeft:15}}></Image>
                                </View>
                                <View style={{flex:7,paddingLeft:20}}>
                                    <Text style={{fontWeight:'bold',fontSize:15}}>{item.name}</Text>
                                    <Text style={{color:'gray'}}>{item.describe}</Text>
                                </View>
                            </View>
                        ))
                    }
                </ScrollView>
            </View>
        );
    }
}