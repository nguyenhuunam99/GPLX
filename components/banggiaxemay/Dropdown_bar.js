import { View, Text, StyleSheet, Dimensions, ScrollView, Picker, Icon } from 'react-native';
import React, { Component } from 'react';

export default class Dropdown_bar extends React.Component {
    constructor(props) {
        super(props);

        data_1 = ['Tất cả', 'Honda', 'Piaggio', 'SYM', 'Suzuki', 'Vespa', 'Yamaha'];
        data_2 = ['Tất cả', '0-20', '23-30', '30-40', '40-50', '50-60', '60-80', '>80'];
        data_3 = ['Tất cả', 'Xe số', 'Xe tay ga', 'Xe côn tay', 'Xe côn tự động', 'PKL'];

        this.state = {
            selected_1: '',
            selected_2: '',
            selected_3: ''
        }
    }
    render() {
        return (
            <View style={styles.wrap}>

                <Picker
                    style={styles.a}
                    selectedValue={this.state.selected_1}
                    onValueChange={(itemValue, itemIndex) => this.setState({ selected_1: itemValue })}

                >

                    {
                        data_1.map((data) => <Picker.Item color='#6E6E6E' key={data} label={data} value={data} />)
                    }
                </Picker>
                
                <Picker
                    style={styles.b}
                    selectedValue={this.state.selected_2}
                    onValueChange={(itemValue, itemIndex) => this.setState({ selected_2: itemValue })}
                >
                    {
                        data_2.map((data) => <Picker.Item color='#6E6E6E' key={data} label={data} value={data} />)
                    }
                </Picker>

                <Picker
                    style={styles.c}
                    selectedValue={this.state.selected_3}
                    onValueChange={(itemValue, itemIndex) => this.setState({ selected_3: itemValue })}
                >
                    {
                        data_3.map((data) => <Picker.Item color='#6E6E6E' key={data} label={data} value={data} />)
                    }
                </Picker>

            </View>
        );
    }
}
const styles = StyleSheet.create({
    wrap: {
        height: 53,
        flexDirection: "row",
        backgroundColor: "#F2F2F2"
    },
    a: {
        flex: 1,
        marginBottom: 5,
        marginTop: 5,
        marginLeft: 5,
        marginRight: 3,
        height: 43,
        backgroundColor: "white",
    },
    b: {
        flex: 1,
        marginTop: 5,
        marginBottom: 5,
        height: 43,
        backgroundColor: "white",
    },
    c: {
        flex: 1,
        marginBottom: 5,
        marginTop: 5,
        marginLeft: 3,
        marginRight: 5,
        height: 43,
        backgroundColor: "white",
    }
})