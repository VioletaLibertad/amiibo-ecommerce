import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Navbar from '../../components/Navbar/index';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import { home } from '../../routes';
import { CLEAN_CART } from '../../redux/actions';

function Checkout() {
  const [total, setTotal] = useState(0);
  const dispatch = useDispatch();

  const cart = useSelector(state => state.cart);

  useEffect(() => {
    if (cart.length > 0) {
      let totalValue = cart.reduce((sum, elem) => sum + elem.price, 0);
      setTotal(totalValue);
    }
  }, [cart]);

  return (
    <div>
      <Navbar showCart={false} />
      <Container>
        <h3>Resumen de tu compra</h3>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>Personaje</th>
              <th>Nombre</th>
              <th>Amiibo Serie</th>
              <th>Tipo</th>
            </tr>
          </thead>
          <tbody>
            {cart.map(elem =>
              <tr key={elem.tail}>
                <td>{elem.character}</td>
                <td>{elem.name}</td>
                <td>{elem.amiiboSeries}</td>
                <td>{elem.type}</td>
              </tr>
            )}
          </tbody>
        </Table>
        <Row style={{textAlign: 'center'}}>
          <Col>
            <Link to={home}>
              <Button>
                Seguir comprando
              </Button>
            </Link>
          </Col>
          <Col>
            <h3>Total: ${total}</h3>
          </Col>
          <Col>
            <Link to={home}>
              <Button onClick={() => dispatch({ type: CLEAN_CART })}>
                Ir al pago
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Checkout;
