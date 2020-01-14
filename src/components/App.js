import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import ImgCarousel from './ImgCarousel'

function App() {
  const imgURL = [
    { name: "First slide", url: "img/img001.jpg" },
    { name: "Second slide", url: "img/img002.jpg" },
    { name: "Third slide", url: "img/img003.jpg" },
  ]
  return (
    <Container style={{maxWidth:"100vw"}}>
      <Row>
        <ImgCarousel imgURL={imgURL} />
      </Row>
      <Row>
        <Col>1 of 3</Col>
        <Col xs={6}>2 of 3 (wider)</Col>
        <Col>3 of 3</Col>
      </Row>
    </Container>
  );
}

export default App;
