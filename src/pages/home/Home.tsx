import { useState, useEffect } from 'react';

import Topbar from '../../components/topbar';

import { WrapperShelf, HouseShelf, Title, HouseCard } from './style.Home';

import Casa from '../../components/casa/Casa';
import SectionBeneficios from '../../components/sectionBeneficios';

interface HouseProps {
  id: number;
  quartos: number;
  comodos: number;
  area_construcao: number;
  bairro_id: number;
  rua_id: number;
  valor: number;
  garagem: number;
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
                <>
                  <Casa
                    garagem={item.garagem}
                    area_construcao={item.area_construcao}
                    rua_id={item.rua_id}
                    bairro_id={item.bairro_id}
                    valor={item.valor}
                  />
                </>
              );
            })}
          </HouseCard>
        </HouseShelf>
      </WrapperShelf>
      <SectionBeneficios />
    </>
  );
}
