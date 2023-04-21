import { useState, useEffect } from 'react';

import Navbar from './navbar';
import {
  WrapperTopBar,
  MenuWrapper,
  MenuAction,
  Title,
  SearchWrapper,
  TextInput,
  SearchFilters,
  OptionsMenu,
  SearchMenu,
  SearchButton,
} from './style.Topbar';

interface CityProps {
  id: number;
  nome: string;
  uf: string;
}

export default function Topbar() {
  const [cidades, setCidades] = useState<CityProps[]>([]);

  useEffect(() => {
    fetch(`http://localhost:8000/api/cidades`)
      .then(response => response.json())
      .then(data => setCidades(data));
  }, [cidades]);

  return (
    <WrapperTopBar>
      <Navbar />
      <MenuWrapper>
        <MenuAction>
          <Title>
            <h1>
              O seu imóvel do sonhos <strong>está aqui</strong>
            </h1>
            <p>Garantia para comprar, alugar e investir</p>
          </Title>
          <SearchWrapper>
            <OptionsMenu>
              <button id="buy">Comprar</button>
              <button id="rent">Alugar</button>
            </OptionsMenu>
            <SearchMenu>
              <TextInput>
                <input
                  type="text"
                  placeholder="Pesquise por cidade, bairro ou rua..."
                />
              </TextInput>
              <SearchFilters>
                <select name="cidades" id="">
                  <option value="0">Selecione uma cidade</option>
                  {cidades.map(item => {
                    return (
                      <option key={item.id} value={item.id}>
                        {item.nome}
                      </option>
                    );
                  })}
                </select>
              </SearchFilters>
              <SearchButton>
                <button>Procurar imóvel</button>
              </SearchButton>
            </SearchMenu>
          </SearchWrapper>
        </MenuAction>
      </MenuWrapper>
    </WrapperTopBar>
  );
}
