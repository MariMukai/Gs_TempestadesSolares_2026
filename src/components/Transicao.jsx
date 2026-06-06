import { useLocation } from "react-router-dom";

export default function Transicao({ children }) {
  const location = useLocation();

  return (
    <div key={location.pathname} className="animate-surgir">
      {children}
    </div>
  );
}