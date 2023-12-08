import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './AboutPage.css';

function AboutPage() {
  const stackFront = ['React', 'Redux', 'Node', 'CSS3', 'HTML5', 'Bootstrap'];
  const stackBack = ['Ruby On Rails', 'PostgreSQL', 'Arduino', 'C++', 'Python', 'Jest', 'Mocha', 'Chai', 'RSpec', 'Capybara', 'Devise'];
  const stackOthers = ['Git', 'GitHub', 'Trello', 'Slack', 'Figma', 'Adobe Photoshop',
    'Adobe Illustrator', 'Adobe Lightroom', 'CorelDraw', 'Agile', 'Scrum', 'Kanban', 'Trello'];
  const stack = [stackFront, stackBack, stackOthers];
  let id = 1;
  return (
    <>
      <div className="d-flex  justify-content-center align-items-center aboutDiv p-3" id="aboutDiv">
        <div className="d-flex flex-column justify-content-around text-left aboutContainer">
          <h1 className="display-1">About me</h1>
          <p className="w-75 text-align-center AboutP">
            Greetings! I am a digital artisan passionate about
            transforming ideas into captivating digital experiences.
            My portfolio is a testament to the artistry
            I bring to coding: each project tells a unique story
            crafted with precision and creativity.
            If you&apos;re looking for a collaborator who speaks both
            the language of programming and the dialect of creativity,
            your search ends here. Let us embark together on a journey
            to turn your concepts into extraordinary digital wonders.
          </p>
          <a
            href="https://docs.google.com/document/d/1I4CbcVU1984eP7W403HD6JjXyFMZGzQOlxuuoAzwQfk/edit?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="d-flex justify-content-center align-items-center resumeButton"
          >
            Get Resume
          </a>
        </div>
        <div className="d-flex justify-content-center align-items-center carouselDiv">

          <Carousel className="carouselContent" data-bs-theme="dark">
            {stack.map((item, index) => {
              id += 1;
              const gridStyle = {
                display: 'grid',
                justifyContent: 'center',
                alignItems: 'center',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '10px',
                listStyleType: 'none',
                padding: '0',
              };

              const listStyle = {
                fontSize: '0.75rem',
                fontWeight: 'bold',
                color: '#41a599',
                padding: '0.75rem',
                margin: '0',
              };

              if (index === 0) {
                return (
                  <Carousel.Item key={id}>
                    <div className="d-flex flex-column justify-content-around align-items-center h-100">
                      <h3 className="display-6">Front-Stack</h3>
                      <ul style={gridStyle}>
                        {item.map((stackItem) => (
                          <li className="listTech w-100" key={`${id}-${stackItem}`}>
                            <h4 key={item} style={listStyle}>{stackItem}</h4>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Carousel.Item>
                );
              } if (index === 1) {
                return (
                  <Carousel.Item key={id}>
                    <div className="d-flex flex-column justify-content-center align-items-center h-100">
                      <h3 className="display-6">Back-Stack</h3>
                      <ul style={gridStyle}>
                        {item.map((stackItem) => (
                          <li className="listTech w-100" key={`${id}-${stackItem}`}>
                            <h4 key={item} style={listStyle}>{stackItem}</h4>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Carousel.Item>
                );
              } if (index === 2) {
                return (
                  <Carousel.Item key={id}>
                    <div className="d-flex flex-column justify-content-center align-items-center h-100">
                      <h3 className="display-6">Others</h3>
                      <ul style={gridStyle}>
                        {item.map((stackItem) => (
                          <li className="listTech w-100" key={`${id}-${stackItem}`}>
                            <h4 key={item} style={listStyle}>{stackItem}</h4>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Carousel.Item>
                );
              }
              return null;
            })}
          </Carousel>
        </div>
      </div>
    </>
  );
}

export default AboutPage;
