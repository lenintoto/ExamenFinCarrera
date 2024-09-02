import React from 'react';
import TablaSpeaker from '../components/TablaConferencista';

const UsuariosPage = () => {
  return (
    <div className="flex flex-col h-full p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Conferencista</h1>
      <TablaSpeaker/>
      {/* Aquí puedes agregar la tabla de usuarios, formularios u otros componentes relacionados */}
      <footer className="py-4 mt-auto">
        <div className="text-center text-sm text-gray-600">
          &copy; Your Website 2023
        </div>
      </footer>
    </div>
  );
};

export default UsuariosPage;
