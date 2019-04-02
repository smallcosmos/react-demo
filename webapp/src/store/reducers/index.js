import {combineReducers} from 'redux';
import count from './counter';

const appStore = combineReducers({
  count
});

export default appStore;

