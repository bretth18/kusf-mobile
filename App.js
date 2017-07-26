import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';

import Player from './src/components/Player';
import Tracks from './src/components/Tracks';



export default class App extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="home" component={Player} title="Home" initial ></Scene>
          <Scene key="tracks" component={Tracks} title="tracks" ></Scene>
        </Scene>
      </Router>
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
