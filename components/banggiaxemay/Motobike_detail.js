import { View, Text, StyleSheet, Dimensions,ScrollView,Image } from 'react-native';
import React, { Component } from 'react';
import Motobike from './Motobike'; 
import Competitors from './Competitors';
import Equipment from './Equipment';
import Specifications from './Specifications';
export default class Motobike_detail extends Component{
    render(){
        return(
            <View style={{flex:1, backgroundColor:"white"}}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Motobike></Motobike>
                    <Specifications />
                    <Equipment />
                    <Competitors />
                </ScrollView>
            </View>  
        )
    }
}