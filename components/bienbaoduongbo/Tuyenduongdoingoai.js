import React, { Component } from 'react';
import { Text, Image, View, StyleSheet, ScrollView } from 'react-native';
export default class Tuyenduongdoingoai extends Component{
    state= {
        names: [
            {'image': require('../resources/bienbaocam/260_.webp'),'name':'Biển báo phụ có xe điện bánh lốp, bánh sắt','describe':'','id':1},
            {'image': require('../resources/bienbaocam/256_.webp'),'name':'Chỉ dẫn địa giới','describe':'','id':2},
            {'image': require('../resources/bienbaocam/264_.webp'),'name':'Chỉ dẫn địa giới','describe':'','id':3},
            {'image': require('../resources/bienbaocam/248_.webp'),'name':'Hết khu vực hạn chế tốc độ','describe':'','id':4},
            {'image': require('../resources/bienbaocam/242_.webp'),'name':'Khu vực cấm theo giờ','describe':'','id':5},
            {'image': require('../resources/bienbaocam/244_.webp'),'name':'Hết khu vực cấm theo giờ','describe':'','id':6},
            {'image': require('../resources/bienbaocam/245_.webp'),'name':'Khu vực dừng xe','describe':'','id':7},
            {'image': require('../resources/bienbaocam/229_.webp'),'name':'Chỗ ngoặt bên trái','describe':'','id':8},
            {'image': require('../resources/bienbaocam/230_.webp'),'name':'Chỗ ngoặt bên phải','describe':'','id':9},
            {'image': require('../resources/bienbaocam/231_.webp'),'name':'Chỗ ngoặt nguy hiểm liên tiếp bên trái','describe':'','id':10},
            {'image': require('../resources/bienbaocam/232_.webp'),'name':'Chỗ ngoặt nguy hiểm liên tiếp bên phải','describe':'','id':11}
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