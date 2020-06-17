import React from 'react';
import Navbar from '../../components/Navbar/index';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { home } from '../../routes';

function Checkout() {
  return (
    <div>
      <Navbar showCart={false} />
      <h1>HOLOOOOOO desde checkout</h1>
      <Container>
        <Link to={home}>
          <Button>
          Volver al inicio
          </Button>
        </Link>
      </Container>
    </div>
  );
}

export default Checkout;
