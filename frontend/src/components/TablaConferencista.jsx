import React from "react";
import { MdDeleteForever, MdNoteAdd, MdInfo } from "react-icons/md";
import Mensaje from "./Alertas";

const TablaSpeaker = () => {
  return (
    <>
      <Mensaje tipo={"active"}>{"No existen registros"}</Mensaje>
      <table className="w-full mt-5 table-auto shadow-lg bg-white">
        <thead className="bg-gray-800 text-slate-400">
          <tr>
            <th className="p-2">N°</th>
            <th className="p-2">Nombre</th>
            <th className="p-2">Apellido</th>
            <th className="p-2">Cédula</th>
            <th className="p-2">Especialidad</th>
            <th className="p-2">Ciudad</th>
            <th className="p-2">Teléfono</th>
            <th className="p-2">Empresa</th>
            <th className="p-2">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {/* Aquí puedes añadir la lógica para renderizar filas de datos */}
          <tr className="border-b hover:bg-gray-300 text-center">
            <td>1</td>
            <td>Nombre del Conferencista</td>
            <td>Apellido</td>
            <td>1234567890</td>
            <td>Especialidad</td>
            <td>Ciudad</td>
            <td>123456789</td>
            <td>Empresa</td>
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

export default TablaSpeaker;
