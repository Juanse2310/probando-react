import logo from './logo.svg';
import './App.css';

function App() {
  let titulo = "probando React js"
  let comision = "37545"
  let descripcion = "Esto no es tan facil como parecia.... que duro va a estar este curso!"
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
              <h1>{titulo}</h1>
              <p>{comision}</p>
              <p>{descripcion}</p>
          </div>
    </div>
    </div>
  );
}

export default App;
