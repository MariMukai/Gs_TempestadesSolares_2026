// Copia de dados REAIS da NOAA (abril/2026), usada como rede de seguranca
// caso a API falhe (CORS, internet na apresentacao, etc).
// Formato identico ao endpoint noaa-planetary-k-index.json.
export const kpFallback = [
  { time_tag: "2026-04-18T03:00:00", Kp: 5.0, a_running: 48, station_count: 8 },
  { time_tag: "2026-04-18T06:00:00", Kp: 5.67, a_running: 67, station_count: 8 },
  { time_tag: "2026-04-19T03:00:00", Kp: 4.67, a_running: 39, station_count: 8 },
  { time_tag: "2026-04-19T06:00:00", Kp: 5.67, a_running: 67, station_count: 8 },
  { time_tag: "2026-04-20T18:00:00", Kp: 5.0, a_running: 48, station_count: 8 },
  { time_tag: "2026-04-21T00:00:00", Kp: 4.67, a_running: 39, station_count: 8 },
];
