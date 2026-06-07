const CHAVE_HISTORICO = "solar-alert-historico";
const LIMITE_HISTORICO = 30;

function gerarId() {
  if (typeof crypto !== "undefined" && crypto.randomUUID) {
    return crypto.randomUUID();
  }

  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

export function carregarHistorico() {
  try {
    const valorSalvo = localStorage.getItem(CHAVE_HISTORICO);

    if (!valorSalvo) {
      return [];
    }

    const historico = JSON.parse(valorSalvo);

    if (!Array.isArray(historico)) {
      return [];
    }

    return historico;
  } catch {
    return [];
  }
}

export function criarRegistroHistorico(registro) {
  return {
    id: gerarId(),
    dataHora: new Date().toISOString(),
    ...registro,
  };
}

export function adicionarRegistroHistorico(registro) {
  const historicoAtual = carregarHistorico();
  const novoRegistro = criarRegistroHistorico(registro);
  const historicoAtualizado = [
    novoRegistro,
    ...historicoAtual,
  ].slice(0, LIMITE_HISTORICO);

  localStorage.setItem(CHAVE_HISTORICO, JSON.stringify(historicoAtualizado));

  return historicoAtualizado;
}

export function limparHistorico() {
  localStorage.removeItem(CHAVE_HISTORICO);
}
