import React from 'react';

const Work = () => {
return (
    <section className='work-section' id="work">
        <h1 className='about-title'><span  className='title-number'>02. </span>Where I’ve Worked</h1>
        <div className='work-container'>
            <div className='work-left'>
                <button className='left-button active'>Unity-Bars</button>
            </div>
            <div className='work-right'>
                <h2 className='right-title'>Junior Software Engineer <a href='https://unity-bars.com/en' target="_blank" rel="noopener noreferrer" className='title-link'> <span>- Unity-Bars </span></a></h2>
                <h3 className='right-subtitle'>November 2022 - Present</h3>
                <ul className='right-list'>
                    <li className='right-list-li'>Worked on multiple projects for clients across different industries, including marketing, communication, and finance, under the guidance of senior developers such as <a href='https://unity-bars.com/en/products/b-one' target="_blank" rel="noopener noreferrer" className='desc-link'> <span>B.One</span></a> and a project for <a href='https://www.publicisgroupe.com/en/the-groupe/about-publicis-groupe' target="_blank" rel="noopener noreferrer" className='desc-link'> <span>Publicis Groupe</span></a>.</li>
                    <li className='right-list-li'>Assisted in developing and maintaining software system front-end and back-end using technologies such as C#, JavaScript, and SQL.</li>
                    <li className='right-list-li'>Participated in code reviews and debugging sessions among other junior developers, providing feedback and suggestions for improvement.</li>
                    <li className='right-list-li'>Implemented a real-time currency exchange rates feature for a financial services client using C#, JavaScript and RESTful APIs.</li>
                </ul>
            </div>
        </div>
    </section>
);
};

export default Work;
