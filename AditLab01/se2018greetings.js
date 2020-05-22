import React, {Component} from 'react';
import {AppRegistry, Text, View} from 'react-native';

class Greeting extends Component {
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <Text>Hello {this.props.name}!</Text>
      </View>
    );
  }
}

export default class SE2018Greetings extends Component {
  render() {
    return (
      <View style={{alignItems: 'center', top: 200}}>
        <Greeting name="Aditya" />
        <Greeting name="Baihaqi" />
        <Greeting name="Ananda" />
        <Greeting name="Krisna" />
      </View>
    );
  }
}
