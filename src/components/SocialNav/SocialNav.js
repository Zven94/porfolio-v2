import React from 'react';
import './SocialNav.css';
import { FaGithub } from 'react-icons/fa';
import { FaXTwitter, FaLinkedin } from 'react-icons/fa6';

function SocialNav() {
  return (
    <>
      <div className="d-flex flex-column justify-content-around align-items-center socialNavDiv">
        <a href="https://github.com/Zven94" target="_blank" rel="noreferrer" className="aSocialMedia">
          <div className="aSocialMediaText">|</div>
          <FaGithub />
        </a>
        <a href="https://github.com/Zven94" target="_blank" rel="noreferrer" className="aSocialMedia">
          <div className="aSocialMediaText">|</div>
          <FaXTwitter />
        </a>
        <a href="https://www.linkedin.com/in/nicolas-emiliano/" target="_blank" rel="noreferrer" className="aSocialMedia">
          <div className="aSocialMediaText">|</div>
          <FaLinkedin />
        </a>
      </div>
    </>
  );
}

export default SocialNav;
