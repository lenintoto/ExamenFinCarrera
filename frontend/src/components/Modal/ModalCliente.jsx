import React, { useState, useEffect } from "react";
import axios from "axios";
import Mensaje from "./alertas";
import { useNavigate } from "react-router-dom";


export const ModalCliente = ({}) => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    marca: vehiculo?.marca ?? "",
    modelo: vehiculo?.capacidad ?? "",
    anio_fabricacion: vehiculo?.anio_fabricacion ?? "",
    placa: vehiculo?.placa ?? "",
    color: vehiculo?.color ?? "",
    tipo: vehiculo?.tipo ?? "",
    descripcion: vehiculo?.descripcion ?? "",
  });

  const [mensaje, setMensaje] = useState({});

  useEffect(() => {
    if (cliente) {
      setForm({
        nombre: auditorio.nombre,
        capacidad: auditorio.capacidad,
        ubicacion: auditorio.ubicacion,
        descripcion: auditorio.descripcion,
      });
    }
  }, [auditorio]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");
      const url = auditorio
        ? `${import.meta.env.VITE_BACKEND_URL}/auditorio/actualizar/${auditorio._id}`
        : `${import.meta.env.VITE_BACKEND_URL}/auditorio/crear`;
      const options = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      const method = auditorio ? axios.put : axios.post;
      const respuesta = await method(url, form, options);

      console.log(respuesta);
      setMensaje({ respuesta: "Operación exitosa", tipo: true });
      setTimeout(() => {
        onClose();
      }, 2000);
    } catch (error) {
      console.log(error);
      setMensaje({ respuesta: error.response?.data?.msg || "Error", tipo: false });
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-1/2">
        <h2 className="text-lg font-bold mb-4">{auditorio ? "Actualizar Auditorio" : "Agregar Auditorio"}</h2>
        {mensaje.respuesta && <Mensaje tipo={mensaje.tipo}>{mensaje.respuesta}</Mensaje>}
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="nombre" className="text-gray-700 uppercase font-bold text-sm">Nombre:</label>
            <input
              id="nombre"
              type="text"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md mb-5"
              placeholder="Nombre del auditorio"
              value={form.nombre}
              name="nombre"
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="capacidad" className="text-gray-700 uppercase font-bold text-sm">Capacidad:</label>
            <input
              id="capacidad"
              type="number"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md mb-5"
              placeholder="Capacidad del auditorio"
              value={form.capacidad}
              name="capacidad"
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="ubicacion" className="text-gray-700 uppercase font-bold text-sm">Ubicación:</label>
            <input
              id="ubicacion"
              type="text"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md mb-5"
              placeholder="Ubicación del auditorio"
              value={form.ubicacion}
              name="ubicacion"
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="descripcion" className="text-gray-700 uppercase font-bold text-sm">Descripción:</label>
            <textarea
              id="descripcion"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md mb-5"
              placeholder="Descripción del auditorio"
              value={form.descripcion}
              name="descripcion"
              onChange={handleChange}
            />
          </div>
          <div className="flex justify-between">
            <button
              type="submit"
              className="bg-gray-600 text-slate-300 uppercase font-bold rounded-lg p-2 hover:bg-gray-900 transition-all"
            >
              {auditorio ? "Actualizar" : "Agregar"}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="bg-red-500 text-white uppercase font-bold rounded-lg p-2 hover:bg-red-700 transition-all"
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
