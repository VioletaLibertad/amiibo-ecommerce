import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './style.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import { checkout } from '../../routes';
import { removeFromCart } from '../../redux/actions';


function CartModal(props) {
  const dispatch = useDispatch();

  const cart = useSelector(state => state.cart);

  return(
    <Modal
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Tus futuros amiibos
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {cart.length > 0
          ? <Table borderless responsive>
              <thead>
                <tr>
                  <th>Personaje</th>
                  <th>Amiibo Serie</th>
                  <th>Tipo</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {cart.map(elem =>
                  <tr key={elem.tail}>
                    <td>{elem.character}</td>
                    <td>{elem.amiiboSeries}</td>
                    <td>{elem.type}</td>
                    <td>
                      <Button size="sm" variant="danger" 
                      onClick={() => dispatch(removeFromCart(elem))} block>
                        Remover
                      </Button>
                    </td>
                  </tr>
                )}
              </tbody>
            </Table>
          : <h3>Tu carrito está vacío, ve a buscar algunos amiibos :D</h3>
        }
      </Modal.Body>
      <Modal.Footer>
        {cart.length > 0 
          ? <Link to={checkout} onClick={props.onHide}>
              <Button>
              ¡Quiero mis amiibo!
              </Button>
            </Link>
          : <Button onClick={props.onHide}>
            Seleccionar amiibos
          </Button>
        }
      </Modal.Footer>
    </Modal>
  );
}

export default CartModal;