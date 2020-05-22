import React, {Component} from 'react';
import {AppRegistry, Text, View} from 'react-native';

class Blinking extends Component {
  constructor(props) {
    super(props);
    this.state = {isShowingText: true};

    setInterval(
      () =>
        this.setState(previousState => ({
          isShowingText: !previousState.isShowingText,
        })),
      1000,
    );
  }
  render() {
    if (!this.state.isShowingText) {
      return null;
    }

    return <Text>{this.props.text}</Text>;
  }
}

export default class Blink extends Component {
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Blinking text="Adit Handsome" />
      </View>
    );
  }
}
