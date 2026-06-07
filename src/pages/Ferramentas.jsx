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
        Recursos educativos para interpretar dados de clima espacial.
      </p>

      <div className="mt-10 space-y-10">
        <div className="min-w-0">
          <h2 className="break-words font-display text-xl text-alerta-laranja md:text-2xl">
            Classificação geomagnética
          </h2>
          <ClassificadorKp />
        </div>

        <div className="min-w-0">
          <h2 className="break-words font-display text-xl text-alerta-laranja md:text-2xl">
            Previsão de chegada
          </h2>
          <CalculadoraCME />
        </div>

        <div className="min-w-0">
          <h2 className="break-words font-display text-xl text-alerta-laranja md:text-2xl">
            Simulação educativa
          </h2>
          <SimuladorTempestade />
        </div>
      </div>
    </section>
  );
}
