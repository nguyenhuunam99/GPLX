import React, { Component } from 'react';
import { Text, Image, View, StyleSheet, ScrollView } from 'react-native';
export default class Vachkeduong extends Component{
    state= {
        names: [
            {'image': require('../resources/bienbaocam/137_.webp'),'name':'Vạch nằm ngang 2','describe':'Vạch liền nét màu trắng, rộng 20cm, Xác định mép phần xe cơ giới với phần xe thô sơ, người  đi bộ hoặc lề đường trên các trục đường, xe chạy được phép đè lên vạch khi cần thiết.','id':1},
            {'image': require('../resources/bienbaocam/139_.webp'),'name':'Vạch nằm ngang 4','describe':'Vạch liền nét màu trắng, rộng 10cm, Phân chia 2 dòng phương tiện giao thông đi ngược chiều nhau, xe không được đè lên vạch.','id':2},
            {'image': require('../resources/bienbaocam/143_.webp'),'name':'Vạch nằm ngang 6','describe':'Vạch đứt quãng màu trắng, rộng 10cm, là vạch báo hiệu chuẩn bị đến Vạch số 1.1 hay Vạch số 1.11 dùng để phân chia dòng xe ngược chiều hay cùng chiều.','id':3},
            {'image': require('../resources/bienbaocam/144_.webp'),'name':'Vạch nằm ngang 7','describe':'Vạch đứt quãng màu trắng, rộng 10cm, khoảng cách giữa hai vạch bằng chiều dài của vạch là 50cm. Vạch được kẻ theo đường cong để dẫn hướng rẽ ở chỗ đường giao nhau cho lái xe, để bảo đảm an toàn.','id':4},
            {'image': require('../resources/bienbaocam/148_.webp'),'name':'Vạch nằm ngang 8','describe':'Vạch đứt quãng màu  trắng, rộng 40cm dài 100cm, khoảng cách giữa hai vạch là 300cm. Dùng để quy định ranh giới giữa làn xe tăng tốc độ hoặc giảm tốc độ (gọi là làn đường chuyển tốc) với làn xe chính của phần xe chạy, được kẻ ở nơi giao nhau, nhằm dẫn hướng cho xe tách nhập làn an toàn.','id':5},
            {'image': require('../resources/bienbaocam/154_.webp'),'name':'Vạch nằm ngang 10','describe':'Vạch đứt quãng màu vàng, rộng 10cm, dài 100cm và cách nhau 100cm. Xác định vị trí hay khu vực cấm đỗ xe (áp dụng độc lập hay kết hợp với biển báo cấm số 131a “Cấm đỗ xe”), được kẻ ở mép mặt đường hay trên hàng vỉa nơi có vỉa hè.','id':6},
            {'image': require('../resources/bienbaocam/160_.webp'),'name':'Vạch nằm ngang 13','describe':'Vạch hình tam giác cân màu trắng, chỉ rõ vị trí mà lái xe phải dừng để nhường cho các phương tiện khác ở đường ưu tiên.','id':7},
            {'image': require('../resources/bienbaocam/161_.webp'),'name':'Vạch nằm ngang 14','describe':'Vạch "Sọc ngựa vằn" dùng quy định nơi người đi bộ qua đường bao gồm các vạch song song với trục tim đường màu trắng chiều rộng 40cm, cách nhau 60cm','id':8},
            {'image': require('../resources/bienbaocam/165_.webp'),'name':'Vạch nằm ngang 16.1','describe':'Vạch "ngựa vằn" ở trong chạy cắt chéo góc nhọn thành những tam giác, xác định đảo phân chia dòng phương tiện ngược chiều nhau.','id':9},
            {'image': require('../resources/bienbaocam/168_.webp'),'name':'Vạch nằm ngang 16.2','describe':'Vạch ở trong hình gãy khúc có đỉnh nằm trên đường phân giác của góc nhọn cùng chiều với góc nhọn, xác định đảo phân chia dòng phương tiện theo cùng một hướng.','id':10},
            {'image': require('../resources/bienbaocam/170_.webp'),'name':'Vạch nằm ngang 16.3','describe':'Vạch ở trong hình gãy khúc có đỉnh nằm trên đường phân giác ngược chiều với góc nhọn, xác định đảo nhập dòng phương tiện','id':11}
        ]
    }
    render(){
        return (
            <View style={{backgroundColor:'white'}}>
                <ScrollView>
                    {
                        this.state.names.map((item, index) => (
                            <View key = {item.id} style = {{flexDirection:'row',flex:1,borderWidth:0.5,paddingTop:5, paddingBottom:5}}>
                                <View style={{flex:3,alignItems:'center'}}>
                                    <Image source={item.image} style={{width:100,height:100,resizeMode:'stretch',marginLeft:15}}></Image>
                                </View>
                                <View style={{flex:7,paddingLeft:20}}>
                                    <Text style={{fontWeight:'bold',fontSize:15}}>{item.name}</Text>
                                    <Text style={{color:'gray'}}>{item.describe}</Text>
                                </View>
                            </View>
                        ))
                    }
                </ScrollView>
            </View>
        );
    }
}