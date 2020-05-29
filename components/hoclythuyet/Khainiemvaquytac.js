import React, { Component } from 'react';
import { Button, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper';
import { firebaseApp } from '../FirebaseConfig';
import SQLite from 'react-native-sqlite-storage';
import { Item } from 'native-base';

let db = SQLite.openDatabase({ name: "database.sqlite", createFromLocation: "~www/data.sqlite", location: "Library" })


const renderPagination = (index, total, context) => {
    return (
        <View style={{ backgroundColor: '#4BB543' }}>
            <Text style={{ textAlign: 'center', color: 'white', fontSize: 20,padding:3 }}>câu {index + 1}/{total}</Text>
        </View>
    )
}
export default class Khainiemvaquytac extends Component {
    constructor(props) {
        super(props);
        this.state = {
            question: [],
            show: false
        }
    }

    componentDidMount() {
        // var data = [];
        // firebaseApp.database().ref('/DATA/QUESTION').orderByChild("ZQUESTIONTYPE").equalTo(43).limitToFirst(75).on('value', snapshot => {
        //     data = snapshot.val();
        //     this.setState({ question: data })
        // })
        db.transaction(tx => {
            tx.executeSql('SELECT * FROM question WHERE ZQUESTIONTYPE=43 ORDER BY Z_PK LIMIT 75', [], (tx, results) => {
                var temp = [];

                for (let i = 0; i < results.rows.length; ++i) {
                    temp.push(results.rows.item(i));
                }
                this.setState({
                    question: temp,
                });


            });


        });


    }

    clickOption = (opt, key, click, answer, totaloption, correct, learn) => {

        if (answer.length == 1) {                //cau hoi co 1 dap an

            if (click.search(opt) == -1) {
                if (answer.search(opt) == -1) {
                    db.transaction((tx) => {

                        tx.executeSql('UPDATE question SET ZCLICKED=?, ZLEARNED=?, ZCORRECT=? WHERE Z_PK=?', [opt, 1, 0, key], (tx, result) => {
                            let temp = this.state.question;
                            var FOUND = -1;
                            var FOUND = temp.findIndex(i => i.Z_PK == key);
                            temp[FOUND].ZCLICKED = "" + opt;
                            temp[FOUND].ZLEARNED = 1;
                            temp[FOUND].ZCORRECT = 0;
                            this.setState({ question: temp })
                        })
                    })
                } else {

                    db.transaction((tx) => {
                        tx.executeSql('UPDATE question SET ZCLICKED=?, ZLEARNED=?, ZCORRECT=? WHERE Z_PK=?', [opt, 1, 1, key], (tx, result) => {
                            let temp = this.state.question;
                            var FOUND = temp.findIndex(i => i.Z_PK == key);
                            temp[FOUND].ZCLICKED = "" + opt;
                            temp[FOUND].ZLEARNED = 1;
                            temp[FOUND].ZCORRECT = 1;
                            this.setState({ question: temp })

                        })
                    })
                }

            } else {
                db.transaction((tx) => {
                    tx.executeSql('UPDATE question SET ZCLICKED=?, ZLEARNED=?, ZCORRECT=? WHERE Z_PK=?', [0, 0, 0, key], (tx, result) => {
                        let temp = this.state.question;
                        var FOUND = temp.findIndex(i => i.Z_PK == key);
                        temp[FOUND].ZCLICKED = "0";
                        temp[FOUND].ZLEARNED = 0;
                        temp[FOUND].ZCORRECT = 0;
                        this.setState({ question: temp })

                    })
                })
            }

        } else {                                         //cau hoi co nhieu dap an
           
            totaloption=totaloption==4?"1234":(totaloption==3?"123":"12");
            if(click.search(opt)==-1){                   //chua chon dap an 
                
                if(click=="0"){
                    if(answer.search(opt)==-1){
                        db.transaction((tx) => {
                            tx.executeSql('UPDATE question SET ZCLICKED=?, ZLEARNED=?, ZCORRECT=? WHERE Z_PK=?', [totaloption, 1, 1, key], (tx, result) => {
                                let temp = this.state.question;
                                var FOUND = temp.findIndex(i => i.Z_PK == key);
                                temp[FOUND].ZCLICKED = totaloption;
                                temp[FOUND].ZLEARNED = 1;
                                temp[FOUND].ZCORRECT = 1;
                                this.setState({ question: temp })
        
                            })
                        })
                    } else {
                        db.transaction((tx) => {
                            tx.executeSql('UPDATE question SET ZCLICKED=?, ZLEARNED=?, ZCORRECT=? WHERE Z_PK=?', [opt, 1, 0, key], (tx, result) => {
                                let temp = this.state.question;
                                var FOUND = temp.findIndex(i => i.Z_PK == key);
                                temp[FOUND].ZCLICKED = ''+opt;
                                temp[FOUND].ZLEARNED = 1;
                                temp[FOUND].ZCORRECT = 0;
                                this.setState({ question: temp })
        
                            })
                        })
                    }
                } else{
                    db.transaction((tx) => {
                        tx.executeSql('UPDATE question SET ZCLICKED=?, ZLEARNED=?, ZCORRECT=? WHERE Z_PK=?', [totaloption, 1, 1, key], (tx, result) => {
                            let temp = this.state.question;
                            var FOUND = temp.findIndex(i => i.Z_PK == key);
                            temp[FOUND].ZCLICKED = totaloption;
                            temp[FOUND].ZLEARNED = 1;
                            temp[FOUND].ZCORRECT = 1;
                            this.setState({ question: temp })
    
                        })
                    })
                }

            }else{                            //da chon dap an 
                db.transaction((tx) => {
                    if(answer.search(opt)!=-1){
                        correct=0;
                    }
        
                    var temp_click=''+click;
                    console.log(temp_click.length);
                    
                    if(temp_click.length==1) {
                        temp_click="0";
                        learn=0;
                       
                    }
                    
                    
                    else {temp_click=temp_click.replace(''+opt,'');}

                    

                    tx.executeSql('UPDATE question SET ZCLICKED=?, ZLEARNED=?, ZCORRECT=? WHERE Z_PK=?', [temp_click, learn, correct, key], (tx, result) => {
                        let temp = this.state.question;
                        var FOUND = temp.findIndex(i => i.Z_PK == key);
                        temp[FOUND].ZCLICKED = temp_click;
                        temp[FOUND].ZLEARNED = learn;
                        temp[FOUND].ZCORRECT = correct;
                        this.setState({ question: temp })

                    })
                })
            }
        }

    }
    render() {
        return (
            <Swiper renderPagination={renderPagination}>
                {this.state.question.length > 0 && this.state.question.map((item, index) => (
                    <View style={{ backgroundColor: 'white', flex: 1 }}>

                        <Text style={{ padding: 10, fontSize: 18, fontWeight: 'bold' }}>{item.ZQUESTIONCONTENT}</Text>
                        <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => this.clickOption(1, item.Z_PK, item.ZCLICKED, item.ZANSWERS, item.ZTOTALOPTION, item.ZCORRECT, item.ZLEARNED)} >
                            <View style={{ flex: 1, alignItems: 'center', alignContent: 'center' }}><Text style={{ padding: 10 }}>{item.ZOPTION1 ? "A" : null}</Text></View>
                            <View style={{ flex: 9 }}><Text style={{ padding: 5, fontSize: 15, color: (item.ZLEARNED == 0 || item.ZCLICKED.search(1) == -1) ? 'black' : (item.ZANSWERS.search(1) == -1 ? 'red' : '#4BB543') }}>{item.ZOPTION1}</Text></View>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => this.clickOption(2, item.Z_PK, item.ZCLICKED, item.ZANSWERS, item.ZTOTALOPTION, item.ZCORRECT, item.ZLEARNED)}>
                            <View style={{ flex: 1, alignItems: 'center', alignContent: 'center' }}><Text style={{ padding: 10 }}>{item.ZOPTION2 ? "B" : null}</Text></View>
                            <View style={{ flex: 9 }}><Text style={{ padding: 5, fontSize: 15, color: (item.ZLEARNED == 0 || item.ZCLICKED.search(2) == -1) ? 'black' : (item.ZANSWERS.search(2) == -1 ? 'red' : '#4BB543') }}>{item.ZOPTION2}</Text></View>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => this.clickOption(3, item.Z_PK, item.ZCLICKED, item.ZANSWERS, item.ZTOTALOPTION, item.ZCORRECT, item.ZLEARNED)}>
                            <View style={{ flex: 1, alignItems: 'center', alignContent: 'center' }}><Text style={{ padding: 10 }}>{item.ZOPTION3 ? "C" : null}</Text></View>
                            <View style={{ flex: 9 }}><Text style={{ padding: 5, fontSize: 15, color: (item.ZLEARNED == 0 || item.ZCLICKED.search(3) == -1) ? 'black' : (item.ZANSWERS.search(3) == -1 ? 'red' : '#4BB543') }}>{item.ZOPTION3}</Text></View>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => this.clickOption(4, item.Z_PK, item.ZCLICKED, item.ZANSWERS, item.ZTOTALOPTION, item.ZCORRECT,item.ZLEARNED)}>
                            <View style={{ flex: 1, alignItems: 'center', alignContent: 'center' }}><Text style={{ padding: 10 }}>{item.ZOPTION4 ? "D" : null}</Text></View>
                            <View style={{ flex: 9 }}><Text style={{ padding: 5, fontSize: 15, color: (item.ZLEARNED == 0 || item.ZCLICKED.search(4) == -1) ? 'black' : (item.ZANSWERS.search(4) == -1 ? 'red' : '#4BB543') }}>{item.ZOPTION4}</Text></View>
                        </TouchableOpacity>
                        {
                            item.ZCORRECT == 1 &&
                            <View>
                                <Text style={{ padding: 10, fontWeight: 'bold' }}>
                                    GIẢI THÍCH ĐÁP ÁN
                                </Text>
                                <View style={{ backgroundColor: '#ccffcc' }}>
                                    <Text style={{ padding: 10 }}>{item.ZANSWERDESC}</Text>
                                </View>
                            </View>
                        }
                    </View>

                ))}

            </Swiper>
        )
    }

}
