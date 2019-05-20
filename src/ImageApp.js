import React from 'react';
import './App.css';
import {
  Button, Navbar, Nav, Form, FormControl, Row,
  Col, Container, ListGroup, InputGroup, Jumbotron
} from 'react-bootstrap';
import ImageSlider from "./ImageSlider";

function App() {
  return (
    <div className="App">
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="#home"><h4>SheCanDoIt</h4></Navbar.Brand>
        <Nav className="mr-auto" justify>
          <Nav.Link href="#jobs"><h5>Jobs&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|   </h5></Nav.Link>
          <Nav.Link href="#myuniqueskills"><h5>Unique Skills&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|   </h5></Nav.Link>
          <Nav.Link href="#trainings"><h5>Trainings&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|   </h5></Nav.Link>
          <Nav.Link href="#corporate"><h5>Corporate&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|   </h5></Nav.Link>
          <Nav.Link href="#contact"><h5>Contact      </h5></Nav.Link>
        </Nav>
        <Form inline>
          <Button variant="outline-light">Login/Register</Button>
        </Form>
      </Navbar>
      <Container fluid>
        <Row align="center">
          <Col ><ListGroup align="left">
            <ListGroup.Item><h5>Jobs</h5></ListGroup.Item>
            <ListGroup.Item><img key="/arrowcorner.jpeg" src="/arrowcorner.jpeg" width="6%" height="6%" /> Need a caterer for an event.</ListGroup.Item>
            <ListGroup.Item><img key="/arrowcorner.jpeg" src="/arrowcorner.jpeg" width="6%" height="6%" /> Looking for a classical dance teacher.</ListGroup.Item>
            <ListGroup.Item><img key="/arrowcorner.jpeg" src="/arrowcorner.jpeg" width="6%" height="6%" /> Need a Maths tutor who can come home and give tuitions.</ListGroup.Item>
            <ListGroup.Item><img key="/arrowcorner.jpeg" src="/arrowcorner.jpeg" width="6%" height="6%" /> Looking for a beautician for a marriage function.</ListGroup.Item>
            <ListGroup.Item><img key="/arrowcorner.jpeg" src="/arrowcorner.jpeg" width="6%" height="6%" /> Looking for an interior designer.</ListGroup.Item>
            <ListGroup.Item><img key="/arrowcorner.jpeg" src="/arrowcorner.jpeg" width="6%" height="6%" /> Need a Maths tutor who can come home and give tuitions.</ListGroup.Item>
            <ListGroup.Item><img key="/arrowcorner.jpeg" src="/arrowcorner.jpeg" width="6%" height="6%" /> Need a caterer for an event in a big hotel and resort.</ListGroup.Item>
            <ListGroup.Item><img key="/arrowcorner.jpeg" src="/arrowcorner.jpeg" width="6%" height="6%" /> Looking for a classical dance teacher.</ListGroup.Item>
            <ListGroup.Item><img key="/arrowcorner.jpeg" src="/arrowcorner.jpeg" width="6%" height="6%" /> Need a Maths tutor who can come home and give tuitions.</ListGroup.Item>
            <ListGroup.Item><img key="/arrowcorner.jpeg" src="/arrowcorner.jpeg" width="6%" height="6%" /> Looking for a beautician for a marriage function.</ListGroup.Item>
          </ListGroup>
          </Col>
          <Col md="auto">
            <Row><br />
            </Row>
            <Row>  <InputGroup className="mb-3">
              <FormControl
                placeholder="Search"
                aria-label="Search"
                aria-describedby="basic-addon2"
              />
              <InputGroup.Append>
                <Button variant="primary">Search</Button>
              </InputGroup.Append>
            </InputGroup></Row>
            <Row><ImageSlider /></Row>
            <Row><Jumbotron jumbotron jumbotron-fluid>
              <Container className="container">
                <h3>Tip of the day</h3>
                <p>
                  Save water &amp; reuse water. Every drop counts. React before its too late. Water is life!!
                </p>
              </Container>
            </Jumbotron>
            </Row>
          </Col>
          <Col><ListGroup align="left">
            <ListGroup.Item><h5>Achievements</h5></ListGroup.Item>
            <ListGroup.Item><img key="/arrowcorner.jpeg" src="/arrowcorner.jpeg" width="6%" height="6%" /> Mrs. Kritika is a baker. Baking from past 7 years.Please contact her @78234234 for baking requirements.</ListGroup.Item>
            <ListGroup.Item><img key="/arrowcorner.jpeg" src="/arrowcorner.jpeg" width="6%" height="6%" /> Miss. Natasha is a trained dancer. Contact her @234523532 for any training needs.</ListGroup.Item>
            <ListGroup.Item><img key="/arrowcorner.jpeg" src="/arrowcorner.jpeg" width="6%" height="6%" /> Mrs. Swati is an experienced Maths teacher, currently working as a Maths Teacher in Vibgyor. She can take home tuitions.</ListGroup.Item>
            <ListGroup.Item><img key="/arrowcorner.jpeg" src="/arrowcorner.jpeg" width="6%" height="6%" /> Mrs. Kritika is a baker. Baking from past 7 years.Please contact her @78234234 for baking requirements.</ListGroup.Item>
            <ListGroup.Item><img key="/arrowcorner.jpeg" src="/arrowcorner.jpeg" width="6%" height="6%" /> Miss. Natasha is a trained dancer. Contact her @234523532 for any training needs.</ListGroup.Item>
            <ListGroup.Item><img key="/arrowcorner.jpeg" src="/arrowcorner.jpeg" width="6%" height="6%" /> Mrs. Swati is an experienced Maths teacher, currently working as a Maths Teacher in Vibgyor. She can take home tuitions.</ListGroup.Item>
          </ListGroup>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
