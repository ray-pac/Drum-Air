import * as React from 'react'
import { Link } from 'react-router-dom'
import Asteroid from '../../assets/images/About/section_4/About Our Air+ Community.png'
import '../../assets/css/styles.css'
import '../../assets/css/animated.css'
import './jitter.css'

export default function Events() {
  return (
    <div className='mask_back'>
      <div className='events_about' />
      <div className='about_events_detail' >
          <div style={{ textAlign: 'center' }}>
            <img src={Asteroid} alt='Asteroid' className='abouts-title' />
            <div className='abouts-where'>
              The Air+ Community is where users from all walks of life connect - our
              players, creators, merchants and partners.
            </div>
            <div>
              <div style={{ marginTop: "15%", color: 'white', fontFamily: "Roboto Regular" }}>Embark on your rhythmic journey today!</div>
              <a target='_blank' href="https://t.me/airdrumming"><button className='join' /></a>
            </div>
          </div>
        </div>
    </div>
  );
}
