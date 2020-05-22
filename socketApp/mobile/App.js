import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
} from 'react-native';
import io from 'socket.io-client';

console.ignoredYellowBox = ['Remote debugger'];
import {YellowBox} from 'react-native';
YellowBox.ignoreWarnings([
  'Unrecognized WebSocket connection option(s) `agent`, `perMessageDeflate`, `pfx`, `key`, `passphrase`, `cert`, `ca`, `ciphers`, `rejectUnauthorized`. Did you mean to put these under `headers`?',
]);

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chatMessage: '',
      chatMessages: [],
    };
  }

  componentDidMount() {
    this.socket = io('http://192.168.1.15:3000');
    this.socket.on('chat message', (msg) => {
      this.setState({chatMessages: [...this.state.chatMessages, msg]});
    });
  }

  submitChatMessage() {
    this.socket.emit('chat message', this.state.chatMessage);
    this.setState({chatMessage: ''});
  }

  render() {
    const chatMessages = this.state.chatMessages.map((chatMessage) => (
      <Text key={chatMessage}>{chatMessage}</Text>
    ));
    return (
      <SafeAreaView style={styles.container}>
        <TextInput
          style={{height: 40, borderWidth: 2}}
          autoCorrect={false}
          value={this.state.chatMessage}
          onSubmitEditing={() => this.submitChatMessage()}
          onChangeText={(chatMessage) => {
            this.setState({chatMessage});
          }}
        />
        {chatMessages}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
