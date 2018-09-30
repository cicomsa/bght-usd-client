import { GET_MEAL, UPDATE_MEAL } from '../actions/index';

export default function(state = null, { type, payload }) {
  switch (type) {
    case GET_MEAL:
      return payload;
    case UPDATE_MEAL:
      return {
        ...state,
        ...payload
      };

    default:
      return state;
  }
}
