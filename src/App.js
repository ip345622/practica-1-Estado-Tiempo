
import './App.css';
import { Navbar } from './componentes/Nabvar/Navbar';
import Tiempo from './page/tiempo/tiempo';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Inicio from "./Dashboard/Inicio";
import Informacion from './Informacion/Informacion';


function App() {

  return (
    <Router>
      <div>
        <Navbar />
        <Routes> 
          <Route path="/" element={<Inicio />} /> 
          <Route path="/tiempo" element={<Tiempo />} />
          <Route path="/informacion" element={<Informacion />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
