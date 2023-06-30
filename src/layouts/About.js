import React from 'react';
import me from '../assets/photo.jpeg';

const About = () => {
return (
    <section className='about-section container-fluid' id="about">
        <h1 className='about-title d-flex align-items-center p-0'><span  className='title-number'>01. </span>About Me</h1>
        <div className='about-container row p-0'>
            <div className='about-left col-lg-5 col-md-12 mtop'>
                <p className="left-paragraph">Hello. My name is Demian and I am passionate about bringing ideas to life on the internet. My interest in software development started back in 2018 when I decided to take a 5 months course on HTML and CSS.</p>

                <p className="left-paragraph">Fast forward to today, and I’m attending Warwick University, Coventry for a Computer Science degree and working at <a className='desc-link' href='https://unity-bars.com/en' target="_blank" rel="noopener noreferrer">Unity-Bars</a> with my main focus in building accessible, inclusive products and digital experiences here for a variety of clients.</p>

                <ul className='left-list'>
                    <li className='left-list-li'>C<span>&#x0023;</span></li>
                    <li className='left-list-li'>JavaScript (ES6+)</li>
                    <li className='left-list-li'>Angular</li>
                    <li className='left-list-li'>React</li>
                    <li className='left-list-li'>MongoDB</li>
                    <li className='left-list-li'>OracleDB</li>
                </ul>
            </div>

            <div className='about-right col-lg-auto col-md-12 p-0 mtop ml50'>
                <div className='image-container medium-center'>
                    <div className='border-square'></div>
                    <img className='right-img' src={me} alt='Demian Prykhodko' />
                </div>
            </div>
        </div>
    </section>
);
};

export default About;
