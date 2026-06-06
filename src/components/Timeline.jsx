const eventos = [
  { ano: "1859", nome: "Evento Carrington", texto: "O mais intenso já registrado. Telégrafos pegaram fogo em todo o mundo.", cor: "vermelho" },
  { ano: "1989", nome: "Tempestade de Quebec", texto: "6 milhões de pessoas sem energia por 9 horas no Canadá. Prejuízo de bilhões.", cor: "laranja" },
  { ano: "2003", nome: "Tempestade de Halloween", texto: "Satélites danificados e falhas de rádio em todo o Atlântico.", cor: "amarelo" },
  { ano: "2024", nome: "Tempestade G5", texto: "A mais intensa em décadas. Afetou GPS e comunicações; auroras visíveis nos trópicos.", cor: "vermelho" },
];

const corClasses = {
  amarelo: { ponto: "bg-alerta-amarelo", texto: "text-alerta-amarelo" },
  laranja: { ponto: "bg-alerta-laranja", texto: "text-alerta-laranja" },
  vermelho: { ponto: "bg-alerta-vermelho", texto: "text-alerta-vermelho" },
};

export default function Timeline() {
  return (
    <div className="relative mt-6 pl-8">
      <div className="absolute left-2 top-2 bottom-2 w-0.5 bg-space-600" />

      <div className="space-y-6">
        {eventos.map((e, i) => {
          const c = corClasses[e.cor];
          return (
            <div
              key={e.ano}
              className="animate-surgir relative opacity-0"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <span
                className={`absolute -left-[26px] top-1.5 h-4 w-4 rounded-full ${c.ponto} animate-pulso ring-4 ring-space-900`}
              />
              <div className="rounded-xl border border-space-600 bg-space-800 p-4">
                <span className={`font-display text-xl font-bold ${c.texto}`}>{e.ano}</span>
                <h4 className="mt-1 font-display text-base text-slate-100">{e.nome}</h4>
                <p className="mt-1 text-sm text-slate-300">{e.texto}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}