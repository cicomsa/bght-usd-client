import {
  GET_CATEGORY_PRODUCTS,
  GET_MEAL_PRODUCTS,
  GET_ALL_PRODUCTS,
  ADD_PRODUCT,
  REMOVE_PRODUCT
} from '../actions/index';

export default function(state = [], { type, payload }) {
  switch (type) {
    case GET_ALL_PRODUCTS:
      return payload;
    case GET_MEAL_PRODUCTS:
      return payload;
    case GET_CATEGORY_PRODUCTS:
      return payload;
    case ADD_PRODUCT:
      return state.concat(payload);
    case REMOVE_PRODUCT:
      return state.filter(product => product.id !== payload);
    default:
      return state;
  }
}
