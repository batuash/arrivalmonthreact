// @flow
import { ADD_TIMESTAMP, type AddTimeStampAction } from '../actions';
import { getCurrentUser } from '../selectors';

export const defaultUser = { id: 'default', entries: []};

export type Entry = {
  year: number,
  month: number,
  date: number,
  timestamp: number
};

export type User = {
  id: string,
  entries: Entry[]
};

export type State = {
  timeStamps: any[],
  users: User[]
};

export const initialState: State = {
  timeStamps: [],
  users: [defaultUser]
};

const app = (state: State = initialState, { type, ...payload }: AddTimeStampAction) => {
  switch (type) {
    case ADD_TIMESTAMP:
      let { timeStamp } = payload;
      let currentUser = getCurrentUser(); //@todo
      let newUsers = [ ...state.users, user]
      return { users: [...state.timeStamps, payload.timeStamp] };
    default:
      return state;
  }
};

export default app;
