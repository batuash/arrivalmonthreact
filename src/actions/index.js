// @flow
export type AddTimeStampAction = {
  type: string,
  timeStamp: TimeStamp;
};

export type TimeStamp = {
  year: number,
  month: number,
  date: number,
  timeStamp: number
}

export const ADD_TIMESTAMP: string = 'ADD_TIMESTAMP';

export const addTimeStamp = (timeStamp: TimeStamp): AddTimeStampAction  => ({
  type: ADD_TIMESTAMP,
  timeStamp
});
