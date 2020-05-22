import React, {Component} from 'react';
import {View, Text, Dimensions} from 'react-native';
const SPLASH_TIME = 2000;
export default class SplashScreen extends Component {
  async componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate('Home');
    }, SPLASH_TIME);
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#000000',
        }}>
        <View
          style={{flex: 10, alignItems: 'center', justifyContent: 'center'}}>
          <Text
            style={{
              marginTop: 50,
              fontSize: 40,
              fontWeight: 'bold',
              color: '#fff',
            }}>
            Uber
          </Text>
        </View>
      </View>
    );
  }
}
