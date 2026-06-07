import RecursosCard from '../components/RecursosCard';
import Pilar from '../components/Pilar';

function RecursosPage() {
  return (
    <div className="container py-5">
      <h2 className="text-center fw-bold mb-5">Recursos e Benefícios Práticos</h2>
      
      <div className="row g-4 mb-5">
        <div className="col-md-6"><RecursosCard icon="🚨" title="Alertas Climáticos" description="Notificações em tempo real." /></div>
        <div className="col-md-6"><RecursosCard icon="📚" title="Educação Digital" description="Acesso direto a cursos." /></div>
        <div className="col-md-6"><RecursosCard icon="💧" title="Otimização" description="Uso eficiente de água." /></div>
        <div className="col-md-6"><RecursosCard icon="📱" title="Interface" description="Design simples e acessível." /></div>
      </div>

      <div className="bg-success text-white p-5 rounded shadow-sm mb-5 text-center">
        <h3 className="mb-4">Intuitividade e Acessibilidade</h3>
        <div className="row g-3">
          <div className="col-md-4"><Pilar title="Simplicidade" description="Poucos cliques para tarefas." /></div>
          <div className="col-md-4"><Pilar title="Linguagem" description="Sem termos difíceis." /></div>
          <div className="col-md-4"><Pilar title="Foco" description="Apenas o essencial." /></div>
        </div>
      </div>
    </div>
  );
}

export default RecursosPage;