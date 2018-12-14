import { ADD_TIMESTAMP } from '../actions';

const initialState = {
  timeStamps: []
};

export { initialState };

const app = (state = initialState, { type, ...payload }) => {
  switch (type) {
    case ADD_TIMESTAMP:
      return { timeStamps: [...state.timeStamps, payload.timeStamp] };
    default:
      return state;
  }
};

export default app;
