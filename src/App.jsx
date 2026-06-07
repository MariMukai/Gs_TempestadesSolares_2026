
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Problema from "./pages/Problema.jsx";
import Tecnologia from "./pages/Tecnologia.jsx";
import Objetivos from "./pages/Objetivos.jsx";
import Beneficios from "./pages/Beneficios.jsx";
import Aplicacao from "./pages/Aplicacao.jsx";
import Ferramentas from "./pages/Ferramentas.jsx";
import Estrelas from "./components/Estrelas.jsx";
import Transicao from "./components/Transicao.jsx";
import EstrelaCadente from "./components/Estrela.jsx";

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Estrelas />
      <EstrelaCadente />
      <Header />
      <main className="flex-1">
  <Transicao>
    <Routes>
      <Route path="/" element={<Problema />} />
      <Route path="/tecnologia" element={<Tecnologia />} />
      <Route path="/objetivos" element={<Objetivos />} />
      <Route path="/beneficios" element={<Beneficios />} />
      <Route path="/aplicacao" element={<Aplicacao />} />
      <Route path="/ferramentas" element={<Ferramentas />} />
    </Routes>
  </Transicao>
</main>
      <Footer />
    </div>
  );
}
