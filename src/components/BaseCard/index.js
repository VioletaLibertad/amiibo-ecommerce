import React from 'react';
import './style.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function BaseCard(props) {

  let cardData = props.data;

  return(
    <Card className="baseCard">
      <Card.Img className="cardImg" variant="top" src={cardData.image} />
      <Card.Body>
        <Card.Title>{cardData.name}</Card.Title>
        <Card.Text>{cardData.amiiboSeries}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <Button variant="primary" block>Agregar al carrito</Button>
      </Card.Footer>
    </Card>
  );
}

export default BaseCard;