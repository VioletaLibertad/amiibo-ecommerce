import React from 'react';
import Navbar from '../../components/Navbar/index';
import BaseCard from '../../components/BaseCard';
import Container from 'react-bootstrap/Container';

function Home() {
  return (
    <div>
      <Navbar showCart={true} />
      <Container>  
        <h2>Bienvenid@ a la mejor tienda de Amiibos</h2>
        <BaseCard />
      </Container>
    </div>
  );
}

export default Home;
