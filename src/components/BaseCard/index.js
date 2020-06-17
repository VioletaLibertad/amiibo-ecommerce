import React from 'react';
import './style.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import amiiboTest from '../../assets/img/amiibo-test.jpg';

function BaseCard() {
  return(
    <Card className="baseCard">
      <Card.Img variant="top" src={amiiboTest} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of
          the card's content.
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <Button variant="primary" block>Go somewhere</Button>
      </Card.Footer>
    </Card>
  );
}

export default BaseCard;