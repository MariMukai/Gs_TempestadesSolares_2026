import { classificarTempestade, classesPorCor } from "../utils/classificar.js";

// Kp representativo de cada nível para gerar os dados via classificarTempestade.
const KP_POR_NIVEL = [0, 5, 6, 7, 8, 9];

export default function EscalaCompleta() {
  const niveis = KP_POR_NIVEL.map((kp) => classificarTempestade(kp));

  return (
    <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {niveis.map((n) => {
        const c = classesPorCor[n.cor];
        return (
          <div
            key={n.nivel}
            className={`rounded-xl border ${c.borda} ${c.fundo} p-5`}
          >
            <div className="flex items-center justify-between">
              <span className={`font-display text-2xl font-bold ${c.texto}`}>
                {n.nivel}
              </span>
              <span className="font-display text-xs text-slate-400">
                {n.faixaKp}
              </span>
            </div>

            <h3 className="mt-1 font-display text-base text-slate-100">
              {n.rotulo}
            </h3>

            <p className="mt-3 text-sm text-slate-300">
              <span className="font-semibold text-slate-200">Efeito: </span>
              {n.descricao}
            </p>

            <p className="mt-2 text-sm text-slate-300">
              <span className="font-semibold text-slate-200">Ação: </span>
              {n.acao}
            </p>

            {n.exemplos && (
              <p className={`mt-3 border-t border-space-600 pt-3 text-xs ${c.texto}`}>
                Exemplos históricos: {n.exemplos}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}
