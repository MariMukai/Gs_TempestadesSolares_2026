import { classificarTempestade } from "./classificar.js";
import {
  calcularTempoChegada,
  classificarVelocidade,
} from "./calculos.js";

export const NIVEIS_SIMULAVEIS = ["G1", "G2", "G3", "G4", "G5"];

const FAIXAS_KP = {
  G1: [5, 5.9],
  G2: [6, 6.9],
  G3: [7, 7.9],
  G4: [8, 8.9],
  G5: [9, 9],
};

// Faixas apenas educativas: velocidade estima chegada, não intensidade real.
const FAIXAS_VELOCIDADE = {
  G1: [400, 1100],
  G2: [500, 1400],
  G3: [600, 1800],
  G4: [700, 2400],
  G5: [800, 3000],
};

function gerarInteiro(minimo, maximo) {
  return Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
}

function sortearNivel() {
  const indice = gerarInteiro(0, NIVEIS_SIMULAVEIS.length - 1);
  return NIVEIS_SIMULAVEIS[indice];
}

function gerarKp(nivel) {
  if (nivel === "G5") return 9;

  const [minimo, maximo] = FAIXAS_KP[nivel];
  const valor = Math.random() * (maximo - minimo) + minimo;

  return Number(valor.toFixed(1));
}

export function simularTempestade(nivelEscolhido) {
  const nivelGerado =
    nivelEscolhido === "aleatorio" ? sortearNivel() : nivelEscolhido;

  if (!NIVEIS_SIMULAVEIS.includes(nivelGerado)) {
    return null;
  }

  const kp = gerarKp(nivelGerado);
  const [velocidadeMinima, velocidadeMaxima] =
    FAIXAS_VELOCIDADE[nivelGerado];
  const velocidade = gerarInteiro(velocidadeMinima, velocidadeMaxima);
  const tempoChegada = calcularTempoChegada(velocidade);
  const classificacaoTempestade = classificarTempestade(kp);

  return {
    nivelSolicitado: nivelEscolhido,
    nivelGerado,
    kp,
    velocidade,
    tempoChegada,
    classificacaoVelocidade: classificarVelocidade(velocidade),
    classificacaoTempestade,
  };
}
