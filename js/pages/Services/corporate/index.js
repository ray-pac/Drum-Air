// SolarSystem.js
import React, { useState } from 'react';
import Corporate from '../../../assets/images/services/corporate/corporate_1.png'
import Provide from '../../../assets/images/services/corporate/corporate_2.png'
import Worked from '../../../assets/images/services/corporate/corporate_3.png'
import Corporate_back from '../../../assets/images/services/corporate/image_3_1.png'
import MilestonesBack from '../../../assets/images/services/corporate/image_9.png'

const CorporateCom = () => {
  const [hover, setHover] = useState(false)

  return (
    <div className='service-corporate'
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
    >
      <div className='corporate-detail'>
        <div className={hover ? 'provide_animation' : ""}>
          <div src={Corporate_back} className='corporate-image' style={{ borderRadius: 50 }} />
        </div>
        <div >
          <div>
            <div className={hover ? 'corporate-intro school_right_animation' : "corporate-intro"} />
          </div>
          <div style={{ marginTop: 15 }}>
            <div className={hover ? 'corporate-provide provid_right_animation' : "corporate-provide"} />
          </div>
          <div style={{ marginTop: 15 }}>
            <div className={hover ? 'corporate-worked worked_right_animation' : "corporate-worked"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CorporateCom;
