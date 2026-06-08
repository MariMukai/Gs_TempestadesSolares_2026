# Solar Alert System

Sistema web educativo para monitoramento e interpretação de tempestades solares com dados reais da NOAA.

**Deploy principal:** [Acessar aplicação](https://tempestades-solares-2026.vercel.app)

---

## Resumo do projeto

O Solar Alert System é uma aplicação web desenvolvida como projeto da Global Solution 2026 da FIAP, com tema **Indústria Espacial**. O sistema consome dados reais da NOAA Space Weather Prediction Center e os apresenta de forma clara para o público geral, sem exigir conhecimento técnico em física espacial ou meteorologia espacial.

---

## Problema resolvido

A NOAA monitora continuamente a atividade solar e disponibiliza dados técnicos ao público, mas essas informações são densas e difíceis de interpretar para pessoas comuns. Mesmo com dados e alertas públicos disponíveis, a linguagem técnica pode dificultar a interpretação por pessoas sem conhecimento prévio de clima espacial.

O Solar Alert System preenche essa lacuna traduzindo os dados brutos em alertas visuais, classificações compreensíveis e orientações práticas por nível de intensidade.

---

## Conexão com a Indústria Espacial

Tempestades solares intensas podem afetar satélites, sistemas GPS, redes elétricas e comunicações. O monitoramento do clima espacial é uma das responsabilidades centrais das agências espaciais e representa uma área estratégica da indústria espacial.

Este projeto utiliza a infraestrutura de dados da NOAA, incluindo informações de monitoramento solar como as fornecidas pelo satélite DSCOVR. Posicionado na região L1, entre a Terra e o Sol, ele monitora o vento solar e o campo magnético antes de sua chegada à Terra.

---

## Funcionalidades

* Consulta da atividade geomagnética recente pela API da NOAA
* Exibição do índice Kp atual
* Classificação geomagnética em Calmo e G1 a G5
* Exibição do vento solar em km/s
* Exibição do campo magnético Bz em nT
* Leitura atual destacada na página inicial
* Atualização manual dos dados
* Fallback local com dados de referência para Kp quando a API está indisponível
* Salvamento manual da leitura atual no histórico
* Classificador manual de índice Kp
* Calculadora de tempo estimado de chegada de CME
* Botão para usar o vento solar real da NOAA na calculadora
* Simulador educativo de tempestades solares
* Histórico local com localStorage e limite de 30 registros
* Timeline com 8 eventos históricos de referência
* Escala completa de Calmo e G1 a G5 com efeitos e ações
* Dicas de proteção por nível de alerta
* Menu mobile responsivo com animação
* Header inteligente com ocultação ao rolar para baixo
* Fundo animado com estrelas e estrela cadente
* Transições entre páginas
* Página 404 para rotas inexistentes

---

## Diferença entre velocidade e intensidade

A velocidade de uma ejeção de massa coronal, também chamada de CME, ajuda a estimar quando ela pode chegar à Terra, mas não determina sozinha a intensidade da tempestade geomagnética resultante.

O campo magnético Bz é um fator importante para avaliar o potencial de impacto geomagnético. Quando está negativo, pode favorecer impactos mais intensos. Nenhum valor isolado determina sozinho todo o evento.

O sistema apresenta esses conceitos de forma educativa, sem linguagem alarmista e sem afirmar que um único valor determina sozinho todo o impacto.

---

## Dados da NOAA

Quando a API está disponível, o sistema consulta dados públicos da NOAA Space Weather Prediction Center. Caso a consulta de Kp falhe, utiliza dados locais de referência como fallback. O fallback atual existe somente para Kp; vento solar e Bz podem aparecer como indisponíveis.

| Dado               | Endpoint                                                               |
| ------------------ | ---------------------------------------------------------------------- |
| Índice Kp          | `https://services.swpc.noaa.gov/products/noaa-planetary-k-index.json`  |
| Vento solar        | `https://services.swpc.noaa.gov/products/solar-wind/plasma-1-day.json` |
| Campo magnético Bz | `https://services.swpc.noaa.gov/products/solar-wind/mag-1-day.json`    |

Os endpoints retornam listas de listas. A primeira linha de cada resposta funciona como cabeçalho com os nomes das colunas.

---

## Tecnologias utilizadas

| Tecnologia       | Uso                                        |
| ---------------- | ------------------------------------------ |
| React            | Interface e componentes                    |
| Vite             | Bundler e servidor de desenvolvimento      |
| JavaScript       | Lógica da aplicação                        |
| HTML             | Estrutura base da aplicação                |
| CSS              | Estilos globais, reset CSS e variáveis CSS |
| Tailwind CSS     | Estilização                                |
| React Router DOM | Navegação entre páginas                    |
| API NOAA SWPC    | Dados reais de clima espacial              |
| localStorage     | Histórico local no navegador               |
| Git e GitHub     | Versionamento e colaboração                |
| Google Fonts     | Fontes Orbitron e Exo 2                    |

---

## Rotas da aplicação

| Rota           | Página                                 |
| -------------- | -------------------------------------- |
| `/`            | Página inicial com leitura solar atual |
| `/tecnologia`  | Explicação técnica                     |
| `/objetivos`   | Objetivos                              |
| `/beneficios`  | Benefícios                             |
| `/aplicacao`   | Uso no dia a dia                       |
| `/ferramentas` | Ferramentas interativas                |
| `/historico`   | Histórico local e eventos históricos   |
| `*`            | Página não encontrada                  |

---

## Ferramentas interativas

As três ferramentas estão disponíveis na rota `/ferramentas`.

**Classificador de índice Kp**

O usuário digita um valor entre 0 e 9 e o sistema retorna o nível geomagnético correspondente, entre Calmo e G1 a G5, com cor, rótulo, descrição e ação recomendada. O resultado é salvo automaticamente no histórico local.

**Calculadora de chegada de CME**

O usuário informa a velocidade de uma ejeção de massa coronal em km/s e o sistema calcula o tempo estimado de chegada à Terra com base na distância média de 149.600.000 km. Há um botão para preencher o campo automaticamente com o vento solar real da NOAA.

**Simulador educativo**

O usuário escolhe um nível geomagnético entre G1 e G5 ou gera um cenário aleatório. O sistema sorteia valores de Kp e velocidade compatíveis com o nível escolhido, calcula o tempo estimado de chegada e exibe os dados como se fosse um evento real. O resultado é salvo no histórico local.

---

## Histórico local

O histórico fica armazenado exclusivamente no navegador do usuário, usando localStorage com a chave `solar-alert-historico`. Não há login nem backend próprio para persistência. Os dados não são compartilhados entre dispositivos.

**Tipos de registro:**

| Tipo                 | Origem                              |
| -------------------- | ----------------------------------- |
| Classificação manual | Ferramenta classificador de Kp      |
| Simulação educativa  | Simulador de tempestades            |
| Leitura atual        | Salva manualmente na página inicial |

O limite é de 30 registros. Quando esse limite é atingido, os registros mais antigos são removidos automaticamente. O histórico pode ser limpo a qualquer momento pela página `/historico`.

---

## Eventos históricos

A página `/historico` inclui uma timeline educativa com eventos reais documentados:

| Ano  | Evento                                |
| ---- | ------------------------------------- |
| 1859 | Evento Carrington                     |
| 1921 | New York Railroad Storm               |
| 1972 | Grande tempestade solar de agosto     |
| 1989 | Quebec                                |
| 2000 | Bastille Day Event                    |
| 2003 | Tempestade de Halloween               |
| 2012 | CME de julho — quase impacto na Terra |
| 2024 | Tempestade G5                         |

Esses eventos são referências educativas e não fazem parte do histórico local do usuário.

---

## Estrutura de pastas

```txt
Gs_TempestadesSolares_2026/
├── public/
├── src/
│   ├── assets/          Imagens e arquivos visuais
│   ├── components/      Componentes reutilizáveis
│   ├── data/            Fallback local de dados da NOAA
│   ├── pages/           Páginas da aplicação
│   ├── services/        Integração com a API da NOAA
│   └── utils/           Classificação, cálculos, simulação e histórico
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

---

## Como executar localmente

```bash
git clone https://github.com/MariMukai/Gs_TempestadesSolares_2026.git
cd Gs_TempestadesSolares_2026
npm install
npm run dev
```

Abra o endereço exibido pelo terminal após executar `npm run dev`.

---

## Build de produção

```bash
npm run build
npm run preview
```

---

## Usuários e senhas

Não se aplica. A aplicação não possui sistema de autenticação.

---

## Deploy

Aplicação publicada: [Acessar pelo Vercel](https://tempestades-solares-2026.vercel.app)

---

## Repositório

`https://github.com/MariMukai/Gs_TempestadesSolares_2026`

---

## Integrantes

Turma: **1ESPA**

| Nome                            | RM        |
| ------------------------------- | --------- |
| David Ernesto Mogollon Gama     | RM 567855 |
| Pedro Henrique Tavares Viana    | RM 567680 |
| Maria Laura Pereira Druzeic     | RM 566634 |
| Marianne Mukai Nishikawa        | RM 568001 |
| Giovanna Oliveira Ferreira Dias | RM 566647 |

---

## Objetivos de Desenvolvimento Sustentável

O projeto se relaciona principalmente ao **ODS 9 — Indústria, Inovação e Infraestrutura**, ao demonstrar como dados de monitoramento espacial podem ser transformados em informações úteis para aumentar a compreensão e a resiliência de serviços tecnológicos.

Também possui relação complementar com o **ODS 11 — Cidades e Comunidades Sustentáveis** e o **ODS 13 — Ação Climática**.

---

## Disciplinas atendidas

**Front-End Design**

Responsável pela camada visual: componentes, páginas, paleta de cores, tipografia, responsividade, animações e experiência do usuário.

**Web Development**

Responsável pela camada de dados: integração com a API da NOAA, fallback offline, lógica de classificação geomagnética, cálculos de tempo de chegada, simulação educativa e histórico local.
