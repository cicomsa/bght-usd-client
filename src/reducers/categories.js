import {
  GET_CATEGORIES,
  ADD_CATEGORY,
  REMOVE_CATEGORY
} from '../actions/index';

export default function(state = [], { type, payload }) {
  switch (type) {
    case GET_CATEGORIES:
      return payload;
    case ADD_CATEGORY:
      return state.concat(payload);
    case REMOVE_CATEGORY:
      return state.filter(category => category.id !== payload);
    default:
      return state;
  }
}
