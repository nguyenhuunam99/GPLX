import { View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native';
import React, { Component } from 'react';
import Scroll_motobike from './Scroll_motobike';
import Dropdown_bar from './Dropdown_bar';

const { height } = Dimensions.get('window');

export default class Price_motobike extends React.Component {
    render() {
        const { wrap, title, x, text, row1 } = styles;
        return (
            <View style={wrap}>

                

                <View style={row1}>
                    <View style={{ flex: 1 }}>
                        <Text style={text}>Hãng</Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={text}>Giá niêm yết(triệu)</Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={text}>Loại xe</Text>
                    </View>
                </View>

                <Dropdown_bar></Dropdown_bar>

                <Scroll_motobike></Scroll_motobike>

            </View>

        );
    }
}
const styles = StyleSheet.create({
    wrap: {
        flex: 1,
        backgroundColor: 'white',
    },
    title: {
        height: height / 13,
        backgroundColor: '#5FB404',
    },
    row1: {
        flexDirection: 'row',
        height: height / 23,
    },
    text:{
        marginTop:7,
        marginLeft:3,
        color:"#6E6E6E",
    }
    // x:{
    //     height: height / 15,
    //     backgroundColor: "green",
    // }
})