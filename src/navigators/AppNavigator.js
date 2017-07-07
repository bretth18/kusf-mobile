import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';

import Home from '../components/Home';
import Demo from '../components/Demo';
import Player from '../components/Player';
import Tracks from '../components/Tracks';



export const AppNavigator = StackNavigator({
  Player: { screen: Player },
  Tracks: { screen: Tracks },
  // Home: { screen: Home },
});

const AppWithNavigationState =({ dispatch, nav }) => (
  <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav})} />
);

AppWithNavigationState.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);
