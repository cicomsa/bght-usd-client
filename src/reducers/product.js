import { GET_PRODUCT, UPDATE_PRODUCT } from '../actions/index';

export default function(state = null, { type, payload }) {
  switch (type) {
    case GET_PRODUCT:
      return payload;
    case UPDATE_PRODUCT:
      return {
        ...state,
        ...payload
      };

    default:
      return state;
  }
}
