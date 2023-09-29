import React, { useEffect, useState } from 'react';
import '../../App.css';
import Rain from '../../imagen/svg/tormentasDispersas.png'
import Tormenta from '../../imagen/svg/tormenta.png'
import Soleado from '../../imagen/svg/soleado.png'
import MayormenteSoleado from '../../imagen/svg/mayormenteSoleado.png'
import Nublado from '../../imagen/svg/nubleado.png'
import mayormenteNublado from '../../imagen/svg/mayormenteNublado.png'
import parcialmenteNublado from '../../imagen/svg/parcialmente-nublado.png'
import Aguacero from '../../imagen/svg/aguacero.png'

function Tiempo() {
  const url = 'https://api.datos.gob.mx/v1/condiciones-atmosfericas?pageSize=5000';

  const estadosMX = [
    { id: 1, name: "Aguascalientes" },
    { id: 2, name: "Baja California" },
    { id: 3, name: "Baja California Sur" },
    { id: 4, name: "Campeche" },
    { id: 5, name: "Chiapas" },
    { id: 6, name: "Chihuahua" },
    { id: 7, name: "Coahuila" },
    { id: 8, name: "Colima" },
    { id: 9, name: "Ciudad de México" },
    { id: 10, name: "Durango" },
    { id: 11, name: "Guanajuato" },
    { id: 12, name: "Guerrero" },
    { id: 13, name: "Hidalgo" },
    { id: 14, name: "Jalisco" },
    { id: 15, name: "Mexico" },
    { id: 16, name: "Michoacan" },
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
    { id: 32, name: "Zacatecas" },
  ];
  
  const [datos, setDatos] = useState([]);
  const [estadoActual, setEstadoActual] = useState('Quintana Roo');
  const [datosFiltrados, setDatosFiltrados] = useState([]);

  const consultarDatos = async () => {
    const res = await fetch(url);
    const condicionAtm = await res.json();
    const set = new Set(condicionAtm.results);
    setDatos(Array.from(set.values()));
  };
  
  useEffect(() => {
    consultarDatos();
  }, []);
  
  const filtrarDatos = () => {
    setDatosFiltrados(datos.filter((ciudad) => ciudad.state === estadoActual));
  };
  
  useEffect(() => {
    filtrarDatos();
  }, [estadoActual]);

/*
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
*/




  return (
    <div className="w-[100%] h-full text-center bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% pt-24 ">
      <h1 className='font-bold text-[5vh]'>Estado del tiempo</h1>
      <select onChange={(e) => setEstadoActual(e.target.value)}
        className='rounded-xl mt-5 p-2 pl-6 pr-6 bg-black text-white'>
        <option value='Quintana Roo' >Selecciona una opción</option>
        {estadosMX.map((opcion) => (
          <option key={opcion.id} value={opcion.name}>
            {opcion.name}
          </option>
        ))}
      </select>
      <p className="bg-black text-center rounded-full w-[20%] m-auto mt-4 p-3 text-white">{estadoActual}</p>
          <div className='flex justify-between flex-wrap '>
          {datosFiltrados.map((ciudad, index) => (
            <div className='w-[20%] text-[#000] font-semibold bg-[#e9ffffbb] m-5 mb-3 rounded-lg h-[255px]'>
            <h2 className='mt-4 text-3xl'>{ciudad.name}</h2>
            <p className='mt-4 text-2xl'>{ciudad.skydescriptionlong}</p>
            {ciudad.skydescriptionlong === "Tormentas dispersas" ?(<img src={Rain} className='m-auto mt-[30px] w-[72px]'/>):('')} 
            {ciudad.skydescriptionlong === "Tormentas" ?(<img src={Tormenta} className='m-auto mt-[30px] w-[72px]'/>):('')} 
            {ciudad.skydescriptionlong === "Soleado" ?(<img src={Soleado} className='m-auto mt-[30px] w-[72px]'/>):('')} 
            {ciudad.skydescriptionlong === "Mayormente soleado" ?(<img src={MayormenteSoleado} className='m-auto mt-[30px] w-[72px]'/>):('')} 
            {ciudad.skydescriptionlong === "Nublado" ?(<img src={Nublado} className='m-auto mt-[30px] w-[72px]'/>):('')} 
            {ciudad.skydescriptionlong === "Mayormente nublado" ?(<img src={mayormenteNublado} className='m-auto mt-[30px] w-[72px]'/>):('')} 
            {ciudad.skydescriptionlong === "Parcialmente nublado" ?(<img src={parcialmenteNublado} className='m-auto mt-[30px] w-[72px]'/>):('')} 
            {ciudad.skydescriptionlong === "Aguaceros" ?(<img src={Aguacero} className='m-auto mt-[30px] w-[72px]'/>):('')} 
          </div>
          )) }
          </div>
    </div>
  );
}

export default Tiempo;
