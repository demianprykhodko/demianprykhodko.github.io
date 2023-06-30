import React from 'react';
import { openResume } from '../helpers/resumeHelper';

const MainSection = () => {
return (
    <section className="main container-fluid p-0">
        <p className='main-hi'>Hi, my name is</p>
        <h1 className='main-name'>Demian Prykhodko.</h1>
        <h2 className='main-title'>Building web solutions, end to end.</h2>
        <p className='main-desc'>
            As a full stack developer at <a className='desc-link' href='https://unity-bars.com/en' target="_blank" rel="noopener noreferrer">Unity Bars</a>, I specialize in building exceptional digital experiences. With a focus on accessibility and seamless functionality, I bring together the front end and back end to create robust and user friendly web applications.
        </p>
        <button className='main-button' onClick={openResume}>Check out my resume!</button>
    </section>
);
};

export default MainSection;