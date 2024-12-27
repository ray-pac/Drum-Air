import * as React from 'react';
import { animations, easings } from 'react-animation'
import Planet1 from '../../assets/images/Planet.png'
import Planet2 from '../../assets/images/Planet-1.png'
import Planet3 from '../../assets/images/Planet-2.png'

export default function Collaboratopn() {

  return (
    <div className='collaboration'>
      <img src={Planet1} className='collar_planet_1' />
      <img src={Planet2} className='collar_planet_2' />
      <img src={Planet3} className='collar_planet_3' />
      <div className='collaboration_main'>
        <div className='collaboration_brand' />
        <div className='collaboration_employee' />
        <div className='collaboration_student' />
      </div>
    </div>
  );
}


const styles = {
  collab_1: {
    width: "364px",
    height: "669px",
  },
  animation: {
    animation: `pop-in ${easings.easeOutExpo} 900ms forwards`
  }
}