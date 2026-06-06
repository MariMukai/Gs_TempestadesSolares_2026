import Timeline from "../components/Timeline";

const escala = [
  { nivel: "G1", kp: "Kp 5", efeito: "Quase nada perceptível", cor: "verde" },
  { nivel: "G2", kp: "Kp 6", efeito: "Leve degradação de GPS", cor: "verde" },
  { nivel: "G3", kp: "Kp 7", efeito: "GPS degradado, falhas de rádio", cor: "amarelo" },
  { nivel: "G4", kp: "Kp 8", efeito: "Satélites comprometidos, quedas de energia", cor: "laranja" },
  { nivel: "G5", kp: "Kp 9", efeito: "Apagões em cascata, internet global afetada", cor: "vermelho" },
];

const corTexto = {
  verde: "text-alerta-verde",
  amarelo: "text-alerta-amarelo",
  laranja: "text-alerta-laranja",
  vermelho: "text-alerta-vermelho",
};

export default function Tecnologia() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      <h1 className="font-display text-4xl font-bold text-slate-100">Tecnologia</h1>
      <p className="mt-4 max-w-3xl text-lg text-slate-300">
        O Solar Alert System consome dados reais da API pública da NOAA Space
        Weather, atualizada a cada minuto e sem necessidade de autenticação. Três
        grandezas guiam todo o sistema.
      </p>

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        <div className="rounded-xl border border-space-600 bg-space-800 p-5">
          <h3 className="font-display text-lg text-alerta-laranja">Índice Kp</h3>
          <p className="mt-2 text-sm text-slate-300">
            Mede a perturbação geomagnética numa escala de 0 a 9. É a grandeza
            principal para classificar a tempestade de G1 a G5.
          </p>
        </div>
        <div className="rounded-xl border border-space-600 bg-space-800 p-5">
          <h3 className="font-display text-lg text-alerta-laranja">Campo Bz</h3>
          <p className="mt-2 text-sm text-slate-300">
            A orientação magnética do vento solar. Quando aponta para o sul,
            determina a intensidade real do impacto na Terra.
          </p>
        </div>
        <div className="rounded-xl border border-space-600 bg-space-800 p-5">
          <h3 className="font-display text-lg text-alerta-laranja">Vento solar</h3>
          <p className="mt-2 text-sm text-slate-300">
            A velocidade em km/s permite calcular o tempo de chegada de uma
            ejeção de massa coronal (CME) até a Terra.
          </p>
        </div>
      </div>

      <h2 className="mt-12 font-display text-2xl text-slate-100">
        Escala de intensidade
      </h2>
      <div className="mt-5 overflow-x-auto rounded-xl border border-space-600">
        <table className="w-full text-left text-sm">
          <thead className="bg-space-700 font-display text-slate-200">
            <tr>
              <th className="px-4 py-3">Nível</th>
              <th className="px-4 py-3">Índice Kp</th>
              <th className="px-4 py-3">O que é afetado</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-space-600 bg-space-800">
            {escala.map((linha) => (
              <tr key={linha.nivel}>
                <td className={`px-4 py-3 font-display font-bold ${corTexto[linha.cor]}`}>
                  {linha.nivel}
                </td>
                <td className="px-4 py-3 text-slate-300">{linha.kp}</td>
                <td className="px-4 py-3 text-slate-300">{linha.efeito}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="mt-12 font-display text-2xl text-slate-100">
        Como prevemos a chegada
      </h2>
      <div className="mt-5 grid gap-5 md:grid-cols-2">
        <div className="rounded-xl border-l-4 border-alerta-amarelo bg-space-800 p-5">
          <h3 className="font-display text-lg text-alerta-amarelo">
            Estágio 1 &middot; Aviso antecipado
          </h3>
          <p className="mt-1 text-xs uppercase tracking-wide text-slate-400">
            14 horas a 4 dias antes
          </p>
          <p className="mt-3 text-sm text-slate-300">
            Quando uma CME é detectada saindo do Sol, calculamos o tempo estimado
            de chegada pela fórmula:
          </p>
          <p className="mt-3 rounded bg-space-900 p-3 font-mono text-xs text-slate-200">
            tempo = 149.600.000 km / velocidade da CME (km/s)
          </p>
          <p className="mt-3 text-sm text-slate-300">
            Aqui ainda não se conhece a intensidade real, apenas que algo está a
            caminho.
          </p>
        </div>
        <div className="rounded-xl border-l-4 border-alerta-vermelho bg-space-800 p-5">
          <h3 className="font-display text-lg text-alerta-vermelho">
            Estágio 2 &middot; Confirmação crítica
          </h3>
          <p className="mt-1 text-xs uppercase tracking-wide text-slate-400">
            15 a 60 minutos antes
          </p>
          <p className="mt-3 text-sm text-slate-300">
            Quando a CME passa pelo satélite DSCOVR da NOAA, posicionado a 1,5
            milhão de km da Terra, o campo magnético Bz é medido com precisão. Só
            então a intensidade real é confirmada.
          </p>
        </div>
      </div>
       <h2 className="mt-12 font-display text-2xl text-slate-100">
        Eventos que marcaram a história
      </h2>
      <p className="mt-2 max-w-3xl text-slate-300">
        Tempestades solares não são teoria. Veja os eventos reais que mostram por
        que um sistema de alerta importa.
      </p>
      <Timeline />
    </section>
  );
}
