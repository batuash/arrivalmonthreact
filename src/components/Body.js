import React from 'react';
import Clock from 'react-live-clock';

const TIME_ZONE = 'Europe/Berlin';

const Button = ({text, onClick, ...props}) => <button onClick={onClick} > {text} </button>

const Date = () => <div className="date">
  <Clock
    format={'D'}
    timezone={TIME_ZONE}
    className="clock"
  />
</div>

const Time = () => <div className="time">
  <Clock
    format={'HH:mm'}
    ticking={true}
    timezone={TIME_ZONE}
    className="clock"
  />
</div>

const Body = () => (
  <div className="body">
    <Date />
    <Time />
    <div>
      <div className="enterBtn" onClick={() => console.log('clicked')}>
        <span>Enter</span>
      </div>
    </div>
  </div>
);

export default Body;
