import express from 'express';
import { actualizarCliente, crearCliente, eliminarCliente, obtenerClientePorId, obtenerTodosClientes } from '../controller/Cliente_controller.js';
const router = express.Router();

// Rutas de auditorios
router.post('/cliente/crear', crearCliente);
router.get('/cliente/todos', obtenerTodosClientes);
router.get('/cliente/:id', obtenerClientePorId);
router.put('/cliente/actualizar/:id', actualizarCliente);
router.delete('/cliente/eliminar/:id', eliminarCliente);

export default router;
 