import React from "react";
import "./Card.css";
import img01 from "../assets/imz01.png";
import img02 from "../assets/imz02.png";
import {Card, Col, Container, Row} from 'react-bootstrap'

function Cards() {
  return (
    <Container>
      <Row>
        <Col md={4}>
          <Card>
            <Card.Img src={img01}/>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Cards;
