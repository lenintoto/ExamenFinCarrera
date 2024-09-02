import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import Inicio from './pages/Inicio';
import ClientesPage from './pages/ClientesPage';
import VehiculosPage from './pages/VehiculosPage';
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
            <Route path="clientes" element={<ClientesPage />} />
            <Route path="vehiculos" element={<VehiculosPage />} />
            <Route path="reservas" element={<ReservasPage />} />
          </Route>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
