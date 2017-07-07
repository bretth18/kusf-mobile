import { NavigationActions } from 'react-navigation';

import { AppNavigator } from '../navigators/AppNavigator';


// start w/ two routes

const initialNavState = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('Player'));



// // Start with two routes: The Main screen, with the Login screen on top.
// const firstAction = AppNavigator.router.getActionForPathAndParams('Main');
// const tempNavState = AppNavigator.router.getStateForAction(firstAction);
// const secondAction = AppNavigator.router.getActionForPathAndParams('Login');
// const initialNavState = AppNavigator.router.getStateForAction(
//   secondAction,
//   tempNavState
// );


export default function nav(state = initialNavState, action) {
  let nextState;
  switch (action.type) {
    case 'Home':
      nextState = AppNavigator.router.getStateForaction(
        NavigationActions.back(),
        state
      );
    break;
    // example
    // case 'Logout':
    //   nextState = AppNavigator.router.getStateForAction(
    //     NavigationActions.navigate({ routeName: 'Login' }),
    //     state
    //   );
    // break;
    default:
      nextState = AppNavigator.router.getStateForAction(action,state);
      break;
  }

  // return original state if nextState is null or undefined
  return nextState || state;
}
