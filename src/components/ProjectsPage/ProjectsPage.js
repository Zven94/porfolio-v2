import React from 'react';
import { Card } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { PiAirplayFill } from 'react-icons/pi';
import NavBar from '../NavBar/NavBar';
import RentForADay from '../../images/rent-for-a-day.png';
import StockApp from '../../images/stock-viewer.png';
import SpaceHub from '../../images/space-traveler-hub.png';
import BookStore from '../../images/bookstore.png';
import BudgetApp from '../../images/budget-app.png';
import ArtGallery from '../../images/art-gallery.png';
import './ProjectsPage.css';

function ProjectsPage() {
  const links = [
    'https://rent-for-a-day-kqic.onrender.com/',
    'https://react-capstone-h4jz.onrender.com/',
    'https://space-travelers-hub-0u16.onrender.com/',
    'https://bookstore-zta8.onrender.com/',
    'https://budget-app-fk5s.onrender.com/',
    'https://zven94.github.io/JS-group-capstone/',
  ];

  const projects = {
    name: ['Rent For A Day', 'Stock App', 'Space Hub', 'Book Store', 'Budget App', 'Art Gallery'],
    img: [RentForADay, StockApp, SpaceHub, BookStore, BudgetApp, ArtGallery],
    description: [
      'Rent For A Day is a web application to look for accommodations and rent them. It was developed on two basic stacks, React/Redux for the Front-End and Ruby on Rails for the API Back-End.',
      'Stock App is a web application that allows users to search for stocks and add them to their watchlist. It was developed with React/Redux.',
      'Space Hub is a web application that allows users to book a trip to space. It use the Space X API to fetch data from the ships options. It was developed with React/Redux.',
      'Book Store is a web application that allows users to search for books and add them to their cart. It was developed with React/Redux.',
      'Budget App is a web application that allows users to add their incomes and expenses and see the balance. It was developed with Ruby On Rails.',
      'Art Gallery is a web application that allows users to search for art pieces and add them to their cart. It was developed with JavaScript.'],
  };
  let id = 1;

  return (
    <>
      <NavBar />
      <div className="d-flex flex-column justify-content-around align-items-center p-5 projectsDiv" id="projectsDiv">
        <h1 className="display-1">Projects</h1>
        <div className="d-flex">
          <Col>
            <Row className="d-flex justify-content-center align-items-center">
              {links.map((link, index) => {
                id += 1;
                return (
                  <Card key={id} className="m-3">
                    <Card.Img variant="top" src={projects.img[index]} />
                    <Card.Body>
                      <Card.Title>{projects.name[index]}</Card.Title>
                      <Card.Text>
                        {projects.description[index]}
                      </Card.Text>
                      <div className="d-flex justify-content-center align-items-center">
                        <a href={link} target="_blank" rel="noreferrer" className="projectA">
                          <Button className="projectButton">
                            |
                            <PiAirplayFill className="projectIcon" />
                            |
                          </Button>
                        </a>
                      </div>
                    </Card.Body>
                  </Card>
                );
              })}
            </Row>
          </Col>
        </div>
      </div>
    </>
  );
}

export default ProjectsPage;
