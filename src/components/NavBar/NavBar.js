import React from 'react';
import { BsHouseDoorFill } from 'react-icons/bs';
import { SiAboutdotme } from 'react-icons/si';
import { GrProjects } from 'react-icons/gr';
import { IoMdContact } from 'react-icons/io';

import './NavBar.css';

function NavBar() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    const offset = 10;
    const offsetPosition = section.offsetTop - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <div className="navBar p-1">
        <div className="d-flex justify-content-between m-3 w-100">
          <div className="d-flex justify-content-start">
            <div className="d-flex justify-content-center align-items-center logoDivOut">
              <h2 className="logoDivIn">N</h2>
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center buttonsParent">
            <button type="submit" onClick={() => scrollToSection('homeDiv')}>
              <BsHouseDoorFill alt="home" size={25} color="rgb(89 182 255)" />
            </button>
            <button type="submit" onClick={() => scrollToSection('aboutDiv')}>
              <SiAboutdotme alt="about" size={25} color="rgb(89 182 255)" />
            </button>
            <button type="submit" onClick={() => scrollToSection('projectsDiv')}>
              <GrProjects alt="projects" size={25} color="rgb(89 182 255)" />
            </button>
            <button type="submit" onClick={() => scrollToSection('contactDiv')}>
              <IoMdContact alt="contact" size={25} color="rgb(89 182 255)" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
