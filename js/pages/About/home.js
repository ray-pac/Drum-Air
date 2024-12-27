import React, { useEffect, useState } from 'react'
import { useInView } from "react-intersection-observer";

import Title from '../../assets/images/About/section_1/what.png'
import Planet_blue from '../../assets/images/About/section_1/Planet_blue.png'
import Planet_green from '../../assets/images/About/section_1/Planet_green.png'
import Planet_red from '../../assets/images/About/section_1/Planet_red.png'
import PhoneBack from '../../assets/images/About/section_1/GraphicBox.png'
// import PhoneBody from '../../assets/images/About/section_1/3D_phone_01 1.png'
import PhoneBody from '../../assets/images/About/section_1/phone.png'
import PhoneScreen_1 from '../../assets/images/About/section_1/screen_1.png'
import PhoneScreen_2 from '../../assets/images/About/section_1/screen_2.png'
import '../../assets/css/styles.css'
import '../../assets/css/animated.css'

export default function Main() {
    const [mouseY, setMouseY] = useState(0);
    const [start, setStart] = useState(false);
    const [hover, setHover] = useState(false);

    const [ref, inView] = useInView({
        threshold: 0.6, // Trigger when 10% of the component is visible
    });

    useEffect(() => {
        setHover(true);
    }, [])

    return (
        <div ref={ref} className="about-main" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
            <div className='about-content'>
                <div className='whats-about'>
                    <img className={(hover || inView) ? "whats-title fadeInLeft_animation" : "whats-title"} src={Title} />
                    <div className={(hover || inView) ? "whats-content fadeInLeft_animation" : 'whats-content'}>
                        <div className="whats-detail">
                            Air is shapeless, formless, limitless - and we believe drumming
                            can be too. We imagine a creative expression with no
                            obstacles, a language with no barriers, and a world with no one
                            left behind.
                        </div>
                        <div className="whats-detail" style={{ marginTop: 20 }}>
                            Air Drumming is a rhythmic exploration, a lifestyle statement,
                            and a social movement, that integrates users seamlessly
                            across the mobile application, the physical experience, and
                            their connection with the larger communities.
                        </div>
                        <div className="whats-detail" style={{ marginTop: 20 }}>
                            We develop cutting-edge technological capabilities to elevate physical
                            experiences for people from all walks of life, without losing the human touch.
                        </div>
                        <div className="whats-detail" style={{ marginTop: 20 }}>
                            Air Drumming is part of A.I.R Technology, a newly founded
                            gaming company that specialises in developing rhythm-based
                            mobile applications that bridge AI technology and reality to
                            promote inclusion among the communities.
                        </div>
                        <div className="whats-detail" style={{ marginTop: 20 }}>
                            We develop applications that are entertaining, educational and
                            inclusive.
                        </div>
                    </div>
                </div>
                <div>
                    <img src={Planet_blue} className={(hover || inView) ? 'whats-planet-blue-animation' : 'whats-planet-blue'} />
                    <img src={Planet_green} className={(hover || inView) ? 'whats-planet-green-animation' : 'whats-planet-green'} />
                    <img src={Planet_red} className={(hover || inView) ? 'whats-planet-red-animation' : 'whats-planet-red'} />
                    <div className='whats-phone'>
                        <img src={PhoneBody} className='whats-phone-body' />
                        <img src={PhoneScreen_2} className={(hover || inView) ? 'phone-screen-2-animation' : 'phone-screen-2'} />
                        <img src={PhoneScreen_1} className={(hover || inView) ? 'phone-screen-1-animation' : 'phone-screen-1'} />
                    </div>
                </div>
            </div>
        </div>
    );
}