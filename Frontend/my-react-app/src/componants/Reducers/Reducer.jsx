import { combineReducers } from 'redux';
import authReducer from './Authreducer';
// import tourReducers from './TourReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  // tour: tourReducers
});

export default rootReducer;