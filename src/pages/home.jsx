import { Link } from 'react-router-dom';

function Home() {
  return (
    <section className="container py-5 text-center d-flex flex-column justify-content-center align-items-center" style={{ minHeight: '70vh' }}>
      <h1 className="display-4 fw-bold text-success mb-3">AgroConecta</h1>
      <h2 className="h3 text-secondary mb-4">Conectando Conhecimento e Tecnologia</h2>
      <p className="lead w-75 mb-3">
        Combatendo a vulnerabilidade do pequeno agricultor brasileiro e apoiando o ODS 2 da ONU – Fome Zero.
      </p>
      <p className="w-75 mb-5 text-muted">
        Transformando a agricultura familiar através de tecnologia acessível e educação.
      </p>

      <div className="d-flex gap-3 justify-content-center">
        <Link to="/solucao" className="btn btn-success btn-lg shadow-sm">Conheça a Solução</Link>
        <Link to="/contato" className="btn btn-outline-success btn-lg shadow-sm">Calculadora & Contato</Link>
      </div>
    </section>
  );
}

export default Home;