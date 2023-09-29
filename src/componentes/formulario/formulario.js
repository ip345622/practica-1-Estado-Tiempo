import React, { useState } from "react";


function Formulario() {
    // Manejo de estados de los campos del formulario
    const [campos, setCampos]=useState({
        usuario: "",
        contrasena: ""
    });
    // Para manehar el evento del formulario
    const procesarLogin = (event) => {
        event.preventDefault();
        console.log("Se envia el formulario..");
    }
    return ( 
        <form className=" w-full h-[100vh] text-center bg-[url(https://images.pexels.com/photos/2647990/pexels-photo-2647990.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)] bg-cover bg-no-repeat flex justify-center items-center" onSubmit={procesarLogin}>
            <div className="bg-black opacity-[0.8] p-[10vh] rounded-xl">
           <div>
            <h1 className="text-white font-bold text-4xl mt-[-5px] mb-12">Login</h1>
           <input type="text" placeholder="Usuario" className="block mb-11 w-[50vh] h-10 rounded-lg pl-2"
            onChange={(e) => setCampos({...campos,usuario:e.target.value})} />
            <input type="password" placeholder="Contraseña" className="block mb-11 h-10 w-[50vh] rounded-lg pl-2"
            onChange={(e) => setCampos({...campos,contrasena:e.target.value})} />
            <button type="submit" className="bg-slate-400 text-white pl-4 pr-4 pb-1 pt-1 rounded-lg">Login</button>
           </div>
            </div>
        </form>
     );
}

export default Formulario;