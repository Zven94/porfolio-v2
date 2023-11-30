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

  const gallery = [RentForADay, StockApp, SpaceHub, BookStore, BudgetApp, ArtGallery];
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
                    <Card.Img variant="top" src={gallery[index]} />
                    <Card.Body>
                      <Card.Title>Project 1</Card.Title>
                      <Card.Text>
                        This is a longer card with supporting text below as a natural
                        lead-in to additional content.
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
