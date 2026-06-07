
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { buscarAlertas, buscarBz, buscarVento } from "../services/dadosNoaa.js";
import AlertCard from "../components/AlertCard.jsx";
import { classesPorCor } from "../utils/classificar.js";
import { adicionarRegistroHistorico } from "../utils/historico.js";

function formatarHorario(horario) {
  const data = new Date(horario);

  if (isNaN(data.getTime())) {
    return "Horário indisponível";
  }

  return data.toLocaleString("pt-BR");
}

function normalizarNumero(valor) {
  return Number.isFinite(valor) ? valor : null;
}

export default function Problema() {
  const [alertas, setAlertas] = useState([]);
  const [origem, setOrigem] = useState(null);
  const [vento, setVento] = useState(null);
  const [bz, setBz] = useState(null);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(false);
  const [leituraSalva, setLeituraSalva] = useState(false);
  const [mostrarTodasLeituras, setMostrarTodasLeituras] = useState(false);

  async function carregarDados() {
    setCarregando(true);
    setErro(false);
    setLeituraSalva(false);
    setMostrarTodasLeituras(false);

    try {
      const [dadosAlertas, ventoAtual, bzAtual] = await Promise.all([
        buscarAlertas(),
        buscarVento(),
        buscarBz(),
      ]);

      if (!dadosAlertas.alertas || dadosAlertas.alertas.length === 0) {
        throw new Error("Nenhum alerta disponivel");
      }

      setAlertas(dadosAlertas.alertas);
      setOrigem(dadosAlertas.origem);
      setVento(normalizarNumero(ventoAtual));
      setBz(normalizarNumero(bzAtual));
    } catch (falha) {
      console.warn("Falha ao carregar dados solares:", falha);
      setAlertas([]);
      setOrigem(null);
      setVento(null);
      setBz(null);
      setErro(true);
    } finally {
      setCarregando(false);
    }
  }

  useEffect(() => {
    carregarDados();
  }, []);

  const leituraAtual = alertas[0];
  const leiturasRecentes = alertas.slice(1);
  const leiturasVisiveis = mostrarTodasLeituras
    ? leiturasRecentes
    : leiturasRecentes.slice(0, 6);
  const classesLeituraAtual = leituraAtual ? classesPorCor[leituraAtual.cor] : null;
  const textoOrigem = origem === "noaa"
    ? "NOAA ao vivo"
    : "dados locais de referência";

  function salvarLeituraAtual() {
    if (!leituraAtual || leituraSalva) {
      return;
    }

    const registro = {
      tipo: "Leitura atual",
      origem: origem === "noaa" ? "NOAA" : "Fallback local",
      kp: leituraAtual.kp,
      nivel: leituraAtual.nivel,
      cor: leituraAtual.cor,
      descricao: leituraAtual.descricao,
    };

    if (vento !== null) {
      registro.velocidade = vento;
    }

    if (bz !== null) {
      registro.bz = bz;
    }

    adicionarRegistroHistorico(registro);
    setLeituraSalva(true);
  }

  return (
    <>
      {/* HERO de abertura */}
      <section className="relative flex min-h-[80vh] flex-col items-center justify-center overflow-hidden px-4 text-center sm:px-6">
        <div className="pointer-events-none absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-alerta-laranja/20 blur-3xl" />

        <h1
          className="animate-surgir break-words font-display text-4xl font-black leading-tight text-slate-100 opacity-0 md:text-6xl"
          style={{ animationDelay: "0.1s" }}
        >
          Quando o Sol ataca,
          <br />
          <span className="animate-brilhar text-alerta-laranja">ninguém avisa.</span>
        </h1>

        <p
          className="animate-surgir mt-6 max-w-2xl break-words text-lg text-slate-300 opacity-0"
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
      <section id="agora" className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <h2 className="break-words font-display text-2xl text-alerta-laranja">
          Atividade solar agora
        </h2>

        {carregando && alertas.length === 0 ? (
          <p className="mt-8 animate-pulso text-slate-400">
            Carregando dados solares em tempo real...
          </p>
        ) : erro ? (
          <div className="mt-8 rounded-xl border border-alerta-vermelho bg-alerta-vermelho/10 p-5 text-sm text-slate-300">
            <p>Não foi possível carregar os dados no momento.</p>
            <p className="mt-1">Tente atualizar novamente.</p>
            <button
              onClick={carregarDados}
              className="mt-4 rounded-lg bg-alerta-laranja px-5 py-2 font-display text-sm font-bold text-space-900 transition-opacity hover:opacity-80"
            >
              Atualizar dados
            </button>
          </div>
        ) : leituraAtual && classesLeituraAtual ? (
          <>
            {origem === "fallback" && (
              <p className="mt-5 rounded-xl border border-alerta-amarelo bg-alerta-amarelo/10 p-4 text-sm text-slate-300">
                Não foi possível acessar a NOAA agora. Exibindo dados locais de referência.
              </p>
            )}

            <div className={`mt-8 rounded-xl border ${classesLeituraAtual.borda} ${classesLeituraAtual.fundo} p-5 sm:p-6`}>
              <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                <div className="min-w-0">
                  <p className="text-xs uppercase tracking-wide text-slate-400">
                    Leitura solar atual
                  </p>
                  <h3 className={`mt-2 font-display text-4xl font-bold ${classesLeituraAtual.texto}`}>
                    Kp {leituraAtual.kp.toFixed(2)}
                  </h3>
                  <p className="mt-2 break-words font-display text-xl text-slate-100">
                    Nível geomagnético: {leituraAtual.nivel}
                  </p>
                  <p className="mt-3 max-w-3xl break-words text-sm text-slate-300">
                    {leituraAtual.descricao}
                  </p>
                </div>

                <div className="min-w-0 rounded-lg border border-space-600 bg-space-900/60 p-4 text-sm text-slate-300 lg:w-72">
                  <p>
                    <span className="text-slate-400">Fonte: </span>
                    {textoOrigem}
                  </p>
                  <p className="mt-2">
                    <span className="text-slate-400">Última atualização: </span>
                    {formatarHorario(leituraAtual.horario)}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-5 grid gap-5 md:grid-cols-2">
              <div className="min-w-0 rounded-xl border border-space-600 bg-space-800 p-5">
                <p className="font-display text-lg text-alerta-laranja">Vento solar</p>
                <p className="mt-2 font-display text-3xl text-slate-100">
                  {vento !== null ? `${vento.toFixed(1)} km/s` : "Indisponível"}
                </p>
              </div>
              <div className="min-w-0 rounded-xl border border-space-600 bg-space-800 p-5">
                <p className="font-display text-lg text-alerta-laranja">Campo magnético Bz</p>
                <p className="mt-2 font-display text-3xl text-slate-100">
                  {bz !== null ? `${bz.toFixed(2)} nT` : "Indisponível"}
                </p>
                <p className="mt-2 break-words text-sm text-slate-400">
                  Valores negativos podem intensificar o impacto geomagnético.
                </p>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <button
                onClick={carregarDados}
                disabled={carregando}
                className="rounded-lg bg-alerta-laranja px-5 py-2 font-display text-sm font-bold text-space-900 transition-opacity hover:opacity-80 disabled:opacity-50"
              >
                {carregando ? "Atualizando..." : "Atualizar dados"}
              </button>
              <button
                onClick={salvarLeituraAtual}
                disabled={!leituraAtual || leituraSalva}
                className="rounded-lg border border-alerta-laranja px-5 py-2 font-display text-sm text-alerta-laranja transition-opacity hover:opacity-70 disabled:opacity-40"
              >
                {leituraSalva ? "Leitura salva" : "Salvar leitura atual"}
              </button>
            </div>

            {leiturasRecentes.length > 0 && (
              <>
                <section className="mt-12">
                  <h3 className="break-words font-display text-xl text-alerta-laranja">
                    Como interpretar os dados?
                  </h3>
                  <div className="mt-5 grid gap-4 md:grid-cols-3">
                    <div className="min-w-0 rounded-xl border border-space-600 bg-space-800 p-4">
                      <h4 className="font-display text-base text-slate-100">Índice Kp</h4>
                      <p className="mt-2 break-words text-sm text-slate-300">
                        Mede a atividade geomagnética. A partir de Kp 5, começa a escala de tempestades G1-G5.
                      </p>
                    </div>
                    <div className="min-w-0 rounded-xl border border-space-600 bg-space-800 p-4">
                      <h4 className="font-display text-base text-slate-100">Vento solar</h4>
                      <p className="mt-2 break-words text-sm text-slate-300">
                        Mostra a velocidade das partículas vindas do Sol e ajuda a estimar a chegada de eventos solares.
                      </p>
                    </div>
                    <div className="min-w-0 rounded-xl border border-space-600 bg-space-800 p-4">
                      <h4 className="font-display text-base text-slate-100">Campo magnético Bz</h4>
                      <p className="mt-2 break-words text-sm text-slate-300">
                        Quando está negativo, pode favorecer impactos mais intensos. Ele não determina tudo sozinho.
                      </p>
                    </div>
                  </div>
                  <Link
                    to="/tecnologia"
                    className="mt-4 inline-block font-display text-sm text-alerta-laranja transition-opacity hover:opacity-70"
                  >
                    Entenda melhor como a tecnologia funciona
                  </Link>
                </section>

                <h3 className="mt-12 break-words font-display text-xl text-slate-100">
                  Leituras recentes de Kp
                </h3>
                <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
                  {leiturasVisiveis.map((alerta, i) => (
                    <div
                      key={`${alerta.horario}-${i}`}
                      className="animate-surgir opacity-0"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    >
                      <AlertCard alerta={alerta} />
                    </div>
                  ))}
                </div>
                {leiturasRecentes.length > 6 && (
                  <button
                    type="button"
                    onClick={() => setMostrarTodasLeituras((mostrar) => !mostrar)}
                    className="mt-5 rounded-lg border border-alerta-laranja px-5 py-2 font-display text-sm text-alerta-laranja transition-opacity hover:opacity-70"
                  >
                    {mostrarTodasLeituras
                      ? "Mostrar menos leituras"
                      : "Mostrar mais leituras"}
                  </button>
                )}
              </>
            )}
          </>
        ) : (
          <div className="mt-8 rounded-xl border border-alerta-vermelho bg-alerta-vermelho/10 p-5 text-sm text-slate-300">
            Não foi possível carregar os dados no momento.
          </div>
        )}
      </section>
    </>
  );
}
