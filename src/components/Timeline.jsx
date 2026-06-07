const eventos = [
  { ano: "1859", nome: "Evento Carrington", texto: "Uma das tempestades geomagnéticas mais intensas já registradas. Sistemas de telégrafo sofreram falhas e incêndios.", cor: "vermelho" },
  { ano: "1921", nome: "New York Railroad Storm", texto: "Tempestade geomagnética muito intensa que afetou sistemas telegráficos e infraestruturas associadas às ferrovias.", cor: "vermelho" },
  { ano: "1972", nome: "Grande tempestade solar de agosto", texto: "Evento extremamente rápido, com tempo de trânsito entre o Sol e a Terra de aproximadamente 14,6 horas.", cor: "laranja" },
  { ano: "1989", nome: "Quebec", texto: "Tempestade geomagnética associada a um apagão de aproximadamente nove horas no sistema elétrico de Quebec.", cor: "laranja" },
  { ano: "2000", nome: "Bastille Day Event", texto: "Grande evento solar ocorrido em 14 de julho de 2000, com tempestade geomagnética extrema e auroras intensas.", cor: "vermelho" },
  { ano: "2003", nome: "Tempestade de Halloween", texto: "Sequência de tempestades solares intensas que afetou GPS, comunicações, satélites e outros sistemas tecnológicos.", cor: "amarelo" },
  { ano: "2012", nome: "CME de julho: quase impacto na Terra", texto: "Evento extremo observado pela sonda STEREO-A. Não atingiu diretamente a Terra, mas demonstrou o risco de uma tempestade intensa.", cor: "vermelho" },
  { ano: "2024", nome: "Tempestade G5", texto: "Tempestade geomagnética extrema observada em maio de 2024, com auroras visíveis em regiões incomuns.", cor: "vermelho" },
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
              <div className="min-w-0 rounded-xl border border-space-600 bg-space-800 p-4">
                <span className={`font-display text-xl font-bold ${c.texto}`}>{e.ano}</span>
                <h4 className="mt-1 font-display text-base text-slate-100">{e.nome}</h4>
                <p className="mt-1 break-words text-sm text-slate-300">{e.texto}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
