import React, { Component } from 'react';
import { Button, Image, StyleSheet, Text, View, ListView, DeviceEventEmitter, ActivityIndicator} from 'react-native';
import { RkCard, RkButton, RkTheme } from 'react-native-ui-kitten';
import { connect } from 'react-redux';
import { fetchTracks } from '../actions/actions';


class Tracks extends Component {

  constructor(props){
    super(props);
    // this.props.fetchData();
  }

  componentDidMount() {
    this.props.fetchTracks();
    // temporary method to poll
    // let fetchTimer = setInterval(() => {this.props.fetchData()}, 10000);
    // setTimeout(() => {this.props.fetchData()}, 0);
    // this.props.fetchData();
    // console.log(this.props);
  }


  static navigationOptions = {
      headerTitle: 'TRACKS',
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

  renderCard() {
    return (
      <RkCard rkType='shadowed' style={styles.cardStyle} >
        <View rkCardHeader>

        </View>
        <View rkCardContent>


        </View>
      </RkCard>
    )
  }


  render() {
    if (!this.props.appData.dataFetched) {
      console.log('loading...');
      return (
        <View style={{flex:1, paddingTop:20}}>
          <ActivityIndicator />
        </View>
      );
    }
    // debug
    console.log('PROPS RENDER', this.props);
    return (
      <View style={styles.container}>
        {
          this.props.appData.data.length ? (
            this.props.appData.data.map((id,i) => {
              return <View key={i} >

                <Text> title: {id.title} </Text>
                <Text> artist: {id.artist} </Text>
                <Text> played: {id.played} </Text>
              </View>
            })
          ): null
        }
        {/* <RkCard rkType='shadowed' style={styles.cardStyle} >
          <View rkCardHeader>

          </View>
          <View rkCardContent>


          </View>
        </RkCard> */}
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

const mapStateToProps = (state) => {
  return {
    appData: state.appData,
    media: state.media
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTracks: () => dispatch(fetchTracks())
    // fetchData: () => dispatch(fetchData()),
    // startStream: () => dispatch(startStream()),
    // stopStream: () => dispatch(stopStream()),
    // pauseStream: () => dispatch(pauseStream()),
    // resumeStream: () => dispatch(resumeStream())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tracks);
