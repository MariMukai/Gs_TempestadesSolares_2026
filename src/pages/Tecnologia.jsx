import EscalaCompleta from "../components/EscalaCompleta.jsx";
import Timeline from "../components/Timeline.jsx";

export default function Tecnologia() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <h1 className="break-words font-display text-4xl font-bold text-slate-100">Tecnologia</h1>
      <p className="mt-4 max-w-3xl break-words text-lg text-slate-300">
        O Solar Alert System consome dados reais da API pública da NOAA Space
        Weather, atualizada a cada minuto e sem necessidade de autenticação. Três
        grandezas guiam todo o sistema.
      </p>

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        <div className="min-w-0 rounded-xl border border-space-600 bg-space-800 p-5">
          <h3 className="font-display text-lg text-alerta-laranja">Índice Kp</h3>
          <p className="mt-2 break-words text-sm text-slate-300">
            Mede a perturbação geomagnética numa escala de 0 a 9. É a grandeza
            principal para classificar a tempestade de G1 a G5.
          </p>
        </div>
        <div className="min-w-0 rounded-xl border border-space-600 bg-space-800 p-5">
          <h3 className="font-display text-lg text-alerta-laranja">Campo Bz</h3>
          <p className="mt-2 break-words text-sm text-slate-300">
            A orientação magnética do vento solar. Quando aponta para o sul,
            determina a intensidade real do impacto na Terra.
          </p>
        </div>
        <div className="min-w-0 rounded-xl border border-space-600 bg-space-800 p-5">
          <h3 className="font-display text-lg text-alerta-laranja">Vento solar</h3>
          <p className="mt-2 break-words text-sm text-slate-300">
            A velocidade em km/s permite calcular o tempo de chegada de uma
            ejeção de massa coronal (CME) até a Terra.
          </p>
        </div>
      </div>

      <div className="mt-10 rounded-xl border border-alerta-laranja bg-alerta-laranja/10 p-5">
        <h2 className="font-display text-xl text-alerta-laranja">Em resumo</h2>
        <p className="mt-2 max-w-4xl break-words text-sm text-slate-300">
          O índice Kp classifica o nível do alerta. A velocidade ajuda a estimar o tempo de chegada de uma CME. O campo Bz ajuda a entender o potencial de impacto. Nenhum valor isolado explica sozinho todo o evento.
        </p>
        <p className="mt-2 break-words text-sm text-slate-400">
          Os dados técnicos são obtidos por meio da NOAA Space Weather Prediction Center.
        </p>
      </div>

      <h2 className="mt-12 break-words font-display text-2xl text-slate-100">
        Escala de intensidade
      </h2>
      <EscalaCompleta />

      <h2 className="mt-12 break-words font-display text-2xl text-slate-100">
        Como prevemos a chegada
      </h2>
      <div className="mt-5 grid gap-5 md:grid-cols-2">
        <div className="min-w-0 rounded-xl border-l-4 border-alerta-amarelo bg-space-800 p-5">
          <h3 className="font-display text-lg text-alerta-amarelo">
            Estágio 1 &middot; Aviso antecipado
          </h3>
          <p className="mt-1 text-xs uppercase tracking-wide text-slate-400">
            14 horas a 4 dias antes
          </p>
          <p className="mt-3 break-words text-sm text-slate-300">
            Quando uma CME é detectada saindo do Sol, calculamos o tempo estimado
            de chegada pela fórmula:
          </p>
          <p className="mt-3 break-words rounded bg-space-900 p-3 font-mono text-xs text-slate-200">
            tempo = 149.600.000 km / velocidade da CME (km/s)
          </p>
          <p className="mt-3 break-words text-sm text-slate-300">
            Aqui ainda não se conhece a intensidade real, apenas que algo está a
            caminho.
          </p>
        </div>
        <div className="min-w-0 rounded-xl border-l-4 border-alerta-vermelho bg-space-800 p-5">
          <h3 className="font-display text-lg text-alerta-vermelho">
            Estágio 2 &middot; Confirmação crítica
          </h3>
          <p className="mt-1 text-xs uppercase tracking-wide text-slate-400">
            15 a 60 minutos antes
          </p>
          <p className="mt-3 break-words text-sm text-slate-300">
            Quando a CME passa pelo satélite DSCOVR da NOAA, posicionado a 1,5
            milhão de km da Terra, o campo magnético Bz é medido com precisão. Só
            então a intensidade real é confirmada.
          </p>
        </div>
      </div>
      <h2 className="mt-12 break-words font-display text-2xl text-slate-100">
        Eventos que marcaram a história
      </h2>
      <p className="mt-2 max-w-3xl break-words text-slate-300">
        Tempestades solares não são teoria. Veja os eventos reais que mostram por
        que um sistema de alerta importa.
      </p>
      <Timeline />
    </section>
  );
}
