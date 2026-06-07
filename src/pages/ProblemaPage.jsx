import DesafiosCard from '../components/DesafiosCard';
import agricultorJose from '../assets/agricultorJose.png';

function ProblemaPage() {
  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <span className="badge bg-danger mb-2 px-3 py-2 rounded-pill">O Desafio</span>
        <h2 className="fw-bold">A Vulnerabilidade do Pequeno Agricultor</h2>
        <p className="text-muted mt-3 mx-auto w-75">
          Os pequenos agricultores familiares enfrentam desafios multifacetados que comprometem sua subsistência.
        </p>
      </div>

      <div className="row g-4 mb-5">
        <div className="col-md-4"><DesafiosCard icon="☁️" title="Variações Climáticas" description="Secas prolongadas e inundações repentinas." /></div>
        <div className="col-md-4"><DesafiosCard icon="📈" title="Acesso Limitado" description="Falta de ferramentas de monitoramento." /></div>
        <div className="col-md-4"><DesafiosCard icon="💧" title="Uso Ineficiente" description="Uso excessivo de água e defensivos." /></div>
      </div>

      <div className="bg-white p-5 rounded shadow-sm d-flex align-items-center gap-4">
        <img src={agricultorJose} alt="José" className="rounded-circle shadow" width="150" height="150" style={{objectFit: 'cover'}} />
        <div>
          <h4 className="text-success">José de Almeida (55 anos)</h4>
          <p className="text-muted">Pequeno Agricultor Familiar - Minas Gerais</p>
          <blockquote className="fst-italic border-start border-success border-4 ps-3">
            "Precisamos de soluções práticas que ajudem com resultados imediatos e que sejam fáceis de usar."
          </blockquote>
        </div>
      </div>
    </div>
  );
}

export default ProblemaPage;