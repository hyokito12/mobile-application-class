import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  AsyncStorage,
  TouchableOpacity,
  TextInput,
  View,
} from 'react-native';
import User from '../User';
import firebase from 'firebase';

export default class LoginScreen extends Component {
  static navigationOptions = {
    headerShown: false,
  };

  state = {
    phone: '',
    name: '',
  };

  componentDidMount() {
    AsyncStorage.getItem('userPhone').then((val) => {
      if (val) {
        this.setState({phone: val});
      }
    });
  }

  handleChange = (key) => (val) => {
    this.setState({[key]: val});
  };

  submitForm = async () => {
    if ((this.state.name == '') | (this.state.phone == '')) {
      alert(this.state.phone + '\n' + this.state.name);
    } else {
      await AsyncStorage.setItem('userPhone', this.state.phone);
      User.phone = this.state.phone;
      firebase
        .database()
        .ref('users/' + User.phone)
        .set({name: this.state.name});

      this.props.navigation.navigate('App');
      alert('phone successfully saved');
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder="phone number"
          style={styles.input}
          value={this.state.phone}
          onChangeText={this.handleChange('phone')}
        />
        <TextInput
          placeholder="name"
          style={styles.input}
          value={this.state.name}
          onChangeText={this.handleChange('name')}
        />
        <TouchableOpacity onPress={this.submitForm}>
          <Text>Enter</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  input: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    width: '90%',
    marginBottom: 10,
    borderRadius: 5,
  },
});
