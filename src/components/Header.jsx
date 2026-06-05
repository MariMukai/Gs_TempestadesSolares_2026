
import { NavLink } from "react-router-dom";

const paginas = [
  { rota: "/", nome: "Problema" },
  { rota: "/tecnologia", nome: "Tecnologia" },
  { rota: "/objetivos", nome: "Objetivos" },
  { rota: "/beneficios", nome: "Beneficios" },
  { rota: "/aplicacao", nome: "Aplicação" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-space-600 bg-space-900/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <NavLink to="/" className="font-display text-xl font-bold tracking-wider text-alerta-laranja">
          SOLAR<span className="text-slate-200">ALERT</span>
        </NavLink>

        <ul className="flex flex-wrap gap-1 text-sm md:gap-2">
          {paginas.map((p) => (
            <li key={p.rota}>
              <NavLink
                to={p.rota}
                className={({ isActive }) =>
                  `rounded-md px-3 py-2 transition-colors ${
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
      </nav>
    </header>
  );
}
