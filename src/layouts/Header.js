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
    <header className={`header ${visible ? '' : 'hidden'}`}>
      <div className="header-logo">
        <img className="header-logo-image" src={logo} alt="Logo"/>
      </div>
      <div className="header-buttons">
        <button className="header-button" onClick={() => scrollToSection('about')}><span className="button-span">01. </span>About</button>
        <button className="header-button" onClick={() => scrollToSection('work')}><span className="button-span">02. </span>Experience</button>
        <button className="header-button" onClick={() => scrollToSection('project')}><span className="button-span">03. </span>Projects</button>
        <button className="header-button" onClick={() => scrollToSection('contact')}><span className="button-span">04. </span>Contact</button>
        <button className="header-button button-resume" onClick={openResume}>Resume</button>
      </div>
    </header>
  );
};

export default Header;
