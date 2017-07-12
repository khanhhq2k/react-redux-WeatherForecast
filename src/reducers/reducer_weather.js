import { FETCH_WEATHER } from '../actions/index';
export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      // insert new data first, then insert existing state data to the array
      return [action.payload.data,...state]; //[data, data, data]
      break;
  }
  return state;
}
