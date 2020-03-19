import { Col, Row, Container } from '../components/Grid';
import Jumbotron from '../components/Jumbotron';
import React from 'react';

function NoMatch() {
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h1 className="text-center">Page Not Found!</h1>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
}

export default NoMatch;
