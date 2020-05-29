import { View, Text, StyleSheet, Dimensions,ScrollView } from 'react-native';
import React, {Component} from 'react';
import Motobike from './Motobike';

export default class Scroll_motobike extends Component {
    
    render(){
        
        return(
            <ScrollView>
                 <Motobike></Motobike>
                 <Motobike></Motobike>
                 <Motobike></Motobike>
                 <Motobike></Motobike>
                 <Motobike></Motobike> 
                 <Motobike></Motobike>
                 <Motobike></Motobike>
                 <Motobike></Motobike>
                 <Motobike></Motobike>
             </ScrollView>
        );
    }
}