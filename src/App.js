import logo from './logo.svg';
import React, {useEffect, useState} from 'react';
import './App.css';

function App() {
  const url = 'https://api.datos.gob.mx/v1/condiciones-atmosfericas';
  const estadosMX =[
    {'id':1, 'name':'Aguascalientes'},
    {'id':2, 'name':'Baja California'},
    {'id':19, 'name':'Nuevo León'},
    {'id':20, 'name':'Oaxaca'},
    {'id':21, 'name':'Puebla'},
    {'id':31, 'name':'Yucatán'},
    {'id':32, 'name':'Zacatecas'}
  ];
  const [datos,setDatos] = useState([]);
  const [estadoActual,setEstadoActual] = useState('Quintana Roo');

  const consultarDatos = () =>{
    return fetch(url)
      .then((res) => res.json())
      .then((condicionAtm) => setDatos(condicionAtm.results))
  }
  useEffect(() => {
    consultarDatos();
  },[]);

  return (
    <>
     <select onChange={(e) => setEstadoActual(e.target.value)}
     >
      <option value=''>Selecciona una opción</option>
      {estadosMX.map((opcion) => (
        <option  key={opcion.id} value={opcion.name}>
          {opcion.name}
        </option>
      ))}
     </select>
     {estadoActual}
     <h1>Estado del tiempo</h1>
     {datos.map((ciudad,index) => {
      return(
        <div>
        <p>{ciudad.name} - <i>{ciudad.skydescriptionlong}</i></p>
        </div>
      );
     })}
    </>
  );
}

export default App;
