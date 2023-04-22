import BeneficioCard from './beneficioCard/BeneficioCard';

import { SectionWrapper, Cards } from './styled.SectionBeneficios';

export default function SectionBeneficios() {
  const atendimentoImage = './img/clock.png';
  const garantiaImage = './img/check-circle.png';
  const fileImage = './img/file-text.png';

  return (
    <SectionWrapper>
      <h1>
        Nossos <strong>benefícios.</strong>
      </h1>
      <Cards>
        <BeneficioCard text="Atendimento 24 horas." image={atendimentoImage} />
        <BeneficioCard text="Processos transparentes." image={garantiaImage} />
        <BeneficioCard text="Garantia na compra." image={fileImage} />
      </Cards>
    </SectionWrapper>
  );
}
