import { useState } from "react";
import { carregarHistorico, limparHistorico } from "../utils/historico.js";
import Timeline from "../components/Timeline.jsx";

function formatarData(dataHora) {
  const data = new Date(dataHora);

  if (isNaN(data.getTime())) {
    return "Data indisponível";
  }

  return data.toLocaleString("pt-BR");
}

function formatarTempoChegada(tempoChegada) {
  if (!tempoChegada) {
    return null;
  }

  if (
    tempoChegada.horas !== undefined &&
    tempoChegada.minutos !== undefined
  ) {
    return `${tempoChegada.horas}h ${tempoChegada.minutos}min`;
  }

  return String(tempoChegada);
}

export default function Historico() {
  const [historico, setHistorico] = useState(() => carregarHistorico());

  function limpar() {
    const confirmou = window.confirm("Deseja limpar todo o histórico?");

    if (!confirmou) {
      return;
    }

    limparHistorico();
    setHistorico([]);
  }

  return (
    <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="min-w-0">
          <h1 className="break-words font-display text-4xl font-bold text-slate-100">
            Histórico local
          </h1>
          <p className="mt-4 max-w-3xl break-words text-lg text-slate-300">
            Os registros ficam salvos somente neste dispositivo e navegador.
          </p>
        </div>

        <button
          onClick={limpar}
          className="w-fit rounded-lg border border-alerta-laranja px-5 py-2 font-display text-sm text-alerta-laranja transition-opacity hover:opacity-70"
        >
          Limpar histórico
        </button>
      </div>

      {historico.length === 0 ? (
        <p className="mt-10 rounded-xl border border-space-600 bg-space-800 p-5 text-sm text-slate-300">
          Nenhum registro salvo ainda.
        </p>
      ) : (
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {historico.map((registro) => {
            const tempoFormatado = formatarTempoChegada(registro.tempoChegada);

            return (
              <article
                key={registro.id}
                className="min-w-0 rounded-xl border border-space-600 bg-space-800 p-5"
              >
                <div className="flex flex-col gap-1 border-b border-space-600 pb-3">
                  {registro.tipo && (
                    <p className="break-words font-display text-lg text-alerta-laranja">
                      {registro.tipo}
                    </p>
                  )}
                  {registro.origem && (
                    <p className="break-words text-xs uppercase tracking-wide text-slate-400">
                      Origem: {registro.origem}
                    </p>
                  )}
                  <p className="text-sm text-slate-300">
                    {formatarData(registro.dataHora)}
                  </p>
                </div>

                <div className="mt-4 grid gap-3 text-sm text-slate-300 sm:grid-cols-2">
                  {registro.nivel && (
                    <p>
                      <span className="text-slate-400">Nível: </span>
                      {registro.nivel}
                    </p>
                  )}
                  {registro.kp !== undefined && (
                    <p>
                      <span className="text-slate-400">Índice Kp: </span>
                      {registro.kp}
                    </p>
                  )}
                  {registro.velocidade !== undefined && (
                    <p>
                      <span className="text-slate-400">Velocidade: </span>
                      {registro.velocidade} km/s
                    </p>
                  )}
                  {tempoFormatado && (
                    <p>
                      <span className="text-slate-400">Tempo estimado: </span>
                      {tempoFormatado}
                    </p>
                  )}
                  {registro.bz !== undefined && (
                    <p>
                      <span className="text-slate-400">Bz: </span>
                      {registro.bz}
                    </p>
                  )}
                </div>

                {registro.descricao && (
                  <p className="mt-4 break-words border-t border-space-600 pt-3 text-sm text-slate-300">
                    {registro.descricao}
                  </p>
                )}
              </article>
            );
          })}
        </div>
      )}

      <section className="mt-14 border-t border-space-600 pt-10">
        <h2 className="break-words font-display text-2xl text-alerta-laranja">
          Eventos históricos de referência
        </h2>
        <p className="mt-2 max-w-3xl break-words text-slate-300">
          Conheça algumas tempestades solares marcantes registradas ao longo da história.
        </p>
        <Timeline />
      </section>
    </section>
  );
}
