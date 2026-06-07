import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

// Componentes Globais
import Header from "./components/header";
import Footer from "./components/footer"; // IMPORTANTE: Importado para não dar erro!

// Páginas
import Home from './pages/home'; // Agora só existe um!
import ProblemaPage from './pages/ProblemaPage';
import SolucaoPage from './pages/SolucaoPage';
import RecursosPage from './pages/RecursosPage';
import FaleConoscoPage from './pages/FaleConoscoPage';

function App() {
  return (
    <BrowserRouter>
      <Header />
      {/* O padding-top evita que o menu fixo cubra o conteúdo das páginas */}
      <main style={{ paddingTop: '80px', minHeight: '80vh', backgroundColor: '#f8f9fa' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/problema" element={<ProblemaPage />} />
          <Route path="/solucao" element={<SolucaoPage />} />
          <Route path="/recursos" element={<RecursosPage />} />
          <Route path="/contato" element={<FaleConoscoPage />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;