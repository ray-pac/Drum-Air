import * as React from 'react'
import Sign from './home'
import Join from './play'
import './style.css'

export default function Main() {
  return (
    <div className='air_community_container'>
      <Sign />
      <Join />
    </div>
  );
}
