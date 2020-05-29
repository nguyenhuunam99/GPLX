import React, { Component } from 'react';
import { Text, Image, View, StyleSheet, ScrollView } from 'react-native';
export default class Bienbaonguyhiem extends Component{
    state= {
        names: [
            {'image': require('../resources/bienbaocam/123_.webp'),'name':'Chỗ ngoặt nguy hiểm vòng bên trái','describe':'Báo trước sắp đến một chỗ ngoặt nguy hiểm vòng bên trái.','id':1},
            {'image': require('../resources/bienbaocam/126_.webp'),'name':'Chỗ ngoặt nguy hiểm vòng bên phải','describe':'Báo trước sắp đến một chỗ ngoặt nguy hiểm vòng bên phải.','id':2},
            {'image': require('../resources/bienbaocam/130_.webp'),'name':'Đường bị hẹp cả hai bên','describe':'Báo trước sắp đến một đoạn đường bị hẹp đột ngột cả hai bên.','id':3},
            {'image': require('../resources/bienbaocam/131_.webp'),'name':'Đường bị hẹp về phía trái','describe':'Báo trước sắp đến một đoạn đường bị hẹp đột ngột về phía trái.','id':4},
            {'image': require('../resources/bienbaocam/132_.webp'),'name':'Đường bị hẹp về phía phải','describe':'Báo trước sắp đến một đoạn đường bị hẹp đột ngột về phía phải.','id':5},
            {'image': require('../resources/bienbaocam/135_.webp'),'name':'Đường giao nhau','describe':'Báo trước sắp đến nơi giao nhau của tuyến đường cùng cấp, (không có đường nào ưu tiên) trên cùng một mặt bằng','id':6},
            {'image': require('../resources/bienbaocam/136_.webp'),'name':'Giao nhau chạy theo vòng xuyến','describe':'Báo trước nơi giao nhau có bố trí đảo an toàn ở giữa điểm giao, các loại xe qua điểm giao vòng trái, phải đi vòng xuyến qua đảo an toàn.','id':7},
            {'image': require('../resources/bienbaocam/140_.webp'),'name':'Giao nhau với đường không ưu tiên','describe':'Trên đường ưu tiên, để báo trước sắp đến nơi giao nhau với đường không ưu tiên','id':8},
            {'image': require('../resources/bienbaocam/142_.webp'),'name':'Giao nhau với đường ưu tiên','describe':'Trên đường không ưu tiên, biển này để báo trước sắp đến nơi giao nhau với đường ưu tiên.','id':9},
            {'image': require('../resources/bienbaocam/145_.webp'),'name':'Giao nhau có tín hiệu đèn','describe':'Để báo trước nơi giao nhau có sự điều khiển giao thông bằng tín hiệu đèn (hệ thống 3 đèn bật theo chiều đứng) và trong trường hợp thiết bị tín hiệu đèn không được nhìn rõ ràng và kịp thời.','id':10},
            {'image': require('../resources/bienbaocam/147_.webp'),'name':'Giao nhau với đường sắt không có rào chắn','describe':'Báo trước sắp đến chỗ giao nhau giữa đường bộ và đường sắt không có rào chắn, không có người điều khiển giao thông.','id':11}
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