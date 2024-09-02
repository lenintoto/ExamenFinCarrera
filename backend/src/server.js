// Requerir los módulos
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';


// Requerir las rutas
import adminRoutes from './routes/Admin_routes.js';
import vehiculoRoutes from './routes/Vehiculo_routes.js';
import rentaRoutes from './routes/Renta_routes.js';
import clienteRoutes from './routes/Cliente_routes.js';
import autenticar from './middlewares/auth.js';

// Inicializaciones
const app = express();
dotenv.config();

// Configuraciones
app.set('port', process.env.PORT || 4000);
app.use(cors());

// Middlewares
app.use(express.json());

// Rutas
app.use('/rentcar', adminRoutes);
app.use('/rentcar',autenticar, vehiculoRoutes);
app.use('/rentcar',autenticar, rentaRoutes);
app.use('/rentcar',autenticar, clienteRoutes);

app.get('/', (req, res) => {
  res.send('Server on');
});

// Exportar la instancia de express por medio de app
export default app;

