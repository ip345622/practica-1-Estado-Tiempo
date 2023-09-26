import React, { useEffect, useState } from 'react';
import '../../App.css';
function Tiempo() {
  const url = 'https://api.datos.gob.mx/v1/condiciones-atmosfericas?pageSize=5000';

  const estadosMX = [
    { 'id': 1, 'name': 'Aguascalientes' },
    { 'id': 2, 'name': 'Baja California' },
    { 'id': 3, 'name': 'Nuevo Leon' },
    { 'id': 4, 'name': 'Oaxaca' },
    { 'id': 5, 'name': 'Puebla' },
    { 'id': 6, 'name': 'Yucatan' },
    { 'id': 7, 'name': 'Zacatecas' },
    { 'id': 8, 'name': 'Chihuahua' },
    { 'id': 9, 'name': 'Quintana Roo' }
  ];
  const [datos, setDatos] = useState([]);
  const [estadoActual, setEstadoActual] = useState('Quintana Roo');
  const [datosFiltrados, setDatosFiltrados] = useState([]);


  const consultarDatos = async () => {
    const res = await fetch(url);
    const condicionAtm = await res.json();
    return setDatos(condicionAtm.results);
  }
  useEffect(() => {
    consultarDatos();
  }, []);

  const filtrarDatos = () => {
    setDatosFiltrados(datos.filter((ciudad) => ciudad.state === estadoActual));
  };

  useEffect(() => {
    filtrarDatos();
  }, [estadoActual]);

  return (
    <div className='Cuerpo'>
      <h1 className='tiempo'>Estado del tiempo</h1>
      <select onChange={(e) => setEstadoActual(e.target.value)}
        className='Select'>
        <option value='' className="Seleccion">Selecciona una opción</option>
        {estadosMX.map((opcion) => (
          <option key={opcion.id} value={opcion.name}>
            {opcion.name}
          </option>
        ))}
      </select>
      <p className="estado-actual">{estadoActual}</p>
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

export default Tiempo;
