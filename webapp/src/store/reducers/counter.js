import {COUNT_CHANGE} from '../actions/actionType';

const counter = (state = 0, action) => {
  switch(action.type) {
    case COUNT_CHANGE: {
      if(action.operate === 'add') {
        return state+1;
      }else {
        return state-1;
      }
    }
    default:
      return state
  }
}

export default counter;