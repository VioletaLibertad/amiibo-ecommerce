import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Navbar from '../../components/Navbar/index';
import BaseCard from '../../components/BaseCard';
import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';
import CardColumns from 'react-bootstrap/CardColumns';
import { REQUEST_AMIIBO_LIST } from '../../redux/actions';

function Home() {
  const dispatch = useDispatch();

  const amiiboList = useSelector(state => state.amiiboList);

  useEffect(() => {
    if (amiiboList.length === 0) {
      dispatch({ type: REQUEST_AMIIBO_LIST });
    }
  });

  return (
    <div>
      <Navbar showCart={true} />
      <Container>  
        <h2>Bienvenid@ a la mejor tienda de Amiibos</h2>
        <CardColumns>
          {amiiboList ? 
            amiiboList.map(elem => <BaseCard key={elem.tail} data={elem} />)
            : <Spinner animation="grow" />
          }
        </CardColumns>
      </Container>
    </div>
  );
}

export default Home;
