import React from 'react';
import TablaAuditorio from '../components/TablaAuditorio';


const AuditoriosPage = () => {
  return (
    <div className="flex flex-col h-full p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Auditorios</h1>
      <TablaAuditorio/>
      {/* Tabla de auditorios, formularios, etc */}
      <footer className="py-4 mt-auto">
        <div className="text-center text-sm text-gray-600">
          &copy; Your Website 2023
        </div>
      </footer>
    </div>
  );
};

export default AuditoriosPage;
