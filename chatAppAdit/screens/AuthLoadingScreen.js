import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import firebase from 'firebase';
import User from '../User';

export default class AuthLoadingScreen extends React.Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }

  componentDidMount() {
    var firebaseConfig = {
      apiKey: 'AIzaSyDKmZ46sq9XfnhC_OcdLBrkx1p7Ucfl2OY',
      authDomain: 'chatappadit.firebaseapp.com',
      databaseURL: 'https://chatappadit.firebaseio.com',
      projectId: 'chatappadit',
      storageBucket: 'chatappadit.appspot.com',
      messagingSenderId: '669839047029',
      appId: '1:669839047029:web:07329ec85047715c2a3b3c',
      measurementId: 'G-C7X10BT5NW',
    };
    firebase.initializeApp(firebaseConfig);
  }
  _bootstrapAsync = async () => {
    User.phone = await AsyncStorage.getItem('userPhone');
    this.props.navigation.navigate(User.phone ? 'App' : 'Auth');
  };
  render() {
    return (
      <View>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}
