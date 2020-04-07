import { View, Text, StyleSheet, Dimensions,ScrollView,Image } from 'react-native';
import React, { Component } from 'react';

const {height} = Dimensions.get('window');

export default class Motobike extends Component {
    
    render(){
        const {wrap, image,image_wrap, detail,name,describe, colum_text, text,text_1, text_2, text_3}=styles;
        return(
            <View style={wrap}>
                
                <View style={image_wrap}>
                    <Image source= {require ('./resources/wave_rsx.jpg')} style={image} />
                </View>

               
                <View style={detail}>
                    
                    <View style={name}>
                        <Text style={text_1}>Wave RSX</Text>
                    </View>

                    <View style={describe}>
                        <View style={colum_text}>
                            <Text style={text}>Hãng</Text>
                            <Text style={text}>Giá niêm yết</Text>
                            <Text style={text}>Giá đàm phán</Text>
                        </View>
                        <View style={colum_text}>
                            <Text style={text}>Honda</Text>
                            <Text style={text_2}>20.3 triệu</Text>
                            <Text style={text_3}>19.2 triệu</Text>
                        </View>
                    </View>

                </View>


            </View>
        );
    }
}
const styles =StyleSheet.create({
    wrap : {
        height: height/7,
        marginBottom:1,
        borderBottomColor:"#D8D8D8",
        borderBottomWidth: 1,
        flexDirection: "row",
    },
    image_wrap:{
        flex: 2,
        backgroundColor: 'white',
    },
    detail:{
        flex:3,
       // backgroundColor: "gray",
    },
    image :{
        height: 100,
        width: 100,
        marginLeft:20,
    },
    name :{
        flex: 1,
        marginTop:5
    },
    describe:{
        flex:3,
        flexDirection: "row",
    },
    colum_text:{
        flex:1,
        justifyContent:"space-between",
        marginBottom: 10,
    },
    text_1:{
        color:"#6E6E6E",
        fontSize:15,
        fontWeight: 'bold',
    },
    text_2:{
        color:"#8A0868",
        fontWeight: 'bold',
    },
    text_3:{
        color:"#4B8A08",
        fontWeight: 'bold',
    },
    text:{
        color:"#6E6E6E",
    }
})