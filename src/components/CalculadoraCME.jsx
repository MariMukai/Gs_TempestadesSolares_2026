import { useState } from "react";
import { calcularTempoChegada, classificarVelocidade } from "../utils/calculos.js";
import { buscarVento } from "../services/dadosNoaa.js";

export default function CalculadoraCME() {
  const [valor, setValor] = useState("");
  const [resultado, setResultado] = useState(null);
  const [erro, setErro] = useState(null);
  const [buscando, setBuscando] = useState(false);
  const [avisoVento, setAvisoVento] = useState(null);

  function calcular() {
    const velocidade = Number(valor);
    const tempo = calcularTempoChegada(velocidade);
    if (!tempo) {
      setErro("Digite uma velocidade válida (maior que zero).");
      setResultado(null);
      return;
    }
    setErro(null);
    setAvisoVento(null);
    setResultado({
      horas: tempo.horas,
      minutos: tempo.minutos,
      horasTotal: tempo.horasTotal,
      classificacao: classificarVelocidade(velocidade),
      velocidade,
    });
  }

  async function usarVentoAtual() {
    setBuscando(true);
    setAvisoVento(null);
    const vento = await buscarVento();
    setBuscando(false);
    if (vento === null) {
      setAvisoVento("Vento solar indisponível no momento.");
      return;
    }
    setValor(String(vento));
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") calcular();
  }

  return (
    <div className="mt-8 max-w-full overflow-hidden rounded-xl border border-space-600 bg-space-800 p-4 sm:p-6">
      <h3 className="break-words font-display text-lg text-slate-100">
        Calculadora de chegada de CME
      </h3>
      <p className="mt-1 break-words text-sm text-slate-400">
        Informe a velocidade de uma ejeção de massa coronal (km/s) para estimar
        o tempo de chegada à Terra.
      </p>

      <div className="mt-4 flex flex-wrap gap-3">
        <input
          type="number"
          min={0}
          step={50}
          value={valor}
          onChange={(e) => setValor(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ex: 800"
          className="w-36 max-w-full rounded-lg border border-space-600 bg-space-900 px-4 py-2 font-display text-slate-100 placeholder-slate-500 focus:border-alerta-laranja focus:outline-none"
        />
        <button
          onClick={calcular}
          className="rounded-lg bg-alerta-laranja px-5 py-2 font-display text-sm font-bold text-space-900 transition-opacity hover:opacity-80"
        >
          Calcular
        </button>
        <button
          onClick={usarVentoAtual}
          disabled={buscando}
          className="rounded-lg border border-alerta-laranja px-5 py-2 font-display text-sm text-alerta-laranja transition-opacity hover:opacity-70 disabled:opacity-40"
        >
          {buscando ? "Buscando..." : "Usar vento atual da NOAA"}
        </button>
      </div>

      {erro && (
        <p className="mt-3 text-sm text-alerta-vermelho">{erro}</p>
      )}

      {avisoVento && (
        <p className="mt-3 text-sm text-alerta-amarelo">{avisoVento}</p>
      )}

      {resultado && (
        <div className="mt-5 rounded-xl border border-alerta-laranja bg-alerta-laranja/10 p-4 sm:p-5">
          <p className="text-xs uppercase tracking-wide text-slate-400">
            Tempo estimado de chegada
          </p>
          <p className="mt-1 font-display text-3xl font-bold text-alerta-laranja">
            {resultado.horas}h {resultado.minutos}min
          </p>
          <p className="mt-1 text-sm text-slate-300">
            Aproximadamente {resultado.horasTotal.toFixed(1)} horas
          </p>

          <dl className="mt-4 grid gap-3 border-t border-space-600 pt-3 text-xs text-slate-400 sm:grid-cols-2">
            <div>
              <dt>Velocidade</dt>
              <dd className="font-display text-base text-alerta-laranja">
                {resultado.velocidade} km/s
              </dd>
            </div>
            <div className="sm:text-right">
              <dt>Classificação</dt>
              <dd className="font-display text-base text-slate-200 capitalize">
                {resultado.classificacao}
              </dd>
            </div>
          </dl>
        </div>
      )}
    </div>
  );
}
