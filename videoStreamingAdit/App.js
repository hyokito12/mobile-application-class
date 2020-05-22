import React, {Component} from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  PixelRatio,
  ScrollView,
} from 'react-native';
import YouTube, {
  YouTubeStandaloneIOS,
  YouTubeStandaloneAndroid,
} from 'react-native-youtube';
import {Thumbnail} from 'react-native-thumbnail-video';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'BLACKPINK',
    subtitle: 'DDU-DU DDU-DU',
    url: 'IHNzOHi8sJs',
    postedDate: '29 February 2012',
    imageIcon:
      'https://yt3.ggpht.com/a/AATXAJy-qnzrdorPZt6XIBxSu2tqcZLRR8crJlpoUA=s288-c-k-c0xffffffff-no-rj-mo',
    linkYoutubenya: 'https://www.youtube.com/watch?v=IHNzOHi8sJs',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'TWICE',
    subtitle: 'LIKEY',
    url: 'V2hlQkVJZhE',
    postedDate: '31 April 2017',
    imageIcon:
      'https://yt3.ggpht.com/a/AATXAJyPqlLtvmnqdfcM_DjUC4ezEP3fR5bvIwciZw=s288-c-k-c0xffffffff-no-rj-mo',
    linkYoutubenya: 'https://www.youtube.com/watch?v=V2hlQkVJZhE',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'JENNIE',
    subtitle: 'SOLO',
    url: 'b73BI9eUkjM',
    postedDate: '31 June 2019',
    imageIcon:
      'https://i.pinimg.com/originals/e9/80/74/e980741b5bdabf9ea6e1797dd53d58d1.jpg',
    linkYoutubenya: 'https://www.youtube.com/watch?v=b73BI9eUkjM',
  },
];

class App extends Component {
  state = {
    modalVisible: false,
    name: '',
    linkYT: '',
    postedTime: '',
    iconYT: '',
    subtitleLagu: '',
    isReady: false,
    status: null,
    quality: null,
    error: null,
    isPlaying: true,
    isLooping: true,
    duration: 0,
    currentTime: 0,
    fullscreen: false,
    containerMounted: false,
    containerWidth: null,
  };

  setModalVisible = (
    visible,
    nama,
    linkYoutube,
    timePosting,
    iconGambar,
    judul,
  ) => {
    this.setState({
      modalVisible: visible,
      name: nama,
      linkYT: linkYoutube,
      postedTime: timePosting,
      iconYT: iconGambar,
      subtitleLagu: judul,
    });
  };

  render() {
    return (
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <View style={styles.modalView}>
            <View
              style={styles.container2}
              onLayout={({
                nativeEvent: {
                  layout: {width},
                },
              }) => {
                if (!this.state.containerMounted) {
                  this.setState({containerMounted: true});
                }
                if (this.state.containerWidth !== width) {
                  this.setState({containerWidth: width});
                }
              }}>
              {this.state.containerMounted && (
                <YouTube
                  ref={(component) => {
                    this._youTubeRef = component;
                  }}
                  // You must have an API Key for the player to load in Android
                  apiKey="AIzaSyAquJB2gfy5ic_GL2klsWYyO4xgo8gmgW8"
                  // Un-comment one of videoId / videoIds / playlist.
                  // You can also edit these props while Hot-Loading in development mode to see how
                  // it affects the loaded native module
                  videoId={this.state.linkYT}
                  // videoIds={['HcXNPI-IPPM', 'XXlZfc1TrD0', 'czcjU1w-c6k', 'uMK0prafzw0']}
                  // playlistId="PLF797E961509B4EB5"
                  play={this.state.isPlaying}
                  loop={this.state.isLooping}
                  fullscreen={this.state.fullscreen}
                  controls={1}
                  style={[
                    {
                      height: PixelRatio.roundToNearestPixel(
                        this.state.containerWidth / (16 / 9),
                      ),
                    },
                    styles.player,
                  ]}
                  onError={(e) => this.setState({error: e.error})}
                  onReady={(e) => this.setState({isReady: true})}
                  onChangeState={(e) => this.setState({status: e.state})}
                  onChangeQuality={(e) => this.setState({quality: e.quality})}
                  onChangeFullscreen={(e) =>
                    this.setState({fullscreen: e.isFullscreen})
                  }
                  onProgress={(e) =>
                    this.setState({
                      duration: e.duration,
                      currentTime: e.currentTime,
                    })
                  }
                />
              )}

              <View
                style={{
                  backgroundColor: '#132F64',
                  height: 50,
                  justifyContent: 'center',
                }}>
                <Text style={{color: 'white', marginLeft: 10}}>
                  {this.state.subtitleLagu}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  marginTop: 10,
                  marginLeft: 10,
                }}>
                <Image
                  style={{borderRadius: 40, height: 40, width: 40}}
                  source={{uri: this.state.iconYT}}
                />
                <View style={{flexDirection: 'column', marginLeft: 20}}>
                  <Text style={{fontWeight: 'bold'}}>{this.state.name}</Text>
                  <Text>{this.state.postedTime}</Text>
                </View>
              </View>
              <View
                style={{
                  height: 2,
                  width: '100%',
                  backgroundColor: '#132F64',
                  marginTop: 10,
                  marginHorizontal: 10,
                }}
              />
              <View style={{margin: 10}}>
                <Text style={{fontWeight: 'bold'}}>Description:</Text>
                <Text style={{textAlign: 'justify'}}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Text>
              </View>

              <TouchableOpacity
                style={{
                  ...styles.openButton,
                  margin: 50,
                }}
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
                <Text style={styles.textStyle}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            alignContent: 'center',
            marginTop: 100,
          }}>
          <Text style={styles.h2text}>TOP 3 KPOP MV</Text>
          <FlatList
            data={DATA}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => (
              <Thumbnail
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  alignContent: 'center',
                  margin: 10,
                  width: 200,
                  height: 200,
                }}
                onPress={() => {
                  this.setModalVisible(
                    true,
                    item.title,
                    item.url,
                    item.postedDate,
                    item.imageIcon,
                    item.subtitle,
                  );
                }}
                url={item.linkYoutubenya}
              />
            )}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  container2: {
    backgroundColor: 'white',
    flex: 1,
  },
  h2text: {
    marginTop: 10,
    fontFamily: 'Helvetica',
    fontSize: 36,
    fontWeight: 'bold',
  },
  flatview: {
    paddingTop: 30,
    paddingBottom: 30,
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 30,
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: '#DA291C',
  },
  name: {
    fontFamily: 'Verdana',
    fontSize: 18,
    color: 'white',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    width: '90%',
    height: '90%',
    marginLeft: 20,
    marginTop: 50,
    backgroundColor: 'white',
    borderRadius: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: '#DA291C',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    width: 100,
    height: 20,
  },
  buttonText: {
    fontSize: 18,
    color: 'blue',
  },
});

export default App;
