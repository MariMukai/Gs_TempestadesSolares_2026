
// PARTE DO WEB DEVELOPMENT 


import { classificarTempestade } from "../utils/classificar.js";
import { kpFallback } from "../data/kpFallback.js";

const URL_KP = "https://services.swpc.noaa.gov/products/noaa-planetary-k-index.json";

// Converte um registro cru da NOAA no objeto de alerta normalizado.
function normalizar(registro) {
  const kp = Number(registro.Kp);
  const classificacao = classificarTempestade(kp);
  return {
    kp,
    horario: registro.time_tag,
    ...classificacao, // nivel, cor, rotulo, descricao
  };
}

// Busca os dados reais; se falhar, usa o fallback local.
export async function buscarAlertas() {
  try {
    const resposta = await fetch(URL_KP);
    if (!resposta.ok) throw new Error("Resposta nao OK da NOAA");
    const dados = await resposta.json();
    // pega os ultimos 8 registros, mais recentes primeiro
    return dados.slice(-8).reverse().map(normalizar);
  } catch (erro) {
    console.warn("Falha na API da NOAA, usando dados locais:", erro);
    return kpFallback.slice().reverse().map(normalizar);
  }
}
