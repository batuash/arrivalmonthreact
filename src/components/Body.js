// @flow

import React from 'react';
import { connect } from 'react-redux';
import Clock from 'react-live-clock';
import { addTimeStamp, type TimeStamp } from '../actions';

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

const onEnterButtonClick = (): void => {
  let date = Date.now();

  addTimeStamp({
    year: date.getFullYear(date),
    month: date.getMonth(date),
    date: date.getDate(date),
    timeStamp: date.getTime(date)
  });
}

const Body = ({ addTimeStamp }) => {

  return (
    <div className="body">
      <Day />
      <Time />
      <div>
        <div className="enterBtn" onClick={onEnterButtonClick}>
          <span>Enter</span>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = { addTimeStamp };

export default connect(null, mapDispatchToProps)(Body);
