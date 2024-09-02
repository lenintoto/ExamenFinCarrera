import express from 'express';
import {
  obtenerTodosConferencistas,
  obtenerConferencistaPorId,
  actualizarConferencista,
  eliminarConferencista,
  CrearConferencista
} from '../controller/Conferencista_controller.js';
import autenticar from "../middlewares/auth.js"


const router = express.Router();

// Rutas de conferencistas
router.post('/conferencista/crear', CrearConferencista, autenticar);
router.get('/conferencista/todos', obtenerTodosConferencistas, autenticar);
router.get('/conferencista/:id', obtenerConferencistaPorId, autenticar);
router.put('/conferencista/actualizar/:id', actualizarConferencista, autenticar);
router.delete('/conferencista/eliminar/:id', eliminarConferencista, autenticar);

export default router;