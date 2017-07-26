import React, { Component } from 'react';
import { Button, Image, StyleSheet, Text, View, ListView, DeviceEventEmitter, ActivityIndicator} from 'react-native';
import { RkCard, RkButton, RkTheme } from 'react-native-ui-kitten';
import { connect } from 'react-redux';
import { fetchData } from '../actions/actions';
import { startStream, stopStream, pauseStream, resumeStream } from '../actions/mediaActions';
import { Actions } from 'react-native-router-flux'

class Player extends Component {

  constructor(props){
    super(props);
    // this.props.fetchData();
  }

  componentDidMount() {
    // temporary method to poll
    this.props.fetchData();
    let fetchTimer = setInterval(() => {this.props.fetchData()}, 50000);
    // setTimeout(() => {this.props.fetchData()}, 0);
    // this.props.fetchData();
    // console.log(this.props);
  }
  componentWillUnmount() {

    clearInterval(fetchTimer);
  }

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
    // LOADING SHIT
    if (!this.props.appData.dataFetched) {
      console.log('loading...');
      return (


        <View style={styles.container}>

          <RkCard rkType='shadowed' style={styles.cardStyle} >
            <View rkCardHeader>
              <Text style={styles.cardText}> Now Playing: </Text>
              <Text style={styles.cardText}>loading...          </Text>
            </View>
            <View rkCardContent>
              <ActivityIndicator />
              <Text style={styles.cardText}> title: loading...</Text>
              <Text style={styles.cardText}> artist: loading...</Text>
              <Text style={styles.cardText}> year: loading...</Text>

            </View>
            <View rkCardFooter>
              <RkButton style={styles.button} contentStyle={styles.contentButton} onPress={() => this.props.startStream()}>play</RkButton>
              <RkButton style={styles.button} contentStyle={styles.contentButton} onPress={() => this.props.stopStream()} >stop</RkButton>
              <View >
                <RkButton style={styles.button} contentStyle={styles.contentButton} onPress={() => this.props.pauseStream()}>pause</RkButton>
                <RkButton style={styles.button} contentStyle={styles.contentButton} onPress={() => this.props.resumeStream()} >resume</RkButton>
                <RkButton style={styles.button} contentStyle={styles.contentButton} onPress={() => Actions.tracks()} >tracks</RkButton>

              </View>
              <Button color={styles.button} title="tracks"  onPress={() => Actions.tracks()} />

            </View>

          </RkCard>
        </View>
      );
    }
    // debug
    console.log('PROPS RENDER', this.props);
    return (
      <View style={styles.container}>

        <RkCard rkType='shadowed' style={styles.cardStyle} >
          <View rkCardHeader>
            <Text style={styles.cardText}> Now Playing: </Text>
            <Text style={styles.cardText}>{this.props.appData.data.now.title}            <Image rkCardImg style={{width: 30, height: 30}}source={{uri:this.props.appData.data.now.Image.url_lg}} />
</Text>
            {/* <Image rkCardImg source={{uri:this.state.currentShow.Image.url_sm}} /> */}
          </View>
          <View rkCardContent>
            <Image  style={{width: 300, height: 300, justifyContent: 'center', alignItems: 'center'}} source={{uri:'https://lastfm-img2.akamaized.net/i/u/'+this.props.appData.data.Track.lastfm_art}} />

            <Text style={styles.cardText}> title: {this.props.appData.data.Track.title}</Text>
            <Text style={styles.cardText}> artist: {this.props.appData.data.Track.artist}</Text>
            <Text style={styles.cardText}> year: {this.props.appData.data.Track.year}</Text>


          </View>
          <View rkCardFooter style={{justifyContent: "center"}}>
            <RkButton style={styles.button} contentStyle={styles.contentButton} onPress={() => this.props.startStream()}>play</RkButton>
            <RkButton style={styles.button} contentStyle={styles.contentButton} onPress={() => this.props.stopStream()} >stop</RkButton>

              <RkButton style={styles.button} contentStyle={styles.contentButton} onPress={() => this.props.pauseStream()}>pause</RkButton>
              <RkButton style={styles.button} contentStyle={styles.contentButton} onPress={() => this.props.resumeStream()} >resume</RkButton>



          </View>

        </RkCard>
        <Button color="#9EEFE5" title="track list" onPress={() => Actions.tracks()} />

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
    paddingRight: 10,
    paddingLeft: 10,
    marginLeft: 5,
    marginRight: 5,
    width:80,
    height:30,
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

const mapStateToProps = (state) => {
  return {
    appData: state.appData,
    media: state.media
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: () => dispatch(fetchData()),
    startStream: () => dispatch(startStream()),
    stopStream: () => dispatch(stopStream()),
    pauseStream: () => dispatch(pauseStream()),
    resumeStream: () => dispatch(resumeStream())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Player);
