import express from 'express';
import {
  crearReserva,
  obtenerTodasReservas,
  obtenerReservaPorId,
  actualizarReserva,
  eliminarReserva
} from '../controller/Reserva_controller.js';
import autenticar from "../middlewares/auth.js"

const router = express.Router();

// Rutas de reservas
router.post('/reserva/crear', crearReserva, autenticar);
router.get('/reserva/todos', obtenerTodasReservas, autenticar);
router.get('/reserva/:id', obtenerReservaPorId, autenticar);
router.put('/reserva/actualizar/:id', actualizarReserva, autenticar);
router.delete('/reserva/eliminar/:id', eliminarReserva, autenticar);

export default router; 
