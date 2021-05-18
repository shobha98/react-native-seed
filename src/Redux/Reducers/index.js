import {combineReducers} from 'redux';

import counterReducer from './counterReducer';
import postReducer from './postReducer';
import networkInfoReducer from './networkInfoReducer';

const rootReducer = combineReducers({
  counterReducer,
  postReducer,
  networkInfoReducer,
});

export default rootReducer;
