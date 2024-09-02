import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="bg-gray-900 text-white w-64 h-full">
      <div className="flex items-center justify-center py-4">
        <div className="text-2xl font-bold">RentCar</div>
      </div>
      <ul className="mt-6">
        <li className={`px-4 py-2 ${location.pathname === '/inicio' ? 'bg-gray-700' : 'hover:bg-gray-700'}`}>
          <Link to="/inicio" className="flex items-center">
            <i className="fas fa-home mr-3"></i>
              Inicio
          </Link>
        </li>
        <li className={`px-4 py-2 ${location.pathname === '/usuarios' ? 'bg-gray-700' : 'hover:bg-gray-700'}`}>
          <Link to="/clientes" className="flex items-center">
            <i className="fas fa-user mr-3"></i>
              Clientes
          </Link>
        </li>
        <li className={`px-4 py-2 ${location.pathname === '/auditorios' ? 'bg-gray-700' : 'hover:bg-gray-700'}`}>
          <Link to="/vehiculos" className="flex items-center">
            <i className="fas fa-car mr-3"></i>
              Vehiculos
          </Link>
        </li>
        <li className={`px-4 py-2 ${location.pathname === '/reservas' ? 'bg-gray-700' : 'hover:bg-gray-700'}`}>
          <Link to="/reservas" className="flex items-center">
            <i className="fas fa-calendar mr-3"></i>
              Reservas
          </Link>
        </li>
      </ul>
      <div className="absolute bottom-0 w-full text-center py-4 bg-gray-800">
        <div className="text-sm">Bienvenido:</div>
        <div className="font-bold">Usuario</div>
      </div>
    </div>
  );
};

export default Sidebar;
