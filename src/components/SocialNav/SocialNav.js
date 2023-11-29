import React from 'react';
import './SocialNav.css';
import { FaGithub } from 'react-icons/fa';
import { FaXTwitter, FaLinkedin } from 'react-icons/fa6';

function SocialNav() {
  return (
    <>
      <div className="d-flex flex-column justify-content-around align-items-center socialNavDiv">
        <FaGithub />
        <FaXTwitter />
        <FaLinkedin />
      </div>
    </>
  );
}

export default SocialNav;
