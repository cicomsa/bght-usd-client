import { GET_BUDGET, ADD_BUDGET, REMOVE_BUDGET } from '../actions/index';

export default function(state = [], { type, payload }) {
  switch (type) {
    case GET_BUDGET:
      return payload;
    case ADD_BUDGET:
      return state.concat(payload);
    case REMOVE_BUDGET:
      return state.filter(budget => budget.id !== payload);
    default:
      return state;
  }
}
