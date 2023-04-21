import {
  CasasCard,
  CasaInfo,
  Title,
  DetailsCasa,
  AreaCasa,
  GaragemCasa,
  ValueCasa,
} from './style.Casa';

import HandleBairro from '../bairro';
import HandleRua from '../rua/rua';

interface CasaProps {
  area_construcao: number;
  rua_id: number;
  garagem: number;
  bairro_id: number;
  valor: number;
}

export default function Casa(props: CasaProps) {
  return (
    <CasasCard>
      <img src="./img/house_image.png" alt="" />
      <CasaInfo>
        <Title>
          <HandleRua rua_id={props.rua_id} />
          <HandleBairro bairro_id={props.bairro_id} />
        </Title>
        <DetailsCasa>
          <AreaCasa>
            <img src="./img/maximize-2.png" alt="" />
            <p>{props.area_construcao}m²</p>
          </AreaCasa>
          <GaragemCasa>
            <img src="./img/truck.png" alt="" />
            <p>{props.garagem}</p>
          </GaragemCasa>
        </DetailsCasa>
        <ValueCasa>
          <h1>
            {props.valor.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })}
          </h1>
          <a
            href="https://api.whatsapp.com/send?phone=5516991334228&text=Olá,%20Elias.%20Quero%20mais%20informações"
            target="_blank"
            rel="noreferrer"
          >
            <img src="./img/whatsapp.png" alt="WhatsApp" />
          </a>
        </ValueCasa>
      </CasaInfo>
    </CasasCard>
  );
}
