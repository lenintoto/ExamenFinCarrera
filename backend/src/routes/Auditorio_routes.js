import express from 'express';
import {
  crearAuditorio,
  obtenerTodosAuditorios,
  obtenerAuditorioPorId,
  actualizarAuditorio,
  eliminarAuditorio
} from '../controller/Auditorio_controller.js';
import autenticar from "../middlewares/auth.js"



const router = express.Router();

// Rutas de auditorios
router.post('/auditorio/crear', crearAuditorio, autenticar);
router.get('/auditorio/todos', obtenerTodosAuditorios,autenticar);
router.get('/auditorio/:id', obtenerAuditorioPorId,autenticar);
router.put('/auditorio/actualizar/:id', actualizarAuditorio,autenticar);
router.delete('/auditorio/eliminar/:id', eliminarAuditorio),autenticar;

export default router;
 