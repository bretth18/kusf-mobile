import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Home from './src/components/Home';


const MainNavigator = StackNavigator({
  Home: { screen: Home},
});

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <MainNavigator style={{ width: Dimensions.get('window').width }} />
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