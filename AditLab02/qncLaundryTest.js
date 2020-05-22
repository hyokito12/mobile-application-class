import React, {Component} from 'react';
import {AppRegistry, View, Text, Image} from 'react-native';

export default class QncLaundryTest extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'stretch',
        }}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            backgroundColor: 'blue',
            alignItems: 'flex-end',
          }}>
          <View style={{flex: 1, marginLeft: 30, marginBottom: 10}}>
            <Text style={{color: 'white'}}>Kembali</Text>
          </View>
          <View style={{flex: 1, marginLeft: 250, marginBottom: 10}}>
            <Text style={{color: 'white'}}>Logo</Text>
          </View>
        </View>
        <View
          style={{
            flex: 10,
            flexDirection: 'column',
          }}>
          <View
            style={{flex: 2, justifyContent: 'center', alignItems: 'center'}}>
            <Text>IMAGES</Text>
            <Text>Anda sekarang mengantar cucian:</Text>
          </View>
          <View
            style={{
              flex: 5,
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              marginLeft: 80,
            }}>
            <Text style={{color: 'blue', fontWeight: 'bold'}}>Nama</Text>
            <Text style={{textDecorationLine: 'underline'}}>
              I Dewa Gede Aditya Sanjaya
            </Text>
            <Text style={{color: 'blue', fontWeight: 'bold'}}>No Nota</Text>
            <Text style={{textDecorationLine: 'underline'}}>ABCD1234</Text>
            <Text style={{color: 'blue', fontWeight: 'bold'}}>Alamat</Text>
            <Text style={{textDecorationLine: 'underline'}}>
              Jalan Kampungan
            </Text>
            <Text style={{color: 'blue', fontWeight: 'bold'}}>
              Nomer Telepon
            </Text>
            <Text style={{textDecorationLine: 'underline'}}>081296622517</Text>
            <Text style={{color: 'blue', fontWeight: 'bold'}}>Jumlah Item</Text>
            <Text style={{textDecorationLine: 'underline'}}>12</Text>
          </View>
          <View
            style={{
              flex: 3,
              justifyContent: 'flex-end',
              alignItems: 'flex-end',
            }}>
            <Image source={require('./bawah.png')} />
          </View>
        </View>
      </View>
    );
  }
}
