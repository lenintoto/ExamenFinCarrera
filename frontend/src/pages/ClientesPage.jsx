import React from 'react';
//import TablaCliente from '../components/TablaCliente';
import Mensaje from '../components/Alertas';
import { MdDeleteForever, MdNoteAdd, MdInfo } from "react-icons/md";

const UsuariosPage = () => {
  return (
    <div className="flex flex-col h-full p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Clientes</h1>
      {/*<TablaCliente/>*/}
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
            <th className="p-2">Nombre</th>
            <th className="p-2">Apellido</th>
            <th className="p-2">Cédula</th>
            <th className="p-2">Ciudad</th>
            <th className="p-2">Email</th>
            <th className="p-2">Teléfono</th>
            <th className="p-2">Dirección</th>
            <th className="p-2">Fecha de Nacimiento</th>
            <th className="p-2">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b hover:bg-gray-300 text-center">
            <td>1</td>
            <td>Nombre</td>
            <td>Apellido</td>
            <td>1234567890</td>
            <td>Ciudad</td>
            <td>alguien@example.com</td>
            <td>0999999999</td>
            <td>Calderón</td>
            <td>15/09/1989</td>
            <td className="py-2 text-center">
              <MdNoteAdd className="h-7 w-7 text-slate-800 cursor-pointer inline-block mr-2" />
              <MdInfo className="h-7 w-7 text-slate-800 cursor-pointer inline-block mr-2" />
              <MdDeleteForever className="h-7 w-7 text-red-900 cursor-pointer inline-block" />
            </td>
          </tr>
        </tbody>
      </table>
    </>
      <footer className="py-4 mt-auto">
        <div className="text-center text-sm text-gray-600">
          &copy; Your Website 2023
        </div>
      </footer>
    </div>
  );
};

export default UsuariosPage;
