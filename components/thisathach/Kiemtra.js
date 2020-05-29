import React, { Component } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, SafeAreaView, FlatList } from 'react-native';
import {Icon} from 'react-native-elements';
import SQLite from 'react-native-sqlite-storage';
import Swiper from 'react-native-swiper';
let db = SQLite.openDatabase({ name: "database.sqlite", createFromLocation: "~www/data.sqlite", location: "Library" })

const renderPagination = (index, total, context) => {
    return (
        <View style={{ backgroundColor: '#4BB543', flexDirection: 'row' }}>
            <View style={{ flex: 1 }}><Text style={{ color: 'white', fontSize: 15, textAlign: 'center' }}>câu {index + 1}/{total}</Text></View>

        </View>
    )
}

export default class Kiemtra extends Component {
    constructor(props) {
        super(props);
        this.state = {
            questions: [],
            timer: this.props.route.params.time,
            time_render:''
        }
       
        
    }

    componentDidMount() {


        db.transaction(tx => {
            tx.executeSql('SELECT ZQUESTIONINDEX FROM ZTEST WHERE IDTEST = ?', [this.props.route.params.idtest], (tx, results) => {
                let question_array = results.rows.item(0).ZQUESTIONINDEX;
                question_array = question_array.split(',');


                tx.executeSql('SELECT * FROM question WHERE Z_PK IN (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?) ORDER BY Z_PK ASC', question_array, (txn, result) => {
                    var temp = [];

                    for (let i = 0; i < result.rows.length; ++i) {
                        temp.push(result.rows.item(i));
                    }


                    this.setState({
                        questions: temp
                    });

                })
            });

        });

        this.interval = setInterval(
            () => this.setState((prevState) => ({
                time_render: this.state.timer/60+ ':'+ this.state.timer%60,
                timer: prevState.timer - 1
            })), 1000
        )
        
    }

    componentDidUpdate() {
        if (this.state.timer === 1) {
            clearInterval(this.interval);
        }
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }


    clickOption() {

    }


    render() {
        return (
            <View style={{flex:1}}>
                <View style={{flex:1,backgroundColor:'white',flexDirection:'row',alignItems:'center', justifyContent:'center'}}>
                    <Icon type="font-awesome" name="clock-o" color='red'></Icon>
                    <Text style={{paddingLeft:5,color:'red'}}>{this.state.time_render}</Text>
                </View>
                <View style={{flex:20}}>
                <Swiper renderPagination={renderPagination}>
                    {this.state.questions.length > 0 && this.state.questions.map((item, index) => (

                        <ScrollView style={{ backgroundColor: 'white', flex: 1 }}>

                            <Text style={{ padding: 0, fontSize: 18, fontWeight: 'bold' }}>{item.ZQUESTIONCONTENT}</Text>
                            <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => this.clickOption(1)} >
                                <View style={{ flex: 1, alignItems: 'center', alignContent: 'center' }}><Text style={{ padding:10 }}>{item.ZOPTION1 ? "A" : null}</Text></View>
                                <View style={{ flex: 9 }}><Text style={{ padding: 5, fontSize: 15 }}>{item.ZOPTION1}</Text></View>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => this.clickOption(2)}>
                                <View style={{ flex: 1, alignItems: 'center', alignContent: 'center' }}><Text style={{ padding: 10 }}>{item.ZOPTION2 ? "B" : null}</Text></View>
                                <View style={{ flex: 9 }}><Text style={{ padding: 5, fontSize: 15 }}>{item.ZOPTION2}</Text></View>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => this.clickOption(3)}>
                                <View style={{ flex: 1, alignItems: 'center', alignContent: 'center' }}><Text style={{ padding: 10 }}>{item.ZOPTION3 ? "C" : null}</Text></View>
                                <View style={{ flex: 9 }}><Text style={{ padding: 5, fontSize: 15 }}>{item.ZOPTION3}</Text></View>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => this.clickOption(4)}>
                                <View style={{ flex: 1, alignItems: 'center', alignContent: 'center' }}><Text style={{ padding: 10 }}>{item.ZOPTION4 ? "D" : null}</Text></View>
                                <View style={{ flex: 9 }}><Text style={{ padding: 5, fontSize: 15 }}>{item.ZOPTION4}</Text></View>
                            </TouchableOpacity>

                        </ScrollView>
                    ))}
                </Swiper>
                </View>
            </View>
        );
    }
}