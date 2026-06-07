import agroLogo from '../assets/agroLogo.png';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-dark text-white py-5 mt-auto">
      <div className="container">
        <div className="row g-4">
          <div className="col-md-4">
            <img src={agroLogo} alt="Logo" height="40" className="mb-3 bg-white p-1 rounded" />
            <p className="text-light opacity-75">Conectando conhecimento e tecnologia para transformar a agricultura familiar brasileira.</p>
          </div>
          <div className="col-md-4">
            <h5 className="mb-3 text-success">Navegação</h5>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-light text-decoration-none">Início</Link></li>
              <li><Link to="/problema" className="text-light text-decoration-none">O Problema</Link></li>
              <li><Link to="/solucao" className="text-light text-decoration-none">Solução</Link></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5 className="mb-3 text-success">Nossa Missão</h5>
            <p className="text-light opacity-75">Apoiando o ODS 2 da ONU – Fome Zero e Agricultura Sustentável.</p>
          </div>
        </div>
        <div className="text-center mt-4 pt-3 border-top border-secondary">
          <small className="opacity-50">&copy; 2026 AgroConecta. Todos os direitos reservados.</small>
        </div>
      </div>
    </footer>
  );
}

export default Footer;