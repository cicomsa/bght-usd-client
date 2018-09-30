import { GET_MEALS, ADD_MEAL, REMOVE_MEAL } from '../actions/index';

export default function(state = [], { type, payload }) {
  switch (type) {
    case GET_MEALS:
      return payload;
    case ADD_MEAL:
      return state.concat(payload);
    case REMOVE_MEAL:
      return state.filter(meal => meal.id !== payload);
    default:
      return state;
  }
}
