import React from 'react';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import './AboutPage.css';
// import picProfile from '../../images/profile-pic.png';
import RentForADay from '../../images/rent-for-a-day.png';
import StockApp from '../../images/stock-viewer.png';
import SpaceHub from '../../images/space-traveler-hub.png';
import BookStore from '../../images/bookstore.png';
import BudgetApp from '../../images/budget-app.png';
import ArtGallery from '../../images/art-gallery.png';

function AboutPage() {
  const gallery = [RentForADay, StockApp, SpaceHub, BookStore, BudgetApp, ArtGallery];
  let id = 1;
  return (
    <>
      <div className="d-flex  justify-content-center align-items-center aboutDiv p-3" id="aboutDiv">
        <div className="d-flex flex-column justify-content-around text-left aboutContainer">
          <h1 className="display-1">About me</h1>
          <p className="w-75 text-align-center AboutP">
            Hello I’m a software developer!
            I can help you build a product,
            feature or website Look through some of my work and experience!
            If you like what you see and have a project you need coded,
            don’t hesitate to contact me.
          </p>
          <Button className="w-25 resumeButton">Get Resume</Button>
        </div>
        <div className="d-flex justify-content-center align-items-center carouselDiv">
          <Carousel className="carouselContent" data-bs-theme="dark">
            {gallery.map((item, index) => {
              id += 1;
              return (
                <Carousel.Item key={id}>
                  <div className="d-flex justify-content-center ">
                    <img src={item} alt={`Project ${index + 1}`} className="carouselImg" />
                  </div>
                </Carousel.Item>
              );
            })}
          </Carousel>
        </div>
        {/* <div className="d-flex justify-content-center align-items-center picProfileDivAbout">
          <img className="picProfile" src={picProfile} alt="Nicolás" />
        </div> */}
      </div>
    </>
  );
}

export default AboutPage;
