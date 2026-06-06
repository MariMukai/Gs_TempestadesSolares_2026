import { classesPorCor } from "../utils/classificar.js";

const glowPorCor = {
  verde: "shadow-[0_0_15px_rgba(34,197,94,0.25)] hover:shadow-[0_0_25px_rgba(34,197,94,0.5)]",
  amarelo: "shadow-[0_0_15px_rgba(234,179,8,0.25)] hover:shadow-[0_0_25px_rgba(234,179,8,0.5)]",
  laranja: "shadow-[0_0_15px_rgba(249,115,22,0.3)] hover:shadow-[0_0_25px_rgba(249,115,22,0.6)]",
  vermelho: "shadow-[0_0_15px_rgba(239,68,68,0.3)] hover:shadow-[0_0_25px_rgba(239,68,68,0.6)]",
};

export default function AlertCard({ alerta }) {
  const c = classesPorCor[alerta.cor];
  const glow = glowPorCor[alerta.cor];

  return (
    <article
      className={`animate-surgir rounded-xl border ${c.borda} ${c.fundo} ${glow} p-5 transition-all duration-300 hover:-translate-y-1`}
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