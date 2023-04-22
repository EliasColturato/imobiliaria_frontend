import { WrapperCard, TextCard } from './style.BeneficioCard';

interface Props {
  text: string;
  image: string;
}

export default function BeneficioCard(props: Props) {
  return (
    <WrapperCard>
      <img src={props.image} alt="" />
      <TextCard>
        <h1>{props.text}</h1>
      </TextCard>
    </WrapperCard>
  );
}
