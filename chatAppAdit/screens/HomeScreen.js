import React from 'react';
import {
  SafeAreaView,
  Image,
  Text,
  TouchableOpacity,
  AsyncStorage,
  FlatList,
} from 'react-native';
import User from '../User';
import styles from '../constants/styles';
import firebase from 'firebase';

export default class HomeScreen extends React.Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: 'Chats',
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Image
            source={require('../images/user.png')}
            style={{width: 32, height: 32, marginRight: 10}}
          />
        </TouchableOpacity>
      ),
    };
  };

  state = {
    users: [],
  };

  componentDidMount() {
    let dbRef = firebase.database().ref('users');
    dbRef.on('child_added', (val) => {
      console.log(val);
      let person = val.val();
      person.phone = val.key;
      if (person.phone === User.phone) {
        User.name = person.name;
      } else {
        this.setState((prevState) => {
          return {
            users: [...prevState.users, person],
          };
        });
      }
    });
  }

  renderRow = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => this.props.navigation.navigate('Chat', item)}
        style={{padding: 10, borderBottomColor: '#cc', borderBottomWidth: 1}}>
        <Text style={{fontSize: 20}}>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          style={{width: '100%'}}
          data={this.state.users}
          renderItem={this.renderRow}
          keyExtractor={(item) => item.phone}
        />
      </SafeAreaView>
    );
  }
}
