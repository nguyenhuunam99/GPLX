import React, { Component } from 'react';
import { View, Text, Image, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import ProgressCircle from 'react-native-progress-circle';
import { Icon } from 'react-native-elements';
import SQLite from 'react-native-sqlite-storage';
import { Item } from 'native-base';
import {KiemTraScreen} from '../screenNames';

let db = SQLite.openDatabase({ name: "database.sqlite", createFromLocation: "~www/data.sqlite", location: "Library" })

const windowWidth = Dimensions.get('window').width;
const itemWidth = windowWidth * 1 / 3;
export default class Thisathach extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tests: []
        }

    }

    componentDidMount() {
        db.transaction(tx => {
            tx.executeSql('SELECT * FROM ZTEST', [], (tx, results) => {
                var temp = [];

                for (let i = 0; i < results.rows.length; ++i) {
                    temp.push(results.rows.item(i));
                }
               
                
                this.setState({
                    tests: temp,
                });


            });


        });


    }

    createRandomQuestion(){
        var ques='';
        ques=ques+(Math.floor(Math.random()*365)+1);
        for(let i=0;i<19;i++){
            let temp = Math.floor(Math.random()*365)+1;
            ques=ques+','+temp;
        }
        return ques;
    }
    
    createTest= () => {
        
        db.transaction(tx => {
            let name_test=1;
            let current_quest=1;
            let class_license="1";
            let current_time=15*60;
            let time_his="15:00";
            let total_success=0;
            let isfinish = 0;
            let questionindex=this.createRandomQuestion();
            
            
            tx.executeSql('INSERT INTO ZTEST (NAME_TEST, ZCURRENT_QUEST, CLASS_LICENSE, CURRENT_TIME, TIME_HIS, TOTAL_SUCCESS, ISFINISH, ZQUESTIONINDEX, CHOSEN) VALUES (?,?,?,?,?,?,?,?,?)',
            [name_test, current_quest, class_license, current_time, time_his, total_success, isfinish, questionindex,0], (tx, results) => {
                let temp=this.state.tests;
                
                
                temp.push({IDTEST:this.state.tests.length+1,NAME_TEST:name_test, ZCURRENT_QUEST:current_quest, CLASS_LICENSE:class_license, CURRENT_TIME:current_time, TIME_HIS:time_his, TOTAL_SUCCESS:total_success, ISFINISH:isfinish, ZQUESTIONINDEX:questionindex, CHOSEN:0})
                this.setState({tests:temp});
            });

        });
    }

    render() {

        return (
            <ScrollView style={{ backgroundColor: 'white' }}>


                <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap' }}>

                    {
                        this.state.tests.length > 0 && this.state.tests.map((item, index) => (
                            <TouchableOpacity style={{ width: itemWidth, alignItems: 'center', paddingTop: 10 }} key={index} onPress={()=>{this.props.navigation.navigate(KiemTraScreen,{idtest:item.IDTEST,time:item.CURRENT_TIME})}}>                                
                                <ProgressCircle
                                    percent={item.ISFINISH == true ? (item.TOTAL_SUCCESS / 20) * 100 : 0}
                                    radius={60}
                                    borderWidth={3}
                                    color="#4BB543"
                                    shadowColor="#bfbfbf"
                                    bgColor="#fff"
                                >

                                    <Text style={{ fontSize: 18 }}>{item.ISFINISH == true ? (item.TOTAL_SUCCESS < 10 ? "TRƯỢT" : "ĐỖ") : (item.ISTEST == true ? "TIẾP TỤC" : "LÀM BÀI")}</Text>
                                    <Text>{item.ISFINISH == true ? ("Đúng " + item.TOTAL_SUCCESS + "/20 câu") : (item.ISTEST == true ? item.CURRENT_TIME : "0/20 câu")}</Text>

                                    <Text>Đề số {index + 1}</Text>
                                </ProgressCircle>
                            </TouchableOpacity>
                        ))
                    }
                    <TouchableOpacity style={{ width: itemWidth, alignItems: 'center', paddingTop: 10 }} onPress={()=>this.createTest()}>
                        <ProgressCircle
                            percent={100}
                            radius={60}
                            borderWidth={3}
                            color="#4BB543"
                            shadowColor="#bfbfbf"
                            bgColor="#fff"
                        >
                            <Icon name="random" type="font-awesome" size={20}></Icon>
                            <Text>NGẪU NHIÊN</Text>
                            <Text>TẠO ĐỀ</Text>
                        </ProgressCircle>
                    </TouchableOpacity>

                </View>

            </ScrollView>

        )
    }
}