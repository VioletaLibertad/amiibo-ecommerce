import React, { useState } from 'react';
import './style.css';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import CartModal from '../CartModal/index';

function Navbar(props) {
  const [modalShow, setModalShow] = useState(false);

  let showCart = props.showCart;

  return (
    <>
      <Nav className="navbar">
        <Nav.Item>
          <h3>AmiiboStore</h3>
        </Nav.Item>
        <Nav.Item>
          {showCart  
            ? <Button variant="info" onClick={() => setModalShow(true)}>Ver Carrito</Button>
            : null
          }
        </Nav.Item>
      </Nav>
      <CartModal show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}

export default Navbar;
