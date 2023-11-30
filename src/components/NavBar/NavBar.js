import React from 'react';
import { BsHouseDoorFill } from 'react-icons/bs';
import { SiAboutdotme } from 'react-icons/si';
import { GrProjects } from 'react-icons/gr';
import { IoMdContact } from 'react-icons/io';

import './NavBar.css';

function NavBar() {
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
            <a href="#homeDiv">
              <button type="submit">
                <BsHouseDoorFill alt="home" size={25} color="rgb(89 182 255)" />
              </button>
            </a>
            <a href="#aboutDiv">
              <button type="submit">
                <SiAboutdotme alt="about" size={25} color="rgb(89 182 255)" />
              </button>
            </a>
            <a href="#projectsDiv">
              <button type="submit">
                <GrProjects alt="projects" size={25} color="rgb(89 182 255)" />
              </button>
            </a>
            <a href="#contactDiv">
              <button type="submit">
                <IoMdContact alt="contact" size={25} color="rgb(89 182 255)" />
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
