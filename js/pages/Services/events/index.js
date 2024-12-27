// SolarSystem.js
import React, { useState, useEffect, useRef } from 'react';
import Planet_green from '../../../assets/images/Community/Planet_Green.png'
import Planet_red from '../../../assets/images/Community/Planet Red.png'

const CommunityCom = () => {
  const [hover, setHover] = React.useState(false);
  

  return (
    <div className='service-events' onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      <img src={Planet_green} className={hover ? 'events_planet_violet_animation' : "events_planet_violet"} />
      <img src={Planet_red} className={hover ? 'events_planet_yellow_animation' : "events_planet_yellow"} />
      <div className='service-events-detail'>
        <div >
          <div style={{ borderRadius: 50 }} className={hover ? 'service_events-image provide_animation' : "service_events-image"} />
        </div>
        <div >
          <div>
            <div className={hover ? 'events-intro school_right_animation' : "events-intro"} />
          </div>
          <div style={{ marginTop: 15 }}>
            <div className={hover ? 'events-provide provid_right_animation' : "events-provide"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityCom;
