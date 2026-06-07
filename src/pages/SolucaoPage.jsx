import donaRosa from '../assets/donaRosa.png';
import DonaRosaChatBot from '../components/DonaRosaChatBot';
import ComponenteCard from '../components/ComponenteCard';

function SolucaoPage() {
  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <span className="badge bg-success mb-2 px-3 py-2 rounded-pill">A Solução</span>
        <h2 className="fw-bold">Conectando Conhecimento e Tecnologia</h2>
      </div>

      <div className="row align-items-center bg-white p-4 rounded shadow-sm mb-5">
        <div className="col-md-4 text-center">
          <img src={donaRosa} alt="Dona Rosa" className="img-fluid rounded" style={{maxHeight: '300px'}} />
        </div>
        <div className="col-md-8">
          <h3 className="text-success mb-3">Conheça a Dona Rosa</h3>
          <p>Nossa assistente virtual via Telegram, pronta para ajudar com:</p>
          <ul className="list-group list-group-flush mb-4">
            <li className="list-group-item">🌱 Alertas climáticos em tempo real</li>
            <li className="list-group-item">🌱 Orientações sobre plantio e colheita</li>
            <li className="list-group-item">🌱 Dicas de gestão de recursos</li>
          </ul>
        </div>
      </div>

      <DonaRosaChatBot />

      <div className="row g-4 mt-4">
        <div className="col-md-3"><ComponenteCard icon="💬" title="Assistente" description="Chatbot acessível via Telegram." /></div>
        <div className="col-md-3"><ComponenteCard icon="🎓" title="Educação" description="Cursos da plataforma SENAR." /></div>
        <div className="col-md-3"><ComponenteCard icon="🧠" title="IA" description="Recomendações inteligentes." /></div>
        <div className="col-md-3"><ComponenteCard icon="🧑‍🤝‍🧑" title="Elo Rural" title="Rede de apoio." /></div>
      </div>
    </div>
  );
}

export default SolucaoPage;