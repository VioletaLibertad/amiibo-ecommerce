import React from 'react';
import './style.css';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

function Navbar(props) {

  let showCart = props.showCart;

  return (
    <Nav className="navbar">
      <Nav.Item>
        <h3>AmiiboStore</h3>
      </Nav.Item>
      <Nav.Item>
        {showCart  
          ? <Button variant="info">Ver Carrito</Button>
          : null
        }
      </Nav.Item>
    </Nav>
  );
}

export default Navbar;
