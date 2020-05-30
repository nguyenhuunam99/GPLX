import React, {Component} from 'react';
import {
  View,
  Text,
  Dimensions,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import BottomDrawer from 'rn-bottom-drawer';
import {Icon} from 'react-native-elements';
import SQLite from 'react-native-sqlite-storage';
let screenWidth = Dimensions.get('window').width;
let screenHeight = Dimensions.get('window').height;
let db = SQLite.openDatabase({
  name: 'database.sqlite',
  createFromLocation: '~www/data.sqlite',
  location: 'Library',
});
export class LawComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 'Xe đạp, xe đạp máy, xe thô sơ',
      activeId: '17',
      lawType: [
        {
          id: 17,
          name: 'Xe đạp, xe đạp máy, xe thô sơ',
          icon: 'bicycle',
        },
        {
          id: 18,
          name: 'Mô tô, xe gắn máy',
          icon: 'motorcycle',
        },
        {
          id: 22,
          name: 'Trường hợp đặc biệt',
          icon: '',
        },
        {
          id: 24,
          name: 'Vi phạm khác',
          icon: '',
        },
      ],
      dataCategory: [],
      data: [],
    };
    this.getData();
  }
  componentDidMount() {
    console.disableYellowBox = true;
  }

  getData() {
    db.transaction(tx => {
      tx.executeSql(
        'SELECT Z_PK, ZNAME FROM ZLAWCATEGORY WHERE ZLAWTYPE = ?',
        [this.state.activeId],
        (tx, results) => {
          var data_temp = [];
          for (let i = 0; i < results.rows.length; ++i) {
            data_temp.push(results.rows.item(i));
          }
          this.setState({
            dataCategory: data_temp,
          });
        },
      );
    });
    db.transaction(tx => {
      tx.executeSql(
        'SELECT ZLAW.Z_pk, ZLAWCATEGORY, ZCONTENT, ZDESC, ZTITLE FROM ZLAWCATEGORY JOIN ZLAW ON ZLAWCATEGORY.Z_PK = ZLAW.ZLAWCATEGORY WHERE ZLAWTYPE = ?',
        [this.state.activeId],
        (tx, results) => {
          var data_temp = [];
          for (let i = 0; i < results.rows.length; ++i) {
            data_temp.push(results.rows.item(i));
          }
          this.setState({
            data: data_temp,
          });
        },
      );
    });
  }

  renderData(lawCategory) {
    return this.state.data.map(element => {
      if (element.ZLAWCATEGORY == lawCategory)
        return (
          <View style={{marginVertical: '1%', backgroundColor: '#fff'}}>
            <View style={{paddingVertical: '1%', paddingHorizontal: '5%'}}>
              <Text>{element.ZTITLE}</Text>
              <Text style={{fontWeight: 'bold'}}>{element.ZCONTENT}</Text>
            </View>
          </View>
        );
    });
  }

  renderContent = () => {
    return (
      <View>
        <View
          style={{
            height: screenHeight / 15,
            backgroundColor: '#4BB543',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              textAlign: 'center',
              color: '#fff',
              fontWeight: 'bold',
            }}>
            {this.state.active}
          </Text>
        </View>
        <FlatList
          data={this.state.lawType}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <TouchableOpacity
              style={styles.itemStyle}
              onPress={() => {
                this.setState({active: item.name, activeId: item.id});
                this.getData();
              }}>
              <View style={{width: '15%'}} />
              <View style={{width: '70%'}}>
                <Text>{item.name}</Text>
              </View>
              <View style={{width: '15%'}} />
            </TouchableOpacity>
          )}
        />
      </View>
    );
  };

  render() {
    return (
      <View>
        <View>
          <FlatList
            data={this.state.dataCategory}
            keyExtractor={item => item.Z_PK}
            renderItem={({item}) => (
              <View>
                <View style={{backgroundColor: '#4BB543'}}>
                  <Text
                    style={{
                      paddingHorizontal: '3%',
                      paddingVertical: '1%',
                      color: '#fff',
                    }}>
                    {item.ZNAME}
                  </Text>
                </View>
                <View style={{backgroundColor: '#eee'}}>
                  {this.renderData(item.Z_PK)}
                </View>
              </View>
            )}
          />
        </View>

        <BottomDrawer
          containerHeight={screenHeight / 1.75}
          backgroundColor={'#eee'}
          startUp={false}
          roundedEdges={false}>
          {this.renderContent()}
        </BottomDrawer>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  itemStyle: {
    backgroundColor: '#fff',
    padding: '4%',
    flexDirection: 'row',
    marginHorizontal: '2%',
    marginVertical: '1%',
  },
});
