import { combineReducers } from 'redux';
import appData from './dataReducer';
// import nav from './navReducer';
import media from './mediaReducer';

const rootReducer = combineReducers({
  appData,
  media
});


export default rootReducer
