import React, { Component } from 'react';
import { Button, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default class Setting extends Component {
  state = {
    names: [
      {
        id: 0,
        name: 'BẰNG A1',
        detail: 'Xe máy'
      },
      {
        id: 1,
        name: 'BẰNG A2',
        detail: 'Xe mô tô 2 bánh '
      }
    ]
  }
  render() {
    return (
      <View>
        {
          this.state.names.map((item, index) => (
            <TouchableOpacity
              key={item.id}
              style={styles.container}

              >
              <Text style={styles.text}>
                {item.name}
              </Text>
              <Text>    {item.detail}</Text>
            </TouchableOpacity>
          ))
        }
      </View>
    );

  }

  
}
const styles = StyleSheet.create({
  container: {
    padding: 15,
    marginTop: 3,
    backgroundColor: 'white',
    flexDirection:'row'
  },
  title:{

  },
  text: {
    color: '#4f603c',
  }
})
