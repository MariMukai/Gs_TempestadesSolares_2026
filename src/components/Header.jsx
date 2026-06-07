
import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo_gs.png";

const paginas = [
  { rota: "/", nome: "Início" },
  { rota: "/tecnologia", nome: "Tecnologia" },
  { rota: "/objetivos", nome: "Objetivos" },
  { rota: "/beneficios", nome: "Benefícios" },
  { rota: "/aplicacao", nome: "Aplicação" },
  { rota: "/ferramentas", nome: "Ferramentas" },
  { rota: "/historico", nome: "Histórico" },
];

export default function Header() {
  const [visivel, setVisivel] = useState(true);
  const [menuAberto, setMenuAberto] = useState(false);
  const ultimoScroll = useRef(0);

  useEffect(() => {
    function controlarHeader() {
      const scrollAtual = window.scrollY;
      const diferenca = scrollAtual - ultimoScroll.current;

      if (scrollAtual <= 0) {
        setVisivel(true);
      } else if (diferenca > 10) {
        setVisivel(false);
      } else if (diferenca < -10) {
        setVisivel(true);
      }

      ultimoScroll.current = scrollAtual;
    }

    window.addEventListener("scroll", controlarHeader);
    return () => window.removeEventListener("scroll", controlarHeader);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b border-space-600 bg-space-900/90 backdrop-blur transition-transform duration-300 ${
        visivel || menuAberto ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl min-w-0 flex-wrap items-center justify-between gap-3 px-4 py-4 sm:px-6">
        <NavLink to="/" className="flex items-center">
          <img
            src={logo}
            alt="Logo do Solar Alert System"
            className="h-20 w-auto"
          />
          <span className="font-display text-xl font-bold tracking-wider text-alerta-laranja">
            SOLAR<span className="text-slate-200">ALERT</span>
          </span>
        </NavLink>

        <button
          type="button"
          onClick={() => setMenuAberto((aberto) => !aberto)}
          aria-label={menuAberto ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuAberto}
          className="rounded-md border border-space-600 px-3 py-2 font-display text-lg text-alerta-laranja md:hidden"
        >
          {menuAberto ? "✕" : "☰"}
        </button>

        <ul className="hidden w-full min-w-0 flex-wrap justify-center gap-0 text-sm sm:gap-1 md:flex md:w-auto md:justify-start md:gap-2">
          {paginas.map((p) => (
            <li key={p.rota}>
              <NavLink
                to={p.rota}
                className={({ isActive }) =>
                  `rounded-md px-1 py-2 transition-colors sm:px-2 md:px-3 ${
                    isActive
                      ? "bg-space-700 text-alerta-laranja"
                      : "text-slate-400 hover:text-slate-100"
                  }`
                }
              >
                {p.nome}
              </NavLink>
            </li>
          ))}
        </ul>

        <div
          className={`w-full origin-top overflow-hidden transition-all duration-300 ease-out md:hidden ${
            menuAberto
              ? "max-h-96 translate-y-0 scale-100 border-t border-space-600 pt-3 opacity-100"
              : "pointer-events-none max-h-0 -translate-y-2 scale-95 opacity-0"
          }`}
        >
          <ul className="space-y-2">
            {paginas.map((p) => (
              <li key={p.rota}>
                <NavLink
                  to={p.rota}
                  onClick={() => setMenuAberto(false)}
                  className={({ isActive }) =>
                    `block w-full rounded-md px-4 py-3 font-display text-sm transition-colors ${
                      isActive
                        ? "bg-space-700 text-alerta-laranja"
                        : "text-slate-300 hover:bg-space-800 hover:text-slate-100"
                    }`
                  }
                >
                  {p.nome}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
