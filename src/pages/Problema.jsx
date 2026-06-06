
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
    <>
      {/* HERO de abertura */}
      <section className="relative flex min-h-[80vh] flex-col items-center justify-center overflow-hidden px-6 text-center">
        <div className="pointer-events-none absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-alerta-laranja/20 blur-3xl" />

        <h1
          className="animate-surgir font-display text-4xl font-black leading-tight text-slate-100 opacity-0 md:text-6xl"
          style={{ animationDelay: "0.1s" }}
        >
          Quando o Sol ataca,
          <br />
          <span className="animate-brilhar text-alerta-laranja">ninguém avisa.</span>
        </h1>

        <p
          className="animate-surgir mt-6 max-w-2xl text-lg text-slate-300 opacity-0"
          style={{ animationDelay: "0.3s" }}
        >
          Tempestades solares já derrubaram redes de energia e GPS. A NASA e a NOAA
          monitoram, mas a população comum nunca recebe um aviso simples. O Solar
          Alert System traduz dados orbitais reais em alertas que qualquer pessoa
          entende.
        </p>

        <a
          href="#agora"
          className="animate-surgir mt-8 rounded-full border border-alerta-laranja px-6 py-3 font-display text-sm uppercase tracking-wider text-alerta-laranja opacity-0 transition-colors hover:bg-alerta-laranja hover:text-space-900"
          style={{ animationDelay: "0.5s" }}
        >
          Ver atividade solar
        </a>
      </section>

      {/* CONTEUDO */}
      <section id="agora" className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="font-display text-2xl text-alerta-laranja">
          Atividade solar agora
        </h2>

        {carregando ? (
          <p className="mt-8 animate-pulso text-slate-400">Buscando dados da NOAA...</p>
        ) : (
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {alertas.map((alerta, i) => (
              <div
                key={i}
                className="animate-surgir opacity-0"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <AlertCard alerta={alerta} />
              </div>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
