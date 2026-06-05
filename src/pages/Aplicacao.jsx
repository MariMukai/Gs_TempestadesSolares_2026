
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
    <section className="mx-auto max-w-6xl px-6 py-12">
      <h1 className="font-display text-4xl font-bold text-slate-100">
        Aplicação no dia a dia
      </h1>
      <p className="mt-4 max-w-3xl text-lg text-slate-300">
        Usar o Solar Alert System é simples. Em três passos você sabe o que está
        acontecendo no Sol e o que fazer a respeito.
      </p>

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {passos.map((p) => (
          <div key={p.num} className="rounded-xl border border-space-600 bg-space-800 p-6">
            <span className="font-display text-3xl font-bold text-alerta-laranja">
              {p.num}
            </span>
            <h3 className="mt-2 font-display text-lg text-slate-100">{p.titulo}</h3>
            <p className="mt-2 text-sm text-slate-300">{p.texto}</p>
          </div>
        ))}
      </div>

      <h2 className="mt-12 font-display text-2xl text-slate-100">
        Dicas de proteção por nível
      </h2>
      <div className="mt-5 space-y-3">
        {dicas.map((d) => (
          <div
            key={d.cor}
            className={`rounded-xl border-l-4 bg-space-800 p-5 ${corBorda[d.cor]}`}
          >
            <h3 className="font-display text-lg text-slate-100">{d.titulo}</h3>
            <p className="mt-1 text-sm text-slate-300">{d.texto}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
