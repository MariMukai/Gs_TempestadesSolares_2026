import { Link } from "react-router-dom";

const passos = [
  { num: "1", titulo: "Abra o painel", texto: "A página inicial mostra a atividade solar atual, lida em tempo real da NOAA." },
  { num: "2", titulo: "Leia a cor", texto: "Verde é calmo. Amarelo, laranja e vermelho indicam atenção crescente." },
  { num: "3", titulo: "Siga a dica", texto: "Cada nível traz uma ação simples: do que só observar até desligar aparelhos." },
];

const dicas = [
  { cor: "verde", titulo: "Verde (G1-G2)", texto: "Nenhuma ação necessária. Apenas acompanhe se quiser." },
  { cor: "amarelo", titulo: "Amarelo (G3)", texto: "Possíveis falhas de GPS e rádio. Evite depender de navegação por satélite para tarefas críticas." },
  { cor: "laranja", titulo: "Laranja (G4)", texto: "Carregue dispositivos. Satélites e rede elétrica podem ser afetados." },
  { cor: "vermelho", titulo: "Vermelho (G5)", texto: "Desligue equipamentos eletrônicos sensíveis. Risco de apagões em cascata." },
];

const corBorda = {
  verde: "border-alerta-verde",
  amarelo: "border-alerta-amarelo",
  laranja: "border-alerta-laranja",
  vermelho: "border-alerta-vermelho",
};

export default function Aplicacao() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <h1 className="break-words font-display text-4xl font-bold text-slate-100">
        Aplicação no dia a dia
      </h1>
      <p className="mt-4 max-w-3xl break-words text-lg text-slate-300">
        Usar o Solar Alert System é simples. Em três passos você sabe o que está
        acontecendo no Sol e o que fazer a respeito.
      </p>
      <p className="mt-3 max-w-3xl break-words text-sm text-slate-400">
        Comece pela página inicial para consultar a situação atual. Use as ferramentas para testar cenários e salve leituras importantes para consultar depois no histórico.
      </p>

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {passos.map((p) => (
          <div key={p.num} className="min-w-0 rounded-xl border border-space-600 bg-space-800 p-5 sm:p-6">
            <span className="font-display text-3xl font-bold text-alerta-laranja">
              {p.num}
            </span>
            <h3 className="mt-2 font-display text-lg text-slate-100">{p.titulo}</h3>
            <p className="mt-2 break-words text-sm text-slate-300">{p.texto}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 min-w-0 rounded-xl border border-alerta-laranja bg-alerta-laranja/10 p-5 sm:p-6">
        <h2 className="break-words font-display text-xl text-alerta-laranja">
          Quer testar os alertas na prática?
        </h2>
        <p className="mt-2 max-w-3xl break-words text-sm text-slate-300">
          Acesse as ferramentas interativas para classificar índices Kp, calcular
          o tempo de chegada de uma CME e simular tempestades solares.
        </p>
        <Link
          to="/ferramentas"
          className="mt-4 inline-block rounded-lg bg-alerta-laranja px-5 py-2 font-display text-sm font-bold text-space-900 transition-opacity hover:opacity-80"
        >
          Abrir ferramentas
        </Link>
        <Link
          to="/historico"
          className="ml-0 mt-3 inline-block rounded-lg border border-alerta-laranja px-5 py-2 font-display text-sm text-alerta-laranja transition-opacity hover:opacity-70 sm:ml-3"
        >
          Ver histórico local
        </Link>
      </div>

      <h2 className="mt-12 break-words font-display text-2xl text-slate-100">
        Dicas de proteção por nível
      </h2>
      <div className="mt-5 space-y-3">
        {dicas.map((d) => (
          <div
            key={d.cor}
            className={`min-w-0 rounded-xl border-l-4 bg-space-800 p-5 ${corBorda[d.cor]}`}
          >
            <h3 className="font-display text-lg text-slate-100">{d.titulo}</h3>
            <p className="mt-1 break-words text-sm text-slate-300">{d.texto}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
