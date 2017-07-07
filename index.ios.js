import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import configureStore from './src/configureStore';
import AppWithNavigationState from './src/navigators/AppNavigator';
import App from './App';

const store = configureStore();

const ReduxApp = () => (
  <Provider store={store}>
    <AppWithNavigationState />
  </Provider>
)

AppRegistry.registerComponent('sfrent', () => ReduxApp);
