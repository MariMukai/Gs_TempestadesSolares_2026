
import { useMemo } from "react";

export default function Estrelas({ quantidade = 80 }) {
  const estrelas = useMemo(() => {
    return Array.from({ length: quantidade }, () => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      tamanho: `${Math.random() * 2 + 1}px`,
      atraso: `${Math.random() * 4}s`,
    }));
  }, [quantidade]);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {estrelas.map((e, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-white animate-piscar"
          style={{
            top: e.top,
            left: e.left,
            width: e.tamanho,
            height: e.tamanho,
            animationDelay: e.atraso,
          }}
        />
      ))}
    </div>
  );
}