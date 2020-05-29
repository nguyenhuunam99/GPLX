import React, { Component } from 'react';
import { Text, Image, View, StyleSheet, ScrollView, TouchableOpacity, ProgressBarAndroid, Dimensions } from 'react-native';
import { Icon } from 'react-native-elements';
const windowWidth = Dimensions.get('window').width;
import SQLite from 'react-native-sqlite-storage';
import {KhaiNiemVaQuyTacScreen,HeThongBienBaoDuongBoScreen,SaHinhScreen,VanHoaVaDaoDucLaiXeScreen} from '../screenNames';


let db = SQLite.openDatabase({ name: "database.sqlite", createFromLocation: "~www/data.sqlite", location: "Library" })
export default class Hoclythuyet extends Component {
    constructor(props){
        super(props);
        this.state={
            question_type: []
        }
    }
        
    componentDidMount() {
        db.transaction(tx => {
            tx.executeSql('SELECT * FROM ZQUESTIONTYPE ORDER BY Z_PK ASC', [], (tx, results) => {
                var temp = [];

                for (let i = 0; i < results.rows.length; ++i) {
                    temp.push(results.rows.item(i));
                }
                
                this.setState({ question_type: temp })
            });
        });
    }
    render() {
        return (
            
            <View>
                
                <TouchableOpacity style={{ flexDirection: 'row', paddingTop: 15, paddingBottom: 20, backgroundColor: 'white', marginTop: 10, marginLeft: 10, marginRight: 10 }} onPress={() => { this.props.navigation.navigate(KhaiNiemVaQuyTacScreen) }}>
                    <View style={{ flex: 1, alignItems: 'center' }}>
                        <Icon name="edit" type="font-awesome" size={60} color="#4BB543" />
                    </View>
                    <View style={{ flex: 3 }}>
                        <Text style={{ fontSize: 15 }}>KHÁI NIỆM VÀ QUY TẮC</Text>
                        <Text style={{ color: 'gray' }}>75 câu</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <ProgressBarAndroid styleAttr='Horizontal' progress={(this.state.question_type.length>0?this.state.question_type[0].ZCURRENT_INDEX : 0) / 75} indeterminate={false} style={{ width: windowWidth * 0.55 }} />
                            <Text style={{ paddingLeft: 10, color: 'gray' }}>{this.state.question_type.length>0?this.state.question_type[0].ZCURRENT_INDEX:0} / 75</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{ flexDirection: 'row', paddingTop: 15, paddingBottom: 20, backgroundColor: 'white', marginTop: 10, marginLeft: 10, marginRight: 10 }} onPress={() => { this.props.navigation.navigate(HeThongBienBaoDuongBoScreen) }}>
                    <View style={{ flex: 1, alignItems: 'center' }}>
                        <Icon name="map-signs" type="font-awesome" size={60} color="#4BB543" />
                    </View>
                    <View style={{ flex: 3 }}>
                        <Text style={{ fontSize: 15 }}>HỆ THỐNG BIỂN BÁO ĐƯỜNG BỘ</Text>
                        <Text style={{ color: 'gray' }}>36 câu</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <ProgressBarAndroid styleAttr='Horizontal' progress={(this.state.question_type.length>0?this.state.question_type[5].ZCURRENT_INDEX:0) / 36} indeterminate={false} style={{ width: windowWidth * 0.55 }} />
                            <Text style={{ paddingLeft: 10, color: 'gray' }}>{this.state.question_type.length>0?this.state.question_type[5].ZCURRENT_INDEX:0} / 36</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{ flexDirection: 'row', paddingTop: 15, paddingBottom: 20, backgroundColor: 'white', marginTop: 10, marginLeft: 10, marginRight: 10 }} onPress={() => { this.props.navigation.navigate(SaHinhScreen)}}>
                    <View style={{ flex: 1, alignItems: 'center' }}>
                        <Icon name="car" type="font-awesome" size={60} color="#4BB543" />
                    </View>
                    <View style={{ flex: 3 }}>
                        <Text style={{ fontSize: 15 }}>SA HÌNH</Text>
                        <Text style={{ color: 'gray' }}>34 câu</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <ProgressBarAndroid styleAttr='Horizontal' progress={(this.state.question_type.length>0?this.state.question_type[6].ZCURRENT_INDEX:0) / 34} indeterminate={false} style={{ width: windowWidth * 0.55 }} />
                            <Text style={{ paddingLeft: 10, color: 'gray' }}>{this.state.question_type.length>0?this.state.question_type[6].ZCURRENT_INDEX:0} / 34</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{ flexDirection: 'row', paddingTop: 15, paddingBottom: 20, backgroundColor: 'white', marginTop: 10, marginLeft: 10, marginRight: 10 }} onPress={() => { this.props.navigation.navigate(VanHoaVaDaoDucLaiXeScreen) }}>
                    <View style={{ flex: 1, alignItems: 'center' }}>
                        <Icon name="users" type="font-awesome" size={60} color="#4BB543" />
                    </View>
                    <View style={{ flex: 3 }}>
                        <Text style={{ fontSize: 15 }}>VĂN HÓA VÀ ĐẠO ĐỨC LÁI XE</Text>
                        <Text style={{ color: 'gray' }}>5 câu</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <ProgressBarAndroid styleAttr='Horizontal' progress={(this.state.question_type.length>0?this.state.question_type[2].ZCURRENT_INDEX:0) / 5} indeterminate={false} style={{ width: windowWidth * 0.55 }} />
                            <Text style={{ paddingLeft: 10, color: 'gray' }}>{this.state.question_type.length>0?this.state.question_type[2].ZCURRENT_INDEX:0} / 5</Text>
                        </View>
                    </View>
                </TouchableOpacity>

            </View>
        );
    }
}