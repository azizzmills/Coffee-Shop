import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Logo.css'


const Logo_Postion = () => {
  return (
    <Container style={{ maxWidth: '400px' }} className='location'>
      <Row>
        <Col md={6} className="italic-text">
          <h1>Mills' Coffee N Chill</h1>
        </Col>
        <Col md={6} className="image-background">
          {/* Add content here for the second column */}
        </Col>
      </Row>
    </Container>
  );
}

export default Logo_Postion;