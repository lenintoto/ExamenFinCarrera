import React from "react";
import { MdDeleteForever, MdNoteAdd, MdInfo } from "react-icons/md";
import Mensaje from "./Alertas";

const TablaVehiculo = () => {
  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <div className="bg-gray-200 p-4">
          <Mensaje tipo={"active"}>{"No existen registros"}</Mensaje>
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Registrar
        </button>
      </div>
      <table className="w-full mt-5 table-auto shadow-lg bg-white">
        <thead className="bg-gray-800 text-slate-400">
          <tr>
            <th className="p-2">N°</th>
            <th className="p-2">Marca</th>
            <th className="p-2">Modelo</th>
            <th className="p-2">Año de Fabricación</th>
            <th className="p-2">Placa</th>
            <th className="p-2">Color</th>
            <th className="p-2">Tipo de Vehículo</th>
            <th className="p-2">Kilometraje</th>
            <th className="p-2">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b hover:bg-gray-300 text-center">

            <td >1</td>
            <td >Marca</td>
            <td >Modelo</td>
            <td >Año</td>
            <td >Placa</td>
            <td >Color</td>
            <td >Tipo</td>
            <td >Kilometraje</td>
            <td className="py-2 text-center">
              <MdNoteAdd className="h-7 w-7 text-slate-800 cursor-pointer inline-block mr-2" />
              <MdInfo className="h-7 w-7 text-slate-800 cursor-pointer inline-block mr-2" />
              <MdDeleteForever className="h-7 w-7 text-red-900 cursor-pointer inline-block" />
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default TablaVehiculo;
