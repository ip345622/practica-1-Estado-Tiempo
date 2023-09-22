import React, {useEffect, useState} from 'react';
import './App.css';

function App() {
  const url = 'https://api.datos.gob.mx/v1/condiciones-atmosfericas?state=';
  const estadosMX =[
    {'id':1, 'name':'Aguascalientes'},
    {'id':2, 'name':'Baja California'},
    {'id':3, 'name':'Nuevo León'},
    {'id':4, 'name':'Oaxaca'},
    {'id':5, 'name':'Puebla'},
    {'id':6, 'name':'Yucatan'},
    {'id':7, 'name':'Zacatecas'},
    {'id':8, 'name':'Chihuahua'}
  ];
  const [datos,setDatos] = useState([]);
  const [estadoActual,setEstadoActual] = useState('Quintana Roo');
  const [datosFiltrados, setDatosFiltrados] = useState([]);

  const consultarDatos = () =>{
    return fetch(url)
      .then((res) => res.json())
      .then((condicionAtm) => setDatos(condicionAtm.results))
  }
  useEffect(() => {
    consultarDatos();
  },[]);

  const filtrarDatos = () => {
    setDatosFiltrados(datos.filter((ciudad) => ciudad.state === estadoActual));
  };

  useEffect(() => {
    filtrarDatos();
  }, [estadoActual]);

  return (
    <div className='Cuerpo'>
     <select onChange={(e) => setEstadoActual(e.target.value)}
     className='Select'>
      <option  value='' className="option">Selecciona una opción</option>
      {estadosMX.map((opcion) => (
        <option  key={opcion.id} value={opcion.name}>
          {opcion.name}
        </option>
      ))}
</select>
  <p className="estado-actual">{estadoActual}</p>
  <h1 className='tiempo'>Estado del tiempo</h1>
  {datosFiltrados.map((ciudad, index) => {
    return (
      <div>
        <p className='estados'>{ciudad.name} - <i>{ciudad.skydescriptionlong}</i></p>
      </div>
    );
  })}
    </div>
  );
}

export default App;
