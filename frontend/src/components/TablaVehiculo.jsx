import React from "react";
import { MdDeleteForever, MdNoteAdd, MdInfo } from "react-icons/md";
import Mensaje from "./Alertas";

const TablaAuditorio = () => {
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
          {materias.map((materia, index) => {
            return (
              <tr className="border-b hover:bg-gray-300 text-center" key={materia._id}>
                {console.log(materia.nombre)}
                <td >{materia.nombre}</td>
                <td >{materia.codigo}</td>
                <td >{materia.creditos}</td>
                <td className="py-2 px-4 border-b border-gray-200 flex">
                  <MdNoteAdd
                    className="h-7 w-7 text-slate-800 cursor-pointer inline-block mr-2"
                    onClick={() => { /* Lógica para actualizar */ }}
                  />
                  <MdInfo
                    className="h-7 w-7 text-slate-800 cursor-pointer inline-block mr-2"
                    onClick={() => { /* Lógica para actualizar */ }}
                  />
                  <MdDeleteForever
                    className="h-7 w-7 text-red-900 cursor-pointer inline-block"
                    onClick={() => eliminarVehiculo(vehiculo._id)}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default TablaAuditorio;
