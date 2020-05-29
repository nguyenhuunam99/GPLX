import { View, Text, StyleSheet, Dimensions,ScrollView,Image } from 'react-native';
import React, { Component } from 'react';

//const {width} = Dimensions.get('window').width;
export default class Specifications extends Component{
    render(){
        const {wrap,text_title, detail, text_11, text_12}=styles;
        return(
            <View style={wrap}>
                <Text style={text_title}>THÔNG SỐ KỸ THUẬT</Text>
                <View style={detail}>
                    <View style={{flex:3}}>
                        <Text style={text_11}>Dài x rộng x cao (mm)</Text>
                        <Text style={text_11}>Dung tích bình xăng (lít)</Text>
                        <Text style={text_11}>Động cơ (phân phối)</Text>
                        <Text style={text_11}>Công suất (mã lực)</Text>
                        <Text style={text_11}>Mô-men xoắn (Nm)</Text>
                        <Text style={text_11}>Trọng lượng (kg)</Text>
                        <Text style={text_11}>Nguồn gốc:</Text>
                        <Text style={text_11}>Loại xe:</Text>
                        <Text style={text_11}>Hộp số</Text>
                    </View>
                    <View style={{flex:2}}>
                        <Text style={text_12}>1980x699x1070</Text>
                        <Text style={text_12}>3.6</Text>
                        <Text style={text_12}>100</Text>
                        <Text style={text_12}>6.8</Text>
                        <Text style={text_12}>7</Text>
                        <Text style={text_12}>100</Text>
                        <Text style={text_12}>Lắp ráp</Text>
                        <Text style={text_12}>xe số</Text>
                        <Text style={text_12}>4 số</Text>
                    </View>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    wrap:{
        height:310,
        margin:5,
        //backgroundColor:"#BDBDBD",
    },
    text_title:{
        height: 40,
        backgroundColor:"#5FB404",
        fontSize: 14,
        paddingTop: 10,
        paddingLeft: 10,
        fontWeight: "bold",
        color: 'white',
    },
    detail:{
        height: 270,
        backgroundColor:'#FAFAFA',
        flexDirection:"row",
    },
    text_11:{
        marginTop:10,
        color:"#6E6E6E",
        paddingLeft: 10,
    },
    text_12:{
        marginTop:10,
        color:"#6E6E6E",
        paddingLeft: 10,
        fontWeight:"bold",
    }
})