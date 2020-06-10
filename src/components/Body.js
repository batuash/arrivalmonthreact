// @flow

import React from 'react';
import { connect } from 'react-redux';
import Clock from 'react-live-clock';
import { addTimeStamp, type TimeStamp } from '../actions';
import { getEntries } from '../selectors';

const TIME_ZONE = 'Europe/Berlin';

const Button = ({ text, onClick, ...props }) => (
  <button onClick={onClick}> {text} </button>
);

const Day = () => (
  <div className="date">
    <Clock format={'D'} timezone={TIME_ZONE} className="clock" />
  </div>
);

const Time = () => (
  <div className="time">
    <Clock
      format={'HH:mm'}
      ticking={true}
      timezone={TIME_ZONE}
      className="clock"
    />
  </div>
);

const Body = ({ addTimeStamp, entries }) => {
  const onEnterButtonClick = (): void => {
    const date = new Date();

    addTimeStamp({
      year: date.getFullYear(date),
      month: date.getMonth(date),
      date: date.getDate(date),
      timeStamp: date.getTime(date)
    });
  }

  return (
    <div className="body">
      <Day />
      <Time />
      <div>
        <div className="enterBtn" onClick={onEnterButtonClick}>
          <span>Enter</span>
        </div>
      </div>
      <div>
        {
          entries.map(
          ({year, month, date, timeStamp}) =>
            <p>year: {year}, month: {month}, date: {date}, time stap: {timeStamp}</p>
          )
        }
      </div>
    </div>
  );
};

const mapDispatchToProps = { addTimeStamp };
const mapStateToProps = ({ app: state}) => ({ entries: getEntries(state) });

export default connect(mapStateToProps, mapDispatchToProps)(Body);
