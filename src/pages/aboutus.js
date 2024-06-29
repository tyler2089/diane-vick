import React, { useState, useEffect } from 'react';
import Navbar from '../components/navbar';
import Fade from 'react-reveal/Fade';
import '../styles/aboutus.css';

const AboutUs = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const userAgent = navigator.userAgent.toLowerCase();
        const mobile = /iphone|ipad|ipod|android/i.test(userAgent);
        setIsMobile(mobile);
    }, []);

    if (!isMobile) /* Desktop */{
        return (
            <div>
                <Navbar />
                <div className='aboutus-section'>
                    <Fade left cascade>
                        <div className='aboutus-text'>
                            <h1>Welcome!</h1>
                            <p>Lizzy's Biz was created in 2008 as my love for sewing. My shop was named after my mother whom I learned to sew from. I created Lizzy's Biz Fabric to offer my customers a larger variety of minky and cotton fabrics. All my fabrics are of the best quality and as a customer, you can email me if you have problems or looking for something specific.</p>
                        </div>
                    </Fade>
                    <Fade right cascade>
                        <div className='aboutus-image'>
                            <img src='https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/426512867_740285814873434_3025371404667917667_n.jpg?stp=cp6_dst-jpg_p720x720&_nc_cat=100&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=-CIgjF8-1hIQ7kNvgGEw_x6&_nc_ht=scontent-sea1-1.xx&oh=00_AYAod5gvphOI1sCeuX3Azi07UY84orivWbOdZtJVwpbNxA&oe=6685F5B9'></img>
                        </div>
                    </Fade>
                </div>
                <div className='aboutus-section'>
                    <Fade left cascade>
                        <div className='aboutus-image'>
                            <img src='https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/426501937_740284071540275_2092425952541955296_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=jFaVcdcgg24Q7kNvgHMK_6h&_nc_ht=scontent-sea1-1.xx&oh=00_AYDcXA0cp8ucssdMA9TOMQhDAr9LkJwNKfrSb3kQp3xJGw&oe=66860158'></img>
                        </div>
                    </Fade>
                    <Fade right cascade>
                        <div className='aboutus-text'>
                            <h1>Our Mission</h1>
                            <p>Our mission is to provide our customers with the best quality fabrics and customer service. We want to make sure that our customers are happy with their purchase and that they will come back to us for all their fabric needs.</p>
                        </div>
                    </Fade>
            </div>
            </div>
        );
}
    else /* Mobile */{
        return (
            <div>
                <Navbar />
                <div className='aboutus-section'>
                    <Fade left cascade>
                        <div className='aboutus-text'>
                            <h1>Welcome!</h1>
                            <p>Lizzy's Biz was created in 2008 as my love for sewing. My shop was named after my mother whom I learned to sew from. I created Lizzy's Biz Fabric to offer my customers a larger variety of minky and cotton fabrics. All my fabrics are of the best quality and as a customer, you can email me if you have problems or looking for something specific.</p>
                        </div>
                    </Fade>
                    <Fade right cascade>
                        <div className='aboutus-image'>
                            <img src='https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/426512867_740285814873434_3025371404667917667_n.jpg?stp=cp6_dst-jpg_p720x720&_nc_cat=100&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=-CIgjF8-1hIQ7kNvgGEw_x6&_nc_ht=scontent-sea1-1.xx&oh=00_AYAod5gvphOI1sCeuX3Azi07UY84orivWbOdZtJVwpbNxA&oe=6685F5B9'></img>
                        </div>
                    </Fade>
                </div>
                <div className='aboutus-section'>
                <Fade right cascade>
                        <div className='aboutus-text'>
                            <h1>Our Mission</h1>
                            <p>Our mission is to provide our customers with the best quality fabrics and customer service. We want to make sure that our customers are happy with their purchase and that they will come back to us for all their fabric needs.</p>
                        </div>
                    </Fade>
                    <Fade left cascade>
                        <div className='aboutus-image'>
                            <img src='https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/426501937_740284071540275_2092425952541955296_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=jFaVcdcgg24Q7kNvgHMK_6h&_nc_ht=scontent-sea1-1.xx&oh=00_AYDcXA0cp8ucssdMA9TOMQhDAr9LkJwNKfrSb3kQp3xJGw&oe=66860158'></img>
                        </div>
                    </Fade>

            </div>
            </div>
        );
}
};

export default AboutUs;