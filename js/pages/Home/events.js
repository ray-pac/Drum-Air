import * as React from 'react';
import { Link } from "react-router-dom";
import Title from '../../assets/images/HomePage/Home_Section_4/EVENTS.png';
import Learn_more from '../../assets/images/HomePage/Home_Section_3/LearnMore_btn.png';
import Learn_more_hover from '../../assets/images/HomePage/Home_Section_3/LearnMore_btn_hover.png';

export default function Events() {
  const [hover, setHover] = React.useState(false);

  return (
    <div className='events'>
      <div className='events-image'></div>
      <div className='community-detail-container'>
        <div className='events-detail'>
          <img src={Title} className='events-title' />
          <div className='community-font-style'>
            Tap on our comprehensive suite of AI-powered solutions to hype up your pop-up events
            and boost crowd engagement
          </div>
          <Link to="/services#events">
            <button
              className='learn_button'
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
