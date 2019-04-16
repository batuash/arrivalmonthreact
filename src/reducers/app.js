// @flow
import { ADD_TIMESTAMP, type AddTimeStampAction } from '../actions';

const defaultUser = { id: 'default', entries: []};

type State = {
  timeStamps: any[],
  users: any[]
};

export const initialState: State = {
  timeStamps: [],
  users: [defaultUser]
};

const app = (state: State = initialState, { type, ...payload }: AddTimeStampAction) => {
  switch (type) {
    case ADD_TIMESTAMP:
      return { timeStamps: [...state.timeStamps, payload.timeStamp] };
    default:
      return state;
  }
};

export default app;
