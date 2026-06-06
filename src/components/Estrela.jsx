import { useEffect, useState } from "react";

export default function EstrelaCadente() {
  const [estrela, setEstrela] = useState(null);

  useEffect(() => {
    const disparar = () => {
      setEstrela({
        id: Date.now(),
        top: `${Math.random() * 40}%`,   
        left: `${Math.random() * 60}%`,  
      });
      
      setTimeout(() => setEstrela(null), 1200);
    };

    const agendar = () => {
      const tempo = 6000 + Math.random() * 6000;
      return setTimeout(() => {
        disparar();
        timer = agendar();
      }, tempo);
    };

    let timer = agendar();
    return () => clearTimeout(timer);
  }, []);

  if (!estrela) return null;

  return (
    <div
      key={estrela.id}
      className="pointer-events-none fixed -z-10"
      style={{ top: estrela.top, left: estrela.left }}
    >
      <span
        style={{
          display: "block",
          width: "3px",
          height: "3px",
          borderRadius: "9999px",
          background: "white",
          boxShadow: "0 0 6px 2px rgba(255,255,255,0.7)",
          animation: "cadente 1.3s ease-out forwards",
        }}
      />
    </div>
  );
}
