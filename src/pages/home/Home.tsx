import { useState, useEffect } from 'react';

import Topbar from '../../components/topbar';

import {
  WrapperShelf,
  HouseShelf,
  Title,
  HouseCard,
  WrapperHouse,
} from './style.Home';

import HandleRua from '../../components/rua';
import HandleBairro from '../../components/bairro';

interface HouseProps {
  id: number;
  quartos: number;
  comodos: number;
  area_construcao: number;
  bairro_id: number;
  rua_id: number;
  valor: number;
}

export default function Home() {
  const [casas, setCasas] = useState<HouseProps[]>([]);

  useEffect(() => {
    fetch(`http://localhost:8000/api/casas`)
      .then(response => response.json())
      .then(data => setCasas(data));
  }, []);

  return (
    <>
      <Topbar />
      <WrapperShelf>
        <HouseShelf>
          <Title>
            <h1>
              Nossas <br />
              <strong>oportunidades</strong>
            </h1>
          </Title>
          <HouseCard>
            {casas.map(item => {
              return (
                <WrapperHouse key={item.id}>
                  <img src="./img/house_image.png" alt="" />
                  <h1>Área construída</h1>
                  <p>{item.area_construcao}m²</p>
                  <HandleRua rua_id={item.rua_id} />
                  <HandleBairro bairro_id={item.bairro_id} />
                  <h1>{item.valor}</h1>
                </WrapperHouse>
              );
            })}
          </HouseCard>
        </HouseShelf>
      </WrapperShelf>
    </>
  );
}
