import React, { Component } from 'react';
import { AppRegistry, Image } from  'react-native';

export default class Rachel extends Component {
  render() {
    let pic = {
      uri: 'https://usercontent1.hubstatic.com/14438478_f520.jpg',
    };
    return (
      <Image
        source={pic}
        style={{width: '100%', height: '100%', resizeMode: 'contain'}}
      />
    );
  }
}
