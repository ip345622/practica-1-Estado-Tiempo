import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  return (
    <div className="Dashbord">
      <div className="Imagen"></div>
      <ul>
        <li>
          <NavLink to="/">Inicio</NavLink>
        </li>
        <li>
          <NavLink to="/tiempo">Tiempo</NavLink>
        </li>
        <li>
          <NavLink to="/informacion">Informacion</NavLink>
        </li>
      </ul>
    </div>
  );
}
