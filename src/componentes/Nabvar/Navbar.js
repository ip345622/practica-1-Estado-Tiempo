import Login from '../../page/login/Login';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function Navbar() {

    return(
      <div className="fixed bg-white w-full h-[10%] opacity-[0.8] flex justify-between items-center">
        <div className="w-[10%] text-white bg-black h-[80%] ml-8 flex justify-center items-center rounded-2xl">
          <h1 className="text-2xl font-bold">Logo</h1>
        </div>
        <nav >
        <ul className='ml-[-30%] mr-20 flex justify-between '>
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Estadísticas</a></li>
        <li><a href="#">Estadísticas</a></li>
      </ul>
        </nav>
      </div>
    );
}
export default Navbar;