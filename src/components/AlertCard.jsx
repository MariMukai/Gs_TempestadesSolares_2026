
import { classesPorCor } from "../utils/classificar.js";

export default function AlertCard({ alerta }) {
  const c = classesPorCor[alerta.cor];

  return (
    <article
      className={`animate-surgir rounded-xl border ${c.borda} ${c.fundo} p-5 shadow-lg transition-transform hover:-translate-y-1`}
    >
      <div className="flex items-center justify-between">
        <span className={`font-display text-2xl font-bold ${c.texto}`}>
          {alerta.nivel}
        </span>
        <span className={`h-3 w-3 rounded-full ${c.bolinha} animate-pulso`} />
      </div>

      <h3 className="mt-2 font-display text-lg text-slate-100">
        Tempestade {alerta.rotulo}
      </h3>
      <p className="mt-1 text-sm text-slate-300">{alerta.descricao}</p>

      <dl className="mt-4 flex justify-between border-t border-space-600 pt-3 text-xs text-slate-400">
        <div>
          <dt>Índice Kp</dt>
          <dd className={`font-display text-base ${c.texto}`}>{alerta.kp.toFixed(2)}</dd>
        </div>
        <div className="text-right">
          <dt>Registro</dt>
          <dd className="text-slate-300">
            {new Date(alerta.horario).toLocaleString("pt-BR")}
          </dd>
        </div>
      </dl>
    </article>
  );
}
