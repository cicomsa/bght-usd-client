import { UPDATE_BUDGET } from '../actions/index';

export default function(state = null, { type, payload }) {
  switch (type) {
    case UPDATE_BUDGET:
      return {
        ...state,
        ...payload
      };

    default:
      return state;
  }
}
