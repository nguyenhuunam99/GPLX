import React, { Component } from 'react';
import { Text, Image, View, StyleSheet, ScrollView } from 'react-native';
export default class Bienbao extends Component{
    state= {
        names: [
            {'image': require('../resources/bienbaocam/194_.webp'),'name':'Hướng đi phải theo','describe':'Để báo cho các loại xe (thô sơ và cơ giới) chỉ được đi thẳng.','id':1},
            {'image': require('../resources/bienbaocam/197_.webp'),'name':'Hướng đi phải theo','describe':'Để báo cho các loại xe (thô sơ và cơ giới) chỉ được rẽ phải.','id':2},
            {'image': require('../resources/bienbaocam/198_.webp'),'name':'Hướng đi phải theo','describe':'Để báo cho các loại xe (thô sơ và cơ giới) chỉ được rẽ trái.','id':3},
            {'image': require('../resources/bienbaocam/199_.webp'),'name':'Hướng đi phải theo','describe':'Để báo cho các loại xe (thô sơ và cơ giới) chỉ được rẽ phải.','id':4},
            {'image': require('../resources/bienbaocam/200_.webp'),'name':'Hướng đi phải theo','describe':'Để báo cho các loại xe (thô sơ và cơ giới) chỉ được rẽ trái.','id':5},
            {'image': require('../resources/bienbaocam/201_.webp'),'name':'Hướng đi phải theo','describe':'Để báo cho các loại xe (thô sơ và cơ giới) chỉ được đi thẳng và rẽ phải.','id':6},
            {'image': require('../resources/bienbaocam/202_.webp'),'name':'Hướng đi phải theo','describe':'Để báo cho các loại xe (thô sơ và cơ giới) chỉ được đi thẳng và rẽ trái.','id':7},
            {'image': require('../resources/bienbaocam/204_.webp'),'name':'Hướng đi phải theo','describe':'Để báo cho các loại xe (thô sơ và cơ giới) chỉ được rẽ trái và rẽ phải.','id':8},
            {'image': require('../resources/bienbaocam/212_.webp'),'name':'Nơi giao nhau chạy theo vòng xuyến','describe':'Báo cho các loại xe (cơ giới và thô sơ) phải chạy vòng theo đảo an toàn ở các ngã ba, ngã tư. Biển có hiệu lực bắt buộc các loại xe muốn chuyển hướng phải chạy vòng theo, đảo an toàn theo hướng mũi tên chỉ.','id':9},
            {'image': require('../resources/bienbaocam/224_.webp'),'name':'Tuyến đường cầu vượt cắt qua','describe':'Biểu thị tại cầu vượt, xe có thể đi thẳng hoặc theo chỉ dẫn trên hình vẽ để rẽ trái. Biển đặt tại vị trí thích hợp ngay trước khi vào đường rẽ trái hoặc qua cầu vượt','id':10},
            {'image': require('../resources/bienbaocam/226_.webp'),'name':'Tuyến đường cầu vượt cắt qua','describe':'Biểu thị tại cầu vượt, xe có thể đi thẳng hoặc theo chỉ dẫn trên hình vẽ để rẽ phải. Biển đặt tại vị trí thích hợp ngay trước khi vào đường rẽ phải hoặc qua cầu vượt','id':11}
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