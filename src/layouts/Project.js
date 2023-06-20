import React from 'react';
import routeplanner from '../assets/routeplanner.png';

const Project = () => {
return (
    <section className='project-section' id="project">
        <h1 className='about-title'><span  className='title-number'>03. </span>Some Things I’ve Built</h1>
        <div className='project-container'>
            <div className='project-container-left'>
                <a href='https://github.com/demianprykhodko/Dissertation-project'>
                    <img className='container-left-image' src={routeplanner} alt='routeplanner'></img>
                </a>
            </div>
            <div className='project-container-right'>
                <h2 className='project-right-title'>Featured Project</h2>
                <h2 className='project-right-subtitle'><a href='https://github.com/demianprykhodko/Dissertation-project' target="_blank" rel="noopener noreferrer" className='desc-link white'> <span>Route Planner</span></a></h2>
                <div className='project-right-block'>
                    <p className='project-right-desc'>A Route Planner for electric vehicles with several algorithms that which optimises travel plans across the UK. Built with Angular, Node.js and MongoDB</p>
                </div>
                <ul className='project-right-list'>
                    <li className='project-right-list-li'>Angular</li>
                    <li className='project-right-list-li'>Google Maps API</li>
                    <li className='project-right-list-li'>Node.js</li>
                    <li className='project-right-list-li'>Express.js</li>
                    <li className='project-right-list-li'>MongoDB</li>
                </ul>
            </div>
        </div>
    </section>
);
};

export default Project;
