import { classificarTempestade } from "../utils/classificar.js";
import { kpFallback } from "../data/kpFallback.js";

const URL_KP     = "https://services.swpc.noaa.gov/products/noaa-planetary-k-index.json";
const URL_PLASMA = "https://services.swpc.noaa.gov/products/solar-wind/plasma-1-day.json";
const URL_MAG    = "https://services.swpc.noaa.gov/products/solar-wind/mag-1-day.json";

// Aceita array (API real) ou objeto (fallback local).
function normalizar(registro) {
  const isArray = Array.isArray(registro);
  const kp = Number(isArray ? registro[1] : registro.Kp);
  const horario = isArray ? registro[0] : registro.time_tag;
  const classificacao = classificarTempestade(kp);
  return {
    kp,
    horario,
    ...classificacao, // nivel, cor, rotulo, descricao
  };
}

// Busca os últimos 8 registros de Kp; usa fallback offline se falhar.
export async function buscarAlertas() {
  try {
    const resposta = await fetch(URL_KP);
    if (!resposta.ok) throw new Error("Resposta nao OK da NOAA");
    const dados = await resposta.json();
    return {
      alertas: dados.slice(1).slice(-8).reverse().map(normalizar),
      origem: "noaa",
    };
  } catch (erro) {
    console.warn("Falha na API da NOAA, usando dados locais:", erro);
    return {
      alertas: kpFallback.slice().reverse().map(normalizar),
      origem: "fallback",
    };
  }
}

// Retorna a velocidade do vento solar em km/s, ou null se falhar.
// Cabeçalho confirmado: ['time_tag', 'density', 'speed', 'temperature'] → índice 2
export async function buscarVento() {
  try {
    const resposta = await fetch(URL_PLASMA);
    if (!resposta.ok) throw new Error("Resposta nao OK");
    const dados = await resposta.json();
    if (dados.length < 2) return null;
    return Number(dados[dados.length - 1][2]);
  } catch {
    return null;
  }
}

// Retorna o campo magnético Bz em nT, ou null se falhar.
// Cabeçalho confirmado: ['time_tag', 'bx_gsm', 'by_gsm', 'bz_gsm', ...] → índice 3
export async function buscarBz() {
  try {
    const resposta = await fetch(URL_MAG);
    if (!resposta.ok) throw new Error("Resposta nao OK");
    const dados = await resposta.json();
    if (dados.length < 2) return null;
    return Number(dados[dados.length - 1][3]);
  } catch {
    return null;
  }
}
