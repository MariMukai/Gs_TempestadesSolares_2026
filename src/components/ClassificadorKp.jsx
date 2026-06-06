import { useState } from "react";
import { classificarTempestade, classesPorCor } from "../utils/classificar.js";
import { validarKp } from "../utils/calculos.js";

export default function ClassificadorKp() {
  const [valor, setValor] = useState("");
  const [resultado, setResultado] = useState(null);
  const [erro, setErro] = useState(null);

  function classificar() {
    const validacao = validarKp(valor);
    if (!validacao.valido) {
      setErro(validacao.mensagem);
      setResultado(null);
      return;
    }
    setErro(null);
    setResultado({ kp: validacao.kp, ...classificarTempestade(validacao.kp) });
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") classificar();
  }

  const c = resultado ? classesPorCor[resultado.cor] : null;

  return (
    <div className="mt-8 rounded-xl border border-space-600 bg-space-800 p-6">
      <h3 className="font-display text-lg text-slate-100">
        Classificar índice Kp
      </h3>
      <p className="mt-1 text-sm text-slate-400">
        Digite um valor entre 0 e 9 para ver o nível da tempestade.
      </p>

      <div className="mt-4 flex gap-3">
        <input
          type="number"
          min={0}
          max={9}
          step={0.1}
          value={valor}
          onChange={(e) => setValor(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ex: 7.3"
          className="w-36 rounded-lg border border-space-600 bg-space-900 px-4 py-2 font-display text-slate-100 placeholder-slate-500 focus:border-alerta-laranja focus:outline-none"
        />
        <button
          onClick={classificar}
          className="rounded-lg bg-alerta-laranja px-5 py-2 font-display text-sm font-bold text-space-900 transition-opacity hover:opacity-80"
        >
          Classificar
        </button>
      </div>

      {erro && (
        <p className="mt-3 text-sm text-alerta-vermelho">{erro}</p>
      )}

      {resultado && c && (
        <div className={`mt-5 rounded-xl border ${c.borda} ${c.fundo} p-5`}>
          <div className="flex items-center justify-between">
            <span className={`font-display text-2xl font-bold ${c.texto}`}>
              {resultado.nivel}
            </span>
            <span className={`h-3 w-3 rounded-full ${c.bolinha} animate-pulso`} />
          </div>
          <h4 className="mt-2 font-display text-lg text-slate-100">
            Tempestade {resultado.rotulo}
          </h4>
          <p className="mt-1 text-sm text-slate-300">{resultado.descricao}</p>
          <p className={`mt-3 border-t border-space-600 pt-3 font-display text-sm ${c.texto}`}>
            Índice Kp: {resultado.kp}
          </p>
        </div>
      )}
    </div>
  );
}
