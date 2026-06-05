# Solar Alert System

Sistema de alerta de tempestades solares usando dados reais da NOAA.
FIAP - Engenharia de Software - Global Solution 2026.

## Integrantes

- Nome completo - RM000000
- Nome completo - RM000000

## Como rodar

```bash
npm install
npm run dev
```

Abra o endereco que aparecer no terminal (geralmente http://localhost:5173).

## Como buildar / deploy

```bash
npm run build
```

Antes do deploy no GitHub Pages, ajuste o nome do repositorio em DOIS lugares:
- `vite.config.js` -> campo `base`
- (o `basename` do Router ja puxa isso automaticamente)

## Divisao de trabalho

**Front-End Design** (camada visual):
- `src/components/` -> Header, Footer, AlertCard
- `src/pages/` -> as 5 paginas
- `tailwind.config.js` -> cores e fontes
- `src/index.css`

**Web Development** (camada de dados):
- `src/services/dadosNoaa.js` -> busca da API NOAA + fallback
- `src/data/kpFallback.js` -> dados locais de seguranca
- `src/utils/classificar.js` -> contrato compartilhado (NAO mudar sozinho)

## Stack

React + Vite + Tailwind CSS + React Router DOM.

## Dados

NOAA Space Weather Prediction Center (endpoints publicos, sem autenticacao):
- Indice Kp: https://services.swpc.noaa.gov/products/noaa-planetary-k-index.json
- Campo magnetico: https://services.swpc.noaa.gov/products/solar-wind/mag-1-day.json
