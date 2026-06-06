// ===================================================================
// CONTRATO DE DADOS - compartilhado entre Front-End e Web Development
// Esta função traduz o Kp cru da NOAA no objeto de alerta que TODOS
// os componentes visuais esperam receber. Não mude o formato sem
// avisar a dupla.
// ===================================================================

// Recebe um número Kp (ex: 5.67) e devolve o objeto de alerta normalizado.
export function classificarTempestade(kp) {
  if (kp >= 9)
    return {
      nivel: "G5", cor: "vermelho-escuro", rotulo: "Extrema", faixaKp: "Kp 9",
      descricao: "Apagões em cascata, internet global afetada.",
      acao: "Desligue tudo que puder, tenha lanterna e rádio.",
      exemplos: "Evento Carrington (1859), Quebec (1989), Tempestade de 2024",
    };
  if (kp >= 8)
    return {
      nivel: "G4", cor: "vermelho", rotulo: "Severa", faixaKp: "Kp 8",
      descricao: "Satélites comprometidos, quedas de energia.",
      acao: "Desligue equipamentos sensíveis, estoque água.",
      exemplos: null,
    };
  if (kp >= 7)
    return {
      nivel: "G3", cor: "laranja", rotulo: "Forte", faixaKp: "Kp 7",
      descricao: "GPS degradado, falhas de rádio.",
      acao: "Evite voos longos, carregue dispositivos.",
      exemplos: null,
    };
  if (kp >= 6)
    return {
      nivel: "G2", cor: "amarelo", rotulo: "Moderada", faixaKp: "Kp 6",
      descricao: "Leve degradação de GPS.",
      acao: "Fique atento à navegação por satélite.",
      exemplos: null,
    };
  if (kp >= 5)
    return {
      nivel: "G1", cor: "verde", rotulo: "Menor", faixaKp: "Kp 5",
      descricao: "Quase nada perceptível.",
      acao: "Monitore alertas, sem preocupação.",
      exemplos: null,
    };
  return {
    nivel: "Calmo", cor: "verde", rotulo: "Calmo", faixaKp: "Kp < 5",
    descricao: "Sem tempestade detectada no momento.",
    acao: "Nenhuma ação necessária.",
    exemplos: null,
  };
}

// Mapa de cores -> classes Tailwind, para os componentes usarem.
export const classesPorCor = {
  verde:            { texto: "text-alerta-verde",            borda: "border-alerta-verde",            fundo: "bg-alerta-verde/10",            bolinha: "bg-alerta-verde" },
  amarelo:          { texto: "text-alerta-amarelo",          borda: "border-alerta-amarelo",          fundo: "bg-alerta-amarelo/10",          bolinha: "bg-alerta-amarelo" },
  laranja:          { texto: "text-alerta-laranja",          borda: "border-alerta-laranja",          fundo: "bg-alerta-laranja/10",          bolinha: "bg-alerta-laranja" },
  vermelho:         { texto: "text-alerta-vermelho",         borda: "border-alerta-vermelho",         fundo: "bg-alerta-vermelho/10",         bolinha: "bg-alerta-vermelho" },
  "vermelho-escuro":{ texto: "text-alerta-vermelho-escuro",  borda: "border-alerta-vermelho-escuro",  fundo: "bg-alerta-vermelho-escuro/10",  bolinha: "bg-alerta-vermelho-escuro" },
};
