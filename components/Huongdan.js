import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {Button} from 'native-base';
 import { ScrollView } from 'react-native-gesture-handler';

class Guide extends Component {
    render(){
        return (
            <View style={{ flex: 1 ,alignItems:'center',fontWeight: 'bold'}}>
                <Text style={styles.title}>Đây là ứng dụng giúp bạn học lý thuyết để chuẩn bị cho kỳ thi sát hạch lý thuyết lái xe chỉ trong 3 ngày. Vui lòng thực hiện các bước dưới đây để được kết quả tốt nhất và rút ngắt thời gian ôn luyện!</Text>
                <Text style={styles.content}>1. Ngày đầu tiên bạn nên dành 8 tiếng để học hết tất cả các loại biển báo hay gặp. Tập trung vào các loại biển báo cấm, biển báo hiệu lệnh, biển báo chỉ dẫn, biển báo nguy hiểm..</Text>
                <Text style={styles.content}>2. Ngày thứ 2 bạn hãy vào phần học tất cả các câu lý thuyết, học đi học lại các câu lý thuyết này và các mẹo làm của từng câu, nhớ các định nghĩa cơ bản như nồng độ cồn, tốc độ cho phép.. và học mẹo làm bài các câu hỏi sa hình..</Text>
                <Text style={styles.content}>3. Ngày thứ 3 bạn hãy vào làm hết các bộ đề thi của hạng bằng lái xe mà bạn thi. Sau khi làm xong tất cả các đề mặc định (đều đạt > điểm đỗ trở lên). Bạn hãy chọn 1 đề xáo trộn và làm đến khi nào điểm thi của bạn để đạt thì chúc mừng bạn đã hoàn thành quá trình ôn luyện</Text>
                <Text style={styles.content}>4. Nếu bạn đã hoàn thành 3 bước trên, thì bạn chỉ cần giữ bình tĩnh khi thi, chắc chắn bạn sẽ đạt kết quả cao. Chúc bạn thi đỗ với số điểm tối đa</Text>
                <Button rounded success onPress={()=>{this.props.navigation.goBack()}}><Text style={{color:'white', fontSize:16}}>   Bắt đầu sử dụng   </Text></Button>
            </View>
        );
    }
    
}
export default Guide;
const styles=StyleSheet.create({
    title:{
        fontWeight:'bold',
        margin:'2%',
        fontSize:15
    },
    content:{
        margin:'2%',
        fontSize:15
    }
})