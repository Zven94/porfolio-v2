import React from 'react';
// import NavBar from '../NavBar/NavBar';
import './HomePage.css';
import picProfile from '../../images/profile-no-background.png';
import AboutPage from '../AboutPage/AboutPage';
import ProjectsPage from '../ProjectsPage/ProjectsPage';
import ContactPage from '../Contact/ContactPage';
import SocialNav from '../SocialNav/SocialNav';

function HomePage() {
  return (
    <>
      {/* <NavBar className="w-100 d-flex justify-content-between" /> */}
      <div className="d-flex flex-column justify-content-around align-items-center mainDiv p-4">
        <div className="d-flex justify-content-around align-items-center homeDiv" id="homeDiv">
          <div className="d-flex justify-content-between align-items-center colContent">
            <div className="d-flex flex-column justify-content-around colOne">
              <div className="d-flex flex-column justify-content-center align-items-center p-5">
                <div className="d-flex align-items-start p-5 borderDiv">
                  <div className=" d-flex justify-content-center">
                    <h1 className="headerOne">
                      Hi there.
                      I`m Nico.
                    </h1>
                  </div>
                  <div className="headerTwoDiv ">
                    <h2 className="headerTwo">
                      I`m a software developer.
                    </h2>
                  </div>
                  <div className="d-flex justify-content-center">
                    <p className="paragraph">
                      I can help you build a product,
                      feature or website Look through some of my work and experience!
                      If you like what you see and have a project you need coded,
                      don’t hesitate to contact me.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-center align-items-center picProfileDiv colTwo">
              <img className="picProfile" src={picProfile} alt="Nicolás" />
            </div>
          </div>
        </div>
        <AboutPage />
        <ProjectsPage />
        <ContactPage />
        <SocialNav />
      </div>
    </>
  );
}

export default HomePage;
