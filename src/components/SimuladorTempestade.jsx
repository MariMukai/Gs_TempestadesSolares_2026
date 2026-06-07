import { useState } from "react";
import { classesPorCor } from "../utils/classificar.js";
import {
  NIVEIS_SIMULAVEIS,
  simularTempestade,
} from "../utils/simulacao.js";

const opcoes = [
  { valor: "aleatorio", nome: "Aleatório" },
  ...NIVEIS_SIMULAVEIS.map((nivel) => ({ valor: nivel, nome: nivel })),
];

export default function SimuladorTempestade() {
  const [nivel, setNivel] = useState("aleatorio");
  const [resultado, setResultado] = useState(null);
  const [erro, setErro] = useState(null);

  function simular() {
    const simulacao = simularTempestade(nivel);
    if (!simulacao) {
      setErro("Escolha um nível válido para simular.");
      setResultado(null);
      return;
    }

    setErro(null);
    setResultado(simulacao);
  }

  const classificacao = resultado?.classificacaoTempestade;
  const c = classificacao ? classesPorCor[classificacao.cor] : null;
  const tempoChegada = resultado?.tempoChegada;
  const temClassificacaoInvalida = resultado && classificacao && !c;

  return (
    <div className="mt-8 max-w-full overflow-hidden rounded-xl border border-space-600 bg-space-800 p-4 sm:p-6">
      <h3 className="break-words font-display text-lg text-slate-100">
        Simulador educativo de tempestade solar
      </h3>
      <p className="mt-1 break-words text-sm text-slate-400">
        Escolha um nível geomagnético ou gere um cenário aleatório para treinar
        a leitura dos alertas.
      </p>

      <div className="mt-4 flex flex-wrap gap-3">
        <select
          value={nivel}
          onChange={(e) => setNivel(e.target.value)}
          className="w-40 max-w-full rounded-lg border border-space-600 bg-space-900 px-4 py-2 font-display text-sm text-slate-100 focus:border-alerta-laranja focus:outline-none"
        >
          {opcoes.map((opcao) => (
            <option key={opcao.valor} value={opcao.valor}>
              {opcao.nome}
            </option>
          ))}
        </select>

        <button
          onClick={simular}
          className="rounded-lg bg-alerta-laranja px-5 py-2 font-display text-sm font-bold text-space-900 transition-opacity hover:opacity-80"
        >
          Simular tempestade
        </button>
      </div>

      {erro && (
        <p className="mt-3 text-sm text-alerta-vermelho">{erro}</p>
      )}

      {temClassificacaoInvalida && (
        <p className="mt-3 text-sm text-alerta-vermelho">
          Não foi possível exibir a simulação devido a uma classificação inválida.
        </p>
      )}

      {resultado && classificacao && c && (
        <div className={`mt-5 rounded-xl border ${c.borda} ${c.fundo} p-4 sm:p-5`}>
          <div className="flex items-center justify-between">
            <div className="min-w-0">
              <p className="text-xs uppercase tracking-wide text-slate-400">
                Nível simulado
              </p>
              <h4 className={`font-display text-3xl font-bold ${c.texto}`}>
                {classificacao.nivel}
              </h4>
            </div>
            <span className={`h-3 w-3 rounded-full ${c.bolinha} animate-pulso`} />
          </div>

          <p className="mt-2 font-display text-lg text-slate-100">
            Tempestade {classificacao.rotulo}
          </p>
          <p className="mt-1 break-words text-sm text-slate-300">
            {classificacao.descricao}
          </p>

          <dl className="mt-4 grid gap-3 border-t border-space-600 pt-4 text-xs text-slate-400 sm:grid-cols-2 lg:grid-cols-4">
            <div className="min-w-0">
              <dt>Índice Kp</dt>
              <dd className={`font-display text-base ${c.texto}`}>
                {resultado.kp}
              </dd>
            </div>
            <div className="min-w-0">
              <dt>Velocidade CME</dt>
              <dd className="font-display text-base text-slate-200">
                {resultado.velocidade} km/s
              </dd>
            </div>
            <div className="min-w-0">
              <dt>Chegada estimada</dt>
              <dd className="font-display text-base text-slate-200">
                {tempoChegada
                  ? `${tempoChegada.horas}h ${tempoChegada.minutos}min`
                  : "Tempo indisponível"}
              </dd>
            </div>
            <div className="min-w-0">
              <dt>Velocidade</dt>
              <dd className="font-display text-base capitalize text-slate-200">
                {resultado.classificacaoVelocidade}
              </dd>
            </div>
          </dl>

          <p className={`mt-4 break-words border-t border-space-600 pt-4 text-sm ${c.texto}`}>
            Ação recomendada: {classificacao.acao}
          </p>

          <p className="mt-4 break-words rounded-lg border border-space-600 bg-space-900 p-3 text-xs text-slate-400">
            Simulação educativa: a velocidade indica o tempo estimado de chegada,
            mas não determina sozinha a intensidade da tempestade. O impacto real
            também depende de fatores como o campo magnético Bz.
          </p>
        </div>
      )}
    </div>
  );
}
