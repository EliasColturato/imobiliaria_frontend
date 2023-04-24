import { WrapperMenuItem } from './style.MenuItens';

interface ItensProps {
  text: string;
  img_url: string;
}

export default function MenuItens(props: ItensProps) {
  return (
    <WrapperMenuItem>
      <img src={`${props.img_url}`} alt="" />
      <h1>{props.text}</h1>
    </WrapperMenuItem>
  );
}
