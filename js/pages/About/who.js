import * as React from 'react';
import { useEffect, useRef } from 'react';
import { animations } from 'react-animation'
import { useInView } from "react-intersection-observer";
import '../../assets/css/styles.css';
import '../../assets/css/animated.css';

const styles = {
  animations: {
    animation: 'slideInLeft 0.5s ease-out forwards',
  }
}

export default function Play() {
  const buttonRefs = useRef([]);
  const [hover, setHover] = React.useState(false);

  const [ref, inView] = useInView({
    threshold: 0.6, // Trigger when 10% of the component is visible
  });

  return (
    <div className='play-container' ref={ref}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div>
        <button className='whos hidden' />
      </div>
      <div>
        <button
          style={(hover || inView) ? styles.animations : { textAlign: "center" }}
          className='mission hidden'
        ></button>
        <button
          style={(hover || inView) ? { animation: 'slideInLeft 0.7s ease-out forwards' } : { textAlign: "center" }}
          className='vision hidden'
        ></button>
      </div>
    </div>
  );
}
