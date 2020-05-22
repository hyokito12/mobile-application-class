import Carousel from 'react-native-snap-carousel';
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';

const ENTRIES1 = [
  {
    title: 'Gorgeous',
    illustration:
      'http://asianwiki.com/images/7/7f/Kim_Ji-Won_%281992%29-p3.jpg',
  },
  {
    title: 'Smart',
    illustration: 'https://lh3.googleusercontent.com/proxy/wsuaEJU4o0Llbcc7dqrnVD16XbZPVLhdSgyY_e167BzgqQBF1gIoG6rFGg3MRBWFq1ZhgpWg5VtUbL1syFgqJcWbv0_aJE6JQeXbcCIyP3aRYTOKzxA_odigPUGxNIzGxaa_Hsd9LqN0Nt5ccPRzxU98RoBZXlKRmHolwJedZVtI_PPo',
  },
  {
    title: 'Cute',
    illustration: 'https://static.wixstatic.com/media/e480d8_f9c53aca36ba4d4c844daab0a5bcb3b1~mv2.png/v1/fill/w_1000,h_974,al_c,usm_0.66_1.00_0.01/e480d8_f9c53aca36ba4d4c844daab0a5bcb3b1~mv2.png',
  },
];

const screenWidth = Math.round(Dimensions.get('window').width);

export default class App extends Component {
  _renderItem = ({item, index}) => {
    return (
      <View style={{alignItems: 'center', justifyContent: 'flex-end'}}>
        <View
          style={{
            width: '90%',
            height: '90%',
            backgroundColor: '#2541B2',
            justifyContent: 'center',
            borderRadius: 50,
          }}>
          <View style={{alignItems: 'center', justifyContent: 'center',}}>
            <Image
              style={{width: '70%', height: '70%', borderRadius: 50}}
              source={{
                uri: item.illustration,
              }}
            />
            <Text style={styles.renderItem}>{item.title}</Text>
          </View>
        </View>
      </View>
    );
  };

  render() {
    return (
      <Carousel
        layout={'tinder'}
        layoutCardOffset={9}
        ref={(c) => {
          this._carousel = c;
        }}
        data={ENTRIES1}
        renderItem={this._renderItem}
        sliderWidth={screenWidth}
        itemWidth={screenWidth}
      />
    );
  }
}

const styles = StyleSheet.create({
  renderItem: {color: 'white', padding: 30, fontSize: 30, fontWeight: 'bold'},
});
