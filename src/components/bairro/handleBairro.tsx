import { useState, useEffect } from 'react';
import { color } from '../../utils/colors';

interface BairroProps {
  id: number;
  nome: string;
}

export default function HandleBairro({ bairro_id }: { bairro_id: number }) {
  const [bairros, setBairros] = useState<BairroProps[]>([]);

  useEffect(() => {
    fetch(`http://localhost:8000/api/bairros`)
      .then(response => response.json())
      .then(data => setBairros(data));
  }, []);

  const bairro = bairros.find(bairro => bairro.id === bairro_id);

  return (
    <>
      <p style={{ fontSize: '15px', color: `${color.gray75}` }}>
        {bairro ? bairro.nome : 'Bairro não encontrado'}
      </p>
    </>
  );
}
