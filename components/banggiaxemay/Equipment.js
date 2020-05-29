import { View, Text, StyleSheet, Dimensions, ScrollView, Picker, Image, Modal,TouchableHighlight, Alert } from 'react-native';
import React, { Component, useState } from 'react';

//const {width} = Dimensions.get('window').width;
export default class Equipment extends Component {
    constructor(props) {
        super(props);

        data_1 = ['Khu vực 1', 'Khu vực 2', 'Khu vực 3'];


        this.state = {
            isVisible: false,
            selected_1: '',
        }
    }
    render() {
       // const [modalVisible, setModalVisible] = useState(false);
        const { wrap, text_title, detail, row_1, icon_1, text_1,text_11, text_12, dropdown, modal, inModal, text_2, text_3, text_4 ,text_5,a,b,c } = styles;
        return (
            <View style={wrap}>
                <Text style={text_title}>TRANG BỊ</Text>
                <View style={row_1}>
                    
                    <Text style={text_1}> Khu vực đăng kí</Text>
                    
                    <View>
                        <TouchableHighlight underlayColor="white" onPress={ ()=> this.setState({isVisible:true})}>
                             <Image style={icon_1} source={require('../resources/attention-512.jpg')} />
                        </TouchableHighlight>
                        
                        <Modal
                            visible={this.state.isVisible}
                            transparent={true}
                        >
                            <View style={modal}>
                                <View style={inModal}>
                                    <Text style={text_2}>Giải thích</Text>
                                    <View style={a}>
                                        <Text style={text_3}>Khu vực 1</Text>
                                        <Text style={text_4}>Bao gồm Hà Nội và TP.Hồ Chí Minh</Text>
                                    </View>
                                    <View style={ b}>
                                        <Text style={text_3}>Khu vực 2</Text>
                                        <Text style={text_4}>Bao gồm các thành phố trực thuộc trung ương, các thành phố trực thuộc tỉnh và các thị xã</Text>
                                    </View>
                                    <View style={c}>
                                        <Text style={text_3}>Khu vực 3</Text>
                                        <Text style={text_4}>Bao gồm các khu vực khác ngoài khu vực I và II nêu trên</Text>
                                    </View>
                                    <Text style={text_5}  onPress={ ()=> this.setState({isVisible:false})}> ĐỒNG Ý</Text>
                                    
                                </View>
                            </View>

                        </Modal>
                    
                    </View>

                    <Picker
                        style={dropdown}
                        selectedValue={this.state.selected_1}
                        onValueChange={(itemValue, itemIndex) => this.setState({ selected_1: itemValue })}
                    >
                        {
                            data_1.map((data) => <Picker.Item color='#6E6E6E' key={data} label={data} value={data} />)
                        }
                    </Picker>
                </View>

                <View style={detail}>
                    <View style={{ flex: 3 }}>
                        <Text style={text_11}>Giá thị trường</Text>
                        <Text style={text_11}>Phí trước bạ (5%)</Text>
                        <Text style={text_11}>Bảo hiểm trách nhiệm dân sự</Text>
                        <Text style={text_11}>Phí làm biển số</Text>
                        <Text style={text_11}>Tổng chi phí</Text>
                    </View>
                    <View style={{ flex: 2 }}>
                        <Text style={text_12}>24.300.000 đ</Text>
                        <Text style={text_12}>1.215.000 đ</Text>
                        <Text style={text_12}>66.000 đ</Text>
                        <Text style={text_12}>2.000.000 đ</Text>
                        <Text style={{marginTop:10,color:"green",paddingLeft: 10,fontWeight:"bold",}}>27.581.000 đ</Text>
                        
                    </View>
                </View>

            </View>
           )
    }
}
const styles = StyleSheet.create({
    wrap: {
        height: 230,
        margin: 5,
        //backgroundColor: "#E6E6E6",
    },
    text_title:{
        height: 40,
        backgroundColor:"#5FB404",
        fontSize: 14,
        paddingTop: 10,
        paddingLeft: 10,
        fontWeight: "bold",
        color: '#FAFAFA',
    },
    row_1: {
        //backgroundColor: "aqua",
        height: 35,
        backgroundColor:'white',
        flexDirection: "row",
    },
    detail: {
        height: 160,
        backgroundColor: 'white',
        flexDirection: "row",
    },
    icon_1: {
        height: 20,
        width: 23,
        marginLeft: 10,
        marginTop: 9,
    },
    text_1: {
        width: 120,
        color:"#6E6E6E",
        marginTop: 10,
        fontSize: 14,
        paddingLeft:5,
    },
    dropdown: {
        flex: 1,
        marginLeft: 90,
        height: 20,
        marginTop: 9,
        //width: 200,
        //backgroundColor: "red",
    }, 

    modal:{
        flex:1,// vì modal auto ở trên nên ban đầu kích thước view này bằng nội dung, và chỉ ở trên cùng, phải có flex 1 để nó có phạm vi cả màn hình thì mói căn giữa từ trên xuống đc
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:'rgba(0,0,0,0.5)',
    },
    inModal:{
        height:320,
        width:350,
        backgroundColor:"white",
    },
    text_2:{
        height:70,
        fontSize:22,
        paddingLeft:20,
        //color:"green",
        fontWeight: 'bold',
        paddingTop:30,
    },
    text_3:{
        fontSize:15,
        fontWeight:"bold",
        color:"#6E6E6E",
        marginTop:4,
    },
    text_4:{
        color:"#6E6E6E",
        marginLeft:4,
        marginTop:4,
    },
    a:{
        height:55,
        marginLeft:20,
        marginRight:20,
    },
    b:{
        height:75,
        marginLeft:20,
        marginRight:20,
        borderTopWidth:1,
        borderBottomWidth:1,
        borderColor:"#E6E6E6",
    },
    c:{
        flex:1,
        marginLeft:20,
        marginRight:20,
    },
    text_5:{
        height:40,
        color:"#4cb050",
        paddingLeft:230,
        //paddingTop:10,
        fontWeight:"bold",
        fontSize:15,
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
    },
})