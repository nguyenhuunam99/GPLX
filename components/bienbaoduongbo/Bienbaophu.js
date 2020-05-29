import React, { Component } from 'react';
import { Text, Image, View, StyleSheet, ScrollView } from 'react-native';
export default class Bienbaophu extends Component{
    state= {
        names: [
            {'image': require('../resources/bienbaocam/108_.webp'),'name':'Hướng tác dụng của biển','describe':'Để báo đường cấm xe đạp đi qua','id':1},
            {'image': require('../resources/bienbaocam/110_.webp'),'name':'Hướng tác dụng của biển','describe':'Để báo đường cấm súc vật vận tải hàng hóa hoặc hành khách dù kéo xe hay chở trên lưng đi qua','id':2},
            {'image': require('../resources/bienbaocam/113_.webp'),'name':'Hướng tác dụng của biển','describe':'Để báo đường cấm các loại xe (cơ giới và thô sơ) kể cả các xe được ưu tiên theo luật lệ của nhà nước quy định, có trọng lượng toàn bộ vượt quá trị số ghi trên biển đi qua','id':3},
            {'image': require('../resources/bienbaocam/116_.webp'),'name':'Hướng tác dụng của biển','describe':'Cấm các xe (cơ giới và thô sơ) kể cả các xe được ưu tiên theo luật lệ của nhà nước quy định có chiều cao (tính đến điểm cao nhất kể cả xe và hàng hóa) vượt quá trị số ghi trên biển không được đi qua','id':4},
            {'image': require('../resources/bienbaocam/117_.webp'),'name':'Hướng tác dụng của biển','describe':'Cấm các xe (cơ giới và thô sơ) kể cả các xe được ưu tiên theo luật lệ nhà nước quy định có chiều ngang (kể cả xe và hàng hóa) vượt quá trị số ghi trên biển không được đi qua.','id':5},
            {'image': require('../resources/bienbaocam/119_.webp'),'name':'Làn đường','describe':'Biển được đặt bên trên làn đường và dưới các biển báo cấm và biển hiệu lệnh hay bên dưới đèn tín hiệu để chỉ làn đường chịu hiệu lực của biển báo hay đèn tín hiệu.','id':6},
            {'image': require('../resources/bienbaocam/121_.webp'),'name':'Loại xe','describe':'Được đặt bên dưới các biển báo cấm và biển hiệu lệnh hay biển chỉ dẫn để chỉ loại xe chịu hiệu lực của biển báo cấm, biển hiệu lệnh hay biển chỉ dẫn. Tùy theo loại xe chịu hiệu lực mà bố trí hình vẽ cho phù hợp.','id':7},
            {'image': require('../resources/bienbaocam/122_.webp'),'name':'Hướng đường ưu tiên','describe':'Biển được đặt bên dưới biển chỉ dẫn số 401 trên đường ưu tiên để chỉ dẫn cho người lái xe trên đường này biết hướng đường ưu tiên ở ngã tư.','id':8},
            {'image': require('../resources/bienbaocam/124_.webp'),'name':'Hướng đường ưu tiên','describe':'Biển số được đặt bên dưới biển số 208 và biển số 122 trên đường không ưu tiên để chỉ dẫn cho người lái xe trên đường này biết hướng đường ưu tiên ở ngã tư.','id':9},
            {'image': require('../resources/bienbaocam/125_.webp'),'name':'Hướng rẽ','describe':'Được sử dụng độc lập để báo trước cho người tham gia giao thông biết chuẩn bị đến chỗ rẽ nguy hiểm và để chỉ hướng rẽ.','id':10}
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