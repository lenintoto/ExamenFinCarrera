import React from 'react';

const Inicio = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Bienvenidos a MeetMaster</h1>
      <p className="text-lg text-gray-700 mb-6 leading-relaxed">
        Bienvenido a <strong>MeetMaster</strong>, tu herramienta confiable para la gestión de conferencias. Diseñado para facilitar la organización de eventos, MeetMaster te ayuda a coordinar cada detalle de manera eficiente y sencilla.
      </p>
      <div className="mb-6">
        <img 
          src="../public/conferencia.jpg" 
          alt="MeetMaster" 
          className="w-100 h-auto object-cover mx-auto"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
        {/* Contenido de la cuadrícula */}
      </div>
    </div>
  );
};

export default Inicio;
