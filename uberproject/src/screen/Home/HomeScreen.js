import React, {Component} from 'react';
import {Text, View} from 'react-native';
export default class HomeScreen extends React.Component {
  // static navigationOptions = {
  //   header: null,
  // };
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>This is Home Screen</Text>
      </View>
    );
  }
}
