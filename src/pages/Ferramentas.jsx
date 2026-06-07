import ClassificadorKp from "../components/ClassificadorKp.jsx";
import CalculadoraCME from "../components/CalculadoraCME.jsx";
import SimuladorTempestade from "../components/SimuladorTempestade.jsx";

export default function Ferramentas() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <h1 className="break-words font-display text-4xl font-bold text-slate-100">
        Ferramentas interativas
      </h1>
      <p className="mt-4 max-w-3xl break-words text-lg text-slate-300">
        Use os recursos abaixo para entender como o sistema transforma dados técnicos de clima espacial em informações mais simples.
      </p>

      <div className="mt-10 space-y-10">
        <div className="min-w-0">
          <h2 className="break-words font-display text-xl text-alerta-laranja md:text-2xl">
            Classificação geomagnética
          </h2>
          <p className="mt-2 max-w-3xl break-words text-sm text-slate-400">
            Digite um índice Kp para descobrir o nível do alerta e compreender os possíveis impactos. Exemplo: Kp 7.5.
          </p>
          <ClassificadorKp />
        </div>

        <div className="min-w-0">
          <h2 className="break-words font-display text-xl text-alerta-laranja md:text-2xl">
            Previsão de chegada
          </h2>
          <p className="mt-2 max-w-3xl break-words text-sm text-slate-400">
            Informe a velocidade de uma CME para estimar quanto tempo ela levaria para chegar à Terra. Exemplo: 800 km/s.
          </p>
          <CalculadoraCME />
        </div>

        <div className="min-w-0">
          <h2 className="break-words font-display text-xl text-alerta-laranja md:text-2xl">
            Simulação educativa
          </h2>
          <p className="mt-2 max-w-3xl break-words text-sm text-slate-400">
            Gere um cenário fictício para praticar a interpretação dos alertas solares.
          </p>
          <SimuladorTempestade />
        </div>
      </div>
    </section>
  );
}
