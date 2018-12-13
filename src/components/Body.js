import React from 'react';
import Clock from 'react-live-clock';

const TIME_ZONE = 'Europe/Berlin';

const Button = ({text, onClick, ...props}) => <button onClick={onClick} > {text} </button>

const Body = () => (
  <div className="body">
    <div className="date">
      <Clock
        format={'D'}
        timezone={TIME_ZONE}
        className="clock"
      />
    </div>
    <div className="time">
      <Clock
        format={'HH:mm'}
        ticking={true}
        timezone={TIME_ZONE}
        className="clock"
      />
    </div>
    <div>
      <Button text={'Enter'} onClick={() => console.log('clicked')}/>
    </div>
  </div>
);

export default Body;
