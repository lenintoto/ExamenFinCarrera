// Requerir los módulos
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';


// Requerir las rutas
import adminRoutes from './routes/Admin_routes.js';
import auditorioRoutes from './routes/Auditorio_routes.js';
import reservaRoutes from './routes/Reserva_routes.js';
import conferencistaRoutes from './routes/Conferencista_routes.js';

// Inicializaciones
const app = express();
dotenv.config();

// Configuraciones
app.set('port', process.env.PORT || 4000);
app.use(cors());

// Middlewares
app.use(express.json());

// Rutas
app.use('/meetmaster', adminRoutes);
app.use('/meetmaster', auditorioRoutes);
app.use('/meetmaster', reservaRoutes);
app.use('/meetmaster', conferencistaRoutes);

app.get('/', (req, res) => {
  res.send('Server on');
});

// Exportar la instancia de express por medio de app
export default app;

