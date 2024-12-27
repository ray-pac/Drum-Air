// SolarSystem.js
import React from 'react';
import { animations, easings} from 'react-animation'
import Community from '../../../assets/images/services/community/Card_community_01.png'
import Provide from '../../../assets/images/services/community/Card_community_02.png'
import Worked from '../../../assets/images/services/community/Card_community_03.png'
import Community_back from '../../../assets/images/services/community/community_image.png'
import CommunityBack from '../../../assets/images/services/community/community_back.png'
import Planet_blue from '../../../assets/images/Community/Planet_blue.png'
import Planet_violet from '../../../assets/images/Community/Planet_violet.png'
import Planet_yellow from '../../../assets/images/Community/Planet_yellow.png'

const CommunityCom = () => {
  const [hover, setHover] = React.useState(false);

  return (
    <div className='service-community' onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      <img src={Planet_blue} className={hover ? 'com_planet_blue_ani' : 'com_planet_blue'}/>
      <img src={Planet_violet} className={hover ? 'com_planet_violet_ani' : "com_planet_violet"} />
      <img src={Planet_yellow} className={hover ? 'com_planet_yellow_ani' : 'com_planet_yellow'} />
      <div className='service-community-detail'>
        <div >
          <div>
            <div className={hover ? 'community-intro fadeInLeft_animation' : 'community-intro'} />
          </div>
          <div style={{ marginTop: 15 }}>
            <div className={hover ? 'community-provide provide_animation' : 'community-provide'}/>
          </div>
          <div style={{ marginTop: 15 }}>
            <div className={hover ? 'community-worked worked_animation' : 'community-worked'}/>
          </div>
        </div>
        <div >
          <div style={{ borderRadius: 50 }} className={hover ? 'service_community-image fadeInRight_animation' : 'service_community-image'}/>
        </div>
      </div>
    </div>
  );
};

export default CommunityCom;
