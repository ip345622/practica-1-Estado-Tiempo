import { BrowserRouter,Route,Routes  } from 'react-router-dom';

import './App.css';
import { Navbar } from './componentes/Nabvar/Navbar';
import Tiempo from './page/tiempo/tiempo';
import Login from './page/login/Login';
import Dashboard from './page/dashboard/dashboard';

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/tiempo" element={<Tiempo />} />
      <Route path="/dash" element={<Dashboard />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
