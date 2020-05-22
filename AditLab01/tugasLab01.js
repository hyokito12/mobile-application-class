import React, {Component} from 'react';
import {AppRegistry, View, Text} from 'react-native';

export default class TugasLab01 extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'stretch',
        }}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'stretch',
          }}>
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'red'}}>
            <Text style={{color: 'white', fontSize: 40}}>RED</Text>
          </View>
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center',  backgroundColor: 'blue'}}>
            <Text style={{color: 'white', fontSize: 40}}>BLUE</Text>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'stretch',
          }}>
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center',  backgroundColor: 'green'}}>
            <Text style={{color: 'white', fontSize: 40}}>GREEN</Text>
          </View>
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center',  backgroundColor: 'purple'}}>
            <Text style={{color: 'white', fontSize: 40}}>PURPLE</Text>
          </View>
        </View>
      </View>
    );
  }
}
