import React, { useState, useEffect } from "react";
import axios from "axios";
import Mensaje from "./alertas";
import { useNavigate } from "react-router-dom";

export const ModalVehiculo = ({ }) => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    marca: vehiculo?.marca ?? "",
    modelo: vehiculo?.modelo ?? "",
    anio_fabricacion: vehiculo?.anio_fabricacion ?? "",
    placa: vehiculo?.placa ?? "",
    color: vehiculo?.color ?? "",
    tipo: vehiculo?.tipo ?? "",
    kilometraje: vehiculo?.kilometraje ?? "",
  });

  const [mensaje, setMensaje] = useState({});

  useEffect(() => {
    if (vehiculo) {
      setForm({
        marca: vehiculo.marca,
        modelo: vehiculo.modelo,
        anio_fabricacion: vehiculo.anio_fabricacion,
        placa: vehiculo.placa,
        color: vehiculo.color,
        tipo: vehiculo.tipo,
        kilometraje: vehiculo?.kilometraje,
      });
    }
  }, [vehiculo]);

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
      const url = vehiculo
        ? `${import.meta.env.VITE_BACKEND_URL}/vehiculo/actualizar/${id}`
        : `${import.meta.env.VITE_BACKEND_URL}/vehiculo/crear`;
      const options = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      const method = vehiculo ? axios.put : axios.post;
      const respuesta = await method(url, form, options);

      console.log(respuesta);
      setMensaje({ respuesta: "Operación exitosa", tipo: true });
      setTimeout(() => {
        setMensaje({})
      }, 2000);
    } catch (error) {
      console.log(error);
      setMensaje({ respuesta: error.response?.data?.message || "Error", tipo: false });
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-1/2">
        <h2 className="text-lg font-bold mb-4">{auditorio ? "Actualizar Vehiculo" : "Agregar Vehiculo"}</h2>
        {mensaje.respuesta && <Mensaje tipo={mensaje.tipo}>{mensaje.respuesta}</Mensaje>}
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="marca" className="text-gray-700 uppercase font-bold text-sm">Marca:</label>
            <input
              id="marca"
              type="text"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md mb-5"
              placeholder="Nombre del auditorio"
              value={form.nombre}
              name="marca"
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="modelo" className="text-gray-700 uppercase font-bold text-sm">Modelo:</label>
            <input
              id="modelo"
              type="text"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md mb-5"
              placeholder="Capacidad del auditorio"
              value={form.capacidad}
              name="modelo"
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="placa" className="text-gray-700 uppercase font-bold text-sm">Placa:</label>
            <input
              id="placa"
              type="text"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md mb-5"
              placeholder="Ubicación del auditorio"
              value={form.ubicacion}
              name="placa"
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="color" className="text-gray-700 uppercase font-bold text-sm">Color:</label>
            <input
              id="color"
              type="text"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md mb-5"
              placeholder="Ubicación del auditorio"
              value={form.ubicacion}
              name="color"
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="tipo" className="text-gray-700 uppercase font-bold text-sm">Tipo de Vehiculo:</label>
            <input
              id="tipo"
              type="text"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md mb-5"
              placeholder="Ubicación del auditorio"
              value={form.ubicacion}
              name="tipo"
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="kilometraje" className="text-gray-700 uppercase font-bold text-sm">Kilometraje:</label>
            <input
              id="kilometraje"
              type="text"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md mb-5"
              placeholder="Ubicación del auditorio"
              value={form.ubicacion}
              name="kilometraje"
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="anio_fabricacion" className="text-gray-700 uppercase font-bold text-sm">Año de Fabricacion:</label>
            <input
              id="anio_fabricacion"
              type="text"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md mb-5"
              placeholder="Ubicación del auditorio"
              value={form.ubicacion}
              name="anio_fabricacion"
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
