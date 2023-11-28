import React from 'react';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import './AboutPage.css';
import picProfile from '../../images/profile-pic.png';
import RentForADay from '../../images/rent-for-a-day.png';
import StockApp from '../../images/stock-viewer.png';
import SpaceHub from '../../images/space-traveler-hub.png';
import BookStore from '../../images/bookstore.png';
import BudgetApp from '../../images/budget-app.png';
import ArtGallery from '../../images/art-gallery.png';

function AboutPage() {
  return (
    <>
      <div className="d-flex  justify-content-center align-items-center aboutDiv p-3">
        <div className="d-flex flex-column justify-content-between align-items-center text-align-center aboutContainer">
          <h1>About me</h1>
          <p className="w-50 text-align-center">
            Hello I’m a software developer!
            I can help you build a product,
            feature or website Look through some of my work and experience!
            If you like what you see and have a project you need coded,
            don’t hesitate to contact me.
          </p>
          <Button>Get Resume</Button>
          <div className="carouselDiv">
            <Carousel className="carouselContent" data-bs-theme="dark">
              <Carousel.Item>
                <div className="d-flex justify-content-center">
                  <img src={RentForADay} alt="Project 1" className="carouselImg" />
                </div>
                <Carousel.Caption>
                  <div className="carouselText">
                    <h3>React/Redux</h3>
                    <p> this framework is use for .....</p>
                  </div>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <div className="d-flex justify-content-center">
                  <img src={StockApp} alt="Project 1" className="carouselImg" />
                </div>
                <Carousel.Caption>
                  <div>
                    <h3>React/Redux</h3>
                    <p> this framework is use for .....</p>
                  </div>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <div className="d-flex justify-content-center">
                  <img src={SpaceHub} alt="Project 1" className="carouselImg" />
                </div>
                <Carousel.Caption>
                  <div>
                    <h3>React/Redux</h3>
                    <p> this framework is use for .....</p>
                  </div>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <div className="d-flex justify-content-center">
                  <img src={BookStore} alt="Project 1" className="carouselImg" />
                </div>
                <Carousel.Caption>
                  <div>
                    <h3>React/Redux</h3>
                    <p> this framework is use for .....</p>
                  </div>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <div className="d-flex justify-content-center">
                  <img src={BudgetApp} alt="Project 1" className="carouselImg" />
                </div>
                <Carousel.Caption>
                  <div>
                    <h3>React/Redux</h3>
                    <p> this framework is use for .....</p>
                  </div>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <div className="d-flex justify-content-center">
                  <img src={ArtGallery} alt="Project 1" className="carouselImg" />
                </div>
                <Carousel.Caption>
                  <div>
                    <h3>React/Redux</h3>
                    <p> this framework is use for .....</p>
                  </div>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
        <div className="d-flex justify-content-center align-items-center picProfileDivAbout">
          <img className="picProfile" src={picProfile} alt="Nicolás" />
        </div>
      </div>
    </>
  );
}

export default AboutPage;
