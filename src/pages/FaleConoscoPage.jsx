import Calculadora from '../components/Calculadora';
import FaleConosco from '../components/FaleConosco';
import EloRural from '../components/EloRural';

function FaleConoscoPage() {
  return (
    <div className="container py-5">
      <div className="mb-5">
        <Calculadora />
      </div>
      
      <div className="mb-5">
        <FaleConosco />
      </div>

      <div className="bg-white p-4 rounded shadow-sm border-top border-success border-4">
        <h3 className="text-success text-center mb-4">Acompanhe a Carga em Tempo Real</h3>
        <EloRural />
      </div>
    </div>
  );
}

export default FaleConoscoPage;