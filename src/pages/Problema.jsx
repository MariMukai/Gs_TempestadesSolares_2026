
import { useEffect, useState } from "react";
import { buscarAlertas } from "../services/dadosNoaa.js";
import AlertCard from "../components/AlertCard.jsx";

export default function Problema() {
  const [alertas, setAlertas] = useState([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    buscarAlertas().then((dados) => {
      setAlertas(dados);
      setCarregando(false);
    });
  }, []);

  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      <h1 className="font-display text-4xl font-bold text-slate-100 md:text-5xl">
        Quando o Sol ataca, ninguém avisa.
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-slate-300">
        Tempestades solares já derrubaram redes de energia e GPS. A NASA e a NOAA
        monitoram, mas a população comum nunca recebe um aviso simples. O Solar
        Alert System traduz dados orbitais reais em alertas que qualquer pessoa
        entende.
      </p>

      <h2 className="mt-12 font-display text-2xl text-alerta-laranja">
        Atividade solar agora
      </h2>

      {carregando ? (
        <p className="mt-6 animate-pulso text-slate-400">Buscando dados da NOAA...</p>
      ) : (
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {alertas.map((alerta, i) => (
            <AlertCard key={i} alerta={alerta} />
          ))}
        </div>
      )}
    </section>
  );
}
