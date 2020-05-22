/*This is an Example of YouTube integration in React Native*/
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  PixelRatio,
  Image,
} from 'react-native';
import YouTube, {
  YouTubeStandaloneIOS,
  YouTubeStandaloneAndroid,
} from 'react-native-youtube';

export default class RCTYouTubeExample extends React.Component {
  state = {
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

  render() {
    return (
      <ScrollView
        style={styles.container}
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
            videoId="WZwr2a_lFWY"
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
            Error Handling Exception - C++
          </Text>
        </View>
        <View style={{flexDirection: 'row', marginTop: 10, marginLeft: 10}}>
          <Image
            style={{borderRadius: 40}}
            source={require('./src/PakMata.png')}
          />
          <View style={{flexDirection: 'column', marginLeft: 20}}>
            <Text style={{fontWeight: 'bold'}}>Permata Nur</Text>
            <Text>Posted: 30 April 2020</Text>
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
          <View style={{flexDirection: 'row', marginTop: 10}}>
            <Text>File: </Text>
            <TouchableOpacity>
              <Text style={{color: '#132F64'}}>
                Materi Error Handling Exception - C++
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Playing / Looping */}
        <View style={styles.buttonGroup}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.setState((s) => ({isPlaying: !s.isPlaying}))}>
            <Text style={styles.buttonText}>
              {this.state.status == 'playing' ? 'Pause' : 'Play'}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  buttonGroup: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  button: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    alignSelf: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: 'blue',
  },
  buttonTextSmall: {
    fontSize: 15,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  player: {
    alignSelf: 'stretch',
  },
});
