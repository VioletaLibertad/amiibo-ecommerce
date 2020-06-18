import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './style.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { addToCart, removeFromCart } from '../../redux/actions';

function BaseCard(props) {
  const [productAdded, setProductAdded] = useState(false);
  const dispatch = useDispatch();

  const cart = useSelector(state => state.cart);
  let cardData = props.data;
  let itemInCart = cart.find(item => item.tail === cardData.tail);

  useEffect(() => {
    if (itemInCart) {
      setProductAdded(true);
    } else {
      setProductAdded(false);
    }
  }, [itemInCart]);

  return(
    <Card className="baseCard">
      <Card.Img loading="lazy" className="cardImg" variant="top" src={cardData.image} />
      <Card.Body>
        <Card.Title>{cardData.name}</Card.Title>
        <Card.Text>{cardData.amiiboSeries}</Card.Text>
        <Card.Text>{cardData.type}</Card.Text>
      </Card.Body>
      <Card.Footer>
        {!productAdded
          ? <Button variant="primary" 
            onClick={() => {
              dispatch(addToCart(cardData));
              setProductAdded(true)}} block>
                Agregar al carrito
            </Button>
          : <Button variant="danger" 
            onClick={() => {
              dispatch(removeFromCart(cardData));
              setProductAdded(false)}} block>
                Remover del carrito
            </Button>
        }
      </Card.Footer>
    </Card>
  );
}

export default BaseCard;