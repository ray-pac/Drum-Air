import * as React from 'react';
import { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom"
import Planet_violet from '../../assets/images/HomePage/Planet_violet.png'
import Planet_Green from '../../assets/images/HomePage/Planet_Green.png'
import Planet_yellow from '../../assets/images/HomePage/Planet_yellow.png'
import '../../assets/css/styles.css';
import '../../assets/css/animated.css';

export default function Play() {
  const [hover, setHover] = React.useState(false);
  const device = useSelector((status) => status.status.mobile);

  const link_section = () => {
    setHover(true);
  }

  // const getData = () => {
  //   axios.get(`http://localhost:5005/api/home/2`)
  //     .then(response => {
  //       console.log(response.data.homes);
  //     })
  //     .catch(error => {
  //       console.error('There was an error!', error);
  //     });
  // }

  return (
    <section id='play'>
      <div className='bento'
        onMouseEnter={() => link_section()}
        onMouseLeave={() => setHover(false)}
      >
        <img src={Planet_violet} className={hover ? 'bento_violet_animation' : "bento_violet"} />
        <img src={Planet_Green} className={hover ? 'bento_green_animation' : 'bento_green'} />
        <img src={Planet_yellow} className={hover ? 'bento_yellow_animation' : 'bento_yellow'} />
        <div style={{ overflow: "hidden" }}>
          <div style={{ textAlign: "center" }}>
            <button className={hover ? `drumming drumming_animation ` : "drumming"} />
            <button className={hover ? 'citing citing_animation' : "citing"} />
          </div>
          <div style={{ textAlign: "center" }}>
            <button className={hover ? 'star star_animation' : "star"} />
            <button className={hover ? 'feel feel_animation' : "feel"} />
          </div>
          <div style={{ textAlign: "center" }}>
            <a href="/about"><button className={hover ? 'learn learn_animation' : "learn"} /></a>
            <button className={hover ? 'drumplay drumplay_animation' : "drumplay"} />
          </div>
        </div>
      </div>
    </section >
  );
}
