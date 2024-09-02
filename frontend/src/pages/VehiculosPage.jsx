import React, { useContext } from 'react';
import TablaVehiculo from '../components/TablaVehiculo';
//import Mensaje from '../components/Alertas';
//import { MdDeleteForever, MdNoteAdd, MdInfo } from "react-icons/md";
import VehiculosContext from '../context/VehiculoProvider';



const VehiculosPage = ({ vehiculos }) => {
  const { eliminarVehiculo } = useContext(VehiculosContext)
  console.log(vehiculos)
  return (
    <div className="flex flex-col h-full p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Vehiculos</h1>
      <TablaVehiculo/>
      <footer className="py-4 mt-auto">
        <div className="text-center text-sm text-gray-600">
          &copy; Your Website 2023
        </div>
      </footer>
    </div>
  );
};

export default VehiculosPage;
