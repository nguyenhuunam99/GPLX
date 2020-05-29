import { View, Text, StyleSheet, Dimensions,ScrollView,Image } from 'react-native';
import React, { Component } from 'react';
import Swiper from 'react-native-swiper';

const {width, height} = Dimensions.get('window');
//const images=['../images/wave_rsx.jpg','../images/alert_1.jpg']

export default class Competitors extends Component{
    render(){
        const {wrap,text_title, detail, text,image}=styles;
        return(
            <View style={wrap}>
                <Text style={text_title}>ĐỐI THỦ</Text>
                <View style={detail}>
                    <Swiper showsPagination width={width}>
                        <View style={{alignItems:"center",}}>
                            <Image style={image} source={require('../resources/wave_rsx.jpg')}/>
                            <Text style={text}>Wave RSX</Text>
                        </View>
                        <View style={{alignItems:"center",}}>
                            <Image style={image} source={require('../resources/wave_rsx.jpg')}/>
                            <Text style={text}>Wave RSX</Text>
                        </View>
                        <View style={{alignItems:"center",}}>
                            <Image style={image} source={require('../resources/wave_rsx.jpg')}/>
                            <Text style={text}>Wave RSX</Text>
                        </View>
                        
                    </Swiper>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    wrap:{
        height:180,
        margin:5,
       // backgroundColor:"#E6E6E6",
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
        height: 150,
        backgroundColor:'white',
        flexDirection:"row",
        // justifyContent:"center",
        // alignItems:"center",
    },
    text:{
        fontSize:18,
        color:'white',
        fontWeight:'bold',
        position:'absolute',
        marginTop:85,
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 10
    },
    image:{
        height:120,
        width:120,
        // marginLeft: (width-120)/2,
        // justifyContent:"center",
        // alignItems:"center",

    }
})