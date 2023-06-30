import React, { useState, useEffect } from 'react';
import { scrollToSection } from '../helpers/scrollHelpers';
import { openResume } from '../helpers/resumeHelper';
import logo from '../assets/Dp..svg';

const Header = () => {

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isVisible = prevScrollPos > currentScrollPos;

      setPrevScrollPos(currentScrollPos);
      setVisible(isVisible);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <header className={`header ${visible ? '' : 'hidden'} container-fluid p-0`}>
        <div className="row justify-content-between" style={{height: "inherit"}}>
          <div className="header-logo col-2 p-4 mt-2">
            <img className="header-logo-image" src={logo} alt="Logo"/>
          </div>
          <div className="header-buttons hidden-on-medium d-flex col justify-content-end align-items-center mt-2 mr-4">
            <button className="header-button px-3" onClick={() => scrollToSection('about')}><span className="button-span">01. </span>About</button>
            <button className="header-button px-3" onClick={() => scrollToSection('work')}><span className="button-span">02. </span>Experience</button>
            <button className="header-button px-3" onClick={() => scrollToSection('project')}><span className="button-span">03. </span>Projects</button>
            <button className="header-button px-3" onClick={() => scrollToSection('contact')}><span className="button-span">04. </span>Contact</button>
            <button className="header-button button-resume px-3" onClick={openResume}>Resume</button>
          </div>
          <div hidden className="hidden-on-large d-flex col justify-content-end align-items-center px-4 mr-4 mt-2" style={{height: "inherit"}}>
            <button className="burger">
              <div className="burger-line">
                <div className="burger-inner-line">

                </div>
              </div>
            </button>
          </div>
        </div>
    </header>
  );
};

export default Header;
