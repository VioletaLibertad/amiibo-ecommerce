import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar/index';
import BaseCard from '../../components/BaseCard';
import Container from 'react-bootstrap/Container';
import CardColumns from 'react-bootstrap/CardColumns';
import { getAmiiboList } from '../../redux/api/index';

function Home() {
  const [amiiboList, setAmiiboList] = useState([]);

  useEffect(() => {
    getList();
  });

  const getList = async () => {
    if (amiiboList.length === 0) {
      const data = await getAmiiboList();
      setAmiiboList(data);
    }
  };


  return (
    <div>
      <Navbar showCart={true} />
      <Container>  
        <h2>Bienvenid@ a la mejor tienda de Amiibos</h2>
        <CardColumns>
          {amiiboList ? 
            amiiboList.map(elem => <BaseCard key={elem.tail} data={elem} />)
            : null
          }
        </CardColumns>
      </Container>
    </div>
  );
}

export default Home;
