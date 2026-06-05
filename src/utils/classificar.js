// ===================================================================
// CONTRATO DE DADOS - compartilhado entre Front-End e Web Development
// Esta função traduz o Kp cru da NOAA no objeto de alerta que TODOS
// os componentes visuais esperam receber. Não mude o formato sem
// avisar a dupla.
// ===================================================================

// Recebe um número Kp (ex: 5.67) e devolve o objeto de alerta normalizado.
export function classificarTempestade(kp) {
  if (kp >= 9)
    return { nivel: "G5", cor: "vermelho", rotulo: "Extrema", descricao: "Apagões em cascata, internet global afetada." };
  if (kp >= 8)
    return { nivel: "G4", cor: "laranja", rotulo: "Severa", descricao: "Satélites comprometidos, quedas de energia." };
  if (kp >= 7)
    return { nivel: "G3", cor: "amarelo", rotulo: "Forte", descricao: "GPS degradado, falhas de rádio." };
  if (kp >= 6)
    return { nivel: "G2", cor: "amarelo", rotulo: "Moderada", descricao: "Leve degradação de GPS." };
  if (kp >= 5)
    return { nivel: "G1", cor: "verde", rotulo: "Menor", descricao: "Quase nada perceptível." };
  return { nivel: "Calmo", cor: "verde", rotulo: "Calmo", descricao: "Sem tempestade detectada no momento." };
}

// Mapa de cores -> classes Tailwind, para os componentes usarem.
export const classesPorCor = {
  verde: { texto: "text-alerta-verde", borda: "border-alerta-verde", fundo: "bg-alerta-verde/10", bolinha: "bg-alerta-verde" },
  amarelo: { texto: "text-alerta-amarelo", borda: "border-alerta-amarelo", fundo: "bg-alerta-amarelo/10", bolinha: "bg-alerta-amarelo" },
  laranja: { texto: "text-alerta-laranja", borda: "border-alerta-laranja", fundo: "bg-alerta-laranja/10", bolinha: "bg-alerta-laranja" },
  vermelho: { texto: "text-alerta-vermelho", borda: "border-alerta-vermelho", fundo: "bg-alerta-vermelho/10", bolinha: "bg-alerta-vermelho" },
};
