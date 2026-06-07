import { Link } from "react-router-dom";

export default function NaoEncontrada() {
  return (
    <section className="mx-auto flex min-h-[60vh] max-w-4xl flex-col items-center justify-center px-4 py-16 text-center sm:px-6">
      <p className="font-display text-sm uppercase tracking-[0.3em] text-alerta-laranja">
        Erro 404
      </p>
      <h1 className="mt-4 break-words font-display text-4xl font-bold text-slate-100 sm:text-5xl">
        Página não encontrada
      </h1>
      <p className="mt-4 max-w-2xl break-words text-lg text-slate-300">
        O endereço informado não existe ou foi alterado.
      </p>
      <Link
        to="/"
        className="mt-8 rounded-lg bg-alerta-laranja px-6 py-3 font-display text-sm font-bold text-space-950 transition-opacity hover:opacity-80"
      >
        Voltar para o início
      </Link>
    </section>
  );
}
