import express from 'express';
import { actualizarVehiculo, CrearVehiculo, eliminarVehiculo, obtenerTodosVehiculos, obtenerVehiculoPorId } from '../controller/Vehiculo_controller.js';

const router = express.Router();

// Rutas de conferencistas
router.post('/vehiculo/crear', CrearVehiculo);
router.get('/vehiculo/todos', obtenerTodosVehiculos);
router.get('/vehiculo/:id', obtenerVehiculoPorId);
router.put('/vehiculo/actualizar/:id', actualizarVehiculo);
router.delete('/vehiculo/eliminar/:id', eliminarVehiculo);

export default router;