import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import RadioButton from './components/RadioButton';

const PROP = [
  {
    key: 'adit',
    text: 'Aditya',
  },
  {
    key: 'bai',
    text: 'Baihaqi',
  },
  {
    key: 'nanda',
    text: 'Nanda',
  },
  {
    key: 'krisna',
    text: 'Krisna',
  },
];

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Mahasiswa SE 2018</Text>
        <RadioButton PROP={PROP} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    fontWeight: 'bold',
    fontSize: 30,
  }
});
