import express from 'express';
import {
  registrarAdmin,
  iniciarSesion,
  obtenerTodosAdmins,
  obtenerAdminPorId,
  obtenerDatosAdmin,
  actualizarAdmin,
  eliminarAdmin
} from '../controller/Admin_controller.js';

const router = express.Router();

// Rutas de administración
router.post('/admin/registrar', registrarAdmin);
router.post('/admin/login', iniciarSesion);
router.get('/admin/todos', obtenerTodosAdmins);
router.get('/admin/:id', obtenerAdminPorId);
router.get('/admin/datos/:id', obtenerDatosAdmin);
router.put('/admin/actualizar/:id', actualizarAdmin);
router.delete('/admin/eliminar/:id', eliminarAdmin);

export default router;
