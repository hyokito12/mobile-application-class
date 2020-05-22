import React, {Component} from 'react';
import {ActivityIndicator, FlatList, Text, View} from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    fetch('http://10.0.2.2:8000/students/')
      .then((response) => response.json())
      .then((json) => {
        // this.setState({data: json.movies});
        console.log(json);
      })
      .catch((error) => console.error(error))
      .finally(() => {
        // this.setState({isLoading: false});
      });
  }

  render() {
    const {data, isLoading} = this.state;

    return (
      <View style={{flex: 1, padding: 24}}>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            data={data}
            keyExtractor={({id}, index) => id}
            renderItem={({item}) => (
              <Text>
                {item.title}, {item.releaseYear}
              </Text>
            )}
          />
        )}
      </View>
    );
  }
}
