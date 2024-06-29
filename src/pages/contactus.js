import React from 'react';
import Navbar from '../components/navbar';
import { Fade } from 'react-reveal';
import '../styles/contactus.css';

const ContactUs = () => {
    return (
        <div>
            <Navbar />
            <Fade right cascade>
            <h1 className='header'>Contact Us</h1>
            <div className='filler-container'>
                <p>At Lizzy's Biz, we are passionate about bringing you the finest selection of fabrics for all your creative projects. As a dedicated online fabric store, we offer a diverse range of high-quality materials through our Facebook and Etsy shops. Whether you're a seasoned seamstress or a crafting enthusiast, our goal is to provide you with exceptional fabrics and excellent customer service. If you have any questions, need assistance, or just want to share your latest creations, we would love to hear from you! Please feel free to reach out to us via our social media channels. Let's create something beautiful together!</p>
            </div>
            <div className="links">
                <div className="contact-group">
                    <img src='https://cdn-icons-png.flaticon.com/128/145/145802.png'></img>
                    <h2 id='fb' onClick={() => window.open('https://www.facebook.com/p/Lizzys-Biz-100066760669613/?_rdr', '_blank')}>FACEBOOK</h2>
                </div>
                <div className="contact-group">
                    <img src='https://cdn-icons-png.flaticon.com/128/4494/4494615.png'></img>
                    <h2 id='etsy' onClick={() => window.open('https://www.etsy.com/shop/lizzysbizfabric', '_blank')}>ETSY</h2>
                </div>
            </div>
            </Fade>
        </div>
    );
};

export default ContactUs;