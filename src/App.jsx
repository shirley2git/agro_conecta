import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

// Páginas
import Home from './pages/home'; 
import ProblemaPage from './pages/ProblemaPage';
import SolucaoPage from './pages/SolucaoPage';
import RecursosPage from './pages/RecursosPage';
import FaleConoscoPage from './pages/FaleConoscoPage';

function App() {
  return (
    <BrowserRouter>
      <main style={{ minHeight: '100vh', backgroundColor: '#f8f9fa' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/problema" element={<ProblemaPage />} />
          <Route path="/solucao" element={<SolucaoPage />} />
          <Route path="/recursos" element={<RecursosPage />} />
          <Route path="/contato" element={<FaleConoscoPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;