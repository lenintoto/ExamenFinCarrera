import React from 'react';
import TablaReserva from '../components/TablaReserva';

const ReservasPage = () => {
  return (
    <div className="flex flex-col h-full p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Reservas</h1>
      <TablaReserva/>
      {/* Aquí puedes agregar la tabla de reservas, formularios u otros componentes relacionados */}
      <footer className="py-4 mt-auto">
        <div className="text-center text-sm text-gray-600">
          &copy; Your Website 2023
        </div>
      </footer>
    </div>
  );
};

export default ReservasPage;