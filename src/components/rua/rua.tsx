import { useState, useEffect } from 'react';

interface RuaPros {
  id: number;
  nome: string;
}

export default function HandleRua({ rua_id }: { rua_id: number }) {
  const [ruas, setRuas] = useState<RuaPros[]>([]);

  useEffect(() => {
    fetch(`http://localhost:8000/api/ruas`)
      .then(response => response.json())
      .then((data: RuaPros[]) => setRuas(data));
  }, []);

  const rua = ruas.find(rua => rua.id === rua_id);

  return (
    <>
      <p>{rua ? rua.nome : 'Rua não encontrada'}</p>
    </>
  );
}
