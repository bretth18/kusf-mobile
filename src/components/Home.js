import React from 'react';
import { Image, StyleSheet, Text, View, ListView, DeviceEventEmitter, ActivityIndicator} from 'react-native';
import { RkCard, RkButton } from 'react-native-ui-kitten';
import RNAudioStreamer from 'react-native-audio-streamer';


export default class Home extends React.Component {

  constructor(props){
    super(props);

    // shitty
    RNAudioStreamer.setUrl('http://104.236.145.45:8000/stream');
    this.state = {
      currentTrack: {},
      isLoading: true
    };
  }

  componentDidMount() {
    // this.subscription = DeviceEventEmitter.addListener('RNAudioStreamerStatusChanged',this.statusChanged.bind(this))
    // this.getTrackFromApi();
    this.getTrackFromApi();
    // return fetch('http://www.kusf.org/api/broadcasting')
    //   .then((response) => response.json())
    //   .then((responseJson) => {
    //     console.log('json response:', responseJson);
    //     this.setState({
    //       isLoading: false,
    //       currentTrack: responseJson.Track,
    //     }, function() {
    //       // do something with new state
    //     });
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });

  }

  async getTrackFromApi() {
    try {
      let response = await fetch('http://www.kusf.org/api/broadcasting');
      let responseJson = await response.json();
      console.log(responseJson);
      // uhh
      this.setState({
        currentTrack: responseJson.Track,
        isLoading: false
      });

      return responseJson.Track;
    } catch(error) {
      console.error(error);
    }
  }


  statusChanged(status) {
    // Player Status:
    // - PLAYING
    // - PAUSED
    // - STOPPED
    // - FINISHED
    // - BUFFERING
    // - ERROR
  }

  static navigationOptions = {
    title: 'Home',
  };
  render() {
    if (this.state.isLoading) {
      return (
        <View style={{flex:1, paddingTop:20}}>
          <ActivityIndicator />
        </View>
      );
    }
    var imageSource = 'https://lastfm-img2.akamaized.net/i/u/'+this.state.currentTrack.lastfm_art;
    return (
      <View style={styles.container}>

        <RkCard>
          <View rkCardHeader>
            <Text> Now Playing </Text>
          </View>
          <Image rkCardImg source={{uri:imageSource}} />
          <View rkCardContent>
            <Text> title: {this.state.currentTrack.title}</Text>
            <Text> artist: {this.state.currentTrack.artist}</Text>
            <Text> year: {this.state.currentTrack.year}</Text>


          </View>
          <View rkCardFooter>
            <RkButton>press me</RkButton>
          </View>

        </RkCard>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
