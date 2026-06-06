// Distância média entre o Sol e a Terra em km.
export const DISTANCIA_TERRA_SOL = 149_600_000;

// Recebe a velocidade de uma CME em km/s e devolve o tempo estimado de chegada.
// Retorna { horasTotal, horas, minutos } ou null se a velocidade for inválida.
export function calcularTempoChegada(velocidadeKmS) {
  if (!velocidadeKmS || velocidadeKmS <= 0) return null;

  const horasTotal = DISTANCIA_TERRA_SOL / velocidadeKmS / 3600;
  const horas = Math.floor(horasTotal);
  const minutos = Math.floor((horasTotal - horas) * 60);

  return { horasTotal, horas, minutos };
}

// Recebe a velocidade de uma CME em km/s e devolve uma string descritiva.
export function classificarVelocidade(velocidadeKmS) {
  if (velocidadeKmS >= 2000) return "extremamente rapida";
  if (velocidadeKmS >= 1000) return "rapida";
  if (velocidadeKmS >= 500)  return "moderada";
  return "lenta";
}

// Valida o que o usuário digitou como índice Kp (0 a 9).
// Retorna { valido: true, kp } ou { valido: false, mensagem }.
export function validarKp(entrada) {
  if (entrada === "" || entrada === null || entrada === undefined)
    return { valido: false, mensagem: "Digite um numero entre 0 e 9" };
  const kp = Number(entrada);
  if (isNaN(kp) || kp < 0 || kp > 9)
    return { valido: false, mensagem: "Digite um numero entre 0 e 9" };
  return { valido: true, kp };
}
