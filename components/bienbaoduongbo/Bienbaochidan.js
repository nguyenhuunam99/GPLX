import React, { Component } from 'react';
import { Text, Image, View, StyleSheet, ScrollView } from 'react-native';
export default class Bienbaochidan extends Component{
    state= {
        names: [
            {'image': require('../resources/bienbaocam/282_.webp'),'name':'Mũi tên chỉ hướng đi','describe':'','id':1},
            {'image': require('../resources/bienbaocam/290_.webp'),'name':'Lối đi đường vòng tránh','describe':'','id':2},
            {'image': require('../resources/bienbaocam/288_.webp'),'name':'Hết khu vực nội thành','describe':'','id':3},
            {'image': require('../resources/bienbaocam/262_.webp'),'name':'Cầu vượt qua đường cho người đi bộ','describe.':'','id':4},
            {'image': require('../resources/bienbaocam/263_.webp'),'name':'Cầu vượt qua đường cho người đi bộ','describe.':'','id':5},
            {'image': require('../resources/bienbaocam/29_.webp'),'name':'Đường cụt','describe':'Để chỉ lối rẽ vào đường cụt.','id':6},
            {'image': require('../resources/bienbaocam/30_.webp'),'name':'Đường cụt','describe':'Để chỉ lối rẽ vào đường cụt.','id':7},
            {'image': require('../resources/bienbaocam/80_.webp'),'name':'Nơi nghỉ mát','describe':'Để chỉ dẫn những nơi nghỉ mát.','id':8},
            {'image': require('../resources/bienbaocam/56_.webp'),'name':'Rẽ ra đường có làn đường dành cho ô tô khách','describe':'Để chỉ dẫn cho người lái xe biết ở ngã ba, ngã tư rẽ phải là rẽ ra đường có làn đường dành cho ô tô khách.','id':9},
            {'image': require('../resources/bienbaocam/58_.webp'),'name':'Rẽ ra đường có làn đường dành cho ô tô khách','describe':'Để chỉ dẫn cho người lái xe biết ở ngã ba, ngã tư rẽ trái là rẽ ra đường có làn đường dành cho ô tô khách.','id':10},
            {'image': require('../resources/bienbaocam/60_.webp'),'name':'Chỉ hướng đường','describe':'Đặt ở tất cả các ngã ba, ngã tư đường giao nhau để chỉ dẫn có một khu đông dân cư trên hướng đường đến.','id':11}
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