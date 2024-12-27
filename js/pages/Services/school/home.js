import React, { useEffect, useState } from 'react'
import { animations, easings} from 'react-animation'
import home_Schools from '../../../assets/images/services/school/school_back.png'
import Schools from '../../../assets/images/services/school/school.png'
import Provide from '../../../assets/images/services/school/provide.png'
import Worked from '../../../assets/images/services/school/worked.png'
import School_back from '../../../assets/images/services/school/school_Image.png'
import Planet_1 from '../../../assets/images/services/Planet.png'
import Planet_2 from '../../../assets/images/services/Planet-1.png'
import Planet_3 from '../../../assets/images/services/Planet-2.png'

export default function Main() {
    const [hover, setHover] = useState(false);

    return (
        <div className='service-schools'
            onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
        >
            <div>
                <img src={Planet_1} className={hover ? 'planet_red_ani' : 'planet_red'} />
                <img src={Planet_2} className={hover ? 'planet_green_ani' : 'planet_green'} />
                <img src={Planet_3} className={hover ? 'planet_yellow_ani' : 'planet_yellow'} />
                <div className='schools-detail'>
                    <div style={styles.detail}>
                        <div>
                            <div className={hover ? 'schools-intro fadeInLeft_animation' : 'schools-intro'} />
                        </div>
                        <div style={{ marginTop: 20 }} className={hover ? 'schools-provide provide_animation' : 'schools-provide'} >
                            <div src={Provide} />
                        </div>
                        <div style={{ marginTop: 20 }} className={hover ? 'schools-worked worked_animation' : 'schools-worked'} >
                            <div src={Worked} />
                        </div>
                    </div>
                    <div style={styles.image}>
                        <div className={hover ? 'schools-image fadeInRight_animation' : 'schools-image'} />
                    </div>
                </div>
            </div>
        </div>
    );
}


const styles = {
    detail: {
        overflow: "hidden"
    }
}