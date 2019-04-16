// @flow
export type AddTimeStampAction = {
  type: string,
  timeStamp: number;
};

export const ADD_TIMESTAMP = 'ADD_TIMESTAMP';

export const addTimeStamp = (timeStamp: number): AddTimeStampAction  => ({
  type: ADD_TIMESTAMP,
  timeStamp
});
