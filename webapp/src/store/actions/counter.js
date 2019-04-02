import {COUNT_CHANGE} from './actionType';

export const countChange = (operate) => {
  return {
    type: COUNT_CHANGE,
    operate: operate
  }
}
