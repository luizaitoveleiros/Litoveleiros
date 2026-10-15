'use client';

import { useState } from 'react';

export default function Home() {
  const [texto, setTexto] = useState('');
  const [resposta, setResposta] = useState('');

  function analisar() {
    setResposta(texto);
  }

  return (
    <main className="pagina">
      <section className="cartao">
        <h1>Litoveleiros</h1>
        <p className="subtitulo">Digite um texto abaixo e clique em Analisar.</p>

        <textarea
          className="campoTexto"
          value={texto}
          onChange={(event) => setTexto(event.target.value)}
          placeholder="Digite seu texto aqui..."
          rows={6}
        />

        <button className="botao" type="button" onClick={analisar}>
          Analisar
        </button>

        <div className="resposta" aria-live="polite">
          {resposta}
        </div>
      </section>
    </main>
  );
}
