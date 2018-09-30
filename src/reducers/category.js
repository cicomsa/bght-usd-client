import { GET_CATEGORY, UPDATE_CATEGORY } from '../actions/index';

export default function(state = null, { type, payload }) {
  switch (type) {
    case GET_CATEGORY:
      return payload;
    case UPDATE_CATEGORY:
      return {
        ...state,
        ...payload
      };

    default:
      return state;
  }
}
