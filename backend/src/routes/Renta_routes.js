import express from 'express';
import { actualizarRenta, crearRenta, eliminarRenta, obtenerRentaPorId, obtenerTodasRentas } from '../controller/Renta_controller.js';



const router = express.Router();

// Rutas de reservas
router.post('/renta/crear', crearRenta);
router.get('/renta/todos', obtenerTodasRentas);
router.get('/renta/:id', obtenerRentaPorId);
router.put('/renta/actualizar/:id', actualizarRenta);
router.delete('/renta/eliminar/:id', eliminarRenta);

export default router; 
