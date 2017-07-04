import React from 'react';
import { Button, Image, StyleSheet, Text, View, ListView, DeviceEventEmitter, ActivityIndicator} from 'react-native';
import { RkCard, RkButton, RkTheme } from 'react-native-ui-kitten';
import MusicControl from 'react-native-music-control';

import { ReactNativeAudioStreaming } from 'react-native-audio-streaming';

const streamUrl = 'http://104.236.145.45:8000/stream';

export default class Home extends React.Component {

  constructor(props){
    super(props);

    // shitty

    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);

    this.state = {
      currentTrack: {},
      isLoading: true,
      trackPlaying: false,
      paused: false,
      currentShow: null
    };
  }

  componentDidMount() {

    MusicControl.enableBackgroundMode(true);

    return fetch('http://www.kusf.org/api/broadcasting')
      .then((response) => response.json())
      .then((responseJson) => {
        console.log('json response:', responseJson);
        this.setState({
          isLoading: false,
          currentTrack: responseJson.Track,
          currentShow: responseJson.now,
        }, function() {
          // do something with new state
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  play() {

    if (this.state.paused){
      // resume
      console.log('resumed');
      ReactNativeAudioStreaming.resume();

      this.setState({
        trackPlaying: true,
        paused: false
      });
    } else {
      // new sesh
      console.log('new sesh');
      console.log(this.props.url);
      ReactNativeAudioStreaming.play(streamUrl,
        {showIniOSMediaCenter: true, showInAndroidNotifications: true});
        this.setState({
          trackPlaying: true,
          paused: false
        })
    }

    MusicControl.setNowPlaying({
      title: this.state.currentTrack.title,
      artwork: 'https://i.imgur.com/e1cpwdo.png',
      artist: this.state.currentTrack.artist,
      album: this.state.currentTrack.album,
      genre: ' ',
      duration: 0,
      date: this.state.currentTrack.year,
      rating: 0
    });
    MusicControl.enableControl('play', false);
    MusicControl.enableControl('pause', true);

  }

  pause() {
    ReactNativeAudioStreaming.pause();
    MusicControl.enableControl('play', false);
    MusicControl.enableControl('pause', true);
    this.setState({
      trackPlaying: false,
      paused: true
    });
  }

  // async getTrackFromApi() {
  //   try {
  //     let response = await fetch('http://www.kusf.org/api/broadcasting');
  //     let responseJson = await response.json();
  //     console.log(responseJson);
  //     // uhh
  //     this.setState({
  //       currentTrack: responseJson.Track,
  //       isLoading: false
  //     });
  //
  //     return responseJson.Track;
  //   } catch(error) {
  //     console.error(error);
  //   }
  // }



  static navigationOptions = {
      headerTitle: 'KUSF',
      headerTintColor: '#9EEFE5',
      headerTitleStyle: {
        color: '#9EEFE5',
        fontFamily: 'VT323',
        fontSize: 40,
      },
      headerStyle: {
        backgroundColor: '#162521',
      }
    };



  render() {
    if (this.state.isLoading) {
      console.log('loading...');
      return (
        <View style={{flex:1, paddingTop:20}}>
          <ActivityIndicator />
        </View>
      );
    }
    var imageSource = 'https://lastfm-img2.akamaized.net/i/u/'+this.state.currentTrack.lastfm_art;
    return (
      <View style={styles.container}>

        <RkCard rkType='shadowed' style={styles.cardStyle} >
          <View rkCardHeader>
            <Text style={styles.cardText}> Now Playing: </Text>
            <Text style={styles.cardText}>{this.state.currentShow.title}</Text>
            <Image rkCardImg source={{uri:this.state.currentShow.Image.url_lg}} />
          </View>
          <Image rkCardImg source={{uri:imageSource}} />
          <View rkCardContent>
            <Text style={styles.cardText}> title: {this.state.currentTrack.title}</Text>
            <Text style={styles.cardText}> artist: {this.state.currentTrack.artist}</Text>
            <Text style={styles.cardText}> year: {this.state.currentTrack.year}</Text>


          </View>
          <View rkCardFooter>
            <RkButton style={styles.button} contentStyle={styles.contentButton} onPress={() => this.play()}>play</RkButton>
            <RkButton style={styles.button} contentStyle={styles.contentButton} onPress={() => this.pause()} >pause</RkButton>

          </View>

        </RkCard>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3C474B',
    // alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#C0E0DE',
  },
  contentButton: {
    color: '#3C474B'
  },
  cardText: {
    color: '#9EEFE5',
    fontFamily: 'VT323'
  },
  cardStyle : {
    backgroundColor: '#162521'
  }
});
