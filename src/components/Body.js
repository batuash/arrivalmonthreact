import React from 'react';
import { connect } from 'react-redux';
import Clock from 'react-live-clock';
import { addTimeStamp } from '../actions';

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

// Users = []
// Users -> years -> months -> days -> entries 

const Body = ({ addTimeStamp }) => {
  let dateNow = Date.now();
  let date = new Date(Date.now());
  console.log(date.getFullYear(date));
  console.log(date.getMonth(date));
  console.log(date.getDate(date));
  console.log(date.getDay(date));
  console.log(date.getTime(date));




  return (
    <div className="body">
      <Day />
      <Time />
      <div>
        <div className="enterBtn" onClick={() => addTimeStamp(Date.now())}>
          <span>Enter</span>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = { addTimeStamp };

export default connect(null, mapDispatchToProps)(Body);
