import React, { useEffect, useState } from 'react';
import '../../App.css';
function Tiempo() {
  const url = 'https://api.datos.gob.mx/v1/condiciones-atmosfericas?pageSize=5000';

  const estadosMX = [
    { id: 1, name: "Aguascalientes" },
    { id: 2, name: "Baja California" },
    { id: 3, name: "Baja California Sur" },
    { id: 4, name: "Campeche" },
    { id: 5, name: "Chiapas" },
    { id: 6, name: "Chihuahua" },
    { id: 7, name: "Ciudad de Mexico" },
    { id: 8, name: "Coahuila" },
    { id: 9, name: "Colima" },
    { id: 10, name: "Durango" },
    { id: 11, name: "Estado de Mexico" },
    { id: 12, name: "Guanajuato" },
    { id: 13, name: "Guerrero" },
    { id: 14, name: "Hidalgo" },
    { id: 15, name: "Jalisco" },
    { id: 16, name: "Michoacán" },
    { id: 17, name: "Morelos" },
    { id: 18, name: "Nayarit" },
    { id: 19, name: "Nuevo Leon" },
    { id: 20, name: "Oaxaca" },
    { id: 21, name: "Puebla" },
    { id: 22, name: "Queretaro" },
    { id: 23, name: "Quintana Roo" },
    { id: 24, name: "San Luis Potosi" },
    { id: 25, name: "Sinaloa" },
    { id: 26, name: "Sonora" },
    { id: 27, name: "Tabasco" },
    { id: 28, name: "Tamaulipas" },
    { id: 29, name: "Tlaxcala" },
    { id: 30, name: "Veracruz" },
    { id: 31, name: "Yucatan" },
    { id: 32, name: "Zacatecas" }
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
      <select onChange={(e) => setEstadoActual(e.target.value)} className='Select'>
        <option value='' className="Seleccion">Selecciona una opción</option>
        {estadosMX.map((opcion) => (
          <option key={opcion.id} value={opcion.name}>
            {opcion.name}
          </option>
        ))}
      </select>
      <p className="estado-actual">{estadoActual}</p>
      <div className="estados-grid">
        {datosFiltrados.map((ciudad, index) => {
          return (
            <div key={index} className='estado-contenedor'>
              <p className='estados'>{ciudad.name} - <i>{ciudad.skydescriptionlong}</i></p>
            </div>
          );
        })}
      </div>
    </div>

  );
}

export default Tiempo;
