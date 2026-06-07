const niveis = [
  {
    cor: "amarelo",
    icone: "⏱",
    titulo: "Alerta amarelo",
    quando: "CME detectada",
    texto: "Chegada estimada em X dias. A intensidade ainda está sendo calculada. Fique atento.",
  },
  {
    cor: "laranja",
    icone: "🔋",
    titulo: "Alerta laranja",
    quando: "Intensidade G3 confirmada",
    texto: "Chegada em X horas. O GPS pode falhar. Carregue seus dispositivos.",
  },
  {
    cor: "vermelho",
    icone: "⚠",
    titulo: "Alerta vermelho",
    quando: "G4 ou G5 confirmado",
    texto: "Impacto em X minutos. Desligue equipamentos sensíveis imediatamente.",
  },
];

const corClasses = {
  amarelo: "border-alerta-amarelo text-alerta-amarelo hover:shadow-[0_0_20px_rgba(234,179,8,0.4)]",
  laranja: "border-alerta-laranja text-alerta-laranja hover:shadow-[0_0_20px_rgba(249,115,22,0.4)]",
  vermelho: "border-alerta-vermelho text-alerta-vermelho hover:shadow-[0_0_20px_rgba(239,68,68,0.4)]",
};

export default function Objetivos() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      <h1 className="font-display text-4xl font-bold text-slate-100">Objetivos</h1>
      <p className="mt-4 max-w-3xl text-lg text-slate-300">
        O monitoramento já existe: a NASA e a NOAA acompanham o clima espacial.
        O problema é que a população comum nunca recebe um aviso. Não existe um
        protocolo unificado de alerta para o público geral. O Solar Alert System
        preenche essa lacuna com três níveis de alerta progressivos.
      </p>

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {niveis.map((n) => (
          <div
            key={n.cor}
            className={`rounded-xl border-t-4 bg-space-800 p-6 ${corClasses[n.cor]}`}
          >
            <h3 className="font-display text-xl font-bold">{n.titulo}</h3>
            <p className="mt-1 text-xs uppercase tracking-wide text-slate-400">
              {n.quando}
            </p>
            <p className="mt-3 text-sm text-slate-300">{n.texto}</p>
          </div>
        ))}
      </div>

      <h2 className="mt-12 font-display text-2xl text-alerta-laranja">
        Para quem é útil?
      </h2>
      <div className="mt-5 grid gap-5 md:grid-cols-3">
        <div className="min-w-0 rounded-xl border border-space-600 bg-space-800 p-5">
          <h3 className="font-display text-lg text-slate-100">Pessoas comuns</h3>
          <p className="mt-2 text-sm text-slate-300">
            Para entender alertas solares sem precisar interpretar dados técnicos.
          </p>
        </div>
        <div className="min-w-0 rounded-xl border border-space-600 bg-space-800 p-5">
          <h3 className="font-display text-lg text-slate-100">Profissionais e estudantes</h3>
          <p className="mt-2 text-sm text-slate-300">
            Para acompanhar indicadores e compreender possíveis impactos tecnológicos.
          </p>
        </div>
        <div className="min-w-0 rounded-xl border border-space-600 bg-space-800 p-5">
          <h3 className="font-display text-lg text-slate-100">Serviços essenciais</h3>
          <p className="mt-2 text-sm text-slate-300">
            Para entender como eventos intensos podem afetar navegação, comunicação e energia.
          </p>
        </div>
      </div>

      <div className="mt-10 rounded-xl border border-space-600 bg-space-800 p-6">
        <h2 className="font-display text-xl text-slate-100">Nosso objetivo central</h2>
        <p className="mt-3 max-w-3xl text-slate-300">
          Traduzir informações técnicas de clima espacial em alertas simples e
          acionáveis, para que qualquer pessoa saiba o que fazer antes de uma
          tempestade solar atingir a infraestrutura tecnológica que usamos todos
          os dias.
        </p>
      </div>
      
    </section>
  );
}
