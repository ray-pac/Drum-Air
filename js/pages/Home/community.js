import * as React from 'react'
import { Link } from 'react-router-dom'
import Title from '../../assets/images/HomePage/Home_Section_3/title.png'
import Learn_more from '../../assets/images/HomePage/Home_Section_3/LearnMore_btn.png'
import Learn_more_hover from '../../assets/images/HomePage/Home_Section_3/LearnMore_btn_hover.png'

export default function Community() {

  const [hover, setHover] = React.useState(false);

  return (
    <div className='community'>
      <div className='community-image'></div>
      <div className='community-detail-container'>
        <div className='community-detail'>
          <img src={Title} className='community-title' />
          <div className='community-font-style'>
            We make rhythm learning accessible for people from all walks of life, especially the
            underserved communities, with our multi-functional
            AI-powered Air Drumming application.
          </div>
          <Link to="/services#community" >
            <button className='learn_button'
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
