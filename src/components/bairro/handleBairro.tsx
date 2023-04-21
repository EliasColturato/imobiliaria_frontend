import { useState, useEffect } from 'react';

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
      <p>{bairro ? bairro.nome : 'Bairro não encontrado'}</p>
    </>
  );
}
