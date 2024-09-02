import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import Inicio from './pages/Inicio';
import UsuariosPage from './pages/UsuariosPage';
import AuditoriosPage from './pages/AuditoriosPage';
//import ConferenciasPage from './pages/ConferenciasPage';
import ReservasPage from './pages/ReservasPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import { AuthProvider } from './context/AuthProvider';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="inicio" element={<Inicio />} />
            <Route path="usuarios" element={<UsuariosPage />} />
            <Route path="auditorios" element={<AuditoriosPage />} />
            <Route path="reservas" element={<ReservasPage />} />
            {/*<Route path="conferencias" element={<ConferenciasPage />} />*/}
          </Route>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
