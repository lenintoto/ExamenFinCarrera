import React from "react";
import { MdDeleteForever, MdNoteAdd, MdInfo } from "react-icons/md";
import Mensaje from "./Alertas";

const TablaAuditorio = () => {
  return (
    <>
      <Mensaje tipo={"active"}>{"No existen registros"}</Mensaje>
      <table className="w-full mt-5 table-auto shadow-lg bg-white">
        <thead className="bg-gray-800 text-slate-400">
          <tr>
            <th className="p-2">N°</th>
            <th className="p-2">Nombre</th>
            <th className="p-2">Capacidad</th>
            <th className="p-2">Ubicación</th>
            <th className="p-2">Descripción</th>
            <th className="p-2">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {/* Aquí puedes añadir la lógica para renderizar filas de datos */}
          <tr className="border-b hover:bg-gray-300 text-center">
            <td>1</td>
            <td>Nombre del Auditorio</td>
            <td>100</td>
            <td>Ubicación</td>
            <td>Descripción del auditorio</td>
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

export default TablaAuditorio;
