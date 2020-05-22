import React, {Component} from 'react';
import {Text, View} from 'react-native';
export default class UserScreen extends React.Component {
  // static navigationOptions = {
  //   header: null,
  // };
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>This is Profile Screen</Text>
      </View>
    );
  }
}
