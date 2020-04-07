import React, { Component } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Container, Accordion } from 'native-base';

const Tab = createMaterialTopTabNavigator();
export default class TipsComponent extends Component {
    render() {
        return (
            <Tab.Navigator
                tabBarOptions={{
                    style: {
                        backgroundColor: '#4BB543',
                    },
                    activeTintColor: '#fff',
                    inactiveTintColor: '#fff',
                    indicatorStyle: {
                        backgroundColor: '#fff',
                        height: '5%',
                    },
                }}>
                <Tab.Screen
                    name="Tab1"
                    component={Tab1}
                    options={{
                        title: 'MẸO LÝ THUYẾT',
                    }}
                />
                <Tab.Screen
                    name="Tab2"
                    component={Tab2}
                    options={{
                        title: 'MẸO THỰC HÀNH',
                    }}
                />
            </Tab.Navigator>
        );
    }
}
const dataArrayTab1 = [
    {
        title: 'Khái niệm và quy tắc',
        content:
            '1.Câu khái niệm "Phương tiện giao thông cơ giới đường bộ" chọn "Kể cả xe máy điện".\n2.Câu khái niệm "Phương tiện giao thông thô sơ đường độ" chọn "Kể cả xe đạp máy".\n3.Câu khái niệm "Người điều khiển giao thông" là "Cảnh sát giao thông".',
    },
    {
        title: 'Hệ thống biển báo',
        content:
            '1.Đối với các câu có biển báo hiệu lệnh được đặt trước ngã ba, ngã tư. Chọn câu 1 nếu câu hỏi 1 dòng, câu 3 nếu câu hỏi có 2 dòng.\n2.Biển báo cấm máy kéo thì không cấm ô tô tải và ngược lại.\n3.Biển báo cấm rẽ trái thì cấm quay đầu và biển cấm quay đầu thì không cấm rẽ trái.',
    },
    {
        title: 'Sa hình',
        content:
            '1.Đối với câu hỏi liên quan đến việc điều khiển của CSGT, CSGT giơ tay thẳng lên thì các loại xe phải đứng lại, đưa 1 hoặc 2 tay giang ngang thì xe trước và đằng sau phải đứng lại.\n2.Đường giao nhau có vòng xuyến nhường bên trái, không có vòng xuyến nhường bên phải.\n3.Thấy xuất hiện "Công an" thì chọn câu số 3.',
    },
];
function Tab1() {
    return (
        <Container style={styles.light}>
            <SafeAreaView style={{ flex: 1 }}>
                <Accordion
                    dataArray={dataArrayTab1}
                    headerStyle={styles.tabHeader}
                    contentStyle={styles.light}
                />
            </SafeAreaView>
        </Container>
    );
}

const dataArrayTab2 = [
    {
        title: 'Giới thiệu',
        content:
            'Hiện nay, Trong việc thi bằng lái xe máy thì phần thi thực hành chấm điểm tự động bằng chip. Do máy tự động chấm điểm nên việc thi thực hành tỷ lệ trượt nhiều hơn so với trước. Qua quá trình tổ chức thi sát hạch qua rất nhiều học viên đúc kết ra một số mẹo cần chuẩn bị trước để thi đảm bảo đỗ 100%.\n\n1.Tập trước vòng số 8 ở nhà.Phần thi thực hành trượt nhiều nhất là ở phần thi vòng số 8. Do đó, việc bạn đã biết đi xe máy thành thạo nhưng chưa tập qua vòng số 8 thì cũng rất dễ bị trượt. Bạn nên tập qua vòng số 8 càng nhiều lần càng tốt. Ít nhất là lúc đi xe vào vòng số 8 không còn cảm thấy loạng choạng.\n\n2.Hôm thi lên sân thi thật sớm.Tại sao chúng tôi lại khuyên bạn như vậy? Bởi vì xe của bạn thì bạn quen với nó, bạn đi rất ngon lành. Nhưng xe của sân thi thì khác nhiều đấy, nếu bạn không đến sớm để làm quen với nó thì cũng rất dễ trượt. Hơn nữa, buổi thi thường sẽ có rất đông người. Nếu bạn đến sớm thì không phải chờ lâu mới được tập xe. Còn nếu đến muộn thì khả năng phải xếp hàng dài dài mới đến lượt mình.\n\n3.Cách đi để không bị chạm vạchĐi xe vào từ mép ngoài bên trái, bởi vì như thế thì bánh sau mới không bị đè lên vạch. Nếu bạn đi vào từ mép ngoài bên phải thì nhìn bánh trước vào rất ngon lành, nhưng rất tiếc bánh sau sẽ bị đè lên vạch ngay. Tương tự lúc ra khỏi vòng số 8 cũng như vậy. Bạn phải cho xe ra từ mép ngoài bên trái, nếu không bánh sau của xe cũng sẽ đè lên vạch.\n\nLưu ý: Lúc thi thực hành bạn nên để xe ở số 3 mà đi. Bởi vì số 4 thì có thể sẽ hơi yếu, nhưng số 1,2 thì sẽ bị giật mạnh. Phần đường gồ ghề bạn nên để số 3 đi và nên đi chậm chậm vừa phải nếu không muốn bay luôn cả người và xe ra ngoài.',
    },
    {
        title: 'Bài 1: Chạy theo vào số 8',
        content:
            'Phần 1: Chạy theo vòng số 8\n\n– Khi nghe gọi tên vào thi thực hành bài thi sát hạch lái xe mô tô thí sinh nhận xe, đội mũ bảo hiểm, gạt chống xe và nổ máy đưa xe vào vị trí xuất phát.\n\n– Trong phần thi số 1 thí sinh phải nhớ nguyên tắc vào 8 ra 3, phải chạy đủ vòng. Nên chạy với tốc độ vừa phải trong suốt lộ trình.\n\n– Khi nghe hiệu lệnh của người chấm thi thí sinh bắt đầu phần thi số 1 của bài thi thực hành thi sát hạch lái xe mô tô.\n\n– Gài số vào hình, xuất phát rẽ phải đi 1 vòng số 8 theo mũi tên đỏ sau đó vòng ra cửa số 2 theo hướng mũi tên xanh.\n\n➤ Lưu ý: Trong phần thi này thí sinh nên để số 2 đi luôn cho đầm máy. Khi chạy sa hình số 8, thí sinh nên hạ nhẹ ga xuống. Tuy nhiên tốc độ ',
    },
    {
        title: 'Bài 2: Đi vào đường hẹp',
        content:
            '      Trong phần này đường đi khá hẹp nên các bạn thí sinh cần lưu ý chỉ nên đi với tốc độ vừa phải , và đi giữa đường để tránh bị chạm vạch.',
    },
    {
        title: 'Bài 3: Chạy đường quanh co',
        content:
            '      Trong phần 3 của bài thi thực hành thi sát hạch lái xe mô tô, thí sinh nên nhảy ga đều đặn để xe chạy nhịp nhàng. Phần thi này đòi hỏi học viên cần có kỹ thuật đi vòng cua.',
    },
    {
        title: 'Bài 4: Chạy đường quanh co',
        content:
            '      Đây là phần thi thực hành cuối cùng. Các thí sinh phải giữ vững tay lái của mình tránh tình trạng mất lái, không nên đi với tốc độ quá chậm vì sẽ dễ ngã xe ảnh hưởng đến bài thi.',
    },
];
function Tab2() {
    return (
        <Container style={{ backgroundColor: '#eee' }}>
            <SafeAreaView style={{ flex: 1 }}>
                <Accordion
                    dataArray={dataArrayTab2}
                    headerStyle={styles.tabHeader}
                    contentStyle={{ backgroundColor: '#eee' }}
                />
            </SafeAreaView>
        </Container>
    );
}
const styles = StyleSheet.create({
    tabHeader: {
        backgroundColor: '#fff',
        margin: '1%',
    },
    light: {
        backgroundColor: '#eee',
    },
});
