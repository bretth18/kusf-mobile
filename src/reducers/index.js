import { combineReducers } from 'redux';
import appData from './dataReducer';
import nav from './navReducer';
import media from './mediaReducer';

const rootReducer = combineReducers({
  appData,
  nav,
  media
});


export default rootReducer
