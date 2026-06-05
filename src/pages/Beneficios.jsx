
const beneficios = [
  { titulo: "Aviso para todos", texto: "Pela primeira vez, a população comum recebe um alerta de tempestade solar em linguagem simples, sem jargão técnico." },
  { titulo: "Tempo para reagir", texto: "Avisos progressivos do amarelo ao vermelho dão tempo de carregar dispositivos e proteger equipamentos sensíveis." },
  { titulo: "Dado real, não inventado", texto: "Tudo vem da API pública da NOAA, atualizada a cada minuto. Nada de números fictícios." },
  { titulo: "Acesso livre", texto: "Sem login, sem custo, sem barreira. A informação crítica fica disponível para qualquer pessoa." },
];

const diferenciais = [
  { titulo: "Dado real da NOAA", texto: "A maioria dos projetos inventa dados. Nós usamos uma API pública real atualizada a cada minuto." },
  { titulo: "Problema global", texto: "Tempestades solares afetam GPS, internet e energia de continentes inteiros ao mesmo tempo." },
  { titulo: "Lacuna comprovável", texto: "Nenhum sistema popular avisa a população comum. O problema existe e é mensurável." },
  { titulo: "Timing perfeito", texto: "Estamos no pico do Ciclo Solar 25 em 2026. A relevância é máxima agora." },
];

export default function Beneficios() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      <h1 className="font-display text-4xl font-bold text-slate-100">Benefícios</h1>
      <p className="mt-4 max-w-3xl text-lg text-slate-300">
        O que muda para quem usa o Solar Alert System, e por que esse projeto se
        destaca.
      </p>

      <h2 className="mt-10 font-display text-2xl text-alerta-laranja">
        Para o usuário final
      </h2>
      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        {beneficios.map((b) => (
          <div key={b.titulo} className="rounded-xl border border-space-600 bg-space-800 p-5">
            <h3 className="font-display text-lg text-slate-100">{b.titulo}</h3>
            <p className="mt-2 text-sm text-slate-300">{b.texto}</p>
          </div>
        ))}
      </div>

      <h2 className="mt-12 font-display text-2xl text-alerta-laranja">
        Diferenciais do projeto
      </h2>
      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        {diferenciais.map((d) => (
          <div key={d.titulo} className="rounded-xl border-l-4 border-alerta-laranja bg-space-800 p-5">
            <h3 className="font-display text-lg text-slate-100">{d.titulo}</h3>
            <p className="mt-2 text-sm text-slate-300">{d.texto}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
