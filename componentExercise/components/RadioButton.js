import React, {Component} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

export default class RadioButton extends Component {
  state = {
    value: null,
  };

  render() {
    const {PROP} = this.props;
    const {value} = this.state;

    return (
      <View>
        {PROP.map((res) => {
          return (
            <View key={res.key} style={styles.container}>
              <TouchableOpacity
                style={styles.radioCircle}
                onPress={() => {
                  this.setState({
                    value: res.key,
                  });
                }}>
                {value === res.key && <View style={styles.selectedRb} />}
                <Text style={styles.radioText}>{res.text}</Text>
              </TouchableOpacity>
            </View>
          );
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 35,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
  },
  radioText: {
    marginRight: 35,
    fontSize: 20,
    color: '#000',
    fontWeight: '700',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },
  radioCircle: {
    borderRadius: 100,
    borderWidth: 2,
    borderColor: '#3740ff',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },
  selectedRb: {
    width: '100%',
    height: '10%',
    backgroundColor: '#3740ff',
  },
  result: {
    marginTop: 20,
    color: 'white',
    fontWeight: '600',
    backgroundColor: '#F3FBFE',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },
});
