import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});

export default class LotsOfStyles extends Component {
  render() {
    return (
      <View style={{alignItems: 'center', top: 300}}>
        <Text style={styles.red}>just red</Text>
        <Text style={styles.bigBlue}>just bigBlue</Text>
        <Text style={(styles.bigBlue, styles.red)}>bigBlue, then red</Text>
        <Text style={(styles.red, styles.bigBlue)}>red then bigBlue</Text>
      </View>
    );
  }
}
